document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("popup-menu");
    const btn = document.getElementById("btn");
    const arrow = document.getElementsByClassName("fa-arrow-left")[0];
    const searchP = document.getElementById("search");
    const zoom = document.getElementsByClassName("search-zoom")[0];
    const close = document.getElementById("close");
         
    if(document.body.contains(document.getElementById('btn'))){
      btn.onclick = () => {
        modal.classList.add('animate');
      }
      arrow.onclick = () => {
        modal.classList.remove('animate');
      }
    }
  
    if(zoom){
      zoom.onclick = () => {
        searchP.style.display = 'block'
      }
    }
  
    close.onclick = () => {
      searchP.style.display = 'none'
    }
      
    window.onclick = event => {
      if (event.target == modal) {
        modal.classList.remove('animate');
      }
      if (event.target == searchP) {
        searchP.style.display = 'none'
      }
    }
  
    window.onscroll = function changeNav(){
      var navBar = document.getElementsByTagName('header')[0],
          body = document.getElementsByTagName('body')[0],
          sliderSection = document.getElementsByClassName('header-slider')[0],
          sliderSectionTop = Math.abs(body.getBoundingClientRect().top), 
          navBarHeight = sliderSection.getBoundingClientRect().height;
  
      if(sliderSectionTop <= navBarHeight) {
        navBar.classList.remove("scroll")
      } else if(sliderSectionTop >= navBarHeight) {
        navBar.classList.add("scroll")
      }
    }
  });      