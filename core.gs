function addRates(from, sheetIndex, cryptos) {
  var in_usd = getRate(cryptoCompare)(from, 'usd')
  var longDate = date().longFormat
  var timeStamp = date().unix
  var rates = getRates(from, cryptos)

  var all = [
    longDate, 
    timeStamp, 
    in_usd
  ]
  .concat(rates)
  
  Logger.log(all)
  
  addRow(sheetIndex, all)  
}

function getRates(from, cryptos) {
  return cryptos.map(function (crypto) {
    return getRate(shapeShift)(from, crypto)    
  })
}

function getRate(api) {
  return function(from, to) {
    if (from === to) return 1
    var _api = api(from, to)
    var url = _api.url()  
    var data = fetchDataFromURL(url)  
    var rate = _api.extract(data)
    
    return rate
  }  
}

function fetchDataFromURL(url) {
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);
  
  return data;
}