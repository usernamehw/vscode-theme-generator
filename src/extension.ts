import vscode, { ConfigurationTarget, workspace } from 'vscode';
import { ExtensionConfig, WebviewSavedState } from './types';
import { GenerateThemePanel } from './webviewProvider';

export const Global: { context: vscode.ExtensionContext } = {
	// @ts-ignore
	context: {},
};

export const enum Constants {
	extensionName = 'themeGenerator',
	colorThemeSettingId = 'workbench.colorTheme',
	colorCustomizationsSettingId = 'workbench.colorCustomizations',
	tokenColorCustomizationsSettingId = 'editor.tokenColorCustomizations',
	// ──────────────────────────────────────────────────────────────────────
	webviewStateStorageKey = 'WEBVIEW_STATE',
}


export let extensionConfig = workspace.getConfiguration(Constants.extensionName) as any as ExtensionConfig;


export function activate(extensionContext: vscode.ExtensionContext) {
	Global.context = extensionContext;

	extensionContext.subscriptions.push(
		vscode.commands.registerCommand('themeGenerator.generateTheme', () => {
			const config = workspace.getConfiguration();
			config.update(Constants.colorThemeSettingId, 'generated-dark', ConfigurationTarget.Global);
			GenerateThemePanel.createOrShow(extensionContext.extensionUri);
		}),
	);

	function onConfigChange(e: vscode.ConfigurationChangeEvent): void {
		if (!e.affectsConfiguration(Constants.extensionName)) {
			return;
		}
		updateConfig();
	}

	function updateConfig(): void {
		extensionConfig = workspace.getConfiguration(Constants.extensionName) as any as ExtensionConfig;
		GenerateThemePanel.updateSettings(extensionConfig, GenerateThemePanel.currentPanel);
	}

	extensionContext.subscriptions.push(workspace.onDidChangeConfiguration(onConfigChange));
}

export function saveWebviewState(state: WebviewSavedState) {
	Global.context.globalState.update(Constants.webviewStateStorageKey, state);
}

export function deactivate() {}
