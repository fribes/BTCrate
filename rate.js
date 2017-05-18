const getContent = require('./http_helper').getContent;

const options = {
  hostname: 'api.coinbase.com',
  path: '/v2/prices/spot?currency=EUR',
  method: 'GET',
  headers: {
    'CB-VERSION': '2017-05-10'
  }
}

getContent(options)
  .then((json) => console.log(json))
  .catch((err) => console.error(err));

