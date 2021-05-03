import debounce from 'lodash/debounce';
import { ExtensionConfig, Theme, VscodeWebviewApi, WebviewMessageToWebview, WebviewSavedState } from '../src/types';
import { generateTheme, shuffleMainColors } from './generateTheme';

const $mainColorsContainer = document.getElementById('mainColorsContainer');
createMainColorsHtml();

const allTd = document.querySelectorAll('td');
for (const td of Array.from(allTd)) {
	td.innerHTML = `<div>${td.innerHTML}</div>`;
}

/** @ts-ignore */
// eslint-disable-next-line no-undef
const vscodeApi: VscodeWebviewApi = acquireVsCodeApi();

const $background = document.getElementById('backgroundInit') as HTMLInputElement;
const $foreground = document.getElementById('foregroundInit') as HTMLInputElement;
const $color1 = document.getElementById('c1') as HTMLInputElement;
const $color1Text = document.getElementById('c1Text') as HTMLInputElement;
const $color2 = document.getElementById('c2') as HTMLInputElement;
const $color2Text = document.getElementById('c2Text') as HTMLInputElement;
const $color3 = document.getElementById('c3') as HTMLInputElement;
const $color3Text = document.getElementById('c3Text') as HTMLInputElement;
const $color4 = document.getElementById('c4') as HTMLInputElement;
const $color4Text = document.getElementById('c4Text') as HTMLInputElement;
const $color5 = document.getElementById('c5') as HTMLInputElement;
const $color5Text = document.getElementById('c5Text') as HTMLInputElement;
const $color6 = document.getElementById('c6') as HTMLInputElement;
const $color6Text = document.getElementById('c6Text') as HTMLInputElement;
const $color7 = document.getElementById('c7') as HTMLInputElement;
const $color7Text = document.getElementById('c7Text') as HTMLInputElement;

const $c1Lock = document.getElementById('c1Lock') as HTMLInputElement;
const $c2Lock = document.getElementById('c2Lock') as HTMLInputElement;
const $c3Lock = document.getElementById('c3Lock') as HTMLInputElement;
const $c4Lock = document.getElementById('c4Lock') as HTMLInputElement;
const $c5Lock = document.getElementById('c5Lock') as HTMLInputElement;
const $c6Lock = document.getElementById('c6Lock') as HTMLInputElement;
const $c7Lock = document.getElementById('c7Lock') as HTMLInputElement;

const $reset = document.getElementById('reset') as HTMLButtonElement;
const $export = document.getElementById('export') as HTMLButtonElement;
const $resetCustomizations = document.getElementById('resetCustomizations') as HTMLButtonElement;
const $shuffleColors = document.getElementById('shuffleColors') as HTMLInputElement;

const $inserted = document.getElementById('inserted') as HTMLInputElement;
const $insertedText = document.getElementById('insertedText') as HTMLInputElement;
const $modified = document.getElementById('modified') as HTMLInputElement;
const $modifiedText = document.getElementById('modifiedText') as HTMLInputElement;
const $deleted = document.getElementById('deleted') as HTMLInputElement;
const $deletedText = document.getElementById('deletedText') as HTMLInputElement;

const $error = document.getElementById('error') as HTMLInputElement;
const $errorText = document.getElementById('errorText') as HTMLInputElement;
const $warning = document.getElementById('warning') as HTMLInputElement;
const $warningText = document.getElementById('warningText') as HTMLInputElement;
const $info = document.getElementById('info') as HTMLInputElement;
const $infoText = document.getElementById('infoText') as HTMLInputElement;


const $focus = document.getElementById('focus') as HTMLInputElement;
const $focusText = document.getElementById('focusText') as HTMLInputElement;

let currentGeneratedTheme: Theme;

const saveState = debounce(() => {
	vscodeApi.postMessage({
		type: 'saveState',
		value: state,
	});
}, 500);
const defaultState: WebviewSavedState = {
	fg: '#E6E6E6',
	bg: '#2E2E2E',

	c1: '#399EE6',
	c2: '#F07171',
	c3: '#78BD65',
	c4: '#FFCE6B',
	c5: '#FA8D3E',
	c6: '#C8B6FF',
	c7: '#7DBFEF',

	c1Lock: false,
	c2Lock: false,
	c3Lock: false,
	c4Lock: false,
	c5Lock: false,
	c6Lock: false,
	c7Lock: false,

	inserted: '#78BD65',
	modified: '#399EE6',
	deleted: '#F07171',

	error: '#F07171',
	warning: '#EF7C2A',
	info: '#399EE6',

	focus: 'random',

	shouldShuffle: true,
};
export let config: ExtensionConfig = {
	tokenIncludeName: false,
	italic: false,
};
// @ts-ignore
let state: WebviewSavedState = {};

