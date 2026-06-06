Hero bakery image
=================

The homepage hero (src/components/HeroDessert.tsx) loads its floating / falling
bakery composition from this folder. The current file is a background-removed
(transparent) PNG:

    floating-desserts.png

That path is set as SRC in HeroDessert.tsx (/assets/hero/floating-desserts.png).

To swap in a different image, either drop a transparent PNG here and update SRC
to its filename, or replace this file in place using the same name. Use a
transparent PNG (no background box) so the desserts read as floating, not a
photo in a card.

Until a valid image loads, the hero shows a small "Bakery photo" placeholder
instead of a broken image.
