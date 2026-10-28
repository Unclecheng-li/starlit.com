from pathlib import Path
from PIL import Image, ImageOps

workspace = Path(__file__).resolve().parents[2]
source = workspace / "character-originals"
target = workspace / "starlit-home" / "docs" / "assets" / "characters"
target.mkdir(parents=True, exist_ok=True)
files = {
    "小鸟游星野.png": "hoshino.webp",
    "古关忧.png": "ui.webp",
    "夏目安安.png": "anan.webp",
    "天童凯伊.png": "kei.webp",
    "天童爱丽丝.png": "aris.webp",
    "早濑优香.png": "yuuka.webp",
    "橘光.png": "hikari.webp",
    "橘希望.png": "nozomi.webp",
    "橘雪莉.jpg": "sherry.webp",
    "空崎日奈.png": "hina.webp",
}
for source_name, target_name in files.items():
    with Image.open(source / source_name) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
        output = target / target_name
        image.save(output, "WEBP", quality=90, method=6)
        print(f"{target_name}: {image.width}x{image.height}, {output.stat().st_size // 1024} KB")
