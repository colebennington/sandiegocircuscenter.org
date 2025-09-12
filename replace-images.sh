#!/bin/bash

# Image Replacement Script for Youth Circus Landing Page
# This script will replace all Unsplash URLs with local image paths

echo "🎪 Replacing placeholder images with local images..."

# Define the file to modify
FILE="src/app/page.tsx"

# Create backup
cp "$FILE" "${FILE}.backup"
echo "✅ Created backup: ${FILE}.backup"

# Replace hero background
sed -i 's|https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80|/images/hero-background.jpg|g' "$FILE"

# Replace location image
sed -i 's|https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80|/images/location-map.jpg|g' "$FILE"

# Replace testimonial images
sed -i 's|https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80|/images/parent-karla.jpg|g' "$FILE"
sed -i 's|https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80|/images/parent-walker.jpg|g' "$FILE"
sed -i 's|https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80|/images/parent-john-ivy.jpg|g' "$FILE"

# Replace class images
sed -i 's|https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80|/images/petite-cirque-class.jpg|g' "$FILE"
sed -i 's|https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80|/images/youth-cirque-class.jpg|g' "$FILE"

# Replace coach images
sed -i 's|https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80|/images/coach-ella.jpg|g' "$FILE"
sed -i 's|https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80|/images/coach-isabel.jpg|g' "$FILE"
sed -i 's|https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80|/images/coach-olivia.jpg|g' "$FILE"
sed -i 's|https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80|/images/coach-paige.jpg|g' "$FILE"
sed -i 's|https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80|/images/coach-marysue.jpg|g' "$FILE"
sed -i 's|https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80|/images/coach-mara.jpg|g' "$FILE"
sed -i 's|https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80|/images/coach-lauren.jpg|g' "$FILE"
sed -i 's|https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80|/images/coach-jon.jpg|g' "$FILE"

echo "✅ All image URLs have been replaced!"
echo "📁 Make sure to add your images to the public/images/ folder"
echo "🔄 The page will automatically update when you save your images"

# List what images are needed
echo ""
echo "📸 Images you need to add to public/images/:"
echo "  - hero-background.jpg (2070×1380px)"
echo "  - location-map.jpg (2070×1380px)"
echo "  - parent-karla.jpg (256×256px)"
echo "  - parent-walker.jpg (256×256px)"
echo "  - parent-john-ivy.jpg (256×256px)"
echo "  - petite-cirque-class.jpg (2070×1380px)"
echo "  - youth-cirque-class.jpg (2070×1380px)"
echo "  - schedule-profile.jpg (256×256px)"
echo "  - coach-ella.jpg (400×400px)"
echo "  - coach-isabel.jpg (400×400px)"
echo "  - coach-olivia.jpg (400×400px)"
echo "  - coach-paige.jpg (400×400px)"
echo "  - coach-marysue.jpg (400×400px)"
echo "  - coach-mara.jpg (400×400px)"
echo "  - coach-lauren.jpg (400×400px)"
echo "  - coach-jon.jpg (400×400px)"
