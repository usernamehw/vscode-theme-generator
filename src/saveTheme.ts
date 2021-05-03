import path from 'path';
import vscode from 'vscode';
import { Theme } from './types';

export async function exportAsJson(theme: Theme) {
	const themeJson = {
		name: '',
		type: 'dark',
		colors: theme.workbenchColors,
		tokenColors: theme.tokenColors,
	};
	const newFile = vscode.Uri.parse(`untitled:${path.join(vscode.workspace.workspaceFolders?.[0].uri.fsPath || '', 'theme.color-theme.json')}`);
	const document = await vscode.workspace.openTextDocument(newFile);
	const edit = new vscode.WorkspaceEdit();
	edit.insert(newFile, new vscode.Position(0, 0), JSON.stringify(themeJson, null, '    '));
	const success = await vscode.workspace.applyEdit(edit);
	if (success) {
		vscode.window.showTextDocument(document);
	} else {
		vscode.window.showErrorMessage('Error: `applyEdit` failed.');
	}
}
