# Image Replacement Guide

## Quick Reference: What to Replace

### 1. Hero Background (Line 12)
**Replace:**
```javascript
backgroundImage: 'url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
```
**With:**
```javascript
backgroundImage: 'url("/images/hero-background.jpg")'
```

### 2. Location Image (Line 129)
**Replace:**
```javascript
backgroundImage: 'url("https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
```
**With:**
```javascript
backgroundImage: 'url("/images/location-map.jpg")'
```

### 3. Testimonial - Karla M. (Line 181)
**Replace:**
```javascript
backgroundImage: 'url("https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80")'
```
**With:**
```javascript
backgroundImage: 'url("/images/parent-karla.jpg")'
```

### 4. Testimonial - Walker (Line 205)
**Replace:**
```javascript
backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80")'
```
**With:**
```javascript
backgroundImage: 'url("/images/parent-walker.jpg")'
```

### 5. Testimonial - John and Ivy (Line 229)
**Replace:**
```javascript
backgroundImage: 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80")'
```
**With:**
```javascript
backgroundImage: 'url("/images/parent-john-ivy.jpg")'
```

### 6. Petite Cirque Class (Line 260)
**Replace:**
```javascript
backgroundImage: 'url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
```
**With:**
```javascript
backgroundImage: 'url("/images/petite-cirque-class.jpg")'
```

### 7. Youth Cirque Class (Line 284)
**Replace:**
```javascript
backgroundImage: 'url("https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
```
**With:**
```javascript
backgroundImage: 'url("/images/youth-cirque-class.jpg")'
```

### 8. Schedule Profile (Line 325)
**Replace:**
```javascript
backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80")'
```
**With:**
```javascript
backgroundImage: 'url("/images/schedule-profile.jpg")'
```

### 9. Coach Photos (Lines 410-417)
In the coaches array, replace each `image:` URL:

**Ella Rydeen:**
```javascript
image: "/images/coach-ella.jpg"
```

**Isabel Guevara:**
```javascript
image: "/images/coach-isabel.jpg"
```

**Olivia Egerstedt:**
```javascript
image: "/images/coach-olivia.jpg"
```

**Paige Horil:**
```javascript
image: "/images/coach-paige.jpg"
```

**MarySue Jurgella:**
```javascript
image: "/images/coach-marysue.jpg"
```

**Mara Martin:**
```javascript
image: "/images/coach-mara.jpg"
```

**Lauren Herley:**
```javascript
image: "/images/coach-lauren.jpg"
```

**Jon Bookout:**
```javascript
image: "/images/coach-jon.jpg"
```

## Image Requirements Summary

| Category | Count | Size | Format | Purpose |
|----------|-------|------|--------|---------|
| Hero Background | 1 | 2070×1380px | JPG | Main circus space |
| Location | 1 | 2070×1380px | JPG | Building/map |
| Testimonials | 3 | 256×256px | JPG | Parent photos |
| Class Photos | 2 | 2070×1380px | JPG | Kids in classes |
| Schedule Profile | 1 | 256×256px | JPG/PNG | Logo/staff |
| Coach Photos | 8 | 400×400px | JPG | Professional headshots |

**Total: 16 images needed**

## File Organization

Place all images in the `public/images/` folder:

```
public/
  images/
    hero-background.jpg
    location-map.jpg
    parent-karla.jpg
    parent-walker.jpg
    parent-john-ivy.jpg
    petite-cirque-class.jpg
    youth-cirque-class.jpg
    schedule-profile.jpg
    coach-ella.jpg
    coach-isabel.jpg
    coach-olivia.jpg
    coach-paige.jpg
    coach-marysue.jpg
    coach-mara.jpg
    coach-lauren.jpg
    coach-jon.jpg
```

## Tips for Best Results

1. **Hero Background**: Use a wide shot of your main training space with good lighting
2. **Class Photos**: Action shots of kids doing aerial, tumbling, or apparatus work
3. **Coach Photos**: Professional headshots with consistent lighting/background
4. **Parent Photos**: Only use with written permission
5. **File Optimization**: Compress images for web (use tools like TinyPNG)
6. **Backup Plan**: Keep the Unsplash URLs as fallbacks during development
