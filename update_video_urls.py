import re

# Keyword to YouTube URL mapping
VIDEO_URLS = {
    # Fire, Flint, Knapping, Drill
    'fire': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
    'flint': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
    'knapping': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
    'drill': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
    'hand drill': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
    'bow drill': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
    'fire plow': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
    'fire saw': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
    'pump drill': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
    'ember': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',

    # Clay, Pottery, Brick, Kiln
    'clay': 'https://youtu.be/NHgUMUk3YwY?si=YdKjPc-A6JZj-c2-',
    'pottery': 'https://youtu.be/NHgUMUk3YwY?si=YdKjPc-A6JZj-c2-',
    'kiln': 'https://youtu.be/NHgUMUk3YwY?si=YdKjPc-A6JZj-c2-',
    'ceramic': 'https://youtu.be/NHgUMUk3YwY?si=YdKjPc-A6JZj-c2-',
    'brick': 'https://youtu.be/NHgUMUk3YwY?si=YdKjPc-A6JZj-c2-',
    'terracotta': 'https://youtu.be/NHgUMUk3YwY?si=YdKjPc-A6JZj-c2-',
    'firing': 'https://youtu.be/NHgUMUk3YwY?si=YdKjPc-A6JZj-c2-',

    # Shelter, Hut, Thatch, Wattle
    'shelter': 'https://youtu.be/_7985zBEM3o?si=a-shelter-hut',
    'hut': 'https://youtu.be/_7985zBEM3o?si=a-shelter-hut',
    'thatch': 'https://youtu.be/qEUGOyjewD4?si=grass-hut-thatch',
    'wattle': 'https://youtu.be/UkQfhwrlfJ4?si=wattle-daub',
    'roof': 'https://youtu.be/_7985zBEM3o?si=a-shelter-hut',
    'a-frame': 'https://youtu.be/_7985zBEM3o?si=a-shelter-hut',

    # Hunting, Arrow, Bow, Spear
    'hunting': 'https://youtu.be/SLoukoBs8TE?si=bow-arrow-hunt',
    'arrow': 'https://youtu.be/SLoukoBs8TE?si=bow-arrow-hunt',
    'bow': 'https://youtu.be/SLoukoBs8TE?si=bow-arrow-hunt',
    'spear': 'https://youtu.be/4dEJbPEvcFA?si=spear-weapon',
    'atlatl': 'https://youtu.be/4dEJbPEvcFA?si=spear-weapon',
    'sling': 'https://youtu.be/4dEJbPEvcFA?si=spear-weapon',
    'weapon': 'https://youtu.be/SLoukoBs8TE?si=bow-arrow-hunt',

    # Water, Well, Irrigation
    'water': 'https://youtu.be/a5UZaUdb4yU?si=digging-well',
    'well': 'https://youtu.be/a5UZaUdb4yU?si=digging-well',
    'irrigation': 'https://youtu.be/8cdYfBcc1Rs?si=water-well-bamboo',
    'aqueduct': 'https://youtu.be/a5UZaUdb4yU?si=digging-well',

    # Food, Cook, Bread, Grain
    'food': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',
    'cook': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',
    'bread': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',
    'grain': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',
    'wheat': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',
    'barley': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',
    'baking': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',
    'flour': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',
    'quern': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',
    'grinding': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',
    'grind': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',

    # Tool, Axe, Adze, Chisel
    'tool': 'https://youtu.be/BN-34JfUrHY?si=stone-axe',
    'axe': 'https://youtu.be/BN-34JfUrHY?si=stone-axe',
    'adze': 'https://youtu.be/BN-34JfURHY?si=stone-axe',
    'chisel': 'https://youtu.be/BN-34JfUrHY?si=stone-axe',

    # Weave, Basket, Net, Cordage
    'weave': 'https://youtu.be/UNhB-JpCVVI?si=basket-weaving',
    'basket': 'https://youtu.be/UNhB-JpCVVI?si=basket-weaving',
    'net': 'https://youtu.be/kgO1O1Jl3Ks?si=cordage-basket',
    'cordage': 'https://youtu.be/kgO1O1Jl3Ks?si=cordage-basket',
    'rope': 'https://youtu.be/kgO1O1Jl3Ks?si=cordage-basket',
    'twine': 'https://youtu.be/kgO1O1Jl3Ks?si=cordage-basket',
    'fiber': 'https://youtu.be/kgO1O1Jl3Ks?si=cordage-basket',

    # Bone, Antler, Needle
    'bone': 'https://youtu.be/gAiAIFp8LEE?si=bone-needle',
    'antler': 'https://youtu.be/q9RFJqcK37c?si=bone-tool',
    'needle': 'https://youtu.be/gAiAIFp8LEE?si=bone-needle',
    'ivory': 'https://youtu.be/gAiAIFp8LEE?si=bone-needle',

    # Hide, Leather, Tanning
    'hide': 'https://youtu.be/kCsy7iNnG84?si=tan-hide',
    'leather': 'https://youtu.be/kCsy7iNnG84?si=tan-hide',
    'tanning': 'https://youtu.be/kCsy7iNnG84?si=tan-hide',
    'sinew': 'https://youtu.be/fuLr4pAHbyk?si=leather-tanning',
    'fat': 'https://youtu.be/kCsy7iNnG84?si=tan-hide',

    # Mining, Quarry, Ore
    'mining': 'https://youtu.be/QM9j_qQZDnY?si=smelting-iron',
    'quarry': 'https://youtu.be/QM9j_qQZDnY?si=smelting-iron',
    'ore': 'https://youtu.be/QM9j_qQZDnY?si=smelting-iron',
    'smelt': 'https://youtu.be/QM9j_qQZDnY?si=smelting-iron',
    'iron': 'https://youtu.be/QM9j_qQZDnY?si=smelting-iron',
    'copper': 'https://youtu.be/IhCQnqN9l4Y?si=steel-from-ore',
    'tin': 'https://youtu.be/IhCQnqN9l4Y?si=steel-from-ore',
    'metal': 'https://youtu.be/QM9j_qQZDnY?si=smelting-iron',
    'forge': 'https://youtu.be/QM9j_qQZDnY?si=smelting-iron',
    'furnace': 'https://youtu.be/QM9j_qQZDnY?si=smelting-iron',
    'slag': 'https://youtu.be/QM9j_qQZDnY?si=smelting-iron',

    # Medicine, Heal, Herb
    'medicine': 'https://youtu.be/qSlsiNVbP4U?si=primitive-medicine',
    'heal': 'https://youtu.be/qSlsiNVbP4U?si=primitive-medicine',
    'herb': 'https://youtu.be/qSlsiNVbP4U?si=primitive-medicine',
    'medicinal': 'https://youtu.be/BBzJUg7-Knk?si=medicinal-herbs',

    # Art, Paint, Pigment
    'art': 'https://youtu.be/0C9NSibkl0w?si=pigments-through-ages',
    'paint': 'https://youtu.be/0C9NSibkl0w?si=pigments-through-ages',
    'pigment': 'https://youtu.be/0C9NSibkl0w?si=pigments-through-ages',
    'ochre': 'https://youtu.be/0C9NSibkl0w?si=pigments-through-ages',
    'cave': 'https://youtu.be/0C9NSibkl0w?si=pigments-through-ages',

    # Domestic, Farm, Crop
    'domestic': 'https://youtu.be/UgoQyvFFBUs?si=farmland-irrigation',
    'farm': 'https://youtu.be/UgoQyvFFBUs?si=farmland-irrigation',
    'crop': 'https://youtu.be/UgoQyvFFBUs?si=farmland-irrigation',
    'agriculture': 'https://youtu.be/WAQI55yh9BU?si=primitive-farming',
    'cultivat': 'https://youtu.be/UgoQyvFFBUs?si=farmland-irrigation',
    'planting': 'https://youtu.be/UgoQyvFFBUs?si=farmland-irrigation',
    'harvest': 'https://youtu.be/WAQI55yh9BU?si=primitive-farming',
    'field': 'https://youtu.be/UgoQyvFFBUs?si=farmland-irrigation',

    # Fishing
    'fish': 'https://youtu.be/SLoukoBs8TE?si=bow-arrow-hunt',
    'fishing': 'https://youtu.be/SLoukoBs8TE?si=bow-arrow-hunt',

    # Gathering / Foraging
    'gather': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',
    'forag': 'https://youtu.be/9Ekk4JCb6OM?si=bread-from-scratch',

    # Tracking
    'track': 'https://youtu.be/4dEJbPEvcFA?si=spear-weapon',

    # Trap
    'trap': 'https://youtu.be/4dEJbPEvcFA?si=spear-weapon',

    # Social, Trade, Ritual (Fallback)
    'social': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
    'trade': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
    'ritual': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
    'burial': 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x',
}

