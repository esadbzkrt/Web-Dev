abstract class KrediBase {
	constructor() {
		
	}
	kaydet():void{
		console.log("kaydedildi.")
	}
	abstract hesapla():void;
}

class TuketiciKredisi extends KrediBase {
	hesapla(): void {
		console.log("Tüketici Kredisine Göre Hesaplandı.")
	}
	constructor() {
		super();
	}
}

class MortgageKredisi extends KrediBase {
	hesapla(): void {
		console.log("Konut Kredisine Göre Hesaplandı.")
	}
	constructor() {
		super();
	}
}

let tuketiciKredisi=new TuketiciKredisi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

