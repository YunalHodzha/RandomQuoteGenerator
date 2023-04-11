function generator() {
    let quotes = {
        "-Oscar Wilde": '“Be yourself; everyone else is already taken.”',
        "― Marilyn Monroe": '“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”',
        "― Albert Einstein": '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
        "― Frank Zappa": '“So many books, so little time.”',
        "― Marcus Tullius Cicero": '“A room without books is like a body without a soul.”',
        "― Mahatma Gandhi": '“Be the change that you wish to see in the world.”',
        "― Mark Twain": '“If you tell the truth, you don\'t have to remember anything.”',
        "― Oscar Wilde": '“To live is the rarest thing in the world. Most people exist, that is all.”',
        "― Thomas A. Edison": '“I have not failed. I\'ve just found 10,000 ways that won\'t work.”',
        "― Friedrich Nietzsche": '“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”',
        "― Eleanor Roosevelt": '“A woman is like a tea bag; you never know how strong it is until it\'s in hot water.”',
        "― Lao Tzu": '“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”',
        "― Pablo Picasso": '“Everything you can imagine is real.”',
        "― Bob Marley": '“One good thing about music, when it hits you, you feel no pain.”',
        "― Charles Bukowski": '“Some people never go crazy. What truly horrible lives they must lead.”',
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}

