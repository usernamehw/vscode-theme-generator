import fs from 'fs';
import vscode from 'vscode';
import { extensionConfig, Global, saveWebviewState, WEBVIEW_STATE_STORAGE_KEY } from './extension';
import { exportAsJson } from './saveTheme';
import { ExtensionConfig, WebviewMessageFromWebview, WebviewMessageToWebview } from './types';
import { updateGlobalCustomizationSettings } from './updateTheme';

export class GenerateThemePanel {
	/**
	 * Track the currently panel. Only allow a single panel to exist at a time.
	 */
	public static currentPanel: GenerateThemePanel | undefined;

	public static readonly viewType = 'themeGenerator';

	private readonly _panel: vscode.WebviewPanel;
	private readonly _extensionUri: vscode.Uri;
	private readonly _disposables: vscode.Disposable[] = [];

	public static createOrShow(extensionUri: vscode.Uri) {
		const column = vscode.ViewColumn.Two;

		if (GenerateThemePanel.currentPanel) {
			GenerateThemePanel.currentPanel._panel.reveal(column);
			return;
		}

		// Create a new panel.
		const panel = vscode.window.createWebviewPanel(
			GenerateThemePanel.viewType,
			'Theme Generator',
			column,
			{
				enableScripts: true,
				// Eestrict the webview to only loading content from our extension's `media` directory.
				localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')],
			},
		);

		GenerateThemePanel.currentPanel = new GenerateThemePanel(panel, extensionUri);
	}

	private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
		this._panel = panel;
		this._extensionUri = extensionUri;

		// Set the webview's initial html content
		// this._update();
		this._panel.onDidDispose(() => {
			this.dispose();
		}, null, this._disposables);

		this._panel.webview.html = this._getHtmlForWebview(this._panel.webview);

		this._panel.onDidChangeViewState(
			e => {
				if (this._panel.visible) {
					GenerateThemePanel._restoreState(this._panel);
				}
			},
			null,
			this._disposables,
		);

		GenerateThemePanel._restoreState(this._panel);

		// Handle messages from the webview
		this._panel.webview.onDidReceiveMessage(
			(message: WebviewMessageFromWebview) => {
				switch (message.type) {
					case 'saveState': {
						saveWebviewState(message.value); break;
					}
					case 'showNotification': {
						vscode.window.showInformationMessage(message.value); break;
					}
					case 'generateTheme': {
						updateGlobalCustomizationSettings(message.value.workbenchColors, message.value.tokenColors); break;
					}
					case 'resetCustomizations': {
						updateGlobalCustomizationSettings({}, []);break;
					}
					case 'exportAsJson': {
						exportAsJson(message.value); break;
					}
				}
			},
			null,
			this._disposables,
		);
	}

	public static updateSettings(newConfig: ExtensionConfig, panel?: GenerateThemePanel) {
		if (panel) {
			panel._panel.webview.postMessage({
				type: 'updateConfig',
				value: newConfig,
			} as WebviewMessageToWebview);
		}
	}

	private static _restoreState(panel: vscode.WebviewPanel) {
		panel.webview.postMessage({
			type: 'restoreState',
			value: Global.context.globalState.get(WEBVIEW_STATE_STORAGE_KEY),
		} as WebviewMessageToWebview);
		GenerateThemePanel.updateSettings(extensionConfig, GenerateThemePanel.currentPanel);
	}

	public dispose() {
		GenerateThemePanel.currentPanel = undefined;

		// Clean up our resources
		this._panel.dispose();

		while (this._disposables.length) {
			const x = this._disposables.pop();
			if (x) {
				x.dispose();
			}
		}
	}

	private _getHtmlForWebview(webview: vscode.Webview) {
		const scriptPathOnDisk = vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js');
		const scriptUri = webview.asWebviewUri(scriptPathOnDisk);
		const stylesPathMainPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'main.css');
		const stylesMainUri = webview.asWebviewUri(stylesPathMainPath);

		const nonce = getNonce();// Use a nonce to only allow specific scripts to be run

		return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="${stylesMainUri}" rel="stylesheet">
	<title>Generate</title>
</head>
<body>
	${fs.readFileSync(Global.context.asAbsolutePath('./media/webviewBody.html')).toString()}
	<script defer nonce="${nonce}" src="${scriptUri}"></script>
</body>
</html>`;
	}
}

function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}
