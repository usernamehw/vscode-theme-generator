import * as chromatism from 'chromatism';
import sample from 'lodash/sample';
import { TokenColors, WorkbenchColors } from '../src/types';
import { brightness, shade } from './colorUtils';

export function generateTheme({ bg, fg, c1, c2, c3, c4, c5, c6, c7, red, green }) {
	const colors = [c1, c2, c3, c4, c5, c6, c7];

	const focusColor = sample(colors);
	const button = sample(colors);
	const letterHighlight = sample(colors);
	const badge = sample(colors);
	const markdownCode = sample(colors);

	const string = c1;
	const functionName = c4;

	const punctuation = chromatism.shade(-35, fg).hex;
	const comment = chromatism.shade(50, bg).hex;

	const workbenchColors: WorkbenchColors = {
		contrastActiveBorder: undefined,
		contrastBorder: undefined,

		focusBorder: focusColor,
		foreground: fg,
		'widget.shadow': undefined,
		'selection.background': `${focusColor}80`,
		descriptionForeground: undefined,
		errorForeground: red,
		'icon.foreground': undefined,

		'window.activeBorder': undefined,
		'window.inactiveBorder': undefined,

		'textBlockQuote.background': undefined,
		'textBlockQuote.border': undefined,
		'textCodeBlock.background': undefined,
		'textLink.foreground': undefined,
		'textLink.activeForeground': undefined,
		'textPreformat.foreground': markdownCode,
		'textSeparator.foreground': shade(-10, bg),

		'button.background': button,
		'button.foreground': chromatism.contrastRatio(button).hex,
		'button.hoverBackground': shade(-20, button),
		'button.secondaryBackground': undefined,
		'button.secondaryForeground': undefined,
		'button.secondaryHoverBackground': undefined,
		'checkbox.background': undefined,
		'checkbox.foreground': undefined,
		'checkbox.border': undefined,

		'dropdown.background': brightness(5, bg),
		'dropdown.listBackground': undefined,
		'dropdown.foreground': undefined,
		'dropdown.border': undefined,

		'input.background': shade(-10, bg),
		'input.border': undefined,
		'input.foreground': undefined,
		'input.placeholderForeground': undefined,
		'inputOption.activeBackground': undefined,
		'inputOption.activeBorder': undefined,
		'inputOption.activeForeground': undefined,
		'inputValidation.errorBackground': `${red}90`,
		'inputValidation.errorBorder': red,
		'inputValidation.errorForeground': chromatism.contrastRatio(red).hex,
		'inputValidation.infoBackground': undefined,
		'inputValidation.infoBorder': undefined,
		'inputValidation.infoForeground': undefined,
		'inputValidation.warningBackground': undefined,
		'inputValidation.warningBorder': undefined,
		'inputValidation.warningForeground': undefined,

		'scrollbar.shadow': undefined, // top editor shadow
		'scrollbarSlider.background': `${shade(30, bg)}40`,
		'scrollbarSlider.hoverBackground': `${shade(40, bg)}40`,
		'scrollbarSlider.activeBackground': `${shade(20, bg)}40`,

		'badge.background': badge,
		'badge.foreground': chromatism.contrastRatio(badge).hex,

		'progressBar.background': focusColor,

		'list.activeSelectionBackground': `${focusColor}20`,
		'list.activeSelectionForeground': undefined,
		'list.dropBackground': undefined,
		'list.focusBackground': `${focusColor}30`,
		'list.focusForeground': undefined,
		'list.highlightForeground': letterHighlight,
		'list.hoverBackground': brightness(5, bg),
		'list.hoverForeground': undefined,
		'list.inactiveSelectionBackground': `${focusColor}25`,
		'list.inactiveSelectionForeground': undefined,
		'list.inactiveFocusBackground': undefined,
		'list.invalidItemForeground': undefined,
		'list.errorForeground': red,
		'list.warningForeground': undefined,
		'listFilterWidget.background': undefined,
		'listFilterWidget.outline': undefined,
		'listFilterWidget.noMatchesOutline': undefined,
		'list.filterMatchBackground': undefined,
		'list.filterMatchBorder': undefined,
		'tree.indentGuidesStroke': undefined,
		'list.deemphasizedForeground': undefined,












		'editor.foreground': fg,
		'editor.background': bg,
		'editor.lineHighlightBackground': brightness(-5, bg),
		'editorWhitespace.foreground': shade(20, bg),
		'editorLineNumber.foreground': brightness(20, bg),
		'editorLineNumber.activeForeground': brightness(50, bg),
		'editorOverviewRuler.border': shade(10, bg),
		'editorHoverWidget.border': shade(-10, bg),

		'editorError.foreground': red,

		'diffEditor.insertedTextBackground': `${green}25`,
		'diffEditor.removedTextBackground': `${red}30`,
		'gitDecoration.addedResourceForeground': green,
		'gitDecoration.deletedResourceForeground': red,
		'editorGutter.addedBackground': green,
		'editorGutter.deletedBackground': red,

		'extensionButton.prominentBackground': button,
		'statusBar.background': shade(-10, bg),
		'sideBar.background': shade(-5, bg),
		'activityBar.background': shade(-10, bg), // shade(-10, bg)

		'editorGroupHeader.tabsBackground': shade(5, bg),
		'tab.inactiveBackground': shade(5, bg),
		'tab.activeBackground': bg,
		'tab.border': shade(10, bg),
		'tab.hoverBackground': shade(10, bg),
		'editorGroup.border': shade(-5, bg),
		'sideBarSectionHeader.background': shade(-10, bg),

		'titleBar.inactiveBackground': bg,
		'titleBar.activeBackground': bg,

		'menu.background': bg,
		'menu.foreground': fg,
		'menu.selectionBackground': focusColor,
		'menu.selectionForeground': chromatism.contrastRatio(focusColor).hex,
		'menu.separatorBackground': shade(20, bg),
		'pickerGroup.border': shade(-10, bg),

		'editorWidget.resizeBorder': shade(20, bg),

		'editorMarkerNavigation.background': bg,
		'peekViewResult.background': shade(5, bg),
		'peekViewTitle.background': shade(-5, bg),


		// focus colors
		'editorCursor.foreground': focusColor,
		'editorCursor.background': chromatism.contrastRatio(focusColor).hex,
		'terminalCursor.foreground': focusColor,
		'terminalCursor.background': chromatism.contrastRatio(focusColor).hex,

		'panelTitle.activeBorder': focusColor,

		'editorBracketMatch.border': shade(-20, focusColor),
		'editorOverviewRuler.bracketMatchForeground': focusColor,
		'editorBracketMatch.background': `${focusColor}20`,
		'editorIndentGuide.background': shade(10, bg),
		'editorIndentGuide.activeBackground': focusColor,
		'activityBar.activeBorder': focusColor,
		'activityBar.dropBorder': focusColor,
		'editorGroup.dropBackground': `${focusColor}30`,
		'tab.activeBorder': focusColor,
		'editor.selectionBackground': `${focusColor}30`,

		'editorWidget.background': bg,
		'notifications.background': bg,

		// ──────────────────────────────────────────────────────────────────────
		'editorSuggestWidget.highlightForeground': letterHighlight,

		'activityBarBadge.background': badge,
		'activityBarBadge.foreground': chromatism.contrastRatio(badge).hex,

		'extensionButton.prominentForeground': chromatism.contrastRatio(button).hex,
		'extensionButton.prominentHoverBackground': shade(-20, button),
	};
	let tokenColors: TokenColors = [
		{
			name: 'Invalid - some grammar use it for showing obvious syntax errors.',
			scope: [
				'invalid',
			],
			settings: {
				foreground: red,
			},
		},
		{
			name: 'Reset string interpolation (template literal) having the wrong color bug',
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
			name: 'Variables',
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
			name: 'Comments',
			scope: [
				'comment',
				'punctuation.definition.comment',
			],
			settings: {
				foreground: comment,
			},
		},
		{
			name: 'Strings',
			scope: [
				'string',
				'punctuation.definition.string',
			],
			settings: {
				foreground: string,
			},
		},
		{
			name: 'Escape character (\n, \t ...)',
			scope: [
				'constant.character.escape',
			],
			settings: {
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
		{
			scope: [
				'entity.name.type',
				'support.type.primitive',
				'support.type.builtin',
				'meta.type.annotation entity.name.type',
				'meta.type.parameters entity.name.type',
			],
			settings: {
				foreground: c7,
			},
		},
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
				'support.function',
				'new.expr entity.name.type',
			],
			settings: {
				foreground: functionName,
			},
		},
		{
			scope: [
				'entity.other.inherited-class',
			],
			settings: {
				foreground: c6,
			},
		},
		{
			scope: [
				'punctuation.definition.typeparameters',
				'keyword.operator.type',
				'keyword.operator.optional',
				'source.tsx punctuation.section.embedded',
				'source.jsx punctuation.section.embedded',
			],
			settings: {
				foreground: c6,
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
			name: '[Markdown] link',
			scope: [
				'link',
				'markup.underline.link',
				'constant.other.reference.link.markdown',
			],
			settings: {
				foreground: c4,
			},
		},
		{
			name: '[Markdown] blockquote text (>)',
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

	tokenColors = tokenColors.map(token => {
		if (token.scope.length === 1) {
			token.scope = token.scope[0];
		}
		delete token.name;
		return token;
	});

	return {
		workbenchColors,
		tokenColors,
	};
}
