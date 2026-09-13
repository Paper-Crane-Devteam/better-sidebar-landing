# Landing refresh assets

Generated with the built-in image_gen tool, 2026-09-13.

## Prompt

Create a premium website product screenshot backdrop, landscape 3:2 ratio. ONLY background, no interface, no screenshots, no text, no letters, no logos. Elegant tactile editorial art direction: warm ivory paper with sculptural folded paper ribbons along the far left and bottom-right edges. Restrained periwinkle blue, lavender and a very small pale mint fold. Broad quiet pale ivory center (central 80 percent) left completely empty for a real software screenshot to be overlaid in code. Soft daylight, realistic fine paper texture, crisp folds and subtle physical shadows. Contemporary software brand, sophisticated rather than childish. No grain noise overlay, no glowing orbs, no busy patterns. Design as a reusable composition background for Better Sidebar product showcase.

## Files and integration

- `folded-paper-source.png`: generated source; never includes product UI.
- `../docs/public/images/showcase/folded-paper.webp`: 1200px background, quality 82.
- `../theme/components/ProductShot.tsx`: real screenshot composition, 4:3 shared stage, preserves aspect ratios, links to full-size images.
- `../docs/public/plugin-icon.png`: original extension public/icons/icon128.png, unchanged.

The original product screenshots are preserved. The backdrop is reused rather than baking a copy into each screenshot, reducing downloads and retaining legible UI pixels. No new dependencies.
