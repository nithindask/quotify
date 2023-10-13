const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        author: "Jordan Belfort"
    },
    {
        quote: "Don't count the days, make the days count.",
        author: "Muhammad Ali"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        quote: "To succeed in life, you need two things: ignorance and confidence.",
        author: "Mark Twain"
    },
    {
        quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston S. Churchill"
    },
    {
        quote: "The real opportunity for success lies within the person and not in the job.",
        author: "Zig Ziglar"
    },
    {
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        quote: "Today's accomplishments were yesterday's impossibilities.",
        author: "Robert H. Schuller"
    },
    {
        quote: "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
        author: "Joel Brown"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "Success is not the key to happiness.",
        author: "Albert Schweitzer"
    },
    {
        quote: "The best way out is always through.",
        author: "Robert Frost"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        quote: "You become what you believe.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Don't count the days, make the days count.",
        author: "Muhammad Ali"
    },
    {
        quote: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington"
    },
    {
        quote: "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
        author: "Joel Brown"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "To succeed in life, you need two things: ignorance and confidence.",
        author: "Mark Twain"
    },
    {
        quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston S. Churchill"
    },
    {
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "The real opportunity for success lies within the person and not in the job.",
        author: "Zig Ziglar"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        quote: "Today's accomplishments were yesterday's impossibilities.",
        author: "Robert H. Schuller"
    },
    {
        quote: "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
        author: "Joel Brown"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function updateQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote.quote;

    // Create a link element for the author's name
    const authorLink = document.createElement("a");
    authorLink.textContent = randomQuote.author;
    authorLink.href = "https://instagram.com/charle_404"; // Replace with the correct URL
    authorLink.target = "_blank"; // Open the link in a new tab

    // Clear the authorElement and append the link
    authorElement.innerHTML = "";
    authorElement.appendChild(authorLink);
}

// Function to copy the quote to the clipboard
function copyToClipboard() {
    const textToCopy = quoteElement.textContent + ' - ' + authorElement.textContent;

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // Provide a visual cue to the user
    alert("Quote copied : " + textToCopy);
}

quoteElement.addEventListener("click", copyToClipboard);

// Initial call to update the displayed quote
updateQuote();
