import * as chromatism from 'chromatism';

export function shade(n: number, color: chromatism.ColourModes.Any): string {
	const tryIt = chromatism.shade(n, color);
	if (tryIt.hex === '#NaNNaNNaN') {
		return color as string;
	}
	return tryIt.hex;
}
export function brightness(n: number, color: chromatism.ColourModes.Any): string {
	const tryIt = chromatism.brightness(n, color);
	if (tryIt.hex === '#NaNNaNNaN') {
		return color as string;
	}
	return tryIt.hex;
}
export function contrastColor(color: chromatism.ColourModes.Any): string {
	return chromatism.contrastRatio(color).hex;
}
