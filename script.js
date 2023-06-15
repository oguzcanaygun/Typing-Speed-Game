const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random"
const quoteDisplayElement = document.getElementById("quoteDisplay")
const quoteInputElement = document.getElementById("quote-input")

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
     .then(data => data.content)
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML = quote;
    quoteInputElement.value = null;
}

renderNewQuote()