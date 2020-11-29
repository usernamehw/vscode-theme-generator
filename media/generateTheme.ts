import sample from 'lodash/sample';
import { TokenColors, WorkbenchColors } from '../src/types';
import { brightness, contrastColor, shade } from './colorUtils';

export function generateTheme({
	bg, fg,
	c1, c2, c3, c4, c5, c6, c7,
	inserted, modified, deleted,
	error, warning, info,
}) {
	const colors = [c1, c2, c3, c4, c5, c6, c7];

	const focusColor = sample(colors);
	const button = sample(colors);
	const letterHighlight = sample(colors);
	const badge = sample(colors);
	const markdownCode = sample(colors);

	const bracketMatch = focusColor;
	const selection = focusColor;

	const string = c1;
	const escape = c3;
	const keyword = c2;
	const iniHeader = c4;
	const constant = c7;
	const thisKeyword = escape;
	const functionName = c4;
	const foldBackground = c4;
	const variable = fg;

	const punctuation = shade(-35, fg);
	const comment = shade(35, bg);
	const sidebarBg = shade(-2.5, bg);
	const activitybarBg = shade(-5, bg);
	const statusbarBg = activitybarBg;
	const inputBg = shade(5, bg);
	const inputBorder = shade(4, inputBg);
	const windowTitleBg = shade(5, bg);
	const shadow = brightness(-10, bg);

	const workbenchColors: WorkbenchColors = {
		contrastActiveBorder: undefined,
		contrastBorder: undefined,

		focusBorder: focusColor,
		foreground: fg,
		'widget.shadow': shadow,
		'selection.background': `${selection}80`,
		descriptionForeground: undefined,
		errorForeground: error,
		'icon.foreground': undefined,

		'window.activeBorder': undefined,
		'window.inactiveBorder': undefined,

		'textBlockQuote.background': undefined,
		'textBlockQuote.border': undefined,
		'textCodeBlock.background': undefined,
		'textLink.foreground': c3,
		'textLink.activeForeground': c4,
		'textPreformat.foreground': markdownCode,
		'textSeparator.foreground': shade(-10, bg),

		'button.background': button,
		'button.foreground': contrastColor(button),
		'button.hoverBackground': shade(-20, button),
		'button.secondaryBackground': undefined,
		'button.secondaryForeground': undefined,
		'button.secondaryHoverBackground': undefined,
		'checkbox.background': undefined,
		'checkbox.foreground': undefined,
		'checkbox.border': undefined,

		'dropdown.background': inputBg,
		'dropdown.listBackground': undefined,
		'dropdown.foreground': undefined,
		'dropdown.border': inputBorder,

		'input.background': inputBg,
		'input.border': inputBorder,
		'input.foreground': undefined,
		'input.placeholderForeground': undefined,
		'inputOption.activeBackground': undefined,
		'inputOption.activeBorder': undefined,
		'inputOption.activeForeground': undefined,
		'inputValidation.errorBackground': `${error}90`,
		'inputValidation.errorBorder': error,
		'inputValidation.errorForeground': contrastColor(error),
		'inputValidation.infoBackground': `${info}90`,
		'inputValidation.infoBorder': info,
		'inputValidation.infoForeground': contrastColor(info),
		'inputValidation.warningBackground': `${warning}90`,
		'inputValidation.warningBorder': warning,
		'inputValidation.warningForeground': contrastColor(warning),

		'scrollbar.shadow': shadow, // top editor shadow
		'scrollbarSlider.background': `${shade(30, bg)}50`,
		'scrollbarSlider.hoverBackground': `${shade(40, bg)}40`,
		'scrollbarSlider.activeBackground': `${shade(20, bg)}40`,

		'badge.background': badge,
		'badge.foreground': contrastColor(badge),

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
		'list.errorForeground': error,
		'list.warningForeground': warning,
		'listFilterWidget.background': undefined,
		'listFilterWidget.outline': undefined,
		'listFilterWidget.noMatchesOutline': undefined,
		'list.filterMatchBackground': undefined,
		'list.filterMatchBorder': undefined,
		'tree.indentGuidesStroke': undefined,
		'list.deemphasizedForeground': undefined,

		'activityBar.background': activitybarBg,
		'activityBar.foreground': undefined,
		'activityBar.inactiveForeground': shade(-20, fg),
		'activityBar.dropBorder': shade(20, bg),
		'activityBar.border': undefined,
		'activityBarBadge.background': badge,
		'activityBarBadge.foreground': contrastColor(badge),
		'activityBar.activeBorder': focusColor,
		'activityBar.activeBackground': `${focusColor}13`,
		'activityBar.activeFocusBorder': focusColor,

		'sideBar.background': sidebarBg,
		'sideBar.foreground': undefined,
		'sideBar.border': undefined,
		'sideBar.dropBackground': undefined,
		'sideBarTitle.foreground': undefined,
		'sideBarSectionHeader.background': shade(5, sidebarBg),
		'sideBarSectionHeader.foreground': undefined,
		'sideBarSectionHeader.border': undefined,

		'minimap.findMatchHighlight': undefined,
		'minimap.selectionHighlight': `${selection}80`,
		'minimap.errorHighlight': error,
		'minimap.warningHighlight': warning,
		'minimap.background': undefined,
		'minimapSlider.background': undefined,
		'minimapSlider.hoverBackground': undefined,
		'minimapSlider.activeBackground': undefined,
		'minimapGutter.addedBackground': inserted,
		'minimapGutter.deletedBackground': deleted,
		'minimapGutter.modifiedBackground': modified,

		'editorGroup.border': shade(-5, bg),
		'editorGroup.dropBackground': `${focusColor}30`,
		'editorGroupHeader.noTabsBackground': shade(5, bg),
		'editorGroupHeader.tabsBackground': shade(5, bg),
		'editorGroupHeader.tabsBorder': undefined,
		'editorGroupHeader.border': undefined,
		'editorGroup.emptyBackground': undefined,
		'editorGroup.focusedEmptyBorder': undefined,
		'tab.activeBackground': bg,
		'tab.unfocusedActiveBackground': undefined,
		'tab.activeForeground': undefined,
		'tab.border': shade(10, bg),
		'tab.activeBorder': focusColor,
		'tab.unfocusedActiveBorder': undefined,
		'tab.activeBorderTop': undefined,
		'tab.unfocusedActiveBorderTop': undefined,
		'tab.lastPinnedBorder': `${focusColor}50`,
		'tab.inactiveBackground': shade(5, bg),
		'tab.unfocusedInactiveBackground': undefined,
		'tab.inactiveForeground': undefined,
		'tab.unfocusedActiveForeground': undefined,
		'tab.unfocusedInactiveForeground': undefined,
		'tab.hoverBackground': shade(10, bg),
		'tab.unfocusedHoverBackground': undefined,
		'tab.hoverForeground': undefined,
		'tab.unfocusedHoverForeground': undefined,
		'tab.hoverBorder': undefined,
		'tab.unfocusedHoverBorder': undefined,
		'tab.activeModifiedBorder': modified,
		'tab.inactiveModifiedBorder': undefined,
		'tab.unfocusedActiveModifiedBorder': undefined,
		'tab.unfocusedInactiveModifiedBorder': undefined,
		'editorPane.background': shade(-4, bg),

		'editor.background': bg,
		'editor.foreground': fg,

		'editorLineNumber.foreground': brightness(20, bg),
		'editorLineNumber.activeForeground': brightness(50, bg),

		'editorCursor.background': contrastColor(focusColor),
		'editorCursor.foreground': focusColor,

		'editor.selectionBackground': `${selection}30`,
		'editor.selectionForeground': undefined,
		'editor.inactiveSelectionBackground': undefined,
		'editor.selectionHighlightBackground': undefined,
		'editor.selectionHighlightBorder': undefined,

		'editor.wordHighlightBackground': undefined,
		'editor.wordHighlightBorder': undefined,
		'editor.wordHighlightStrongBackground': undefined,
		'editor.wordHighlightStrongBorder': undefined,

		'editor.findMatchBackground': undefined,
		'editor.findMatchHighlightBackground': undefined,
		'editor.findRangeHighlightBackground': undefined,
		'editor.findMatchBorder': undefined,
		'editor.findMatchHighlightBorder': undefined,
		'editor.findRangeHighlightBorder': undefined,

		'searchEditor.findMatchBackground': undefined,
		'searchEditor.findMatchBorder': undefined,
		'searchEditor.textInputBorder': undefined,

		'editor.hoverHighlightBackground': undefined,

		'editor.lineHighlightBackground': shade(5, bg),
		'editor.lineHighlightBorder': undefined,

		'editorLink.activeForeground': focusColor,

		'editor.rangeHighlightBackground': undefined,
		'editor.rangeHighlightBorder': undefined,
		'editor.symbolHighlightBackground': undefined,
		'editor.symbolHighlightBorder': undefined,

		'editorWhitespace.foreground': shade(20, bg),

		'editorIndentGuide.background': shade(10, bg),
		'editorIndentGuide.activeBackground': focusColor,
		'editorRuler.foreground': shade(10, bg),

		'editor.onTypeRenameBackground': undefined,
		'editorCodeLens.foreground': undefined,
		'editorLightBulb.foreground': undefined,
		'editorLightBulbAutoFix.foreground': undefined,
		'editorBracketMatch.border': shade(-20, bracketMatch),
		'editorBracketMatch.background': `${bracketMatch}20`,
		'editor.foldBackground': `${foldBackground}30`,

		'editorOverviewRuler.background': undefined,
		'editorOverviewRuler.border': shade(10, bg),
		'editorOverviewRuler.findMatchForeground': undefined,
		'editorOverviewRuler.rangeHighlightForeground': undefined,
		'editorOverviewRuler.selectionHighlightForeground': selection,
		'editorOverviewRuler.wordHighlightForeground': undefined,
		'editorOverviewRuler.wordHighlightStrongForeground': undefined,
		'editorOverviewRuler.modifiedForeground': modified,
		'editorOverviewRuler.addedForeground': modified,
		'editorOverviewRuler.deletedForeground': modified,
		'editorOverviewRuler.errorForeground': error,
		'editorOverviewRuler.warningForeground': warning,
		'editorOverviewRuler.infoForeground': info,
		'editorOverviewRuler.bracketMatchForeground': bracketMatch,

		'editorError.foreground': error,
		'editorError.border': undefined,
		'editorError.background': undefined,
		'editorWarning.background': undefined,
		'editorWarning.border': undefined,
		'editorWarning.foreground': warning,
		'editorInfo.background': undefined,
		'editorInfo.border': undefined,
		'editorInfo.foreground': info,
		'editorHint.border': undefined,
		'editorHint.foreground': undefined,
		'problemsErrorIcon.foreground': error,
		'problemsWarningIcon.foreground': warning,
		'problemsInfoIcon.foreground': info,

		'editorUnnecessaryCode.opacity': undefined, // #000000aa
		'editorUnnecessaryCode.border': undefined,

		'editorGutter.background': undefined,
		'editorGutter.modifiedBackground': modified,
		'editorGutter.addedBackground': inserted,
		'editorGutter.deletedBackground': deleted,
		'editorGutter.commentRangeForeground': undefined,
		'editorGutter.foldingControlForeground': undefined,

		'diffEditor.insertedTextBackground': `${inserted}30`,
		'diffEditor.insertedTextBorder': undefined,
		'diffEditor.removedTextBackground': `${deleted}35`,
		'diffEditor.removedTextBorder': undefined,
		'diffEditor.border': undefined,
		'diffEditor.diagonalFill': undefined,

		'editorWidget.background': bg,
		'editorWidget.foreground': undefined,
		'editorWidget.border': undefined,
		'editorWidget.resizeBorder': shade(10, bg),
		'editorSuggestWidget.background': shade(5, bg),
		'editorSuggestWidget.border': shade(10, bg),
		'editorSuggestWidget.foreground': undefined,
		'editorSuggestWidget.highlightForeground': letterHighlight,
		'editorSuggestWidget.selectedBackground': undefined,

		'editorHoverWidget.background': undefined,
		'editorHoverWidget.foreground': undefined,
		'editorHoverWidget.border': shade(10, bg),

		'debugExceptionWidget.background': undefined,
		'debugExceptionWidget.border': undefined,

		'editorMarkerNavigation.background': bg,
		'editorMarkerNavigationError.background': error,
		'editorMarkerNavigationWarning.background': warning,
		'editorMarkerNavigationInfo.background': info,

		'peekView.border': undefined,
		'peekViewEditor.background': undefined,
		'peekViewEditorGutter.background': undefined,
		'peekViewEditor.matchHighlightBackground': undefined,
		'peekViewEditor.matchHighlightBorder': undefined,
		'peekViewResult.background': shade(5, bg),
		'peekViewResult.fileForeground': undefined,
		'peekViewResult.lineForeground': undefined,
		'peekViewResult.matchHighlightBackground': undefined,
		'peekViewResult.selectionBackground': undefined,
		'peekViewResult.selectionForeground': undefined,
		'peekViewTitle.background': shade(-5, bg),
		'peekViewTitleDescription.foreground': undefined,
		'peekViewTitleLabel.foreground': undefined,

		'merge.border': undefined,
		'merge.commonContentBackground': undefined,
		'merge.commonHeaderBackground': undefined,
		'merge.currentContentBackground': undefined,
		'merge.currentHeaderBackground': undefined,
		'merge.incomingContentBackground': undefined,
		'merge.incomingHeaderBackground': undefined,
		'editorOverviewRuler.commonContentForeground': undefined,
		'editorOverviewRuler.incomingContentForeground': undefined,
		'editorOverviewRuler.currentContentForeground': undefined,

		'panel.background': undefined,
		'panel.border': undefined,
		'panel.dropBorder': undefined,
		'panelTitle.activeBorder': focusColor,
		'panelTitle.activeForeground': undefined,
		'panelTitle.inactiveForeground': undefined,
		'panelInput.border': undefined,
		'panelSection.border': undefined,
		'panelSection.dropBackground': undefined,
		'panelSectionHeader.background': undefined,
		'panelSectionHeader.border': undefined,
		'panelSectionHeader.foreground': undefined,

		'imagePreview.border': undefined,

		'statusBar.background': statusbarBg,
		'statusBar.foreground': undefined,
		'statusBar.border': undefined,
		'statusBar.debuggingBackground': undefined,
		'statusBar.debuggingForeground': undefined,
		'statusBar.debuggingBorder': undefined,
		'statusBar.noFolderBackground': undefined,
		'statusBar.noFolderForeground': undefined,
		'statusBar.noFolderBorder': undefined,
		'statusBarItem.activeBackground': undefined,
		'statusBarItem.hoverBackground': shade(10, statusbarBg),
		'statusBarItem.prominentBackground': focusColor,
		'statusBarItem.prominentForeground': contrastColor(focusColor),
		'statusBarItem.prominentHoverBackground': shade(-10, focusColor),
		'statusBarItem.remoteBackground': undefined,
		'statusBarItem.remoteForeground': undefined,

		'titleBar.activeBackground': windowTitleBg,
		'titleBar.activeForeground': undefined,
		'titleBar.inactiveBackground': bg,
		'titleBar.inactiveForeground': undefined,
		'titleBar.border': shade(2, windowTitleBg),

		'menubar.selectionBackground': undefined,
		'menubar.selectionBorder': undefined,
		'menubar.selectionForeground': undefined,
		'menu.background': bg,
		'menu.foreground': fg,
		'menu.selectionBackground': `${focusColor}DD`,
		'menu.selectionForeground': contrastColor(focusColor),
		'menu.selectionBorder': undefined,
		'menu.separatorBackground': shade(20, bg),
		'menu.border': undefined,

		'notificationCenter.border': undefined,
		'notificationCenterHeader.foreground': undefined,
		'notificationCenterHeader.background': undefined,
		'notificationToast.border': undefined,
		'notifications.border': undefined,
		'notifications.foreground': undefined,
		'notificationsErrorIcon.foreground': error,
		'notificationsWarningIcon.foreground': warning,
		'notificationsInfoIcon.foreground': info,
		'notifications.background': bg,
		'notificationLink.foreground': undefined,

		'extensionButton.prominentBackground': button,
		'extensionButton.prominentForeground': contrastColor(button),
		'extensionButton.prominentHoverBackground': shade(-20, button),
		'extensionBadge.remoteBackground': undefined,
		'extensionBadge.remoteForeground': undefined,

		'pickerGroup.border': shade(-10, bg),
		'pickerGroup.foreground': focusColor,
		'quickInput.background': undefined,
		'quickInput.foreground': undefined,
		'quickInputTitle.background': undefined,

		'terminal.background': undefined,
		'terminal.border': undefined,
		'terminal.foreground': undefined,
		'terminal.ansiBlack': undefined,
		'terminal.ansiBrightBlack': undefined,
		'terminal.ansiBlue': undefined,
		'terminal.ansiBrightBlue': undefined,
		'terminal.ansiCyan': undefined,
		'terminal.ansiBrightCyan': undefined,
		'terminal.ansiGreen': undefined,
		'terminal.ansiBrightGreen': undefined,
		'terminal.ansiBrightMagenta': undefined,
		'terminal.ansiMagenta': undefined,
		'terminal.ansiBrightRed': undefined,
		'terminal.ansiRed': undefined,
		'terminal.ansiBrightWhite': undefined,
		'terminal.ansiWhite': undefined,
		'terminal.ansiBrightYellow': undefined,
		'terminal.ansiYellow': undefined,
		'terminal.selectionBackground': selection,
		'terminalCursor.foreground': focusColor,
		'terminalCursor.background': contrastColor(focusColor),

		'debugToolBar.background': undefined,
		'debugToolBar.border': undefined,
		'editor.stackFrameHighlightBackground': undefined,
		'editor.focusedStackFrameHighlightBackground': undefined,
		'debugView.exceptionLabelBackground': undefined,
		'debugView.exceptionLabelForeground': undefined,
		'debugView.stateLabelBackground': undefined,
		'debugView.stateLabelForeground': undefined,
		'debugView.valueChangedHighlight': undefined,
		'debugTokenExpression.name': undefined,
		'debugTokenExpression.value': undefined,
		'debugTokenExpression.string': undefined,
		'debugTokenExpression.boolean': undefined,
		'debugTokenExpression.number': undefined,
		'debugTokenExpression.error': undefined,

		'welcomePage.background': undefined,
		'welcomePage.buttonBackground': undefined,
		'welcomePage.buttonHoverBackground': undefined,
		'walkThrough.embeddedEditorBackground': undefined,

		'scm.providerBorder': undefined,

		'gitDecoration.addedResourceForeground': inserted,
		'gitDecoration.modifiedResourceForeground': modified,
		'gitDecoration.deletedResourceForeground': deleted,
		'gitDecoration.ignoredResourceForeground': undefined,
		'gitDecoration.conflictingResourceForeground': undefined,
		'gitDecoration.stageDeletedResourceForeground': deleted,
		'gitDecoration.stageModifiedResourceForeground': modified,
		'gitDecoration.submoduleResourceForeground': undefined,
		'gitDecoration.untrackedResourceForeground': undefined,

		'settings.checkboxBackground': undefined,
		'settings.checkboxBorder': undefined,
		'settings.dropdownBackground': undefined,
		'settings.dropdownBorder': undefined,
		'settings.dropdownListBorder': undefined,
		'settings.focusedRowBackground': undefined,
		'settings.headerForeground': undefined,
		'settings.modifiedItemIndicator': modified,
		'settings.numberInputBackground': undefined,
		'settings.numberInputForeground': undefined,
		'settings.textInputBackground': undefined,
		'settings.textInputForeground': undefined,
		'settings.textInputBorder': undefined,
		'settings.checkboxForeground': undefined,
		'settings.dropdownForeground': undefined,
		'settings.numberInputBorder': undefined,
		'notebook.focusedRowBorder': focusColor,
		'notebook.rowHoverBackground': undefined,

		'breadcrumb.background': undefined,
		'breadcrumb.foreground': undefined,
		'breadcrumb.activeSelectionForeground': undefined,
		'breadcrumb.focusForeground': undefined,
		'breadcrumbPicker.background': undefined,

		'editor.snippetTabstopHighlightBorder': undefined,
		'editor.snippetTabstopHighlightBackground': undefined,
		'editor.snippetFinalTabstopHighlightBackground': undefined,
		'editor.snippetFinalTabstopHighlightBorder': undefined,

		'symbolIcon.arrayForeground': undefined,
		'symbolIcon.booleanForeground': undefined,
		'symbolIcon.classForeground': undefined,
		'symbolIcon.colorForeground': undefined,
		'symbolIcon.constantForeground': undefined,
		'symbolIcon.constructorForeground': undefined,
		'symbolIcon.enumeratorForeground': undefined,
		'symbolIcon.enumeratorMemberForeground': undefined,
		'symbolIcon.eventForeground': undefined,
		'symbolIcon.fieldForeground': undefined,
		'symbolIcon.fileForeground': undefined,
		'symbolIcon.folderForeground': undefined,
		'symbolIcon.functionForeground': undefined,
		'symbolIcon.interfaceForeground': undefined,
		'symbolIcon.keyForeground': undefined,
		'symbolIcon.keywordForeground': undefined,
		'symbolIcon.methodForeground': undefined,
		'symbolIcon.moduleForeground': undefined,
		'symbolIcon.namespaceForeground': undefined,
		'symbolIcon.nullForeground': undefined,
		'symbolIcon.numberForeground': undefined,
		'symbolIcon.objectForeground': undefined,
		'symbolIcon.operatorForeground': undefined,
		'symbolIcon.packageForeground': undefined,
		'symbolIcon.propertyForeground': undefined,
		'symbolIcon.referenceForeground': undefined,
		'symbolIcon.snippetForeground': undefined,
		'symbolIcon.stringForeground': undefined,
		'symbolIcon.structForeground': undefined,
		'symbolIcon.textForeground': undefined,
		'symbolIcon.typeParameterForeground': undefined,
		'symbolIcon.unitForeground': undefined,
		'symbolIcon.variableForeground': undefined,

		// TODO: continue
	};
	let tokenColors: TokenColors = [
		{
			name: 'Invalid - some grammar use it for showing obvious syntax errors.',
			scope: [
				'invalid',
			],
			settings: {
				foreground: error,
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
				foreground: variable,
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
				foreground: escape,
			},
		},
		{
			scope: [
				'keyword',
				'constant.language.import-export-all', // JS/TS import asterisk
			],
			settings: {
				foreground: keyword,
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
				'entity.other.inherited-class',
			],
			settings: {
				foreground: functionName,
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
				'constant',
			],
			settings: {
				foreground: constant,
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
		// JS ──────────────────────────────────────────────────────────────────────
		{
			scope: [
				'comment.block.documentation entity.name.type',
			],
			settings: {
				foreground: c6,
			},
		},
		{
			scope: [
				'variable.language.this',
				'variable.language.special.self',
			],
			settings: {
				foreground: thisKeyword,
			},
		},
		// HTML ──────────────────────────────────────────────────────────────────────
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
		// Markdown ──────────────────────────────────────────────────────────────────────
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
		// CSS ──────────────────────────────────────────────────────────────────────
		{
			name: '[CSS] Tag and asterisk',
			scope: [
				'entity.name.tag.css',
				'entity.name.tag.wildcard',
			],
			settings: {
				foreground: c1,
			},
		},
		{
			name: '[CSS] class (.class)',
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
			name: '[CSS] id (#id)',
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
			name: '[CSS] url',
			scope: [
				'variable.parameter.url',
			],
			settings: {
				foreground: c5,
			},
		},
		// PHP ──────────────────────────────────────────────────────────────────────
		{
			scope: [
				'punctuation.definition.variable',
			],
			settings: {
				foreground: variable,
			},
		},
		{
			scope: [
				'punctuation.section.embedded.begin.php',
				'punctuation.section.embedded.end.php',
			],
			settings: {
				foreground: keyword,
			},
		},
		// Ini ──────────────────────────────────────────────────────────────────────
		{
			name: '[ini] Header',
			scope: [
				'entity.name.section',
			],
			settings: {
				foreground: iniHeader,
			},
		},
		// JSON ──────────────────────────────────────────────────────────────────────
		{
			scope: [
				'support.type.property-name.json',
			],
			settings: {
				foreground: c2,
			},
		},
		// Diff ──────────────────────────────────────────────────────────────────────
		{
			scope: [
				'markup.inserted',
			],
			settings: {
				foreground: inserted,
			},
		},
		{
			scope: [
				'markup.changed',
			],
			settings: {
				foreground: modified,
			},
		},
		{
			scope: [
				'markup.deleted',
			],
			settings: {
				foreground: deleted,
			},
		},
		{
			scope: [
				'meta.diff.header',
			],
			settings: {
				foreground: modified,
				fontStyle: 'italic',
			},
		},
		{
			scope: [
				'meta.diff.range',
			],
			settings: {
				foreground: escape,
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
