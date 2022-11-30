const openClick = document.querySelector("#openClick");
const closeClick = document.querySelector("#closeClick");

//side menu
openClick.addEventListener("click", () => {
  //열기
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
  //document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
});

closeClick.addEventListener("click", () => {
  //닫기
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  //document.body.style.backgroundColor = "white";
});

// top button
const mybutton = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// accordion
const acc = document.querySelectorAll(".accordion");
console.log(acc);

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // this.classList.toggle("active");
    const desc = this.nextElementSibling;
    const allDesc = document.querySelectorAll(".desc");
    const activeAcc = document.getElementsByClassName("accordion active");
    console.log(desc);
    // console.log(desc.scrollHeight);
    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      // Remove active class from all tabs
      for (let i = 0; i < activeAcc.length; i++) {
        activeAcc[i].classList.remove("active");
      }

      // Set the maxHeight of all desc to 0
      for (let i = 0; i < allDesc.length; i++) {
        allDesc[i].style.maxHeight = null;
      }

      // open the current tab clicked
      desc.style.maxHeight = desc.scrollHeight + "px";
      this.classList.add("active");
    }
  });
}

// 슬라이드 추가
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}

//용기내
function detailFunction() {
  if (
    confirm(
      "링크 접속 시 앱이 자동으로 다운로드됩니다. \n앱은 안드로이드에서만 실행 가능합니다. \n현재 학교 주변에서만 식당 정보를 찾을 수 있으며, 등록된 식당은 실제 식당이 아닌 임의의 데이터입니다. \n\n접속하시겠습니까?"
    ) == true
  ) {
    window.open("https://yongginaeadmin.pythonanywhere.com/download/");
  } else {
    return;
  }
}
