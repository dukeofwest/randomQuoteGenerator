var quotes = [
  {
    quote: "The Way Get Started Is To Quit Talking And Begin Doing.",
    author: "- Walt Disney"
  },
  {
    quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    author: "- Winston Churchill"
  },
  {
    quote: "Do not Let Yesterday Take Up Too Much Of Today.",
    author: "- Will Rogers"
  },
  {
    quote: "You Learn More From Failure Than From Success. Do not Let It Stop You. Failure Builds Character.",
    author: "- Unknown"
  },
  {
    quote: "It is Not Whether You Get Knocked Down, It is Whether You Get Up.",
    author: "- Vince Lombardi"
  },
  {
    quote: "If You Are Working On Something That You Really Care About, You Do not Have To Be Pushed. The Vision Pulls You.",
    author: "- Steve Jobs"
  }
]

function newQuote() {
  var randomNumber = quotes[Math.floor(Math.random() * (quotes.length))];
  document.getElementById('quoteDisplay').innerHTML = randomNumber.quote + '<br>' + randomNumber.author;
  document.getElementById('twitter-share-button').randomNumber;
  }

function tweetQuote(){
  var quote=  document.getElementById('quoteDisplay').textContent;
  var url="https://twitter.com/intent/tweet?text="+quote;
  //console.log(quote);
  document.getElementById("twitter-share-button").setAttribute("href",url);
}
newQuote();

