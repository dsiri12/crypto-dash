
https://docs.coingecko.com/docs/endpoint-showcase

https://www.coingecko.com/en/api/pricing

https://docs.coingecko.com/docs/endpoint-showcase
/coins/markets — Display all the supported coins with market related data.


curl --request GET \
  --url 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h' \
  --header 'x-cg-pro-api-key: <api-key>'

  create api key from
  https://www.coingecko.com/en/developers/dashboard