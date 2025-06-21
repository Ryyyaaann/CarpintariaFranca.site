  
  
  export function scrollAct(){

      const header = document.querySelector('.main-header');
      const navLink = document.querySelectorAll('.main-nav ul li a');
      const logo = document.querySelector('.logo');
      window.addEventListener('scroll', () => {
          
          if (window.scrollY > 900) {
                header.classList.add('header-scrolled');
                navLink.forEach(link=>{ 
                    link.classList.add('main-nav-scrolled');
                });
                logo.classList.add('logo-scrolled');
            } else {
                navLink.forEach(link => { 
                    link.classList.remove('main-nav-scrolled');
                });
                header.classList.remove('header-scrolled');
                logo.classList.remove('logo-scrolled');
            }
        });
    }