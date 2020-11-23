import * as chromatism from 'chromatism';
import sample from 'lodash/sample';
import shuffle from 'lodash/shuffle';
import { TokenColors, WorkbenchColors } from '../src/types';

export function generateTheme({ bg, fg, color1, color2, color3, color4, color5 }) {
	const colors = [color1, color2, color3, color4, color5];
	const [c1, c2, c3, c4, c5] = shuffle(colors);

	const focusColor = sample(colors);

	const workbenchColors: WorkbenchColors = {
		'editor.background': bg,
		'editor.foreground': fg,
		'editor.lineHighlightBackground': chromatism.brightness(-5, bg).hex,
		'editorWhitespace.foreground': chromatism.shade(20, bg).hex,

		'editorCursor.foreground': focusColor,
		focusBorder: focusColor,
		'badge.background': focusColor,
		'activityBarBadge.background': focusColor,
		'editorBracketMatch.border': chromatism.shade(-20, focusColor).hex,
		'editorOverviewRuler.bracketMatchForeground': focusColor,
		'editorBracketMatch.background': `${focusColor}20`,
		'editorIndentGuide.activeBackground': focusColor,


		'statusBar.background': chromatism.brightness(-10, bg).hex,
		'sideBar.background': chromatism.brightness(-5, bg).hex,
		'activityBar.background': chromatism.brightness(-10, bg).hex,
	};
	const tokenColors: TokenColors = [
		// General
		// {
		// 	scope: 'invalid',
		// 	settings: { foreground: '#ff5d5d' },
		// },
		// Reset template bug
		{
			scope: [
				'meta.embedded',
				'source.groovy.embedded',
				'meta.template.expression',
			],
			settings: {
				foreground: fg,
			},
		},
		{
			scope: [
				'comment',
				'punctuation.definition.comment',
			],
			settings: {
				foreground: chromatism.brightness(-30, fg).hex,
			},
		},
		{
			scope: [
				'string',
				'punctuation.definition.string',
			],
			settings: {
				foreground: c1,
			},
		},
		{
			scope: [
				'constant.character.escape',
			],
			settings: {
				// foreground: chromatism.hue(70, c1).hex,
				// foreground: chromatism.uniformComplementary(c1).hex,
				foreground: c3,
			},
		},
		{
			scope: [
				'keyword',
			],
			settings: {
				foreground: c2,
			},
		},
		{
			scope: [
				'keyword.control',
				'storage',
				'storage.type',
			],
			settings: {
				foreground: c3,
			},
		},
		{
			scope: [
				'entity.name.function',
				'support.class',
			],
			settings: {
				foreground: c4,
			},
		},
		{
			scope: [
				'constant.numeric',
				'constant.language',
			],
			settings: {
				foreground: c5,
			},
		},
		{
			scope: [
				'variable.parameter', // normal languages
				'parameter.variable', // Elixir
				'source.rust meta.type_params.rust', // Rust
			],
			settings: {
				foreground: c5,
			},
		},
		{
			scope: [
				'punctuation',
				'meta.brace',
			],
			settings: {
				foreground: chromatism.shade(-35, fg).hex,
			},
		},
		// JSON
		{
			scope: [
				'support.type.property-name.json',
			],
			settings: {
				foreground: c2,
			},
		},
	];

	// {
	// 	scope: [
	// 		'punctuation.terminator',
	// 		// 'punctuation.separator.dictionary.pair.json',
	// 		// 'punctuation.separator.comma',
	// 	],
	// 	settings: { foreground: chromatism.shade(-20, c.punctuation).hex },
	// },

	return {
		workbenchColors,
		tokenColors,
	};
}
