function run() {
  btcSheet()
  etcSheet()
  ethEtcSheet()
}

function btcSheet() {
  addRates('btc', 0, standardCryptos)
}

function etcSheet() {
  addRates('etc', 2, standardCryptos)
}

function ethEtcSheet() {
  addRates('eth', 1, ['etc'])
}

var standardCryptos = [
  'btc',
  'eth',
  'etc',
  'doge',
  'nmr',
  'ltc',
  'xmr',
  'zec'
]