$background.addEventListener('input', e => {
	state.bg = (e.target as HTMLInputElement).value;
	saveState();
});
$foreground.addEventListener('input', e => {
	state.fg = (e.target as HTMLInputElement).value;
	saveState();
});

$color1.addEventListener('input', e => {
	state.c1 = $color1.value;
	$color1Text.value = $color1.value;
	saveState();
});
$color2.addEventListener('input', e => {
	state.c2 = $color2.value;
	$color2Text.value = $color2.value;
	saveState();
});
$color3.addEventListener('input', e => {
	state.c3 = $color3.value;
	$color3Text.value = $color3.value;
	saveState();
});
$color4.addEventListener('input', e => {
	state.c4 = $color4.value;
	$color4Text.value = $color4.value;
	saveState();
});
$color5.addEventListener('input', e => {
	state.c5 = $color5.value;
	$color5Text.value = $color5.value;
	saveState();
});
$color6.addEventListener('input', e => {
	state.c6 = $color6.value;
	$color6Text.value = $color6.value;
	saveState();
});
$color7.addEventListener('input', e => {
	state.c7 = $color7.value;
	$color7Text.value = $color7.value;
	saveState();
});
$color1Text.addEventListener('input', e => {
	state.c1 = $color1Text.value;
	$color1.value = $color1Text.value;
	saveState();
});
$color2Text.addEventListener('input', e => {
	state.c2 = $color2Text.value;
	$color2.value = $color2Text.value;
	saveState();
});
$color3Text.addEventListener('input', e => {
	state.c3 = $color3Text.value;
	$color3.value = $color3Text.value;
	saveState();
});
$color4Text.addEventListener('input', e => {
	state.c4 = $color4Text.value;
	$color4.value = $color4Text.value;
	saveState();
});
$color5Text.addEventListener('input', e => {
	state.c5 = $color5Text.value;
	$color5.value = $color5Text.value;
	saveState();
});
$color6Text.addEventListener('input', e => {
	state.c6 = $color6Text.value;
	$color6.value = $color6Text.value;
	saveState();
});
$color7Text.addEventListener('input', e => {
	state.c7 = $color7Text.value;
	$color7.value = $color7Text.value;
	saveState();
});

$modified.addEventListener('input', e => {
	state.modified = $modified.value;
	$modifiedText.value = $modified.value;
	saveState();
});
$inserted.addEventListener('input', e => {
	state.inserted = $inserted.value;
	$insertedText.value = $inserted.value;
	saveState();
});
$deleted.addEventListener('input', e => {
	state.deleted = $deleted.value;
	$deletedText.value = $deleted.value;
	saveState();
});

$modifiedText.addEventListener('input', e => {
	state.modified = $modifiedText.value;
	$modified.value = $modifiedText.value;
	saveState();
});
$insertedText.addEventListener('input', e => {
	state.inserted = $insertedText.value;
	$inserted.value = $insertedText.value;
	saveState();
});
$deletedText.addEventListener('input', e => {
	state.deleted = $deletedText.value;
	$deleted.value = $deletedText.value;
	saveState();
});

$error.addEventListener('input', e => {
	state.error = $error.value;
	$errorText.value = $error.value;
	saveState();
});
$warning.addEventListener('input', e => {
	state.warning = $warning.value;
	$warningText.value = $warning.value;
	saveState();
});
$info.addEventListener('input', e => {
	state.info = $info.value;
	$infoText.value = $info.value;
	saveState();
});

$errorText.addEventListener('input', e => {
	state.error = $errorText.value;
	$error.value = $errorText.value;
	saveState();
});
$warningText.addEventListener('input', e => {
	state.warning = $warningText.value;
	$warning.value = $warningText.value;
	saveState();
});
$infoText.addEventListener('input', e => {
	state.info = $infoText.value;
	$info.value = $infoText.value;
	saveState();
});

$focus.addEventListener('input', e => {
	state.c1 = $focus.value;
	$focusText.value = $focus.value;
	saveState();
});
$focusText.addEventListener('input', e => {
	state.focus = $focusText.value;
	$focus.value = $focusText.value;
	saveState();
});

$c1Lock.addEventListener('change', e => {
	state.c1Lock = (e.target as HTMLInputElement).checked;
	saveState();
});
$c2Lock.addEventListener('change', e => {
	state.c2Lock = (e.target as HTMLInputElement).checked;
	saveState();
});
$c3Lock.addEventListener('change', e => {
	state.c3Lock = (e.target as HTMLInputElement).checked;
	saveState();
});
$c4Lock.addEventListener('change', e => {
	state.c4Lock = (e.target as HTMLInputElement).checked;
	saveState();
});
$c5Lock.addEventListener('change', e => {
	state.c5Lock = (e.target as HTMLInputElement).checked;
	saveState();
});
$c6Lock.addEventListener('change', e => {
	state.c6Lock = (e.target as HTMLInputElement).checked;
	saveState();
});
$c7Lock.addEventListener('change', e => {
	state.c7Lock = (e.target as HTMLInputElement).checked;
	saveState();
});

