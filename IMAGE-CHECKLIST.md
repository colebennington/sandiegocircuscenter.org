# 📸 Image Replacement Checklist

## **Step-by-Step Process**

### Phase 1: Gather Your Images
- [ ] **Hero Background** - Wide shot of your main circus training space
- [ ] **Location Image** - Exterior of your building or San Diego location marker
- [ ] **Testimonial Parents** (3 photos) - Photos of Karla M., Walker, and John & Ivy (with permission)
- [ ] **Class Photos** (2 photos) - Kids doing Petite Cirque (5-7) and Youth Cirque (8-17)
- [ ] **Schedule Profile** - Your logo or representative staff photo
- [ ] **Coach Photos** (8 photos) - Professional headshots of all coaches

### Phase 2: Optimize Images
- [ ] Resize hero/class images to 2070×1380px
- [ ] Resize coach photos to 400×400px  
- [ ] Resize testimonial/profile photos to 256×256px
- [ ] Compress all images for web (use TinyPNG.com or similar)
- [ ] Convert to JPG format (PNG for logos with transparency)

### Phase 3: Place Images
- [ ] Save all images to `public/images/` folder
- [ ] Use exact filenames from the list below

### Phase 4: Update Code
**Option A - Manual Replacement:**
- [ ] Open `src/app/page.tsx`
- [ ] Find each Unsplash URL and replace with local path
- [ ] Use the reference guide in `image-replacement-guide.md`

**Option B - Automatic Script (if comfortable with terminal):**
- [ ] Run `./replace-images.sh` in terminal
- [ ] Check that all URLs were replaced correctly

## **Required Image Files**

```
public/images/
├── hero-background.jpg          (2070×1380px) - Main circus space
├── location-map.jpg             (2070×1380px) - Building exterior
├── parent-karla.jpg             (256×256px)   - Testimonial photo
├── parent-walker.jpg            (256×256px)   - Testimonial photo  
├── parent-john-ivy.jpg          (256×256px)   - Testimonial photo
├── petite-cirque-class.jpg      (2070×1380px) - Kids 5-7 in class
├── youth-cirque-class.jpg       (2070×1380px) - Kids 8-17 in class
├── schedule-profile.jpg         (256×256px)   - Logo/staff photo
├── coach-ella.jpg               (400×400px)   - Ella Rydeen
├── coach-isabel.jpg             (400×400px)   - Isabel Guevara
├── coach-olivia.jpg             (400×400px)   - Olivia Egerstedt
├── coach-paige.jpg              (400×400px)   - Paige Horil
├── coach-marysue.jpg            (400×400px)   - MarySue Jurgella
├── coach-mara.jpg               (400×400px)   - Mara Martin
├── coach-lauren.jpg             (400×400px)   - Lauren Herley
└── coach-jon.jpg                (400×400px)   - Jon Bookout
```

## **Image Photography Tips**

### Hero Background
- 📍 **Location**: Main training space
- 💡 **Lighting**: Bright, natural light preferred
- 👥 **Content**: Kids actively doing circus activities
- 📐 **Orientation**: Landscape (horizontal)

### Class Photos
- 🎪 **Petite Cirque**: Ages 5-7, basic skills, colorful equipment
- 🤸 **Youth Cirque**: Ages 8-17, more advanced skills, aerial work
- 😊 **Mood**: Fun, safe, engaging
- 📷 **Angle**: Eye-level with kids

### Coach Photos
- 👔 **Style**: Professional but approachable
- 🖼️ **Background**: Clean, neutral
- 😊 **Expression**: Friendly, confident
- 📐 **Crop**: Square format, shoulders up

### Parent Testimonials
- ⚠️ **Permission**: Get written consent before using
- 📱 **Quality**: Clear, well-lit photos
- 🔄 **Alternative**: Use illustrated avatars if no photos available

## **Testing After Replacement**

- [ ] Check landing page loads without image errors
- [ ] Verify images display correctly on mobile
- [ ] Test image loading speed
- [ ] Confirm all 16 images are replaced
- [ ] Check for broken image icons

## **Fallback Plan**

If you can't get all images immediately:
- Keep some Unsplash placeholders temporarily
- Replace high-priority images first (hero, classes, key coaches)
- Use generic avatars for testimonials if needed
- Gradually replace remaining images as you get better photos

## **Need Help?**

- Check `image-replacement-guide.md` for exact code replacements
- Use browser dev tools to see which images are missing
- Test one image at a time to isolate issues


