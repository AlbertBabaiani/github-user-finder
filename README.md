# 🔍 DevFinder | GitHub User Profile Explorer

<div align="center">

  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
  <img src="https://img.shields.io/badge/Responsive-Mobile_First-05A328?style=for-the-badge" alt="Responsive" />

  <br />
  <br />

  <a href="https://github-user-finder-ng.vercel.app/">
    <img src="https://img.shields.io/badge/View_Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="View Live Demo" />
  </a>
  
  <a href="https://github.com/AlbertBabaiani/github-user-finder">
    <img src="https://img.shields.io/badge/GitHub_Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" />
  </a>

   <a href="https://www.figma.com/design/uDUI9mShrkzbwHcLSIdQyx/github-user-search-app?node-id=0-1&t=aqkCwCA4I5OAwwtN-0">
    <img src="https://img.shields.io/badge/Figma_Design_File-000000?style=for-the-badge&logo=figma&logoColor=white" alt="Figma Design" />
  </a>

</div>

---

## 🚀 About The Project

**DevFinder** is a fully responsive, sleek web application that interacts directly with the GitHub REST API to fetch and display detailed user profile data instantly. Built with a mobile-first philosophy, it allows users to search for any developer on GitHub and view crucial statistics, bio information, and social links in a clean, highly readable interface.

Beyond standard API fetching, this application prioritizes a premium user experience. It features a fully persistent Dark/Light mode toggle, perfectly smooth layout animations, comprehensive error handling with custom empty-state UI, and intelligent data formatting to ensure all external links and missing data are handled gracefully.

### Key Technical Concepts

This project is a showcase of modern front-end web development, utilizing the absolute latest features of the Angular framework and architectural best practices:

- **Modern Angular Reactivity:** Completely drops traditional RxJS behavior subjects for UI state in favor of **Angular Signals**. Uses `signal`, `computed`, and `effect` for granular, boilerplate-free state management and instant DOM updates without `ChangeDetectorRef`.
- **State-Driven UI Animations:** Utilizes `@angular/animations` to orchestrate smooth UI choreographies. Features a custom `@expandFade` trigger that smoothly expands the profile card's height and fades it in, creating a satisfying "push" effect on the search bar.
- **Persistent Theme Management:** A dedicated `ThemeChanger` service uses Angular's `effect()` primitive to automatically sync a user's Dark/Light mode preference with the `document.body` class and `localStorage` for a seamless experience across sessions.
- **Robust Error Handling:** Avoids jarring alert boxes by dynamically rendering a beautifully styled "Empty State" card when the GitHub API returns a 404, using the new Angular `@if / @else if` control flow.
- **Advanced SCSS Architecture:** Employs CSS Custom Properties (variables) bound to theme classes to instantly globally recolor the application interface. Also utilizes modern CSS properties like `aspect-ratio` to prevent layout shifts during image loading.

---

## 📱 Visual Showcase

> **Note:** Because this app features state-driven expand/fade transitions, a live demo is highly recommended to experience the UI mechanics!

<div align="center"> 
  <h3>Desktop Experience</h3>
  <img src="src/assets/previews/desktop-preview.png" alt="Desktop Interface showing DevFinder" width="800" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);"/>
</div>

<br/>

<div align="center" style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; align-items: start;">
  <div>
    <h3>Tablet View</h3>
    <img src="src/assets/previews/tablet-preview.png" alt="Dark Mode Tablet Interface" width="450" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);"/>
  </div>
  <div>
    <h3>Phone View</h3>
    <img src="src/assets/previews/mobile-preview.png" alt="Dark Mode Phone Interface showing the search bar and profile" height="550" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);"/>
  </div>
</div>

---

## 🛠️ Built With

- **[Angular 20](https://angular.dev/)** - Framework utilizing Standalone Components, Signals, `input.required()`, and the new Control Flow syntax.
- **[TypeScript](https://www.typescriptlang.org/)** - For strict typing of the `GitHubUser` JSON data models and application logic.
- **[SCSS / SASS](https://sass-lang.com/)** - Utilizing deeply nested syntax and CSS variables for a maintainable, two-tier design system.
- **[Angular Animations](https://angular.dev/guide/animations)** - For complex, state-driven UI transitions (height calculations, opacity fading, and staggering).
- **[GitHub REST API](https://docs.github.com/en/rest)** - The backend data source for real-time developer profiles.
