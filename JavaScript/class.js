class Personel{

	constructor(ad,soyad){
		this.ad=ad;
		this.soyad=soyad;
	}

	kaydet(){
		console.log("Personel kaydedildi.")
	}

}

const personel=new Personel("Esad","Bozkurt")

personel.kaydet();
console.log(personel.ad+" "+personel.soyad)