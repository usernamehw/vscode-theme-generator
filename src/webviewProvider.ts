import vscode from 'vscode';
import { Global, saveWebviewState, WEBVIEW_STATE_STORAGE_KEY } from './extension';
import { WebviewMessageFromWebview, WebviewMessageToWebview } from './types';
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

		panel.webview.postMessage({
			type: 'restoreState',
			value: Global.context.globalState.get(WEBVIEW_STATE_STORAGE_KEY),
		} as WebviewMessageToWebview);

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

		this._panel.webview.postMessage({
			type: 'restoreState',
			value: Global.context.globalState.get(WEBVIEW_STATE_STORAGE_KEY),
		} as WebviewMessageToWebview);

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
				}
			},
			null,
			this._disposables,
		);
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
	<!-- <input id="themeTypeLight" type="radio" name="themeType" checked>
	<label for="themeTypeLight">Light</label>
	<input id="themeTypeDark" type="radio" name="themeType" checked>
	<label for="themeTypeDark">Dark</label> -->

	<div class="generate-container">
		<label><input type="checkbox" id="shuffleColors">Shuffle</label>
		<button id="generate">▶ Generate</button>
	</div>

	<label><input type="color" id="backgroundInit"> Background</label>
	<label><input type="color" id="foregroundInit"> Foreground</label>

	<table class="colors-table">
		<tbody>
			<tr>
				<td><label><input type="color" id="color1Init"> Color1</label><br></td>
				<td>string</td>
			</tr>
			<tr>
				<td><label><input type="color" id="color2Init"> Color2</label></td>
				<td>keyword <code>=</code></td>
			</tr>
			<tr>
				<td><label><input type="color" id="color3Init"> Color3</label></td>
				<td>keyword.control <code>import</code></td>
			</tr>
			<tr>
				<td><label><input type="color" id="color4Init"> Color4</label></td>
				<td>entity.name.function</td>
			</tr>
			<tr>
				<td><label><input type="color" id="color5Init"> Color5</label></td>
				<td>variable.parameter</td>
			</tr>
		</tbody>
	</table>

	<button id="reset">Reset Color Inputs</button><br>

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
