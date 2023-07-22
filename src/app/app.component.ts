import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cv_jerbi';

  ngOnInit(): void {
    this.initScripts();
  }

  initScripts(): void {
    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('sticky');
        } else {
          navbar.classList.remove('sticky');
        }
      }

      // Scroll-up button show/hide
      const scrollUpBtn = document.querySelector('.scroll-up-btn');
      if (scrollUpBtn) {
        if (window.scrollY > 500) {
          scrollUpBtn.classList.add('show');
        } else {
          scrollUpBtn.classList.remove('show');
        }
      }
    });

    // Slide-up script
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    if (scrollUpBtn) {
      scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        // Removing smooth scroll on slide-up button click
        document.documentElement.style.scrollBehavior = 'auto';
      });
    }

    // Smooth scroll on Menu Items click
    const menuItems = document.querySelectorAll('.navbar .menu li a');
    menuItems?.forEach(item => {
      item.addEventListener('click', () => {
        document.documentElement.style.scrollBehavior = 'smooth';
      });
    });

    // Toggle Navbar
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        const menu = document.querySelector('.navbar .menu');
        menu?.classList.toggle('active');
        menuBtn.querySelector('i')?.classList.toggle('active');
      });
    }

    // Typing Text Animation
    const options = {
      strings: [
        'Student',
        'Web Developer',
        'Java Developer',
        'Data Analyst'      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    new Typed('.typing', options);
    new Typed('.typing-2', options);

    // Owl Carousel
    const owlCarousel = document.querySelector('.carousel');
    if (owlCarousel) {
      (owlCarousel as any).owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: false
          }
        }
      });
    }
  }
  downloadPdf() {
    const fileName = 'cv_jerbi.pdf'; // Remplacez par le nom de votre fichier PDF
    const filePath = 'assets/image/CV-Jerbi-Ahmed.pdf'; // Remplacez par le chemin de votre fichier PDF

    // Créez un élément d'ancrage (lien) pour le téléchargement
    const anchor = document.createElement('a');
    anchor.href = filePath;
    anchor.download = fileName;

    // Cliquez sur le lien pour déclencher le téléchargement
    anchor.click();
  }
  



}
