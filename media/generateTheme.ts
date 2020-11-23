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
		'activityBar.activeBorder': focusColor,
		'activityBar.dropBorder': focusColor,
		'editorGroup.dropBackground': `${focusColor}30`,
		'tab.activeBorder': focusColor,

		'badge.foreground': chromatism.contrastRatio(focusColor).hex,
		'activityBarBadge.foreground': chromatism.contrastRatio(focusColor).hex,

		'statusBar.background': chromatism.brightness(-10, bg).hex,
		'sideBar.background': chromatism.brightness(-5, bg).hex,
		'activityBar.background': chromatism.brightness(-10, bg).hex,
	};
	let tokenColors: TokenColors = [
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
				'variable',
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
		// CSS
		{
			scope: [
				'entity.name.tag.css',
			],
			settings: {
				foreground: c1,
			},
		},
		{
			scope: [
				'entity.other.attribute-name.class',
				'entity.other.attribute-name punctuation.definition.entity',
			],
			settings: {
				foreground: c2,
			},
		},
		{
			scope: [
				'entity.other.attribute-name.pseudo-element',
				'entity.other.attribute-name.pseudo-class',
				'constant.other.color',
			],
			settings: {
				foreground: c3,
			},
		},
		{
			scope: [
				'entity.other.attribute-name.id',
				'entity.other.attribute-name.id punctuation.definition.entity',
			],
			settings: {
				foreground: c5,
			},
		},
		{
			scope: [
				'meta.property-name',
				'support.type.property-name',
			],
			settings: {
				foreground: c1,
			},
		},
		{
			scope: [
				'meta.property-value',
				'meta.property-value constant.other',
				'support.constant.property-value',
			],
			settings: {
				foreground: c4,
			},
		},
		{
			scope: [
				'variable.parameter.url',
			],
			settings: {
				foreground: c5,
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

	tokenColors = tokenColors.map(token => {
		if (token.scope.length === 1) {
			token.scope = token.scope[0];
		}
		return token;
	});

	return {
		workbenchColors,
		tokenColors,
	};
}
