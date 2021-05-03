import { ConfigurationTarget, workspace } from 'vscode';
import { Constants } from './extension';
import { TokenColors, WorkbenchColors } from './types';
/**
 * Update global settings to preview the theme changes.
 */
export function updateGlobalCustomizationSettings(colors: WorkbenchColors, textMateRules: TokenColors, themeName = 'generated-dark') {
	const config = workspace.getConfiguration();

	const colorCustomizations = config.inspect(Constants.colorCustomizationsSettingId)?.globalValue as Record<string, unknown>;
	const newColorCustomizations = {
		...colorCustomizations,
		[`[${themeName}]`]: colors,
	};

	const tokenCustomizations = config.inspect(Constants.tokenColorCustomizationsSettingId)?.globalValue as Record<string, unknown>;
	const newTokenCustomizations = {
		...tokenCustomizations,
		[`[${themeName}]`]: {
			textMateRules,
		},
	};

	config.update(Constants.colorCustomizationsSettingId, newColorCustomizations, ConfigurationTarget.Global);
	config.update(Constants.tokenColorCustomizationsSettingId, newTokenCustomizations, ConfigurationTarget.Global);
}
