import debounce from 'lodash/debounce';
import { VscodeWebviewApi, WebviewMessageToWebview, WebviewSavedState } from '../src/types';
import { generateTheme } from './generateTheme';

/** @ts-ignore */
// eslint-disable-next-line no-undef
const vscodeApi: VscodeWebviewApi = acquireVsCodeApi();

const $backgroundEl = document.getElementById('backgroundInit') as HTMLInputElement;
const $foregroundEl = document.getElementById('foregroundInit') as HTMLInputElement;
const $color1El = document.getElementById('color1Init') as HTMLInputElement;
const $color2El = document.getElementById('color2Init') as HTMLInputElement;
const $color3El = document.getElementById('color3Init') as HTMLInputElement;
const $color4El = document.getElementById('color4Init') as HTMLInputElement;
const $color5El = document.getElementById('color5Init') as HTMLInputElement;
const $resetEl = document.getElementById('reset') as HTMLButtonElement;

const saveState = debounce(() => {
	vscodeApi.postMessage({
		type: 'saveState',
		value: state,
	});
}, 500);

let state: WebviewSavedState;

$backgroundEl.addEventListener('input', e => {
	state.bg = (e.target as HTMLInputElement).value;
	saveState();
});
$foregroundEl.addEventListener('input', e => {
	state.fg = (e.target as HTMLInputElement).value;
	saveState();
});
$color1El.addEventListener('input', e => {
	state.c1 = (e.target as HTMLInputElement).value;
	saveState();
});
$color2El.addEventListener('input', e => {
	state.c2 = (e.target as HTMLInputElement).value;
	saveState();
});
$color3El.addEventListener('input', e => {
	state.c3 = (e.target as HTMLInputElement).value;
	saveState();
});
$color4El.addEventListener('input', e => {
	state.c4 = (e.target as HTMLInputElement).value;
	saveState();
});
$color5El.addEventListener('input', e => {
	state.c5 = (e.target as HTMLInputElement).value;
	saveState();
});

document.getElementById('generate').addEventListener('click', () => {
	vscodeApi.postMessage({
		type: 'generateTheme',
		value: generateTheme({
			bg: $backgroundEl.value,
			fg: $foregroundEl.value,
			color1: $color1El.value,
			color2: $color2El.value,
			color3: $color3El.value,
			color4: $color4El.value,
			color5: $color5El.value,
		}),
	});
});

export function showNotification(text: string) {
	vscodeApi.postMessage({
		type: 'showNotification',
		value: text,
	});
}

window.onerror = function(message, source, lineno, colno, error) {
	vscodeApi.postMessage({
		type: 'showNotification',
		value: `[WEBVIEW] ${message}`,
	});
};

$resetEl.addEventListener('click', () => {
	state = defaultState;
	saveState();
	updateColorElements();
});

function updateColorElements() {
	$backgroundEl.value = state.bg;
	$foregroundEl.value = state.fg;
	$color1El.value = state.c1;
	$color2El.value = state.c2;
	$color3El.value = state.c3;
	$color4El.value = state.c4;
	$color5El.value = state.c5;
}

window.addEventListener('message', event => {
	const message: WebviewMessageToWebview = event.data; // The json data that the extension sent
	switch (message.type) {
		case 'restoreState': {
			if (!message.value) {
				break;
			}
			state = message.value;
			updateColorElements();
			break;
		}
	}
});

const defaultState = {
	fg: '#e6e6e6',
	bg: '#333333',
	c1: '#399ee6',
	c2: '#f07171',
	c3: '#EF7C2A',
	c4: '#78BD65',
	c5: '#FFCE6B',
};
