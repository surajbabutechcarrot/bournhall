from PIL import Image
from pathlib import Path

def remove_black_bg(src: Path, dest: Path, threshold: int = 28, soft: int = 18) -> None:
    im = Image.open(src).convert("RGBA")
    pixels = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, _a = pixels[x, y]
            darkness = min(r, g, b)
            if darkness <= threshold:
                pixels[x, y] = (r, g, b, 0)
            elif darkness < threshold + soft:
                alpha = int(255 * (darkness - threshold) / soft)
                pixels[x, y] = (r, g, b, alpha)
    im.save(dest, "PNG", optimize=True)
    print(f"{dest.name} {im.size}")

root = Path(r"c:\react\bournhall\public\images")
remove_black_bg(root / "hero-woman.jpg", root / "hero-woman.png")
remove_black_bg(root / "hero-man.jpg", root / "hero-man.png")
print("done")
