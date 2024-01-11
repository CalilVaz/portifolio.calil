const mainName = document.querySelector('header section h1.mainName')
const paragraphMedium = document.querySelector('header section p.paragraphMedium')
const paragraphStudent = document.querySelector('header section p.paragraphStudent')
const imageHoverFort = document.getElementById('imageHoverFort')
const imageHoverDiFelicia = document.getElementById('imageDiFelicia')
const imageCertificateDiscover = document.getElementById('imageCertificateDiscover')
const iconHamburger = document.getElementById('iconHamburger')
const menu = document.getElementById('menu')

/* ----- Função para colocar efeito de digitação ----- */
function typeWriter(element) {
    const textArray = element.innerHTML.split("");
    element.innerHTML = "";
    textArray.forEach((litter, i) => {
      setTimeout(() => {
        element.innerHTML += litter;
      }, 100 * i);
    });
  }
   typeWriter(mainName);
   typeWriter(paragraphMedium);
   typeWriter(paragraphStudent);

/* ----- Funções para mostrar e esconder foto trabalhando no Fort ----- */
function showImageHoverFort() {
  imageHoverFort.style.width = '90%'
  imageHoverFort.style.transition = '.8s'
}

function hiddenImageHoverFort() {
    imageHoverFort.style.width = '0%'
    imageHoverFort.style.transition = '.8s'
}

/* ----- Funções para mostrar e esconder foto trabalhando no Di Felícia ----- */
function showImageHoverDiFelicia() {
  imageHoverDiFelicia.style.width = '90%'
  imageHoverDiFelicia.style.transition = '.8s'
}

function hiddenImageHoverDiFelicia() {
  imageHoverDiFelicia.style.width = '0%'
  imageHoverDiFelicia.style.transition = '.8s'
}

/* ----- Funções para mostrar e esconder foto do certificado do curso discover rocketseat ----- */
function showImageHoverCertificate() {
  imageCertificateDiscover.style.width = '90%'
  imageCertificateDiscover.style.transition = '.8s'
}

function hiddenImageHoverCertificate() {
  imageCertificateDiscover.style.width = '0%'
  imageCertificateDiscover.style.transition = '.8s'
}

/* ----- Menu ativo conforme a seção na página ----- */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for ( const section of sections ) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul a[href*=' + sectionId + ']')
      .classList.add('active')
    } else{
      document
      .querySelector('nav ul a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
})

iconHamburger.addEventListener("click", function () {
  menu.style.display = "flex";
  menu.style.visibility = "visible";
});

let screenWidth = window.innerWidth
function closeModal() {
if (screenWidth < 701) {
  menu.style.display = "none";
  menu.style.visibility = "hidden";
}}

/* ----- Slide Fotos ----- */
const swiperEl = document.querySelector('swiper-container')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.85": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 2,
          spaceBetween: 40,
        },

      },
    });

    swiperEl.initialize();