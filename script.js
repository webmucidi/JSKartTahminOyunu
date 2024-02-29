//Veri dizisi JavaScript Object formatında oluşturuldu.
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

//Sık kullanılan HTML nesneleri değişkene alındı.
const kapsayici=document.getElementById("container");
const btnBasla=document.getElementById("startButton");
let sayac=0;
let kart1 = null;
let kart2 = null;

//Başlangıç butonunun tıklanma olayına ilgili fonksiyon atandı.
btnBasla.addEventListener("click",kartOlustur);

//Başlangıçta dizideki her bir eleman için birer kart oluşturuldu. Karışık gelmesi için ilgili fn çağdıldı.
function kartOlustur(){
    sayac=0;
    kapsayici.innerHTML="";
    karistir(icerikler);
    icerikler.forEach(icerik=>{
        kart=document.createElement("div");
        kart.innerHTML="?";
        kart.className="card";
        kart.dataset.value=icerik.value;
        kapsayici.appendChild(kart);
        kart.addEventListener("click",kartAc);
    })
}

//Tıklanan karta ait içerik bilgisi diziden alınarak gösterildi.
function kartAc(){
    sayac++;
    console.log(sayac);
    if(sayac==1){
        kart1=this;
    }
    else if(sayac==2){
        kart2=this;
        kartKarsilastir();
    }
    

    this.innerHTML=this.dataset.value;
    
}

//Dizideki nesnelerin karıştırılması için seçilen sıradaki içerik rastgele sıradakiyle yer değiştirdi.
function karistir(icerikler){
    for(let i=0;i<icerikler.length;i++){
        const rastgeleSayi = Math.floor(Math.random() * (i + 1));
        //console.log(icerikler[i],icerikler[rastgeleSayi]);
        [icerikler[i], icerikler[rastgeleSayi]] = [icerikler[rastgeleSayi], icerikler[i]];
    }
}

// Oluşturulan sayaç ile iki kart açılınca eşleşmeyi kontrol edecek fonksiyon tanımlandı.
function kartKarsilastir(){
    console.log(kart1,kart2);
    if(kart1.textContent===kart2.textContent){
        kart1.classList.add("eslesenler");
        kart2.classList.add("eslesenler");
    }
    else{
        
        kart1.innerHTML="?";
        kart2.innerHTML="?";
    
    }
    sayac=0;

}
// Her bir karşılaştırma sonunda oyunun bitip bitmediğini denetleyen fonksiyon tanımlandı.



