function checkNumber(num) {


// Function for number checking 

    if (num > 0) {
        return "Positive"
    } else if (num < 0) {
        return "Negative"
    } else {
        return "Zero"
    }
    return num;
}



module.exports = checkNumber;
