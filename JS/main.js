import { scrollAct } from "./scroll.js";    
import { initMobileMenu } from "./MobileMenu.js";
import { darkMode } from "./darkmode.js";

document.addEventListener('DOMContentLoaded', () =>{
    scrollAct();
     initMobileMenu();
     darkMode();
});

