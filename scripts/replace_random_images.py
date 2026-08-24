from pathlib import Path
import re

POSTS = Path(__file__).resolve().parents[1] / "content" / "posts"

# Stable, real editorial photography. These are used only as article hero images,
# never as a representation of a named product. Exact product cards remain
# manufacturer-official or hidden until verified.
IMAGES = {
    "putter": "https://images.unsplash.com/photo-1622396636133-ba43f812bc35?auto=format&fit=crop&w=1600&q=86",
    "ball": "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1600&q=86",
    "tour": "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1600&q=86",
    "club": "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1600&q=86",
    "default": "https://images.unsplash.com/photo-1535132011086-b8818f016104?auto=format&fit=crop&w=1600&q=86",
}


def choose(title):
    if any(x in title for x in ("パター", "PLD", "Phantom", "Spider", "VZN", "ゼロトルク")):
        return IMAGES["putter"]
    if any(x in title for x in ("ボール", "コンプレッション", "アライメント")):
        return IMAGES["ball"]
    if any(x in title for x in ("FedEx", "BMW", "プレーオフ", "スピース", "マキロイ", "Koepka", "Jason", "Min Woo", "Thorbjornsen")):
        return IMAGES["tour"]
    if any(x in title for x in ("クラブ", "アイアン", "ウェッジ", "ドライバー", "シャフト", "グリップ", "9W", "3W", "フィッティング")):
        return IMAGES["club"]
    return IMAGES["default"]


def main():
    changed = 0
    for path in POSTS.glob("*.md"):
        text = path.read_text()
        if "loremflickr.com" not in text:
            continue
        title_match = re.search(r'^title:\s*"(.*)"', text, re.M)
        title = title_match.group(1) if title_match else path.stem
        text = re.sub(r'^image:\s*"https://loremflickr\.com/[^\"]+"', f'image: "{choose(title)}"\nimage_kind: "editorial-photo"', text, flags=re.M)
        path.write_text(text)
        changed += 1
    print(f"replaced {changed} random hero images")


if __name__ == "__main__":
    main()
