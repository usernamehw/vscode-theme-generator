interface ShowNotification {
	type: 'showNotification';
	value: string;
}
export interface Theme {
	workbenchColors: WorkbenchColors;
	tokenColors: TokenColors;
}
interface GenerateTheme {
	type: 'generateTheme';
	value: Theme;
}
interface ResetCustomizations {
	type: 'resetCustomizations';
}
interface SaveState {
	type: 'saveState';
	value: WebviewSavedState;
}
interface ExportAsJson {
	type: 'exportAsJson';
	value: Theme;
}

export type WebviewMessageFromWebview = ShowNotification | GenerateTheme | SaveState | ResetCustomizations | ExportAsJson;
export interface WebviewSavedState {
	bg: string;
	fg: string;

	c1: string;
	c2: string;
	c3: string;
	c4: string;
	c5: string;
	c6: string;
	c7: string;

	c1Lock: boolean;
	c2Lock: boolean;
	c3Lock: boolean;
	c4Lock: boolean;
	c5Lock: boolean;
	c6Lock: boolean;
	c7Lock: boolean;

	inserted: string;
	modified: string;
	deleted: string;

	error: string;
	warning: string;
	info: string;

	focus: string;

	shouldShuffle: boolean;
}

export interface VscodeWebviewApi {
	/**
	 * @deprecated Don't use; Doesn't persist.
	 */
	getState(): WebviewSavedState;
	/**
	 * @deprecated Don't use; Doesn't persist.
	 */
	setState(state: WebviewSavedState): void;
	postMessage(message: WebviewMessageFromWebview): void;
}

interface RestoreState {
	type: 'restoreState';
	value: WebviewSavedState;
}
interface UpdateConfig {
	type: 'updateConfig';
	value: ExtensionConfig;
}

export type WebviewMessageToWebview = RestoreState | UpdateConfig;

