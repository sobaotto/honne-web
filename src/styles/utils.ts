/**
 * Convert px to rem (assuming 1rem = 16px, <html>'s font-size = 100%)
 */
export const px2rem = (v: number) => `${v / 16}rem`;
