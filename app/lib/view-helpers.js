// Handlebars helpers go here
/* global Handlebars */

/**
 * commafies a number
 *
 * @example
 * {{commafy mySpecialNumber}}
 *
 * @param  {string} number number to commafy
 * @return {string}        commafied number
 */
Handlebars.registerHelper('commafy', function(number) {
  number = Handlebars.Utils.escapeExpression(number);
  return new Handlebars.SafeString(number.commafy());
});

Handlebars.registerHelper('prettyDate', function(date) {
  var newDate = new Date(date);
  
  var currentDay = newDate.getDate();
  if (currentDay < 10) {
    currentDay = '0' + currentDay;
  }
  
  var currentMonth = newDate.getMonth() + 1; //Months are zero based
  if (currentMonth < 10) {
    currentMonth = '0' + currentMonth;
  }

  var currentYear = newDate.getFullYear();
  newDate = currentYear + '-' + currentMonth + '-' + currentDay;
  return newDate;
});
