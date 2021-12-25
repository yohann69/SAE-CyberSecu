'use strict'


const introbon = document.querySelector('.introbtn');
const overlayinto = document.querySelector('.overlayinto');
const modalintro = document.querySelector('.modalintro');
const closemodal = document.querySelector('.close-modal');
const introprev = document.querySelector('.introprev');
const intronext = document.querySelector('.intronext');
const introtxt = document.querySelector('.introtxt');
const introtitle = document.querySelector('.introtitle');
const introindicator = document.querySelector('.introindicator');
const modalconditions = document.querySelector('.modalconditions');
const modalstrat = document.querySelector('.modalstrat');
const modalccl = document.querySelector('.modalccl');
const conbtn = document.querySelector('.conbtn');
const cclbtn = document.querySelector('.cclbtn');
const btnrnd = document.querySelector('.btn-rnd');
const arrowscroll = document.querySelector('.arrowscroll');

let darkmode = 1;




let intronb = 0;
let scrollbtn = 0;

const openmodal = function(){
    overlayinto.classList.remove('hidden');
    modalintro.classList.remove('hidden')
}


document.querySelector('.scroll').addEventListener('click', function(){
    btnrnd.href="#conditions";
    arrowscroll.classList.add('bi-arrow-down');
    arrowscroll.classList.remove('bi-arrow-up');
})

const openmodalconditions = function(){
    overlayinto.classList.remove('hidden');
    modalconditions.classList.remove('hidden');
}
const openmodalccl = function(){
    overlayinto.classList.remove('hidden');
    modalccl.classList.remove('hidden');
}
btnrnd.addEventListener('click', function(){
    if(scrollbtn === 0){
        scrollbtn = 1;
        btnrnd.href="#conditions";
    }else if (scrollbtn===1){
        btnrnd.href="#strategies";
        scrollbtn = 2;
    }else if (scrollbtn===2){
        btnrnd.href="#ccl";
        scrollbtn = 50;
        arrowscroll.classList.remove('bi-arrow-down');
        arrowscroll.classList.add('bi-arrow-up');
    }else if (scrollbtn===50){
        btnrnd.href="#";
        scrollbtn = 0;
        arrowscroll.classList.add('bi-arrow-down');
        arrowscroll.classList.remove('bi-arrow-up');
    }
})


const closeModal = function(){
    overlayinto.classList.add('hidden');
    modalintro.classList.add('hidden');
    modalconditions.classList.add('hidden');
    modalstrat.classList.add('hidden');
    modalccl.classList.add('hidden');
    document.querySelector('.modalsynthcon').classList.add('hidden');
}

intronext.addEventListener('click', function(){
    if (intronb === 0){
        introtitle.innerHTML = "Problématique";
        introtxt.innerHTML = "Ceci est un nouveau paragraphe super long <br/> yesxy ";
        introindicator.innerHTML = "2/3";
        intronb = 1;
    }else if (intronb === 1){
        introtitle.innerHTML = "Annonce du plan";
        introtxt.innerHTML = "1. ieiuheiuz<br/>2. hfoqisuhfoezq <br/>3. ffzafzafz <br/>4. oih <br/>4. hoihoçihjoi <br/>5. bfdbfdbd<br/>6. sqgedzsg <br/>7. 64486 <br/>8. 47 <br/>9. 87 <br/>10. 74v <br/>11. 5 <br/>12. eg <br/>13. 0896 <br/>14. 08 <br/>15. fezf6z4fza6 <br/>16. 54";
        introindicator.innerHTML = "3/3";
        intronb = 2;
    }
})



for(let i = 0; i < closemodal.length; i++){
    closemodal[i].addEventListener('click', closeModal)
}



introprev.addEventListener('click', function(){
    if (intronb === 0){
        console.log('🔪');
    }else if (intronb === 1){
        introtitle.innerHTML = "Définition de l’industrie";
        introtxt.innerHTML = "Definition: blablablalblablabla blabla blabla bla blablablabla blabla blalbla bla lab lab lab lab lba blabl ablbla bl alb alblba blla bbla<br/>blablablalblablabla blabla blabla bla blablablabla blabla blalbla bla lab lab lab lab lba blabl ablbla bl alb alblba blla bblablablablalblablabla blabla blabla bla blablablabla blabla blalbla bla lab lab lab lab lba blabl ablbla bl alb alblba blla bbla<br/>blablablalblablabla blabla blabla bla blablablabla blabla blalbla bla lab lab lab lab lba blabl ablbla bl alb alblba blla bbla";
        
        introindicator.innerHTML = "1/3";
        intronb = 0;
    }else if (intronb === 2){
        introtitle.innerHTML = "Problématique";
        introtxt.innerHTML = "Ceci est un nouveau paragraphe super long <br/> yesxy ";
        introindicator.innerHTML = "2/3";
        intronb = 1;
    }
    
})


document.querySelector('.consynthbtn').addEventListener('click', function(){
    document.querySelector('.modalsynthcon').classList.remove('hidden');
    
    overlayinto.classList.remove('hidden');
})



closemodal.addEventListener('click', closeModal);
overlayinto.addEventListener('click', closeModal);
introbon.addEventListener('click', openmodal);
conbtn.addEventListener('click', openmodalconditions);
cclbtn.addEventListener('click', openmodalccl);




document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})

document.querySelector('.darkmode').addEventListener('click', function(){
    if(darkmode === 1){
        darkmode = 0;
        console.log(darkmode);
        document.getElementById('body').style.backgroundColor='white';
        document.getElementById('body').style.color='black';
        document.getElementById('secondbg').style.backgroundColor='#f5f5f5';
        document.getElementById('navtitle').style.color='#262626';
        document.getElementById('navtitle2').style.color='#262626';
        document.getElementById('navtitle3').style.color='#262626';
        document.getElementById('navtitle4').style.color='#262626';
        document.getElementById('navtitle5').style.color='#262626';
        document.getElementById('scrollbox').style.backgroundColor='#c9ffd0';

        document.getElementById('darkmodebtn').style.backgroundColor='#4b4b4b';
        
        document.getElementById("dark_mode").innerHTML="🌙";
    }
    else if(darkmode === 0){
        darkmode = 1;
        console.log(darkmode);
        
        document.getElementById('body').style.backgroundColor='#1b1b1b';
        document.getElementById('body').style.color='white';
        
        document.getElementById('secondbg').style.backgroundColor='#161616';
        document.getElementById('scrollbox').style.backgroundColor='#222222';
        document.getElementById('navtitle').style.color='#cccccc';
        document.getElementById('navtitle2').style.color='#cccccc';
        document.getElementById('navtitle3').style.color='#cccccc';
        document.getElementById('navtitle4').style.color='#cccccc';
        document.getElementById('navtitle5').style.color='#cccccc';
        document.getElementById("dark_mode").innerHTML="☀️";
        document.getElementById('darkmodebtn').style.backgroundColor='#fff8f8';
        document.getElementById('').style.backgroundColor='#fff8f8';
    }
})




























/////////////////// Text Spinner ////////////////////
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 3;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};
/////////////////////////////////////////////////


