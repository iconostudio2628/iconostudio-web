"""Mobile home-hero image: barber (clippers, no face) over nails (hands), graded to a warm beige duotone with a little grain.
   Sources are the studio's own photos; run:  python3 scripts/make_hero_mobile.py   → images/hero-mobile-{640,1000}.webp"""
from PIL import Image, ImageOps, ImageEnhance, ImageChops
import os
ROOT = os.path.join(os.path.dirname(__file__), '..')
W, H, GAP = 1000, 1830, 6
TOP_H = 880
CREAM = (227, 209, 179)

def duo(im, black, mid, white, gamma=1.0):
    g = ImageOps.autocontrast(ImageOps.grayscale(im), cutoff=1)
    if gamma != 1.0:
        g = g.point(lambda v: int(255 * (v / 255) ** gamma))
    g = ImageEnhance.Contrast(g).enhance(1.06)
    return ImageOps.colorize(g, black=black, white=white, mid=mid).convert('RGB')

def crop_to(im, box, size):
    return im.crop(box).resize(size, Image.LANCZOS)

barber = Image.open(os.path.join(ROOT, 'images/source/barber-original.webp')).convert('RGB')
nails = Image.open(os.path.join(ROOT, 'images/source/nails-original.webp')).convert('RGB')
bw, bh = barber.size
bx0 = int(bw * .08)
top = crop_to(barber, (bx0, 0, bw, int((bw - bx0) * TOP_H / W)), (W, TOP_H))
bot_h = H - TOP_H - GAP
nw, nh = nails.size
bot = crop_to(nails, (0, int(nh * .16), nw, int(nh * .16) + int(nw * bot_h / W)), (W, bot_h))
# barber: deep warm brown → light beige; nails: lifted shadows so the nails read clearly
top = duo(top, (30, 24, 17), (150, 128, 96), (242, 229, 205))
bot = duo(bot, (58, 46, 33), (178, 152, 114), (250, 240, 221), gamma=0.7)
canvas = Image.new('RGB', (W, H), CREAM)
canvas.paste(top, (0, 0))
canvas.paste(bot, (0, TOP_H + GAP))
# fine film grain
noise = Image.effect_noise((W, H), 22).convert('RGB')
canvas = Image.blend(canvas, ImageChops.soft_light(canvas, noise), 0.35)
out = os.path.join(ROOT, 'images')
canvas.save(os.path.join(out, 'hero-mobile-1000.webp'), quality=84, method=6)
canvas.resize((640, round(640 * H / W)), Image.LANCZOS).save(os.path.join(out, 'hero-mobile-640.webp'), quality=84, method=6)
print('Wrote images/hero-mobile-{640,1000}.webp')
