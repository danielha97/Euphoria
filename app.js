let slides = document.querySelectorAll(".slide");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click",()=>{
    counter++;
    carousel()
});

prevBtn.addEventListener("click",()=> {
    counter--;
    carousel()
});

function carousel(){

    if (counter === slides.length){
        counter = 0;
    }
    if (counter < 0){
        counter = slides.length -1;
    }
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`;
    });
}


let svcImg = document.querySelectorAll(".service-image");
let crosses = document.querySelectorAll(".cross img");

crosses.forEach((cross)=>{
    cross.addEventListener("click",(e)=>{
        let clear = e.currentTarget.parentElement.parentElement.parentElement;
        clear.classList.remove("show");
    });
});

svcImg.forEach((item)=>{
item.addEventListener("click",(e)=>{
    let Tar = e.currentTarget.parentElement;
    Tar.classList.add("show");   
});
});


const container = document.querySelector(".button-container");
const tabBtn = document.querySelectorAll(".tab-button");
const content = document.querySelectorAll(".content");

container.addEventListener("click",(e)=>{
   const id = e.target.dataset.link; 
    if(id){
        tabBtn.forEach((butt)=>{
            butt.classList.remove("active");
            e.target.classList.add("active");
        });
        content.forEach((cont)=>{
            cont.classList.remove("active");
        });
    }
    const ele = document.getElementById(id);
    ele.classList.add("active");
})