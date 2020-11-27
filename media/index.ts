import debounce from 'lodash/debounce';
import shuffle from 'lodash/shuffle';
import { Theme, VscodeWebviewApi, WebviewMessageToWebview, WebviewSavedState } from '../src/types';
import { generateTheme } from './generateTheme';

/** @ts-ignore */
// eslint-disable-next-line no-undef
const vscodeApi: VscodeWebviewApi = acquireVsCodeApi();

const $background = document.getElementById('backgroundInit') as HTMLInputElement;
const $foreground = document.getElementById('foregroundInit') as HTMLInputElement;
const $color1 = document.getElementById('color1Init') as HTMLInputElement;
const $color1Text = document.getElementById('color1InitText') as HTMLInputElement;
const $color2 = document.getElementById('color2Init') as HTMLInputElement;
const $color2Text = document.getElementById('color2InitText') as HTMLInputElement;
const $color3 = document.getElementById('color3Init') as HTMLInputElement;
const $color3Text = document.getElementById('color3InitText') as HTMLInputElement;
const $color4 = document.getElementById('color4Init') as HTMLInputElement;
const $color4Text = document.getElementById('color4InitText') as HTMLInputElement;
const $color5 = document.getElementById('color5Init') as HTMLInputElement;
const $color5Text = document.getElementById('color5InitText') as HTMLInputElement;
const $color6 = document.getElementById('color6Init') as HTMLInputElement;
const $color6Text = document.getElementById('color6InitText') as HTMLInputElement;
const $color7 = document.getElementById('color7Init') as HTMLInputElement;
const $color7Text = document.getElementById('color7InitText') as HTMLInputElement;
const $reset = document.getElementById('reset') as HTMLButtonElement;
const $export = document.getElementById('export') as HTMLButtonElement;
const $resetCustomizations = document.getElementById('resetCustomizations') as HTMLButtonElement;
const $shuffleColors = document.getElementById('shuffleColors') as HTMLInputElement;
const $green = document.getElementById('green') as HTMLInputElement;
const $greenText = document.getElementById('greenText') as HTMLInputElement;
const $red = document.getElementById('red') as HTMLInputElement;
const $redText = document.getElementById('redText') as HTMLInputElement;

let currentGeneratedTheme: Theme;

const saveState = debounce(() => {
	vscodeApi.postMessage({
		type: 'saveState',
		value: state,
	});
}, 500);
const defaultState: WebviewSavedState = Object.freeze({
	fg: '#D9D9D9',
	bg: '#2e2e2e',
	c1: '#399EE6',
	c2: '#F07171',
	c3: '#78BD65',
	c4: '#EF7C2A',
	c5: '#FFCE6B',
	c6: '#4cbf99',
	c7: '#a470d8',
	green: '#78BD65',
	red: '#F07171',
	shouldShuffle: true,
});
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

$red.addEventListener('input', e => {
	state.red = $red.value;
	$redText.value = $red.value;
	saveState();
});
$green.addEventListener('input', e => {
	state.green = $green.value;
	$greenText.value = $green.value;
	saveState();
});

$redText.addEventListener('input', e => {
	state.red = $redText.value;
	$red.value = $redText.value;
	saveState();
});
$greenText.addEventListener('input', e => {
	state.green = $greenText.value;
	$green.value = $greenText.value;
	saveState();
});

$shuffleColors.addEventListener('change', e => {
	state.shouldShuffle = (e.target as HTMLInputElement).checked;
	saveState();
});
$export.addEventListener('click', e => {
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
		bg: $background.value,
		fg: $foreground.value,
		c1: $color1.value,
		c2: $color2.value,
		c3: $color3.value,
		c4: $color4.value,
		c5: $color5.value,
		c6: $color6.value,
		c7: $color7.value,
		green: $green.value,
		red: $red.value,
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

	$green.value = state.green;
	$red.value = state.red;
	$greenText.value = state.green;
	$redText.value = state.red;

	$shuffleColors.checked = state.shouldShuffle;
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
