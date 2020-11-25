import debounce from 'lodash/debounce';
import shuffle from 'lodash/shuffle';
import { Theme, VscodeWebviewApi, WebviewMessageToWebview, WebviewSavedState } from '../src/types';
import { generateTheme } from './generateTheme';

/** @ts-ignore */
// eslint-disable-next-line no-undef
const vscodeApi: VscodeWebviewApi = acquireVsCodeApi();

const $backgroundEl = document.getElementById('backgroundInit') as HTMLInputElement;
const $foregroundEl = document.getElementById('foregroundInit') as HTMLInputElement;
const $color1El = document.getElementById('color1Init') as HTMLInputElement;
const $color1TextEl = document.getElementById('color1InitText') as HTMLInputElement;
const $color2El = document.getElementById('color2Init') as HTMLInputElement;
const $color2TextEl = document.getElementById('color2InitText') as HTMLInputElement;
const $color3El = document.getElementById('color3Init') as HTMLInputElement;
const $color3TextEl = document.getElementById('color3InitText') as HTMLInputElement;
const $color4El = document.getElementById('color4Init') as HTMLInputElement;
const $color4TextEl = document.getElementById('color4InitText') as HTMLInputElement;
const $color5El = document.getElementById('color5Init') as HTMLInputElement;
const $color5TextEl = document.getElementById('color5InitText') as HTMLInputElement;
const $color6El = document.getElementById('color6Init') as HTMLInputElement;
const $color6TextEl = document.getElementById('color6InitText') as HTMLInputElement;
const $color7El = document.getElementById('color7Init') as HTMLInputElement;
const $color7TextEl = document.getElementById('color7InitText') as HTMLInputElement;
const $resetEl = document.getElementById('reset') as HTMLButtonElement;
const $exportEl = document.getElementById('export') as HTMLButtonElement;
const $resetCustomizationsEl = document.getElementById('resetCustomizations') as HTMLButtonElement;
const $shuffleColorsEl = document.getElementById('shuffleColors') as HTMLInputElement;

let currentGeneratedTheme: Theme;

const saveState = debounce(() => {
	vscodeApi.postMessage({
		type: 'saveState',
		value: state,
	});
}, 500);
const defaultState: WebviewSavedState = Object.freeze({
	fg: '#D9D9D9',
	bg: '#333333',
	c1: '#399EE6',
	c2: '#F07171',
	c3: '#78BD65',
	c4: '#EF7C2A',
	c5: '#FFCE6B',
	c6: '#B56BFF',
	c7: '#EB3D54',
	shouldShuffle: true,
});
// @ts-ignore
let state: WebviewSavedState = {};

$backgroundEl.addEventListener('input', e => {
	state.bg = (e.target as HTMLInputElement).value;
	saveState();
});
$foregroundEl.addEventListener('input', e => {
	state.fg = (e.target as HTMLInputElement).value;
	saveState();
});

$color1El.addEventListener('input', e => {
	state.c1 = $color1El.value;
	$color1TextEl.value = $color1El.value;
	saveState();
});
$color2El.addEventListener('input', e => {
	state.c2 = $color2El.value;
	$color2TextEl.value = $color2El.value;
	saveState();
});
$color3El.addEventListener('input', e => {
	state.c3 = $color3El.value;
	$color3TextEl.value = $color3El.value;
	saveState();
});
$color4El.addEventListener('input', e => {
	state.c4 = $color4El.value;
	$color4TextEl.value = $color4El.value;
	saveState();
});
$color5El.addEventListener('input', e => {
	state.c5 = $color5El.value;
	$color5TextEl.value = $color5El.value;
	saveState();
});
$color6El.addEventListener('input', e => {
	state.c6 = $color6El.value;
	$color6TextEl.value = $color6El.value;
	saveState();
});
$color7El.addEventListener('input', e => {
	state.c7 = $color7El.value;
	$color7TextEl.value = $color7El.value;
	saveState();
});
$color1TextEl.addEventListener('input', e => {
	state.c1 = $color1TextEl.value;
	$color1El.value = $color1TextEl.value;
	saveState();
});
$color2TextEl.addEventListener('input', e => {
	state.c2 = $color2TextEl.value;
	$color2El.value = $color2TextEl.value;
	saveState();
});
$color3TextEl.addEventListener('input', e => {
	state.c3 = $color3TextEl.value;
	$color3El.value = $color3TextEl.value;
	saveState();
});
$color4TextEl.addEventListener('input', e => {
	state.c4 = $color4TextEl.value;
	$color4El.value = $color4TextEl.value;
	saveState();
});
$color5TextEl.addEventListener('input', e => {
	state.c5 = $color5TextEl.value;
	$color5El.value = $color5TextEl.value;
	saveState();
});
$color6TextEl.addEventListener('input', e => {
	state.c6 = $color6TextEl.value;
	$color6El.value = $color6TextEl.value;
	saveState();
});
$color7TextEl.addEventListener('input', e => {
	state.c7 = $color7TextEl.value;
	$color7El.value = $color7TextEl.value;
	saveState();
});


