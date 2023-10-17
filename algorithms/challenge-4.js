function findSmallest(num1, num2, num3) {
    let smallest = 0;
    // Javascript implementation to find 
    // the smallest of three numbers
    if (num1 < num2 && num1 < num3) {
        smallest = num1 
       return smallest;
    }else if (num2 < num1 && num2 < num3) {
        smallest = num2
        return smallest;
    }else{
         smallest = num3
   }
   return smallest
      
}
module.exports = findSmallest;
