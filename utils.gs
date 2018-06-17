function date() {
  var unix = Math.round(Date.now() / 1000).toString()
  
  var today = new Date()
  var _date = today.getDate().toString()
  var date = _date.length == 1 ? "0" + _date : _date
  var _month = (today.getMonth() + 1).toString()
  var month = _month.length == 1 ? "0" + _month : _month
  var year = today.getYear().toString()
  
  var shortFormat = date + "/" + month + "/" + year
  
  var hours = today.getHours()
  var minutes = today.getMinutes()
  var seconds = today.getSeconds()  
  var time = [hours, minutes, seconds].join(":")
  
  var longFormat = shortFormat + ' ' + time
  
  return {
    unix: unix, 
    shortFormat: shortFormat, 
    longFormat: longFormat
  }
}