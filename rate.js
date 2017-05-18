const getContent = require('./http_helper').getContent;

getContent('https://api.coinbase.com/v2/prices/spot?currency=EUR')
  .then((html) => console.log(html))
  .catch((err) => console.error(err));

