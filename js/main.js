function generate() {
	var quotes = {
		"― Albert Einstein" : `“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.”`,
		"― Deepak Chopra" : `“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”`,
		"― Alysha Speer" : `“You never really know what's coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.”`,
	}

	var authors = Object.keys(quotes);
	console.log(authors);

	var author = authors[Math.floor(Math.random() * authors.length)];

	var quote = quotes[author];

	document.getElementById("quote").innerHTML = quote;

	document.getElementById("author").innerHTML = author;
}