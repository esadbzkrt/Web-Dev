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

function giris() {
	if ((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) ||
	    (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)){
			console.log(tweets)
		}
		else{
			console.log("Id or Pw wrong")
		}
}

giris(email,sifre)