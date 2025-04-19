import { toggleMenu, toggleSubmenu } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
  toggleMenu("#mobileMenu", "#menuToggle", "#closeMenu")
});

document.addEventListener("DOMContentLoaded", () => {
  toggleSubmenu("#mobileSubmenu", "#submenuToggle");
});

document.addEventListener("DOMContentLoaded", () => {
  toggleSubmenu("#mobileSubmenu2", "#submenuToggle2")
})
