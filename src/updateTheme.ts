import { ConfigurationTarget, workspace } from 'vscode';
import { COLOR_CUSTOMIZATIONS_SETTING_ID, TOKEN_CUSTOMIZATIONS_SETTING_ID } from './extension';
import { TokenColors, WorkbenchColors } from './types';
/**
 * Update global settings to preview the theme changes.
 */
export function updateGlobalCustomizationSettings(colors: WorkbenchColors, textMateRules: TokenColors, themeName = 'generated-dark') {
	const config = workspace.getConfiguration();

	const colorCustomizations = config.inspect(COLOR_CUSTOMIZATIONS_SETTING_ID)?.globalValue as object;
	const newColorCustomizations = {
		...colorCustomizations,
		[`[${themeName}]`]: colors,
	};

	const tokenCustomizations = config.inspect(TOKEN_CUSTOMIZATIONS_SETTING_ID)?.globalValue as object;
	const newTokenCustomizations = {
		...tokenCustomizations,
		[`[${themeName}]`]: {
			textMateRules,
		},
	};

	config.update(COLOR_CUSTOMIZATIONS_SETTING_ID, newColorCustomizations, ConfigurationTarget.Global);
	config.update(TOKEN_CUSTOMIZATIONS_SETTING_ID, newTokenCustomizations, ConfigurationTarget.Global);
}
