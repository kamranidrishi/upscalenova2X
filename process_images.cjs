const sharp = require('sharp');
const fs = require('fs');

async function processNfc() {
  const { data, info } = await sharp('temp_nfc.jpg').raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  
  // We want to replace background gray with pure white or transparent.
  // Let's analyze pixels. The background has R=G=B around 215-235.
  // The cards have pure white #FFFFFF (255) inside.
  // Near the card edges, there's shadow where gray gets darker (e.g. 180-210) or white card borders.
  // If we map background (which is neutral gray ~210-235) to pure white (255,255,255):
  // Let's create an RGBA output buffer.
  const out = Buffer.alloc(width * height * 4);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const outIdx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      out[outIdx] = r;
      out[outIdx + 1] = g;
      out[outIdx + 2] = b;
      out[outIdx + 3] = 255;
    }
  }
}
