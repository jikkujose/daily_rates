function addRow(sheetIndex, rates) {  
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var ratesSheet = spreadSheet.getSheets()[sheetIndex]

  ratesSheet.appendRow(rates)
}