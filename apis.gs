function shapeShift(from, to) {
  var _from = from.toUpperCase()
  var _to = to.toUpperCase()
  
  return {
    url: function() {
      return "https://shapeshift.io/rate/" + _from + "_" + _to
    },
    extract: function(data) {
      return data["rate"]
    }
  }
}

function cryptoCompare(from, to) {
  var _from = from.toUpperCase()
  var _to = to.toUpperCase()
  
  return {
    url: function() {
      return "https://min-api.cryptocompare.com/data/pricehistorical?fsym=" + _from + "&tsyms=" + _to + "&ts=" + date().unix     
    },
    extract: function(data) {
      return data[_from][_to]
    }
  }
}