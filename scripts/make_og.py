#!/usr/bin/env python3
"""Share preview image (images/og-image.png, 1200×630): beige background, organic blobs, real shop-front photo, logo.
Run:  python3 scripts/make_og.py      (needs Pillow)"""
import math, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
W, H, S = 1200, 630, 3                       # S = supersampling for smooth edges
BEIGE, DEEP, SOFT, INK = (227, 209, 179), (211, 188, 148), (236, 223, 198), (21, 19, 15)

def blob(size, seed, wob=(0.07, 0.05, 0.035)):
    """Organic closed shape as an 'L' mask of `size` (w, h) pixels."""
    w, h = size
    m = Image.new('L', (w * S, h * S), 0)
    pts = []
    for i in range(240):
        t = 2 * math.pi * i / 240
        r = 1 + wob[0] * math.cos(2 * t + seed) + wob[1] * math.cos(3 * t + seed * 1.7) + wob[2] * math.cos(5 * t + seed * 0.6)
        pts.append((w * S / 2 * (1 + 0.94 * r * math.cos(t) / 1.15), h * S / 2 * (1 + 0.94 * r * math.sin(t) / 1.15)))
    ImageDraw.Draw(m).polygon(pts, fill=255)
    return m.resize((w, h), Image.LANCZOS)

def rounded(size, radius):
    w, h = size
    m = Image.new('L', (w * S, h * S), 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, w * S - 1, h * S - 1), radius=radius * S, fill=255)
    return m.resize((w, h), Image.LANCZOS)

img = Image.new('RGB', (W, H), BEIGE)
def paste_blob(color, size, pos, seed):
    img.paste(Image.new('RGB', size, color), pos, blob(size, seed))

paste_blob(DEEP, (620, 620), (700, -190), 1.0)       # big deep blob, top right (bleeds off the edge)
paste_blob(SOFT, (460, 460), (-140, 380), 2.3)       # soft blob, bottom left

# real photo of the shop front inside a soft rounded frame
photo = Image.open(os.path.join(ROOT, 'images', 'studio-vchod-icono-studio-praha-2-1400.webp')).convert('RGB')
pw, ph = 660, 480
scale = (pw * 1.04) / photo.width                   # fit the whole sign; the rounded frame only trims the corners
photo = photo.resize((round(photo.width * scale), round(photo.height * scale)), Image.LANCZOS)
x0 = (photo.width - pw) // 2; y0 = 6
photo = photo.crop((x0, y0, x0 + pw, y0 + ph))
fx, fy = 505, 78
ring = rounded((pw + 24, ph + 24), 118)
img.paste(Image.new('RGB', (pw + 24, ph + 24), BEIGE), (fx - 12, fy - 12), ring)   # beige ring, like on the site
img.paste(photo, (fx, fy), rounded((pw, ph), 110))

# logo (black wordmark, transparent PNG)
logo = Image.open(os.path.join(ROOT, 'images', 'logo-black.png')).convert('RGBA')
lw = 400
logo = logo.resize((lw, round(logo.height * lw / logo.width)), Image.LANCZOS)
img.paste(logo, (64, 205), logo)

def font(size, index=0):
    for p in ('/System/Library/Fonts/HelveticaNeue.ttc', '/System/Library/Fonts/Helvetica.ttc', '/Library/Fonts/Arial.ttf'):
        if os.path.exists(p):
            return ImageFont.truetype(p, size, index=index)
    return ImageFont.load_default()

d = ImageDraw.Draw(img)
d.text((68, 372), 'Bělehradská 77, Praha 2', font=font(30), fill=INK)
d.text((68, 422), '+420 773 867 999', font=font(27), fill=(85, 76, 61))
img.save(os.path.join(ROOT, 'images', 'og-image.png'), optimize=True)
print('Wrote images/og-image.png')