export type WorkbenchColors = Partial<{
	'activityBarBadge.background': string;
	'editor.background': string;
	'editor.foreground': string;
	'editor.inactiveSelectionBackground': string;
	'editor.lineHighlightBorder': string;
	'editor.selectionHighlightBackground': string;
	'editorIndentGuide.activeBackground': string;
	'editorIndentGuide.background': string;
	'editorSuggestWidget.background': string;
	'input.placeholderForeground': string;
	'list.hoverBackground': string;
	'minimapGutter.addedBackground': string;
	'minimapGutter.deletedBackground': string;
	'minimapGutter.modifiedBackground': string;
	'notebook.cellBorderColor': string;
	'progressBar.background': string;
	'searchEditor.textInputBorder': string;
	'settings.numberInputBorder': string;
	'settings.textInputBorder': string;
	'sideBarSectionHeader.background': string;
	'sideBarSectionHeader.border': string;
	'sideBarTitle.foreground': string;
	'statusBarItem.remoteBackground': string;
	'statusBarItem.remoteForeground': string;
	'tab.lastPinnedBorder': string;
	'activityBar.activeBorder': string;
	'activityBar.background': string;
	'activityBar.dropBorder': string;
	'activityBar.foreground': string;
	'activityBar.inactiveForeground': string;
	'activityBarBadge.foreground': string;
	'badge.background': string;
	'badge.foreground': string;
	'breadcrumb.activeSelectionForeground': string;
	'breadcrumb.background': string;
	'breadcrumb.focusForeground': string;
	'breadcrumb.foreground': string;
	'breadcrumbPicker.background': string;
	'button.background': string;
	'button.foreground': string;
	'button.hoverBackground': string;
	'button.secondaryBackground': string;
	'button.secondaryForeground': string;
	'button.secondaryHoverBackground': string;
	'charts.blue': string;
	'charts.foreground': string;
	'charts.green': string;
	'charts.lines': string;
	'charts.orange': string;
	'charts.purple': string;
	'charts.red': string;
	'charts.yellow': string;
	'checkbox.background': string;
	'checkbox.border': string;
	'debugConsole.errorForeground': string;
	'debugConsole.infoForeground': string;
	'debugConsole.sourceForeground': string;
	'debugConsole.warningForeground': string;
	'debugConsoleInputIcon.foreground': string;
	'debugExceptionWidget.background': string;
	'debugExceptionWidget.border': string;
	'debugIcon.breakpointCurrentStackframeForeground': string;
	'debugIcon.breakpointDisabledForeground': string;
	'debugIcon.breakpointForeground': string;
	'debugIcon.breakpointStackframeForeground': string;
	'debugIcon.breakpointUnverifiedForeground': string;
	'debugIcon.continueForeground': string;
	'debugIcon.disconnectForeground': string;
	'debugIcon.pauseForeground': string;
	'debugIcon.restartForeground': string;
	'debugIcon.startForeground': string;
	'debugIcon.stepBackForeground': string;
	'debugIcon.stepIntoForeground': string;
	'debugIcon.stepOutForeground': string;
	'debugIcon.stepOverForeground': string;
	'debugIcon.stopForeground': string;
	'debugTokenExpression.boolean': string;
	'debugTokenExpression.error': string;
	'debugTokenExpression.name': string;
	'debugTokenExpression.number': string;
	'debugTokenExpression.string': string;
	'debugTokenExpression.value': string;
	'debugToolBar.background': string;
	'debugView.exceptionLabelBackground': string;
	'debugView.exceptionLabelForeground': string;
	'debugView.stateLabelBackground': string;
	'debugView.stateLabelForeground': string;
	'debugView.valueChangedHighlight': string;
	'descriptionForeground': string;
	'diffEditor.diagonalFill': string;
	'diffEditor.insertedTextBackground': string;
	'diffEditor.removedTextBackground': string;
	'dropdown.background': string;
	'dropdown.border': string;
	'editor.findMatchBackground': string;
	'editor.findMatchHighlightBackground': string;
	'editor.findRangeHighlightBackground': string;
	'editor.focusedStackFrameHighlightBackground': string;
	'editor.foldBackground': string;
	'editor.hoverHighlightBackground': string;
	'editor.onTypeRenameBackground': string;
	'editor.rangeHighlightBackground': string;
	'editor.selectionBackground': string;
	'editor.snippetFinalTabstopHighlightBorder': string;
	'editor.snippetTabstopHighlightBackground': string;
	'editor.stackFrameHighlightBackground': string;
	'editor.symbolHighlightBackground': string;
	'editor.wordHighlightBackground': string;
	'editor.wordHighlightStrongBackground': string;
	'editorActiveLineNumber.foreground': string;
	'editorBracketMatch.background': string;
	'editorBracketMatch.border': string;
	'editorCodeLens.foreground': string;
	'editorCursor.foreground': string;
	'editorError.foreground': string;
	'editorGroup.border': string;
	'editorGroup.dropBackground': string;
	'editorGroupHeader.noTabsBackground': string;
	'editorGroupHeader.tabsBackground': string;
	'editorGutter.addedBackground': string;
	'editorGutter.background': string;
	'editorGutter.commentRangeForeground': string;
	'editorGutter.deletedBackground': string;
	'editorGutter.foldingControlForeground': string;
	'editorGutter.modifiedBackground': string;
	'editorHint.foreground': string;
	'editorHoverWidget.background': string;
	'editorHoverWidget.border': string;
	'editorHoverWidget.foreground': string;
	'editorHoverWidget.statusBarBackground': string;
	'editorInfo.foreground': string;
	'editorLightBulb.foreground': string;
	'editorLightBulbAutoFix.foreground': string;
	'editorLineNumber.activeForeground': string;
	'editorLineNumber.foreground': string;
	'editorLink.activeForeground': string;
	'editorMarkerNavigation.background': string;
	'editorMarkerNavigationError.background': string;
	'editorMarkerNavigationInfo.background': string;
	'editorMarkerNavigationWarning.background': string;
	'editorOverviewRuler.addedForeground': string;
	'editorOverviewRuler.border': string;
	'editorOverviewRuler.bracketMatchForeground': string;
	'editorOverviewRuler.commonContentForeground': string;
	'editorOverviewRuler.currentContentForeground': string;
	'editorOverviewRuler.deletedForeground': string;
	'editorOverviewRuler.errorForeground': string;
	'editorOverviewRuler.findMatchForeground': string;
	'editorOverviewRuler.incomingContentForeground': string;
	'editorOverviewRuler.infoForeground': string;
	'editorOverviewRuler.modifiedForeground': string;
	'editorOverviewRuler.rangeHighlightForeground': string;
	'editorOverviewRuler.selectionHighlightForeground': string;
	'editorOverviewRuler.warningForeground': string;
	'editorOverviewRuler.wordHighlightForeground': string;
	'editorOverviewRuler.wordHighlightStrongForeground': string;
	'editorPane.background': string;
	'editorRuler.foreground': string;
	'editorSuggestWidget.border': string;
	'editorSuggestWidget.foreground': string;
	'editorSuggestWidget.highlightForeground': string;
	'editorSuggestWidget.selectedBackground': string;
	'editorUnnecessaryCode.opacity': string;
	'editorWarning.foreground': string;
	'editorWhitespace.foreground': string;
	'editorWidget.background': string;
	'editorWidget.border': string;
	'editorWidget.foreground': string;
	'errorForeground': string;
	'extensionBadge.remoteBackground': string;
	'extensionBadge.remoteForeground': string;
	'extensionButton.prominentBackground': string;
	'extensionButton.prominentForeground': string;
	'extensionButton.prominentHoverBackground': string;
	'focusBorder': string;
	'foreground': string;
	'gitDecoration.addedResourceForeground': string;
	'gitDecoration.conflictingResourceForeground': string;
	'gitDecoration.deletedResourceForeground': string;
	'gitDecoration.ignoredResourceForeground': string;
	'gitDecoration.modifiedResourceForeground': string;
	'gitDecoration.stageDeletedResourceForeground': string;
	'gitDecoration.stageModifiedResourceForeground': string;
	'gitDecoration.submoduleResourceForeground': string;
	'gitDecoration.untrackedResourceForeground': string;
	'icon.foreground': string;
	'imagePreview.border': string;
	'input.background': string;
	'input.foreground': string;
	'inputOption.activeBackground': string;
	'inputOption.activeBorder': string;
	'inputOption.activeForeground': string;
	'inputValidation.errorBackground': string;
	'inputValidation.errorBorder': string;
	'inputValidation.infoBackground': string;
	'inputValidation.infoBorder': string;
	'inputValidation.warningBackground': string;
	'inputValidation.warningBorder': string;
	'list.activeSelectionBackground': string;
	'list.activeSelectionForeground': string;
	'list.deemphasizedForeground': string;
	'list.dropBackground': string;
	'list.errorForeground': string;
	'list.filterMatchBackground': string;
	'list.focusBackground': string;
	'list.highlightForeground': string;
	'list.inactiveSelectionBackground': string;
	'list.invalidItemForeground': string;
	'list.warningForeground': string;
	'listFilterWidget.background': string;
	'listFilterWidget.noMatchesOutline': string;
	'listFilterWidget.outline': string;
	'menu.background': string;
	'menu.foreground': string;
	'menu.selectionBackground': string;
	'menu.selectionForeground': string;
	'menu.separatorBackground': string;
	'menubar.selectionBackground': string;
	'menubar.selectionForeground': string;
	'merge.commonContentBackground': string;
	'merge.commonHeaderBackground': string;
	'merge.currentContentBackground': string;
	'merge.currentHeaderBackground': string;
	'merge.incomingContentBackground': string;
	'merge.incomingHeaderBackground': string;
	'minimap.errorHighlight': string;
	'minimap.findMatchHighlight': string;
	'minimap.selectionHighlight': string;
	'minimap.warningHighlight': string;
	'minimapSlider.activeBackground': string;
	'minimapSlider.background': string;
	'minimapSlider.hoverBackground': string;
	'notebook.cellInsertionIndicator': string;
	'notebook.cellStatusBarItemHoverBackground': string;
	'notebook.cellToolbarSeparator': string;
	'notebook.focusedCellBorder': string;
	'notebook.focusedEditorBorder': string;
	'notebook.focusedRowBorder': string;
	'notebook.outputContainerBackgroundColor': string;
	'notebook.rowHoverBackground': string;
	'notebook.selectedCellBorder': string;
	'notebook.symbolHighlightBackground': string;
	'notebookScrollbarSlider.activeBackground': string;
	'notebookScrollbarSlider.background': string;
	'notebookScrollbarSlider.hoverBackground': string;
	'notebookStatusErrorIcon.foreground': string;
	'notebookStatusRunningIcon.foreground': string;
	'notebookStatusSuccessIcon.foreground': string;
	'notificationCenterHeader.background': string;
	'notificationLink.foreground': string;
	'notifications.background': string;
	'notifications.border': string;
	'notifications.foreground': string;
	'notificationsErrorIcon.foreground': string;
	'notificationsInfoIcon.foreground': string;
	'notificationsWarningIcon.foreground': string;
	'panel.background': string;
	'panel.border': string;
	'panel.dropBorder': string;
	'panelInput.border': string;
	'panelSection.border': string;
	'panelSection.dropBackground': string;
	'panelSectionHeader.background': string;
	'panelTitle.activeBorder': string;
	'panelTitle.activeForeground': string;
	'panelTitle.inactiveForeground': string;
	'peekView.border': string;
	'peekViewEditor.background': string;
	'peekViewEditor.matchHighlightBackground': string;
	'peekViewEditorGutter.background': string;
	'peekViewResult.background': string;
	'peekViewResult.fileForeground': string;
	'peekViewResult.lineForeground': string;
	'peekViewResult.matchHighlightBackground': string;
	'peekViewResult.selectionBackground': string;
	'peekViewResult.selectionForeground': string;
	'peekViewTitle.background': string;
	'peekViewTitleDescription.foreground': string;
	'peekViewTitleLabel.foreground': string;
	'pickerGroup.border': string;
	'pickerGroup.foreground': string;
	'problemsErrorIcon.foreground': string;
	'problemsInfoIcon.foreground': string;
	'problemsWarningIcon.foreground': string;
	'quickInput.background': string;
	'quickInput.foreground': string;
	'quickInputTitle.background': string;
	'scm.providerBorder': string;
	'scrollbar.shadow': string;
	'scrollbarSlider.activeBackground': string;
	'scrollbarSlider.background': string;
	'scrollbarSlider.hoverBackground': string;
	'searchEditor.findMatchBackground': string;
	'settings.checkboxBackground': string;
	'settings.checkboxBorder': string;
	'settings.dropdownBackground': string;
	'settings.dropdownBorder': string;
	'settings.dropdownListBorder': string;
	'settings.focusedRowBackground': string;
	'settings.headerForeground': string;
	'settings.modifiedItemIndicator': string;
	'settings.numberInputBackground': string;
	'settings.numberInputForeground': string;
	'settings.textInputBackground': string;
	'settings.textInputForeground': string;
	'sideBar.background': string;
	'sideBar.dropBackground': string;
	'statusBar.background': string;
	'statusBar.debuggingBackground': string;
	'statusBar.debuggingForeground': string;
	'statusBar.foreground': string;
	'statusBar.noFolderBackground': string;
	'statusBar.noFolderForeground': string;
	'statusBarItem.activeBackground': string;
	'statusBarItem.hoverBackground': string;
	'statusBarItem.prominentBackground': string;
	'statusBarItem.prominentForeground': string;
	'statusBarItem.prominentHoverBackground': string;
	'symbolIcon.arrayForeground': string;
	'symbolIcon.booleanForeground': string;
	'symbolIcon.classForeground': string;
	'symbolIcon.colorForeground': string;
	'symbolIcon.constantForeground': string;
	'symbolIcon.constructorForeground': string;
	'symbolIcon.enumeratorForeground': string;
	'symbolIcon.enumeratorMemberForeground': string;
	'symbolIcon.eventForeground': string;
	'symbolIcon.fieldForeground': string;
	'symbolIcon.fileForeground': string;
	'symbolIcon.folderForeground': string;
	'symbolIcon.functionForeground': string;
	'symbolIcon.interfaceForeground': string;
	'symbolIcon.keyForeground': string;
	'symbolIcon.keywordForeground': string;
	'symbolIcon.methodForeground': string;
	'symbolIcon.moduleForeground': string;
	'symbolIcon.namespaceForeground': string;
	'symbolIcon.nullForeground': string;
	'symbolIcon.numberForeground': string;
	'symbolIcon.objectForeground': string;
	'symbolIcon.operatorForeground': string;
	'symbolIcon.packageForeground': string;
	'symbolIcon.propertyForeground': string;
	'symbolIcon.referenceForeground': string;
	'symbolIcon.snippetForeground': string;
	'symbolIcon.stringForeground': string;
	'symbolIcon.structForeground': string;
	'symbolIcon.textForeground': string;
	'symbolIcon.typeParameterForeground': string;
	'symbolIcon.unitForeground': string;
	'symbolIcon.variableForeground': string;
	'tab.activeBackground': string;
	'tab.activeForeground': string;
	'tab.activeModifiedBorder': string;
	'tab.border': string;
	'tab.inactiveBackground': string;
	'tab.inactiveForeground': string;
	'tab.inactiveModifiedBorder': string;
	'tab.unfocusedActiveBackground': string;
	'tab.unfocusedActiveForeground': string;
	'tab.unfocusedActiveModifiedBorder': string;
	'tab.unfocusedInactiveBackground': string;
	'tab.unfocusedInactiveForeground': string;
	'tab.unfocusedInactiveModifiedBorder': string;
	'terminal.ansiBlack': string;
	'terminal.ansiBlue': string;
	'terminal.ansiBrightBlack': string;
	'terminal.ansiBrightBlue': string;
	'terminal.ansiBrightCyan': string;
	'terminal.ansiBrightGreen': string;
	'terminal.ansiBrightMagenta': string;
	'terminal.ansiBrightRed': string;
	'terminal.ansiBrightWhite': string;
	'terminal.ansiBrightYellow': string;
	'terminal.ansiCyan': string;
	'terminal.ansiGreen': string;
	'terminal.ansiMagenta': string;
	'terminal.ansiRed': string;
	'terminal.ansiWhite': string;
	'terminal.ansiYellow': string;
	'terminal.border': string;
	'terminal.foreground': string;
	'terminal.selectionBackground': string;
	'textBlockQuote.background': string;
	'textBlockQuote.border': string;
	'textCodeBlock.background': string;
	'textLink.activeForeground': string;
	'textLink.foreground': string;
	'textPreformat.foreground': string;
	'textSeparator.foreground': string;
	'titleBar.activeBackground': string;
	'titleBar.activeForeground': string;
	'titleBar.inactiveBackground': string;
	'titleBar.inactiveForeground': string;
	'tree.indentGuidesStroke': string;
	'widget.shadow': string;
	'activityBar.activeBackground': string;
	'activityBar.activeFocusBorder': string;
	'activityBar.border': string;
	'checkbox.foreground': string;
	'contrastActiveBorder': string;
	'contrastBorder': string;
	'debugToolBar.border': string;
	'diffEditor.border': string;
	'diffEditor.insertedTextBorder': string;
	'diffEditor.removedTextBorder': string;
	'dropdown.foreground': string;
	'dropdown.listBackground': string;
	'editor.findMatchBorder': string;
	'editor.findMatchHighlightBorder': string;
	'editor.findRangeHighlightBorder': string;
	'editor.lineHighlightBackground': string;
	'editor.rangeHighlightBorder': string;
	'editor.selectionForeground': string;
	'editor.selectionHighlightBorder': string;
	'editor.snippetFinalTabstopHighlightBackground': string;
	'editor.snippetTabstopHighlightBorder': string;
	'editor.symbolHighlightBorder': string;
	'editor.wordHighlightBorder': string;
	'editor.wordHighlightStrongBorder': string;
	'editorCursor.background': string;
	'editorError.background': string;
	'editorError.border': string;
	'editorGroup.background': string;
	'editorGroup.emptyBackground': string;
	'editorGroup.focusedEmptyBorder': string;
	'editorGroupHeader.border': string;
	'editorGroupHeader.tabsBorder': string;
	'editorHint.border': string;
	'editorInfo.background': string;
	'editorInfo.border': string;
	'editorOverviewRuler.background': string;
	'editorUnnecessaryCode.border': string;
	'editorWarning.background': string;
	'editorWarning.border': string;
	'editorWidget.resizeBorder': string;
	'input.border': string;
	'inputValidation.errorForeground': string;
	'inputValidation.infoForeground': string;
	'inputValidation.warningForeground': string;
	'list.filterMatchBorder': string;
	'list.focusForeground': string;
	'list.hoverForeground': string;
	'list.inactiveFocusBackground': string;
	'list.inactiveSelectionForeground': string;
	'menu.border': string;
	'menu.selectionBorder': string;
	'menubar.selectionBorder': string;
	'merge.border': string;
	'minimap.background': string;
	'notebook.cellHoverBackground': string;
	'notebook.focusedCellBackground': string;
	'notificationCenter.border': string;
	'notificationCenterHeader.foreground': string;
	'notificationToast.border': string;
	'panelSectionHeader.border': string;
	'panelSectionHeader.foreground': string;
	'peekViewEditor.matchHighlightBorder': string;
	'sash.hoverBorder': string;
	'searchEditor.findMatchBorder': string;
	'selection.background': string;
	'settings.checkboxForeground': string;
	'settings.dropdownForeground': string;
	'sideBar.border': string;
	'sideBar.foreground': string;
	'sideBarSectionHeader.foreground': string;
	'statusBar.border': string;
	'statusBar.debuggingBorder': string;
	'statusBar.noFolderBorder': string;
	'tab.activeBorder': string;
	'tab.activeBorderTop': string;
	'tab.hoverBackground': string;
	'tab.hoverBorder': string;
	'tab.hoverForeground': string;
	'tab.unfocusedActiveBorder': string;
	'tab.unfocusedActiveBorderTop': string;
	'tab.unfocusedHoverBackground': string;
	'tab.unfocusedHoverBorder': string;
	'tab.unfocusedHoverForeground': string;
	'terminal.background': string;
	'terminalCursor.background': string;
	'terminalCursor.foreground': string;
	'titleBar.border': string;
	'walkThrough.embeddedEditorBackground': string;
	'welcomePage.background': string;
	'welcomePage.buttonBackground': string;
	'welcomePage.buttonHoverBackground': string;
	'window.activeBorder': string;
	'window.inactiveBorder': string;
}>;

export type TokenColors = {
	name: string;
	scope: string | string[];
	settings: {
		foreground?: string;
		fontStyle?: string;
	};
}[];

export interface ExtensionConfig {
	tokenIncludeName: boolean;
	italic: boolean;
}
