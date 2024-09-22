# CHANGELOG

## [v1.0.0] - 28/08/2023

- Initial release

---

## [v1.1.0] - 05/09/2023

### Changes

- Changed the font from "Lato" to "Coolvetica".
- Separated languages into individual JSON files for better organization.
- SVG icons are now loaded directly from the nuxt-icon library instead of being embedded in HTML.
- Renamed nearly all components for clarity.
- The "scroll-to-top" button now scrolls to the very top of the page.
- Altered the background color of the Technical Skill Card component.
- Capitalized text displayed on tooltips.
- Folder icons replaced with SVG images to ensure consistent appearance across operating systems.

### Added

- Introduced a types file for storing interfaces.
- Added a custom shadow class (shadow-top) for Tailwind.
- Included new SVG files.
- Implemented a getter for langStore.

### Removed

- Eliminated unnecessary comments.
- Removed unused Vue templates with SVG.

---

## [v1.1.1] - 06/09/2023

### Changes

- Changed the font type to woff2.
- Renamed the English JSON from en-GB to en-EN.
- Added an option to display an empty string when a text is inaccessible.

---

## [v1.1.2] - 09/09/2023

### Changes

- Adjusted styles to fix display issues on certain devices.
- Updated theme switcher toggle icons to actual icons instead of emojis.
- Revised the description for future projects.

---

## [v1.2.0] - 23/09/2023

### Changes

- Made the header fixed to the top, scrolling vertically with the page.
- Refactored JSON file structure for enhanced data access flexibility.

### Added

- Added this changelog file.
- Implemented a new menu for easier section navigation, locking scrolling while displayed.
- Developed a method to retrieve all sections as an array.
- Introduced dynamic IDs for each section, varying by selected language.
- Added comments for improved code documentation.
- Included interfaces in the types file for each section.

### Removed

- Removed default data for props.

---

## [v1.2.1] - 24/09/2023

### Changes

- Improved scroll blocking when the menu is open using the "prevent" method.

---

## [v1.2.2] - 07/10/2023

### Changes

- Upgraded to Nuxt 3.7.4.
- Minor bug fixes.
- Renamed internal fields and TypeScript interfaces for better readability.
- Adjusted scrolling behavior to exclude the header's height.

---

## [v1.3.0] - 22/10/2023

### Changes

- Improved accessibility.
- Updated type imports for clarity.
- Upgraded to Nuxt 3.8.0.
- Updated dependencies in package.json.
- Moved animation and font classes to `tailwind.config.js`.
- Restructured primary application logic into `app.vue`.
- Reorganized Header component placement for improved structure.
- Renamed `HeaderComponent` to `AppHeader`.
- Renamed several SVG icons.

### Removed

- Simplified project structure by removing the `/layout` directory.
- Deleted the main SCSS file, integrating its functionality into `css/tailwind.css`.

---

## [v1.4.0] - 21/11/2023

### Changes

- Introduced a new project in the "Projects" section.
- Added new SVG icons (Astro, Node, and Express).
- Created a template (`error.vue`) for handling non-existent URLs.
- Moved terminal content to a new component for better organization.
- Implemented smoother transitions on icon hover.
- Enhanced responsiveness for various resolutions.
- Defined base URL (`/MyPortfolio`) in Nuxt runtime config.
- Added links to official websites for technologies used in projects.
- Improved readability in certain code sections.
- Removed background color from the theme switcher.
- Reformatted some code sections.
- Updated dependencies in `package.json`.

### Removed

- Deleted `undefined.webp` image as it’s no longer necessary.

---

## [v1.4.1] - 22/11/2023

### Changes

- Moved some icons to Vue components.

---

## [v1.4.2] - 27/11/2023

### Added

- New alert for browsers that do not support CSS scroll animations.

---

## [v1.5.0] - 11/12/2023

### Changes

- Updated to Vue 3 `<script setup>` syntax.
- Improved variable names and refactored component structure.
- Updated color scheme.
- Various bug fixes.

### Added

- Reusable alert component.
- SVG dividers between sections.

---

## [v1.6.0] - 20/01/2024

### Changes

- Redesigned the "Presentation" section and the "back to top" button.
- Improved the dark/light mode switch component.
- Enhanced animations and transitions.
- Upgraded to Nuxt 3.9.3.
- Reduced profile photo size.
- Set default language to Spanish instead of English.

### Added

- Scroll animation to the navbar.
- New alerts and footer/badge components.

### Removed

- Deleted unfinished/redundant projects.

---

## [v1.7.0] - 24/03/2024

### Changes

- Updated dependencies.
- Redesigned navbar icons and added a scrolling reduction effect.
- Replaced Nuxt Icon library with nuxt-icons to utilize local SVGs.
- Organized icons in the assets folder.
- Removed alerts from the projects section.
- Moved the .nojekyll file inside the public folder.

### Added

- Introduced a new project: A Spotify Clone.

### Removed

- Deleted SASS dependency.

---

## [v1.7.1] - 31/03/2024

### Changes

- Updated texts and moved all SVG logos into the assets folder.
- Enhanced props typing and made minor style adjustments.
- Upgraded to Nuxt 3.11.1.

---

## [v1.7.2] - 16/04/2024

### Changes

- Fixed incorrect URL to Docker website and updated dependencies.

### Removed

- Deleted outdated PDF files from the public folder.

### Added

- New modal to inform users to contact me for the CV.

---

## [v1.7.3] - 24/04/2024

### Changes

- Fixed the dropdown menu issue where it didn’t close when clicking outside the language selector.

---

## [v1.7.4] - 12/05/2024

### Changes

- Updated dependencies.
- Migrated all defineProps to TypeScript style.
- Implemented minor fixes.

### Removed

- Deleted unused TypeScript interfaces.

### Added

- More details for each job and new TypeScript interfaces for alerts.

---

## [v1.7.5] - 13/06/2024

### Changes

- Upgraded to Nuxt 3.12.1.

### Removed

- Deleted unused dependency.

---

## [v1.7.6] - 09/07/2024

### Changes

- Updated dependencies.
- Replaced all `h-screen` classes with `h-dvh`.

---

## [v1.8.0] - 10/08/2024

### Changes

- Reorganized data by removing language JSON files and migrating to a TypeScript data file.
- Moved alert icons to a separate SVG file.
- Introduced a dynamic progress bar that adjusts based on scroll position.
- Minor code optimizations.
- Set compatibility date in nuxt.config ([Nuxt Documentation](https://nuxt.com/docs/api/nuxt-config#compatibilitydate)).
- Updated dependencies to the latest versions.

---

## [v2.0.0] - 22/09/2024

### Changes

- Revamped the entire portfolio for a modern, clean, and user-friendly interface, prioritizing aesthetics and functionality.
- Implemented multilanguage support with i18n.
- Updated dependencies to the latest versions.
