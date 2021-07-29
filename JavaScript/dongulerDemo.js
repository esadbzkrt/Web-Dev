var kullanicilar = [
	{ email: "esadbzkrt@gmail.com", sifre: "123456" },
	{ email: "serdarim@yilanserdar.com", sifre: "seker" }
]

var tweets = [
	{ email: "esadbzkrt@gmail.com", tweet: "getirdin mi?" },
	{ email: "serdarim@yilanserdar.com", tweet: "napıyosun hacı" }
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function kullaniciVarmi(email, sifre) {
	for (i = 0; i < kullanicilar.length; i++) {
		if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
			return true;
		}
	}
	return false;}

	function giris() {
		if (kullaniciVarmi(email,sifre)) {
			console.log(tweets)
		}
		else {
			console.log("Id or Pw wrong")
		}
	}

	giris(email, sifre);