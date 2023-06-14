// var imgUrl = document.querySelector("#imageChance");
// imgUrl = ["image/dice-1.png","image/dice-2.png","image/dice-3.png","image/dice-4.png","image/dice-5.png","image/dice-6.png"];
// "background-Image:url('./images/1.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
// var btn = document.querySelector("#btn");

var change1 = document.querySelector("#imageChance");
var change2 = document.querySelector("#imageChance2");

function changeImage(){
    var rnd = Math.floor(Math.random() * 6 + 1);

    if(rnd === 1 ){
        change1.style.cssText =  "background-Image:url('image/dice-1.png');background-position: center; background-repeat: no-repeat; background-size: cover;";
    }else if(rnd === 2 ){
        change1.style.cssText =  "background-Image:url('image/dice-2.png');background-position: center; background-repeat: no-repeat; background-size: cover;";
    }else if(rnd === 3 ){
        change1.style.cssText =  "background-Image:url('image/dice-3.png');background-position: center; background-repeat: no-repeat; background-size: cover;";
    }else if(rnd === 4 ){
        change1.style.cssText =  "background-Image:url('image/dice-4.png');background-position: center; background-repeat: no-repeat; background-size: cover;";
    }else if(rnd === 5 ){
        change1.style.cssText =  "background-Image:url('image/dice-5.png');background-position: center; background-repeat: no-repeat; background-size: cover;";
    }
    if(rnd === 6 ){
        change1.style.cssText =  "background-Image:url('image/dice-6.png');background-position: center; background-repeat: no-repeat; background-size: cover;";
    }
    // -----------for #change2
    var rnd2 = Math.floor(Math.random() * 6 + 1);
    if(rnd2 === 1 ){
        change2.style.cssText =  "background-Image:url('image/dice-1.png');background-position: center; background-repeat: no-repeat; background-size: cover;";
    }else if(rnd2 === 2 ){
        change2.style.cssText =  "background-Image:url('image/dice-2.png');background-position: center; background-repeat: no-repeat; background-size: cover;";
    }else if(rnd2 === 3 ){
        change2.style.cssText =  "background-Image:url('image/dice-3.png');background-position: center; background-repeat: no-repeat; background-size: cover;";
    }else if(rnd2 === 4 ){
        change2.style.cssText =  "background-Image:url('image/dice-4.png');background-position: center; background-repeat: no-repeat; background-size: cover;";
    }else if(rnd2 === 5 ){
        change2.style.cssText =  "background-Image:url('image/dice-5.png');background-position: center; background-repeat: no-repeat; background-size: cover;";
    }
    if(rnd2 === 6 ){
        change2.style.cssText =  "background-Image:url('image/dice-6.png');background-position: center; background-repeat: no-repeat; background-size: cover;";
    }

    if(rnd>rnd2){
        document.querySelector("#imageChance").style.backgroundColor ="#1746A2";
        document.querySelector("#imageChance2").style.backgroundColor = "#FF55BB";
        document.querySelector("#h2-1").classList.add("visible");
        document.querySelector("#h2-2").classList.remove("visible");
    }
    if(rnd<rnd2){
        document.querySelector("#imageChance").style.backgroundColor ="#FF55BB";
        document.querySelector("#imageChance2").style.backgroundColor = "#1746A2";
        document.querySelector("#h2-2").classList.add("visible");
        document.querySelector("#h2-1").classList.remove("visible");
    }
    if(rnd===rnd2){
        document.querySelector("#imageChance").style.backgroundColor ="transparent";
        document.querySelector("#imageChance2").style.backgroundColor = "transparent";
        document.querySelector("#h2-1").classList.remove("visible");
        document.querySelector("#h2-2").classList.remove("visible");
    }

}

