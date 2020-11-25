import path from 'path';
import vscode from 'vscode';
import { Theme } from './types';

export function exportAsJson(theme: Theme) {
	const themeJson = {
		name: '',
		type: 'dark',
		colors: theme.workbenchColors,
		tokenColors: theme.tokenColors,
	};
	const newFile = vscode.Uri.parse(`untitled:${path.join(vscode.workspace.workspaceFolders![0].uri.fsPath || '', 'theme.color-theme.json')}`);
	vscode.workspace.openTextDocument(newFile).then(document => {
		const edit = new vscode.WorkspaceEdit();
		edit.insert(newFile, new vscode.Position(0, 0), JSON.stringify(themeJson, null, '    '));
		return vscode.workspace.applyEdit(edit).then(success => {
			if (success) {
				vscode.window.showTextDocument(document);
			} else {
				vscode.window.showInformationMessage('Error!');
			}
		});
	});
}
