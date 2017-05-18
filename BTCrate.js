const getContent = require('./http_helper').getContent;
const notifier = require('node-notifier');
const DELAY = 300000;

const options = {
  hostname: 'api.coinbase.com',
  path: '/v2/prices/spot?currency=EUR',
  method: 'GET',
  headers: {
    'CB-VERSION': '2017-05-10'
  }
}

function poll() {
	getContent(options)
	  .then((resp) => doNotify(JSON.parse(resp)))
	  .catch((err) => console.error(err));
	setTimeout(poll, DELAY)
}

function doNotify(resp) {
	// notifier.notify(makeMessage(resp)); 

	notifier.notify({
	  'title': getPrice(resp),
	  'message': 'BTC price in ' + getCurrency(resp)
	});
}

function getPrice(resp) {
	return resp.data.amount;
}

function getCurrency(resp) {
	return resp.data.currency;
}

poll();