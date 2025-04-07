HOW TO ADD YOUR IMAGES TO THE "MY WORKS" FOLDER

1. Place your image files in this folder (public/my-works/)
   - Supported formats: JPG, PNG, GIF, SVG
   - Recommended size: Less than 2MB per image for optimal performance

2. Update the file paths in the my-works.js component:
   - Open: components/apps/my-works.js
   - Find the images array (around line 10)
   - Replace the example filenames with your actual image filenames
   - Make sure the path points to your image files (e.g., './my-works/your-image.jpg')

Example:
If you add an image named "portfolio-design.jpg" to this folder, update the entry in my-works.js to:
{
    id: 1,
    title: 'Portfolio Design',
    filename: 'portfolio-design.jpg',
    path: './my-works/portfolio-design.jpg'
}

That's it! Your images will now appear in the My Works folder on your desktop.
