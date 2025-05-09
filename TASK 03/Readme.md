# WorkoutAja - CSS Bug Fixes and Style Improvements

This repository contains CSS bug fixes and styling improvements for the WorkoutAja project, a website for fitness and workout services.

[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://bit.ly/4jVxbSk)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Fixed Bugs

1. Colors not using the correct format - Added hash symbol for all CSS colors
   - Example fix: `color: 000;` → `color: #000;`

2. Incorrect CSS selector for balls - Fixed the `balls` selector to `#balls` for elements with ID

3. Invalid CSS syntax - Removed quotation marks (``) at the beginning of CSS file that made the syntax invalid

4. Wrong position of decorative elements (balls) - Changed the position of balls from `right: 0px` to `left: 0px` to match the design

5. Missing or not displaying images - Fixed CSS to ensure all images display correctly

6. Suboptimal responsiveness - Added media queries for more responsive display on various screen sizes

## Added Styles

1. Consistent box-sizing - Added `box-sizing: border-box` to ensure more consistent element dimensions

2. Improved hover effects - Fixed hover effects on navigation links and buttons

3. Image size adjustments - Set image sizes to be proportional and responsive

4. Smoother transitions - Added transitions for smoother hover effects

5. Z-index for layering - Used z-index to arrange proper element stacking

## Implemented Best Practices

1. Valid CSS Syntax - Ensuring valid and standard-compliant CSS syntax

2. Separation of Concerns - Maintaining separation between HTML (structure) and CSS (presentation)

3. Color Consistency - Using consistent color formats

4. Responsive Design Principles - Applying responsive design principles for optimal display

5. Semantic HTML - Maintaining the use of semantic HTML tags

6. Cross-browser Compatibility - Ensuring consistent display across various browsers

## Medium Article

For a more detailed explanation of CSS and best practices implemented in this project, read my article on Medium:

[CSS Best Practices for Modern Web Development](https://bit.ly/4jVxbSk)

## Reference Sources

- [Design Figma WorkoutAja](https://www.figma.com/design/CAawvDkcG4AloMWvHwrOvo/workoutaja?node-id=0:1&t=CfOiRcljPeT5PykW-1)
- [Original GitHub Repository](https://github.com/cakrawala-university/web-client-development)