import vscode, { ConfigurationTarget, workspace } from 'vscode';
import { ExtensionConfig, WebviewSavedState } from './types';
import { GenerateThemePanel } from './webviewProvider';

export const COLOR_THEME_SETTING_ID = 'workbench.colorTheme';
export const COLOR_CUSTOMIZATIONS_SETTING_ID = 'workbench.colorCustomizations';
export const TOKEN_CUSTOMIZATIONS_SETTING_ID = 'editor.tokenColorCustomizations';

export const WEBVIEW_STATE_STORAGE_KEY = 'WEBVIEW_STATE_KEY';

export const Global: { context: vscode.ExtensionContext } = {
	// @ts-ignore
	context: {},
};

const EXTENSION_NAME = 'themeGenerator';

export let extensionConfig = workspace.getConfiguration(EXTENSION_NAME) as any as ExtensionConfig;


export function activate(context: vscode.ExtensionContext) {
	Global.context = context;

	context.subscriptions.push(
		vscode.commands.registerCommand('generateTheme', async () => {
			const config = workspace.getConfiguration();
			config.update(COLOR_THEME_SETTING_ID, 'generated-dark', ConfigurationTarget.Global);
			GenerateThemePanel.createOrShow(context.extensionUri);
			// if (context.extensionMode !== vscode.ExtensionMode.Development) {
			// 	await vscode.commands.executeCommand('workbench.action.files.newUntitledFile');
			// 	await vscode.commands.executeCommand('workbench.action.moveEditorToBelowGroup');
			// 	await vscode.commands.executeCommand('workbench.action.openSettings', 'themeGenerator');
			// }
		}),
	);

	function onConfigChange(e: vscode.ConfigurationChangeEvent): void {
		if (!e.affectsConfiguration(EXTENSION_NAME)) {
			return;
		}
		updateConfig();
	}

	function updateConfig(): void {
		extensionConfig = workspace.getConfiguration(EXTENSION_NAME) as any as ExtensionConfig;
		GenerateThemePanel.updateSettings(extensionConfig, GenerateThemePanel.currentPanel);
	}


	if (context.extensionMode === vscode.ExtensionMode.Development) {
		vscode.commands.executeCommand('generateTheme');
	}

	context.subscriptions.push(workspace.onDidChangeConfiguration(onConfigChange));
}

export function saveWebviewState(state: WebviewSavedState) {
	Global.context.globalState.update(WEBVIEW_STATE_STORAGE_KEY, state);
}

export function deactivate() {}