$shuffleColorsEl.addEventListener('change', e => {
	state.shouldShuffle = (e.target as HTMLInputElement).checked;
	saveState();
});
$exportEl.addEventListener('click', e => {
	vscodeApi.postMessage({
		type: 'exportAsJson',
		value: currentGeneratedTheme,
	});
});

document.getElementById('generate').addEventListener('click', () => {
	if (state.shouldShuffle) {
		const colors = [state.c1, state.c2, state.c3, state.c4, state.c5, state.c6, state.c7];
		const shuffledColors = shuffle(colors);
		const indexes = [
			shuffledColors.indexOf(state.c1),
			shuffledColors.indexOf(state.c2),
			shuffledColors.indexOf(state.c3),
			shuffledColors.indexOf(state.c4),
			shuffledColors.indexOf(state.c5),
			shuffledColors.indexOf(state.c6),
			shuffledColors.indexOf(state.c7),
		].sort((a, b) => a - b);
		state.c1 = shuffledColors[indexes[0]];
		state.c2 = shuffledColors[indexes[1]];
		state.c3 = shuffledColors[indexes[2]];
		state.c4 = shuffledColors[indexes[3]];
		state.c5 = shuffledColors[indexes[4]];
		state.c6 = shuffledColors[indexes[5]];
		state.c7 = shuffledColors[indexes[6]];
		updateAllElements();
	}
	currentGeneratedTheme = generateTheme({
		bg: $backgroundEl.value,
		fg: $foregroundEl.value,
		c1: $color1El.value,
		c2: $color2El.value,
		c3: $color3El.value,
		c4: $color4El.value,
		c5: $color5El.value,
		c6: $color6El.value,
		c7: $color7El.value,
	});
	vscodeApi.postMessage({
		type: 'generateTheme',
		value: currentGeneratedTheme,
	});
});

export function showNotification(text: string) {
	vscodeApi.postMessage({
		type: 'showNotification',
		value: text,
	});
}

$resetEl.addEventListener('click', () => {
	state = { ...defaultState };
	saveState();
	updateAllElements();
});
$resetCustomizationsEl.addEventListener('click', () => {
	vscodeApi.postMessage({
		type: 'resetCustomizations',
	});
});

function updateAllElements() {
	$backgroundEl.value = state.bg;
	$foregroundEl.value = state.fg;
	$color1El.value = state.c1;
	$color1TextEl.value = state.c1;
	$color2TextEl.value = state.c2;
	$color3TextEl.value = state.c3;
	$color4TextEl.value = state.c4;
	$color5TextEl.value = state.c5;
	$color6TextEl.value = state.c6;
	$color7TextEl.value = state.c7;
	$color2El.value = state.c2;
	$color3El.value = state.c3;
	$color4El.value = state.c4;
	$color5El.value = state.c5;
	$color6El.value = state.c6;
	$color7El.value = state.c7;
	$shuffleColorsEl.checked = state.shouldShuffle;
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
	}
});

window.onerror = function(message, source, lineno, colno, error) {
	vscodeApi.postMessage({
		type: 'showNotification',
		value: `[WEBVIEW] ${message}`,
	});
};
