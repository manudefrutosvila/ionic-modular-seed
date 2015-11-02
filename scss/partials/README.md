The `app/assets/scss/partials/` directory
=========================================

Here is where the CSS is constructed. This is the basic setup, it is intended to grow as the project does.

Inside it is also splited in subfolders like:

  - `base/` - All the rules applied to an element using an element selector, a descendent selector or a child selector, along with any pseudo-classes. It doesn’t include any class or ID selectors. It is defining the default styling for how that element should look in all occurrences on the page.
  - `layout/` - The layout styles of the site. Things like header, footer, main or the navigation.
  - `components/` - The component styles of the site. Things like additions or modifications to the ionic directives styles. Even new components with its own styles should be imported here.
  - `pages/` - The pages styles of the site. Each app page that needs its own styles should be placed here.
