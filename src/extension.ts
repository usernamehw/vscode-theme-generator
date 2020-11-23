import vscode, { commands, ConfigurationTarget, ExtensionMode, workspace } from 'vscode';
import { WebviewSavedState } from './types';
import { GenerateThemePanel } from './webviewProvider';

export const COLOR_THEME_SETTING_ID = 'workbench.colorTheme';
export const COLOR_CUSTOMIZATIONS_SETTING_ID = 'workbench.colorCustomizations';
export const TOKEN_CUSTOMIZATIONS_SETTING_ID = 'editor.tokenColorCustomizations';

export const WEBVIEW_STATE_STORAGE_KEY = 'WEBVIEW_STATE_KEY';

export const Global: { context: vscode.ExtensionContext } = {
	// @ts-ignore
	context: {},
};


export function activate(context: vscode.ExtensionContext) {
	Global.context = context;

	context.subscriptions.push(
		vscode.commands.registerCommand('generateTheme', () => {
			const config = workspace.getConfiguration();
			config.update(COLOR_THEME_SETTING_ID, 'generated-dark', ConfigurationTarget.Global);
			GenerateThemePanel.createOrShow(context.extensionUri);
		}),
	);

	if (context.extensionMode === ExtensionMode.Development) {
		commands.executeCommand('generateTheme');
	}
}

export function saveWebviewState(state: WebviewSavedState) {
	Global.context.globalState.update(WEBVIEW_STATE_STORAGE_KEY, state);
}

export function deactivate() {}
