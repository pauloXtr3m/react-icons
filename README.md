# react-icons SVG icons as TypeScript modules

This project generates React functional components from a list of SVG files. The results include
TypeScript components and their type definitions.

This project is inspired by the [work about making SVG icon libraries presented here.](http://nicolasgallagher.com/making-svg-icon-libraries-for-react-apps)

## Styles

NOTE: you cannot set the height of the SVG icon, only the width.

Remember to add the following styles to your SCSS (example):

```scss
$icon-dimensions: 1.5rem !default;
$icon-dimensions-small: 1rem !default;
$icon-dimensions-medium: 2rem !default;
$icon-dimensions-large: 3rem !default;

.my-svg-icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: $icon-dimensions;
  width: $icon-dimensions;

  &.is-small {
    width: $icon-dimensions-small;
  }
  &.is-medium {
    width: $icon-dimensions-medium;
  }
  &.is-large {
    width: $icon-dimensions-large;
  }
}

.my-svg-container {
  position: relative;
  height: 0;
  width: 100%;
  padding: 0;
  padding-bottom: 100%;
  /* override this inline for aspect ratio other than square */
}

.my-svg-scaling {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}
```
