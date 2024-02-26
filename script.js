const icerikler = [
    { id: 1, value: 'BEŞİKTAŞ' },
    { id: 2, value: 'BEŞİKTAŞ' },
    { id: 3, value: 'FENERBAHÇE' },
    { id: 4, value: 'FENERBAHÇE' },
    { id: 5, value: 'GALATASARAY' },
    { id: 6, value: 'GALATASARAY' },
    { id: 7, value: 'İSTANBUL' },
    { id: 8, value: 'İSTANBUL' },
    { id: 9, value: 'BAŞAKŞEHİR' },
    { id: 10, value: 'BAŞAKŞEHİR' },
    { id: 11, value: 'KASIMPAŞA' },
    { id: 12, value: 'KASIMPAŞA' },
    { id: 13, value: 'KARAGÜMRÜK' },
    { id: 14, value: 'KARAGÜMRÜK' },
    { id: 15, value: 'PENDİK' },
    { id: 16, value: 'PENDİK' }
];
const kapsayici=document.getElementById("container");
const btnBasla=document.getElementById("startButton");
const kartlar=document.getElementsByClassName("card");

console.log(kartlar);

btnBasla.addEventListener("click",oyunaBasla);
/*
kartlar.forEach(kart => {
    kart.addEventListener("click",kartAc)
});
function kartAc(kart){
    console.log("sfsa");
    kart.innerHTML="AÇIK";
}
*/
function oyunaBasla(){
    for(let i=0;i<16;i++){
        yeniKart();
    }
}
function yeniKart(){
    kart=document.createElement("div");
    kart.innerHTML="?";
    kart.className="card";
    kapsayici.appendChild(kart);
}



