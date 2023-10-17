function isLeapYear(year) {
    
    // define a function to check the leap year

    // check if the year is divisible by 4, 100, and 400
    let divisibleBy4 = year % 4 == 0;
    let divisibleBy100 = year % 100 !== 0;
    let divisibleBy400 = year % 400 == 0;
  
    // applying the leap year rules
  
  return divisibleBy4 && (divisibleBy100 || divisibleBy400);
  // test some examples
}

module.exports = isLeapYear;
