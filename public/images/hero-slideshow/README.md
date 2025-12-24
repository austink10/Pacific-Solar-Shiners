# Hero Slideshow Images

Place your slideshow images in this folder.

## Image Requirements:
- **Format**: JPG, PNG, or WebP
- **Recommended size**: 1920x1080px (16:9 aspect ratio) for best results
- **File names**: Name your images as:
  - `slide1.jpg`
  - `slide2.jpg`
  - `slide3.jpg`
  - `slide4.jpg`
  - (or add more slides as needed)

## Adding More Images:
To add more slides, edit `src/views/Home.vue` and add more paths to the `slideshowImages` array in the script section.

Example:
```javascript
const slideshowImages = ref([
  '/images/hero-slideshow/slide1.jpg',
  '/images/hero-slideshow/slide2.jpg',
  '/images/hero-slideshow/slide3.jpg',
  '/images/hero-slideshow/slide4.jpg',
  '/images/hero-slideshow/slide5.jpg', // Add more as needed
])
```

## Notes:
- Images will automatically cycle every 5 seconds
- The slideshow will pause when you scroll past the hero section
- Images will maintain their aspect ratio and cover the entire hero area
- A dark overlay ensures text remains readable over images
