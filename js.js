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



let intronb = 0;


const openmodal = function(){
    overlayinto.classList.remove('hidden');
    modalintro.classList.remove('hidden')
}
const closeModal = function(){
    overlayinto.classList.add('hidden')
    modalintro.classList.add('hidden')
}

intronext.addEventListener('click', function(){
    if (intronb === 0){
        introtitle.innerHTML = "Nouveau Titre";
        introtxt.innerHTML = "Ceci est un nouveau paragraphe super long <br/> yesxy ";
        introindicator.innerHTML = "2/3";
        intronb = 1;
    }else if (intronb === 1){
        introtitle.innerHTML = "Titre 3";
        introtxt.innerHTML = "ffze <br/>oi <br/>oiu <br/>oih <br/>hoihoçihjoi <br/> bfdbfdbd<br/>sqgedzsg <br/>64486 <br/>47 <br/>87 <br/>74v <br/>5 <br/> <br/>0896 <br/>08 <br/> <br/>54";
        introindicator.innerHTML = "3/3";
        intronb = 2;
    }
})


introprev.addEventListener('click', function(){
    if (intronb === 0){
        console.log('🔪');
    }else if (intronb === 1){
        introtitle.innerHTML = "Popup Avec dudfsfstexte";
        introtxt.innerHTML = "Tous le titre et le texte de la popup vas changer en fonction du boutton  \"En savoir +\" sur lequel on clique grave à la magie du javascript. <br/>   Cette popup a un fond semi transparant et flou ce qui fait un joli effet. Norlament, toute la v2 de se site est responsive. J'ai pas encore eu le temps (et surtout la connexion) pour tester tout ça mais j'espère pouvoir le faire au + vite 🤞!";
        
        introindicator.innerHTML = "1/3";
        intronb = 0;
    }else if (intronb === 2){
        introtitle.innerHTML = "Nouveau Titre";
        introtxt.innerHTML = "Ceci est un nouveau paragraphe super long <br/> yesxy ";
        introindicator.innerHTML = "2/3";
        intronb = 1;
    }
    
})


closemodal.addEventListener('click', closeModal)
overlayinto.addEventListener('click', closeModal)
introbon.addEventListener('click', openmodal)





console.log(document.addEventListener('keydown'))


document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
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


