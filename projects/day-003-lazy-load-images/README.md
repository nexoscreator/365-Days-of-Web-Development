# Day 003: Lazy Load Images

## Project Description

This project demonstrates the implementation of lazy loading for images on a web page. Lazy loading is a technique that defers the loading of non-critical resources (in this case, images) until they are needed. This approach can significantly improve page load times and reduce bandwidth usage, especially for pages with many images or on slower network connections.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Intersection Observer API

## Features

- Lazy loading of images as they enter the viewport
- Placeholder images or low-resolution previews while full images load
- Smooth transition effect when images load
- Responsive design to showcase lazy loading across different screen sizes
- Performance metrics display to show the benefits of lazy loading

## Challenges Faced

1. Implementing lazy loading without relying on external libraries
2. Ensuring compatibility across different browsers
3. Creating an effective placeholder strategy while images load
4. Balancing between performance gains and user experience

## Lessons Learned

- How to use the Intersection Observer API for efficient lazy loading
- Techniques for creating and styling placeholder images
- The importance of performance optimization in web development
- How to measure and display performance metrics in real-time

## Future Improvements

- Implement progressive image loading (blur-up technique)
- Add support for lazy loading background images in CSS
- Create a reusable lazy loading component or module
- Implement error handling for failed image loads
- Add option to preload critical images for faster initial display

## Live Demo

[View Live Demo](https://nexoscreator.github.io/365-Days-of-Web-Development/projects/day-003-lazy-load-images/)

## Screenshots

![Lazy Load Images Screenshot](https://github.com/nexoscreator/365-Days-of-Web-Development/raw/main/projects/day-003-lazy-load-images/screenshot.png)

## How to Use

1. Clone the repository
2. Navigate to the `projects/day-003-lazy-load-images` directory
3. Open `index.html` in your web browser
4. Scroll down the page to see images lazy load as they enter the viewport

## Code Snippet

Here's a key part of the lazy loading implementation:

```javascript
const images = document.querySelectorAll('[data-src]');

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    
    const img = entry.target;
    img.src = img.dataset.src;
    img.classList.add('loaded');
    imgObserver.unobserve(img);
  });
}, imgOptions);

images.forEach(img => imgObserver.observe(img));