function selam() {
	console.log("hi");
}
selam();

const selamFonksiyonu = () => console.log("selamm"); // kısa fonksiyonlar böyle de olur. 
const selamFonksiyonu2 = (Alo) => console.log(Alo); // kısa fonksiyonlar böyle de olur. 

selamFonksiyonu();
selamFonksiyonu2("Aloo2");

var topla = (sayi1, sayi2) => { return sayi1 + sayi2; }
let toplam=topla(3,4);

console.log(toplam)
