let quote = document.getElementById("text");
let author = document.getElementById("author");
let btn = document.getElementById("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");
const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url).then((data) => data.json())
        .then((item) => {
            console.log(item.content);
            console.log(item.author);
            quote.innerText = item.content;
            author.innerText = item.author;
        });
}
soundBtn.addEventListener("click", () => {
    //SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
});

// Copy Button
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quote.innerText);
});

