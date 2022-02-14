const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*MUDAR A BOX-SHADOW DA PAGINA*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}



/* Carrosel da biblioteca swiper*/

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* scroll review = mostrar elementos ao rolar a pagina*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .mage, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #textimonials .testimonials,
  #contact .text, #contact .links
  footer .brand, footer .social


`,
  { interval: 100 }
)

/*Botao voltar para o topo*/


function backToTop(){
  
  const backToTopButton = document.querySelector('.back-to-top')

  if(window.scrollY >= 560){
    backToTopButton.classList.add('show')
  }else {
    backToTopButton.classList.remove('show')
  }
}

/* MENU ATIVO */

const sections = document.querySelectorAll('main section[id]')

function ActivatMenu(){

  const checkPoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for( const section of sections ){
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkPointStart = checkPoint >= sectionTop
    const checkPointEnd = checkPoint <= sectionTop + sectionHeight

    if(checkPointStart && checkPointEnd){
      document.querySelector('nav ul li a[href*=' + sectionId + ']' )
      .classList.add('active')
    }else{
      document.querySelector('nav ul li a[href*=' + sectionId + ']' )
      .classList.remove('active')
    }
  }

}


/* when scroll*/
window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
  backToTop()
  ActivatMenu()
})