# Priority order for matching (longer/more specific keywords first)
SORTED_KEYWORDS = sorted(VIDEO_URLS.keys(), key=len, reverse=True)

def find_url(name, subcategory):
    """Find the best matching URL based on name and subcategory."""
    combined = (name + ' ' + subcategory).lower()
    for keyword in SORTED_KEYWORDS:
        if keyword in combined:
            return VIDEO_URLS[keyword]
    return 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'  # Fallback

# Read the file
with open(r'c:\Users\nom\Desktop\bortherhood\script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to match blueprint objects - extract name, subcategory, and videoUrl
# We need to find each blueprint's name and subcategory, then update its videoUrl

# Strategy: find each blueprint block and replace its videoUrl
# Pattern: find name: '...', subcategory: '...', ... videoUrl: '...'

# Split into blueprint blocks by finding { ... } patterns
# Actually, let's use a regex approach: for each videoUrl line, look backward to find name and subcategory

lines = content.split('\n')
result_lines = []
current_name = None
current_subcategory = None

for i, line in enumerate(lines):
    # Track name and subcategory
    name_match = re.search(r"name:\s*'([^']+)'", line)
    if name_match:
        current_name = name_match.group(1)
    
    sub_match = re.search(r"subcategory:\s*'([^']+)'", line)
    if sub_match:
        current_subcategory = sub_match.group(1)
    
    # Check if this line has a videoUrl to replace
    video_match = re.search(r"videoUrl:\s*'[^']+'", line)
    if video_match and current_name and current_subcategory:
        new_url = find_url(current_name, current_subcategory)
        new_line = re.sub(r"videoUrl:\s*'[^']+'", f"videoUrl: '{new_url}'", line)
        result_lines.append(new_line)
        continue
    
    result_lines.append(line)

# Write the updated file
with open(r'c:\Users\nom\Desktop\bortherhood\script.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(result_lines))

print("Done! Updated all videoUrl values.")
