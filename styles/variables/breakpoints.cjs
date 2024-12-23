/*
Note: Variables do not work inside media queries and container queries. 
You can use the var() function in any part of a value in any property on an element. 
You cannot use var() for property names, selectors, or anything aside from property values, 
which means you can't use it in a media query or container query.

https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

For this reason, the breakpoints config is declared here for use in the `postcss.config.cjs` 
config using the 'postcss-simple-vars' plugin for their further use within 
@media (min-width: $breakpoint-md) {...} rules.

It's recommended to install the PostCSS Intellisense and Highlighting plugin for your IDE
*/

module.exports = {
  '$breakpoint-xs': '375px',
  '$breakpoint-sm': '576px',
  '$breakpoint-md': '768px',
  '$breakpoint-lg': '992px',
  '$breakpoint-xl': '1200px',
  '$breakpoint-xxl': '1440px',
};
