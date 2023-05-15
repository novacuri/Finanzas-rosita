const asset = "AAPL"; // Activo financiero para obtener cotización
const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${asset}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const quote = data.quoteResponse.result[0];
    console.log(`El precio actual de ${quote.symbol} es ${quote.regularMarketPrice}`);
  })
  .catch(error => console.log(error));
