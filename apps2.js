const title = document.querySelector('.titre');
const buttonHeader = document.querySelector('.header .button');
const logo = document.querySelector('.logo');
const link = document.querySelectorAll('.link-item');
const navBar = document.querySelectorAll('.navbar');

const paragraphHistory = document.querySelectorAll('#notreHistoire .paragraph-history');
const notreHistoire = document.querySelector('#notreHistoire ');

const boxIMG1 = document.querySelector('.box:nth-child(1) .box-img');
const boxIMG2 = document.querySelector('.box:nth-child(2) .box-img');
const boxIMG3 = document.querySelector('.box:nth-child(3) .box-img');
const boxDescription1 = document.querySelector('.box:nth-child(1) .box-description');
const boxDescription2 = document.querySelector('.box:nth-child(2) .box-description');
const boxDescription3 = document.querySelector('.box:nth-child(3) .box-description');

const text = document.querySelector('.text');

const inputEmail = document.querySelector('.inputEmail');
const inputButton = document.querySelector('.inputButton');
const formulaire = document.querySelector('.formulaire');

const mediaItems = document.querySelectorAll('.link-media');
const logoFooter = document.querySelector('.logo-footer');
const footer = document.querySelector('.footer');
const copiyright = document.querySelector('.copiyright');

const boxSpecialite = [boxIMG1, boxDescription1, boxIMG2, boxDescription2,boxIMG3, boxDescription3];
const listeInput = [inputEmail,inputButton];



//Animation header après chargement de page
window.addEventListener("load", init);


//Apparitiion du texte de notre histoire
gsap.to(paragraphHistory,{
  duration:0.5,
  autoAlpha:1,
  x:0,
  stagger:0.5,
  scrollTrigger: {
      trigger:notreHistoire,
      // markers:true,
      start : `top 20% `, //50%
      end :`bottom 80%`, //100%
      toggleActions : "play none none none",
      scrub:1
  }
});

//apparition scroll des box dans la section spécialité
for(const element of boxSpecialite ){
  scrollBox(element, "50%", "100%");
}

//texte suivez-nous
scrollBox(text, "85%", "85%");

//apparition scroll du formulaire de l'email + bouton de validation
for(const element of listeInput){
  scrollBox(element, "100%", "100%");
}


//apparition scroll des éléments du footer
scrollBox(logoFooter, "100%", "100%", footer);


gsap.to(mediaItems,{
  duration:0.1,
  autoAlpha:1,
  x:0,
  display:'inline-block',
  stagger:0.1,
  scrollTrigger: {
      trigger:mediaItems,
      // markers:true,
      start : `top 100% `, //50%
      end :`bottom 100%`, //100%
      toggleActions : "play none none none",
      scrub:1
  }
});

scrollBox(copiyright, "100%", "100%", footer);



//Fonctions

function init() {
  const TL = gsap.timeline();

  TL
  .to(title, { autoAlpha: 1,  y:"-50%" ,delay: 0.2  })
  .to(buttonHeader, {autoAlpha:1, y:"-50%"}, "-=0.2")
  .to(navBar, {autoAlpha:1, y:0, duration:0.4, stagger:0.1},"-=0.2")
  .to(logo, {autoAlpha:1, y:0, duration:0.4, stagger:0.1},"-=0.2")
  .to(link, {autoAlpha:1, y:0, duration:0.4, stagger:0.1 }, "-=0.2")

}

function scrollBox(box, startPos, endPos, boxTrigger = box){
  gsap.to(box,{
    duration:0.1,
    autoAlpha:1,
    x:0,
    y:0,
    display:'inline-block',
    scrollTrigger: {
        trigger:boxTrigger,
        // markers:true,
        // Trigger Scroller
        start : `top ${startPos} `, //50%
        end :`bottom ${endPos}`, //100%
        toggleActions : "play none none none",
        scrub:1
    }
  });
}

