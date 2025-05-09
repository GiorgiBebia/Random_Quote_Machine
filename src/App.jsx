import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const res = await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );
      const data = await res.json();
      const quotes = data.quotes;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } catch (error) {
      setQuote("Failed to fetch quote.");
      setAuthor("System");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div id="quote-box" className="bg-white p-6 rounded-lg shadow-md max-w-lg text-center">
        <p id="text" className="text-xl mb-4">"{quote}"</p>
        <p id="author" className="text-right mb-6">- {author}</p>
        <div className="flex justify-between">
          <a
            id="tweet-quote"
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Tweet
          </a>
          <button
            id="new-quote"
            onClick={fetchQuote}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;