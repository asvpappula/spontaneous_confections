Menu category images
=====================

The Menu page (src/components/MenuCategorySection.tsx) shows a side image for
each category. Transparent PNGs look best (no background box) because they sit
on a soft pastel medallion.

Each category's image path is set in src/data/menu.ts (the `image` field).

Present today:
    golden-mousse.png        -> Entremets & Seasonal Desserts
    (Signature Sweets reuses /assets/hero/floating-desserts.png)

Drop these in to replace the placeholder medallions (filenames must match
src/data/menu.ts exactly):
    dubai-bars.png           -> Dubai Chocolate Bars
    tarts.png                -> Tarts & Tartlets
    viennoiserie.png         -> Viennoiserie & Pastries
    cookies.png              -> Cookies & Small Treats
    custom-cakes.png         -> Custom Orders & Catering

Until a file exists, the Menu page renders a soft accent medallion with a small
sparkle in its place, so nothing looks broken. To point a category at a
different filename, edit its `image.src` in src/data/menu.ts.
