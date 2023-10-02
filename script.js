const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");
    
    //Animate Links
    navLinks.forEach((link,index) => {
      if (link.style.animation){
        link.style.animation = "";
      }
      else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      console.log(index/7 + 0.3);
      }
    });
    
    //Burger Animation
    burger.classList.toggle("toggle");
    
  });
  
}

navSlide();


//Below is for spin loading animation

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  //loader without delay
  //loader.classList.add("loader-hidden");
  setTimeout(() => loader.classList.add("loader-hidden"), 1000);
  
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader")
  });
});


//Below is for cursor

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");
let projectLinks = document.querySelectorAll(".project-boxes a");
let logo = document.querySelector(".logo");
let footLinks = document.querySelector(".foot a");
let spotlightLinks = document.querySelector(".spotlight a");
let spotlightHeads = document.querySelector(".spotlight h1");

window.addEventListener("mousemove", cursor);

function cursor(e){
  mouseCursor.style.top = e.clientY + "px";
  mouseCursor.style.left = e.clientX + "px";
}

navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});

projectLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});

logo.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow");
});
logo.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow");
});

footLinks.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow");
});
footLinks.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow");
});

spotlightHeads.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow");
});
spotlightHeads.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow");
});

spotlightLinks.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow");
});
spotlightLinks.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow");
});

