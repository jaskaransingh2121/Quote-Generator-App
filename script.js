let quotetext = document.getElementById("quote");
let quoteauthor = document.getElementById("author");
let newquotebtn = document.getElementById("new-quote");


const quotes = [
    { content: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { content: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { content: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { content: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
    { content: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { content: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" }
];

function getquote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quotetext.textContent = quotes[randomIndex].content;
    quoteauthor.textContent = `- ${quotes[randomIndex].author}`;
}


newquotebtn.addEventListener("click", getquote);


quotetext.textContent = "Click the button to get a quote!";
quoteauthor.textContent = "";


