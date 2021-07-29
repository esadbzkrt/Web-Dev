for(i=1;i<=10;i++){

	console.log(i)

}
console.log("end")

var Sehirler=["Ankara","İstanbul","İzmir"]

for(i=0;i<Sehirler.length;i++){

	console.log(Sehirler[i])

}

Sehirler.forEach(function(sehir){
	
	console.log("Şehir " + sehir)
})