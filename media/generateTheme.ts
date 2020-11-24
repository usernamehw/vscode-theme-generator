import * as chromatism from 'chromatism';
import sample from 'lodash/sample';
import { TokenColors, WorkbenchColors } from '../src/types';
import { brightness, shade } from './colorUtils';

export function generateTheme({ bg, fg, c1, c2, c3, c4, c5, c6, c7 }) {
	const colors = [c1, c2, c3, c4, c5, c6, c7];

	const focusColor = sample(colors);
	const button = sample(colors);
	const letterHighlight = sample(colors);
	const badge = sample(colors);

	const punctuation = chromatism.shade(-35, fg).hex;
	const string = c1;
	const comment = chromatism.shade(40, bg).hex;

	const workbenchColors: WorkbenchColors = {
		foreground: fg,
		'editor.foreground': fg,
		// bg derived
		'editor.background': bg,
		'editor.lineHighlightBackground': brightness(-5, bg),
		'editorWhitespace.foreground': shade(20, bg),
		'editorLineNumber.foreground': brightness(20, bg),
		'editorLineNumber.activeForeground': brightness(50, bg),
		'editorOverviewRuler.border': shade(10, bg),
		'scrollbarSlider.background': `${shade(30, bg)}40`,
		'scrollbarSlider.hoverBackground': `${shade(40, bg)}40`,
		'scrollbarSlider.activeBackground': `${shade(20, bg)}40`,

		'statusBar.background': shade(-10, bg),
		'sideBar.background': shade(-5, bg),
		'activityBar.background': shade(-10, bg), // shade(-10, bg)

		'editorGroupHeader.tabsBackground': brightness(5, bg),
		'tab.inactiveBackground': brightness(5, bg),
		'tab.activeBackground': bg,
		'tab.border': shade(-5, bg),
		'tab.hoverBackground': shade(5, bg),
		'editorGroup.border': shade(-5, bg),
		'sideBarSectionHeader.background': shade(-10, bg),

		'titleBar.inactiveBackground': bg,
		'titleBar.activeBackground': bg,

		'menu.background': bg,
		'menu.foreground': fg,
		'menu.selectionBackground': focusColor,
		'menu.selectionForeground': chromatism.contrastRatio(focusColor).hex,
		'menu.separatorBackground': shade(-10, bg),
		'textSeparator.foreground': shade(-10, bg),
		'pickerGroup.border': shade(-10, bg),

		'input.background': shade(-5, bg),

		// focus colors
		'editorCursor.foreground': focusColor,
		focusBorder: focusColor,

		'editorBracketMatch.border': shade(-20, focusColor),
		'editorOverviewRuler.bracketMatchForeground': focusColor,
		'editorBracketMatch.background': `${focusColor}20`,
		'editorIndentGuide.activeBackground': focusColor,
		'activityBar.activeBorder': focusColor,
		'activityBar.dropBorder': focusColor,
		'editorGroup.dropBackground': `${focusColor}30`,
		'tab.activeBorder': focusColor,
		'editor.selectionBackground': `${focusColor}30`,

		'list.activeSelectionBackground': `${focusColor}20`,
		'list.inactiveSelectionBackground': `${focusColor}25`,
		'list.focusBackground': `${focusColor}30`,
		'list.hoverBackground': brightness(5, bg),
		'editorWidget.background': bg,
		'notifications.background': bg,

		'dropdown.background': brightness(5, bg),
		// ──────────────────────────────────────────────────────────────────────
		'list.highlightForeground': letterHighlight,
		'editorSuggestWidget.highlightForeground': letterHighlight,

		'badge.background': badge,
		'activityBarBadge.background': badge,
		'badge.foreground': chromatism.contrastRatio(badge).hex,
		'activityBarBadge.foreground': chromatism.contrastRatio(badge).hex,

		'button.background': button,
		'button.hoverBackground': shade(-20, button),
		'button.foreground': chromatism.contrastRatio(button).hex,
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
			],
			settings: {
				foreground: fg,
			},
		},
		{
			scope: [
				'variable',
				'support.variable.property.dom',
				'support.variable.dom',
				'support.variable.property',
				'punctuation.separator.parameter',
				'string.interpolated.pug variable',
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
				foreground: comment,
			},
		},
		{
			scope: [
				'string',
				'punctuation.definition.string',
			],
			settings: {
				foreground: string,
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
				'constant.language.import-export-all', // JS/TS import asterisk
			],
			settings: {
				foreground: c2,
			},
		},
		// {
		// 	scope: [
		// 		'entity.name.type',
		// 	],
		// 	settings: {
		// 		foreground: c2,
		// 	},
		// },
		{
			scope: [
				'keyword.control',
				'storage',
				// 'storage.type',
				'support.type',
				'keyword.operator.expression',
				'keyword.operator.new',
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
				'meta.function.parameter variable',
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
				foreground: punctuation,
			},
		},
		// JS
		{
			scope: [
				'comment.block.documentation entity.name.type',
			],
			settings: {
				foreground: c6,
			},
		},
		// HTML
		{
			scope: [
				'meta.tag.metadata.doctype entity.name.tag',
				'meta.tag.metadata.doctype punctuation.definition.tag',
				'meta.tag.metadata.doctype string', // old doctype
				'meta.tag.metadata.doctype entity.other.attribute-name.html',
				'meta.tag.sgml.doctype', // pug
			],
			settings: {
				foreground: punctuation,
			},
		},
		{
			scope: [
				'entity.name.tag',
			],
			settings: {
				foreground: c3,
			},
		},
		{
			scope: [
				'meta.tag string',
			],
			settings: {
				foreground: string,
			},
		},
		{
			scope: [
				'meta.attribute punctuation.definition.string',
			],
			settings: {
				foreground: punctuation,
			},
		},
		{
			scope: [
				'meta.tag entity.other.attribute-name',
				'entity.other.attribute-name.html',
			],
			settings: {
				foreground: c2,
			},
		},
		{
			scope: [
				'constant.character.entity',
				'punctuation.definition.entity',
			],
			settings: {
				foreground: c5,
			},
		},
		// Markdown/MD
		{
			scope: [
				'entity.name.section.markdown',
				'markup.heading.setext',
			],
			settings: {
				foreground: c2,
			},
		},
		{
			scope: [
				'punctuation.definition.list',
			],
			settings: {
				foreground: c2,
			},
		},
		{
			scope: [
				'meta.separator.markdown',
			],
			settings: {
				foreground: c2,
			},
		},
		{
			scope: [
				'markup.inline.raw',
			],
			settings: {
				foreground: c3,
			},
		},
		{
			scope: 'markup.bold',
			settings: {
				fontStyle: 'bold',
			},
		},
		{
			scope: 'markup.italic',
			settings: {
				fontStyle: 'italic',
			},
		},
		{
			scope: [
				'meta.link punctuation.definition.string',
				'meta.image punctuation.definition.string',
			],
			settings: {
				foreground: punctuation,
			},
		},
		{
			scope: [
				'markup.underline.link',
			],
			settings: {
				foreground: c4,
			},
		},
		{
			scope: [
				'markup.quote',
			],
			settings: {
				foreground: c5,
			},
		},
		// CSS
		{
			scope: [
				'entity.name.tag.css',
				'entity.name.tag.wildcard', // * asterisk in CSS
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
				foreground: c4,
			},
		},
		{
			scope: [
				'source.css constant.numeric', // TODO: should scss/less be here?
			],
			settings: {
				foreground: c1,
			},
		},
		{
			scope: [
				'meta.property-name',
				'support.type.property-name',
			],
			settings: {
				foreground: c5,
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
