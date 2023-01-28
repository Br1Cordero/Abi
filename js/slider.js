const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector('#btn-left');
const btnRigth = document.querySelector('#btn-rigth');
const jsConfetti = new JSConfetti();

slider.insertAdjacentElement('afterbegin', sliderSectionLast);
confeti();

function Next (){
    let sliderSectionFrist = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all .5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend',sliderSectionFrist);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev (){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all .5s ease-in-out";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function confeti (){
    jsConfetti.addConfetti();
}

function confeti1 (){
    
    jsConfetti.addConfetti({
      
        emojis:(["🌺","🌻","✨","⭐","🌟","💫"]),
        emojiSize: 50,
        confettiRadius: 6,
        confettiNumber: 150
    });
}

btnRigth.addEventListener('click', function(){
    Next();
    confeti1();
})
btnLeft.addEventListener('click', function(){
    Prev();
    confeti1();
})


