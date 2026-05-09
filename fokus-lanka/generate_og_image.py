#!/usr/bin/env python3
"""
Generate Open Graph image for Fokus Lanka
Dimensions: 1200x630px (standard OG size)
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Create image with dark navy background
width, height = 1200, 630
bg_color = (10, 26, 53)  # fokus-navy
img = Image.new('RGB', (width, height), bg_color)
draw = ImageDraw.Draw(img)

# Add gradient effect (gold accent bar)
for y in range(height):
    # Subtle gradient from navy to slightly lighter navy
    ratio = y / height
    r = int(10 + (20 * ratio))
    g = int(26 + (40 * ratio))
    b = int(53 + (60 * ratio))
    draw.rectangle([(0, y), (width, y+1)], fill=(r, g, b))

# Add gold accent bar at the top
gold_color = (212, 175, 55)  # fokus-gold
draw.rectangle([(0, 0), (width, 8)], fill=gold_color)

try:
    # Try to use system fonts, with fallbacks
    title_font = ImageFont.truetype("C:\\Windows\\Fonts\\arial.ttf", 80)
    subtitle_font = ImageFont.truetype("C:\\Windows\\Fonts\\arial.ttf", 36)
    tag_font = ImageFont.truetype("C:\\Windows\\Fonts\\arial.ttf", 24)
except:
    # Fallback to default if fonts not found
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    tag_font = ImageFont.load_default()

# Text content
title = "Fokus Lanka"
subtitle = "Civil Engineering & Construction"
tag = "Premium Residential Construction in Jaffna, Sri Lanka"

# Draw tag at top
tag_bbox = draw.textbbox((0, 0), tag, font=tag_font)
tag_width = tag_bbox[2] - tag_bbox[0]
tag_x = (width - tag_width) // 2
draw.text((tag_x, 50), tag, fill=gold_color, font=tag_font)

# Draw title
title_bbox = draw.textbbox((0, 0), title, font=title_font)
title_width = title_bbox[2] - title_bbox[0]
title_x = (width - title_width) // 2
draw.text((title_x, 180), title, fill=(255, 255, 255), font=title_font)

# Draw subtitle
subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
subtitle_x = (width - subtitle_width) // 2
draw.text((subtitle_x, 310), subtitle, fill=(217, 217, 217), font=subtitle_font)

# Draw decorative line
draw.rectangle([(400, 380), (800, 385)], fill=gold_color)

# Draw bottom tagline
tagline = "✓ UK Qualified  |  ✓ 30+ Years Experience  |  ✓ Local Expertise"
try:
    tagline_font = ImageFont.truetype("C:\\Windows\\Fonts\\arial.ttf", 20)
except:
    tagline_font = ImageFont.load_default()

tagline_bbox = draw.textbbox((0, 0), tagline, font=tagline_font)
tagline_width = tagline_bbox[2] - tagline_bbox[0]
tagline_x = (width - tagline_width) // 2
draw.text((tagline_x, 480), tagline, fill=(212, 175, 55), font=tagline_font)

# Save image
output_path = os.path.join(os.path.dirname(__file__), 'public', 'og-image.jpg')
img.save(output_path, 'JPEG', quality=95)

print(f"✅ OG Image generated: {output_path}")
print(f"   Dimensions: {width}x{height}px")
print(f"   File size: {os.path.getsize(output_path) / 1024:.1f}KB")
