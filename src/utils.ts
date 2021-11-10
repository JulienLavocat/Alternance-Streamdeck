import { createCanvas } from 'canvas';

const ICON_SIZE = 144;

const COLORS: Record<string, string> = {
  Entreprise: '#1660e0',
  Formation: '#c40c4c',
  Ferie: '#0cc456',
  empty: '#000000',
};

export function getIcon(activity: string | undefined) {
  console.log(activity);
  if (!activity) activity = 'empty';
  return generateSolidColorIcon(COLORS[activity]);
}

export function generateSolidColorIcon(color: string) {
  const canvas = document.createElement('canvas');
  canvas.width = ICON_SIZE;
  canvas.height = ICON_SIZE;

  const ctx = canvas.getContext('2d');
  if (ctx === null) {
    throw new Error('could not create 2d context in canvas');
  }
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, ICON_SIZE, ICON_SIZE);

  return canvas.toDataURL('image/png');
}
