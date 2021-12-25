'use strict'


const niveaudvpt = document.querySelector('.niveaudvpt');
const overlayinto = document.querySelector('.overlayinto');
const modalintro = document.querySelector('.modalintro');
const closemodal = document.querySelectorAll('.close-modal');
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

const btnClose = document.querySelector('.close-modal');

const closeModal2 = function(){
    overlayinto.classList.add('hidden');
    modalintro.classList.add('hidden');
    modalconditions.classList.add('hidden');
    modalstrat.classList.add('hidden');
    modalccl.classList.add('hidden');
    document.querySelector('.modalsynthcon').classList.add('hidden');
}

console.log(closemodal);

for(let i = 0; i < closemodal.length; i++){
    closemodal[i].addEventListener('click', closeModal2)
}

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
        introtitle.innerHTML = "Schéma";
        introtxt.innerHTML = "<img src=\"pics/niveaudvpt1.jpg\" alt=\"Pic Stats \" class=\"prezpic\">";
        introindicator.innerHTML = "2/2";
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
        introtitle.innerHTML = "Le niveau de développement de l’économie";
        introtxt.innerHTML = "Le domaine de la cybersécurité est un domaine en plein essor qui grandit de plus en plus de chaque année. En 2020, les attaques informatiques ont augmenté de 250% sur la planète. Tous les secteurs, tous les pays sont touchés.<br/><br/>En 2020, le marché de la cybersécurité représentait $167 milliards, en 2021 $217 et on estime qu’en 2026 il vaudra $345 milliards<br/><br/>En 2019, l'Amérique du nord étais la région dans laquelle l’industrie était la plus développée et L'Asie est la région qui a connu le plus grand développement du marché.<br/><br/>Cependant, cette industrie est moins développée dans les pays dit du sud.";
        
        introindicator.innerHTML = "1/2";
        intronb = 0;
    }else if (intronb === 2){
        introtitle.innerHTML = "Schéma";
        introtxt.innerHTML = "<img src=\"pics/niveaudvpt1.jpg\" alt=\"Pic Stats \" class=\"prezpic\">";
        introindicator.innerHTML = "2/2";
        intronb = 1;
    }
    
})


document.querySelector('.consynthbtn').addEventListener('click', function(){
    document.querySelector('.modalsynthcon').classList.remove('hidden');
    
    overlayinto.classList.remove('hidden');
})



overlayinto.addEventListener('click', closeModal);
niveaudvpt.addEventListener('click', openmodal);
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
        document.getElementById('overlayinto').style.backgroundColor='#00000036';
        document.getElementById("dark_mode").innerHTML="🌙";
    }
    else if(darkmode === 0){
        darkmode = 1;
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
        document.getElementById('overlayinto').style.backgroundColor='#00000099';
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


