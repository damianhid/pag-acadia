const slider = document.querySelector("#slider");;
let sliderSection = document.querySelectorAll(".slider-secction");
let sliderSectionLast = sliderSection[sliderSection.length -1 ];

const btnLeft  = document.querySelector("#btnL");
const btnRight = document.querySelector("#btnR");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function next(){
    let sliderSectioFirst =  document.querySelectorAll(".slider-secction")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectioFirst);
        slider.style.marginLeft = "-100%";
    
    },500 );
}
btnRight.addEventListener("click", function(){
    next();
});

function prev(){
    let sliderSection = document.querySelectorAll(".slider-secction");
    let sliderSectionLast = sliderSection[sliderSection.length -1 ];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    
    },500 );
}
btnLeft.addEventListener("click", function(){
    prev();
});

setInterval( function(){
    next();
    
},4000);