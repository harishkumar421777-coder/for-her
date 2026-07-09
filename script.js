// ===================== PAGES =====================

const pages = document.querySelectorAll(".page");

function showPage(index){
  pages.forEach(page=>page.classList.remove("active"));
  pages[index].classList.add("active");
}

// ===================== ELEMENTS =====================

const startBtn=document.getElementById("startBtn");
const heart=document.getElementById("heart");
const score=document.getElementById("score");
const gift=document.getElementById("gift");
const blowBtn=document.getElementById("blowBtn");
const flame=document.getElementById("flame");
const restart=document.getElementById("restart");
const letter=document.getElementById("letter");

// ===================== START =====================

startBtn.addEventListener("click",()=>{
    showPage(1);
});

// ===================== HEART GAME =====================

let caught=0;

heart.addEventListener("click",()=>{

    caught++;

    score.innerHTML=`${caught} / 5`;

    if(caught<5){

        moveHeart();

    }else{

        setTimeout(()=>{

            showPage(2);

        },500);

    }

});

function moveHeart(){

    const box=document.querySelector(".heart-card");

    const maxX=box.clientWidth-100;
    const maxY=box.clientHeight-180;

    const x=Math.random()*maxX;
    const y=Math.random()*maxY+100;

    heart.style.left=x+"px";
    heart.style.top=y+"px";

    heart.style.transform="scale(1.25)";

    setTimeout(()=>{

        heart.style.transform="scale(1)";

    },150);

}

// ===================== GIFT =====================

gift.addEventListener("click",()=>{

    gift.style.transform="scale(1.2) rotate(15deg)";

    createConfetti();

    setTimeout(()=>{

        showPage(3);

    },800);

});

// ===================== CAKE =====================

blowBtn.addEventListener("click",()=>{

    flame.style.display="none";

    createConfetti();

    setTimeout(()=>{

        showPage(4);

        typeWriter();

    },1000);

});

// ===================== LETTER =====================

const text=`Happy Birthday My Love ❤️

Every moment with you is special.

Thank you for always being there.

I promise to love you forever.

❤️`;

function typeWriter(){

    letter.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        letter.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

        }

    },40);

}

// ===================== FLOATING HEARTS =====================

setInterval(()=>{

    const area=document.getElementById("bg-hearts");

    const h=document.createElement("div");

    h.className="floating-heart";

    h.innerHTML="❤️";

    h.style.left=Math.random()*100+"vw";

    h.style.fontSize=(Math.random()*15+15)+"px";

    h.style.animationDuration=(Math.random()*4+5)+"s";

    area.appendChild(h);

    setTimeout(()=>{

        h.remove();

    },9000);

},500);

// ===================== CONFETTI =====================

function createConfetti(){

    const area=document.getElementById("confetti");

    for(let i=0;i<120;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.background=`hsl(${Math.random()*360},90%,60%)`;

        c.style.animationDuration=(Math.random()*2+2)+"s";

        area.appendChild(c);

        setTimeout(()=>{

            c.remove();

        },4000);

    }

}

// ===================== REPLAY =====================

restart.addEventListener("click",()=>{

    location.reload();

});
