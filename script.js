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
let logo = document.querySelector(".logo");

window.addEventListener("mousemove", cursor);

function cursor(e){
  mouseCursor.style.top = e.clientY + "px";
  mouseCursor.style.left = e.clientX + "px";
}

navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
});

logo.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow");
  logo.classList.add("hovered-link"); //yes i know its not a link
});
logo.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow");
  logo.classList.remove("hovered-link");
});