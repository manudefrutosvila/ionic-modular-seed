The `scss` directory
===============================

This folder contains the SASS files to be compiled during the build. Only app.scss will be processed during the build, meaning that all other stylesheets must be imported into that one.

It is followed the [SMACSS (Scalable and Modular Architecture for CSS)](http://smacss.com) style guide based on the [SMACSS + SCSS starter](https://github.com/jonathanpath/SASS-SMACSS).

In the stylesheet development we trully recomend to follow the [Idiomatic CSS coding rules](https://github.com/necolas/idiomatic-css) and/or the [BEM Methodology (Block, Element, Modifier)](https://en.bem.info/method/).

## Overview ##


At a high level, the structure looks roughly like this:

```
app/
  |- scss/
  |  |- <sass files>
  |  |- modules/
  |  |  |- <sass code that does not output css>
  |  |- partials/
  |  |  |- <the meat of the styles>
  |  |  |- base/
  |  |  |  |- <elements selector styles>
  |  |  |- layout/
  |  |  |  |- <common layout styles>
  |  |  |- pages
  |  |  |  |- <particular pages styles>
  |  |  |- components
  |  |  |  |- <particular components styles>
  |  |- variables/
  |  |  |- <site configuration to use it on the sass files>
  |  |- vendor/
  |  |  |- <third party sass sources and customizations>
  |  |- app.scss
```

What follows is a brief description of each entry, but some key directories contain their own README.md file with additional documentation, so browse around to learn more.

- `app/scss/` - Where the specific styles for your client’s project has to be done. Never change the compiled css files if you don't want to lose them in the next build.
- `app.scss` - The main file where they are imported the other sass files.
- `modules/` - Reserved for developing Sass code that does not cause output css. Things like mixin declaration, functions.
- `partials/` - Where the CSS is constructed. Inside it is also splited in subfolders like:
  + `base/` - All the rules applied to an element using an element selector, a descendent selector or a child selector, along with any pseudo-classes. It doesn’t include any class or ID selectors. It is defining the default styling for how that element should look in all occurrences on the page.
  + `layout/` - The layout styles of the site. Things like header, footer, main or the navigation.
  + `pages/` - The particular pages styles of the site whether your development have some views with particular styling.
  + `components/` - Each component should have its own style. Here you should import them.
- `variables/` - The site settings, to allow fast changes in the whole site by only changing this. Here are defined things like the colors or fonts variables used in the other Sass files.
- `vendor/` - Third party styles needed by the app. Here also you can customize them by overriding their variables.