// ──────────────────────────────────────────────────────────────────────
$shuffleColors.addEventListener('change', e => {
	state.shouldShuffle = (e.target as HTMLInputElement).checked;
	saveState();
});
$export.addEventListener('click', e => {
	if (!currentGeneratedTheme) {
		currentGeneratedTheme = generateTheme(state, config);
	}
	vscodeApi.postMessage({
		type: 'exportAsJson',
		value: currentGeneratedTheme,
	});
});

document.getElementById('generate').addEventListener('click', () => {
	if (state.shouldShuffle) {
		const shuffled = shuffleMainColors(state);
		state.c1 = shuffled[0];
		state.c2 = shuffled[1];
		state.c3 = shuffled[2];
		state.c4 = shuffled[3];
		state.c5 = shuffled[4];
		state.c6 = shuffled[5];
		state.c7 = shuffled[6];
		updateAllElements();
	}
	currentGeneratedTheme = generateTheme(state, config);
	vscodeApi.postMessage({
		type: 'generateTheme',
		value: currentGeneratedTheme,
	});
});

export function showNotification(text: string) {
	vscodeApi.postMessage({
		type: 'showNotification',
		value: String(text),
	});
}

$reset.addEventListener('click', () => {
	state = { ...defaultState };
	saveState();
	updateAllElements();
});
$resetCustomizations.addEventListener('click', () => {
	vscodeApi.postMessage({
		type: 'resetCustomizations',
	});
});

function updateAllElements() {
	$background.value = state.bg;
	$foreground.value = state.fg;

	$color1Text.value = state.c1;
	$color2Text.value = state.c2;
	$color3Text.value = state.c3;
	$color4Text.value = state.c4;
	$color5Text.value = state.c5;
	$color6Text.value = state.c6;
	$color7Text.value = state.c7;

	$color1.value = state.c1;
	$color2.value = state.c2;
	$color3.value = state.c3;
	$color4.value = state.c4;
	$color5.value = state.c5;
	$color6.value = state.c6;
	$color7.value = state.c7;

	$inserted.value = state.inserted;
	$modified.value = state.modified;
	$deleted.value = state.deleted;
	$insertedText.value = state.inserted;
	$modifiedText.value = state.modified;
	$deletedText.value = state.deleted;

	$error.value = state.error;
	$warning.value = state.warning;
	$info.value = state.info;
	$errorText.value = state.error;
	$warningText.value = state.warning;
	$infoText.value = state.info;

	$focus.value = state.focus;
	$focusText.value = state.focus;

	$shuffleColors.checked = state.shouldShuffle;

	$c1Lock.checked = state.c1Lock;
	$c2Lock.checked = state.c2Lock;
	$c3Lock.checked = state.c3Lock;
	$c4Lock.checked = state.c4Lock;
	$c5Lock.checked = state.c5Lock;
	$c6Lock.checked = state.c6Lock;
	$c7Lock.checked = state.c7Lock;
}

function createMainColorsHtml() {
	const tdDescriptions = {
		1: 'string',
		2: 'keyword <code>=</code>',
		3: 'keyword.control <code>import</code>',
		4: 'function name',
		5: 'function parameter',
		6: '-',
		7: 'types',
	};
	for (let i = 1; i < 8; i++) {
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		const colorInput = document.createElement('input');
		colorInput.type = 'color';
		colorInput.id = `c${i}`;
		const textInput = document.createElement('input');
		textInput.type = 'text';
		textInput.id = `c${i}Text`;
		const label = document.createElement('label');
		label.classList.add('lock-container');
		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = `c${i}Lock`;
		const span = document.createElement('span');
		span.classList.add('lock');
		const innerSpan = document.createElement('span');
		innerSpan.innerHTML = '🔒&#xFE0E;';

		span.appendChild(innerSpan);

		label.appendChild(checkbox);
		label.appendChild(span);

		td1.appendChild(colorInput);
		td1.appendChild(textInput);
		td1.appendChild(label);

		const td2 = document.createElement('td');
		td2.innerHTML = tdDescriptions[i];

		tr.appendChild(td1);
		tr.appendChild(td2);

		$mainColorsContainer.appendChild(tr);
	}
}

window.addEventListener('message', event => {
	const message: WebviewMessageToWebview = event.data; // The json data that the extension sent
	switch (message.type) {
		case 'restoreState': {
			state = {
				...defaultState,
				...message.value,
			};
			updateAllElements();
			break;
		}
		case 'updateConfig': {
			config = message.value;
		}
	}
});

window.onerror = function(message) {
	vscodeApi.postMessage({
		type: 'showNotification',
		value: `[WEBVIEW] ${message}`,
	});
};
