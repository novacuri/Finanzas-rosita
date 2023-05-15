const apiKey = 'YOUR_API_KEY';
const symbols = ['AAPL', 'GOOGL', 'MSFT'];

symbols.forEach(symbol => {
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const quote = data['Global Quote'];
      const price = quote['05. price'];
      console.log(`${symbol} price: ${price}`);
    })
    .catch(error => {
      console.log(`Error fetching ${symbol} price: ${error}`);
    });
});
