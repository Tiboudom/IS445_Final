const submitBtn = document.getElementById("submit");
const inputOne = document.getElementById("input-1");
const inputTwo = document.getElementById("input-2");
const result = document.getElementById('result');

function isCorrectValue(elem) {
	if (!elem) return false;
	const value = elem.value;
	if (!value || isNaN(value)) return false;
	return true;
}

function errorHandler() {
    result.innerHTML = "Number 1 input " + inputOne.value + " is not a valid number\nNumber 2 input" + inputTwo.value + " is not a valid input";
	return false;
}

function isRangeValueOne(elem) {
    const value = elem.value;
    const number = parseInt(value, 10);
    if (number < 2 || number > 1000) {
        result.innerHTML = "Number 1 input " + inputOne.value + " is not in range of 2 and 1000";
        return false;
    }
    return true;
}

function isRangeValueTwo(elem) {
    const value = elem.value;
    const number = parseInt(value, 10);
    console.log(number);
    if (number < 2 || number > 1000) {
        result.innerHTML = "Number 2 input " + inputTwo.value + " is not in range of 2 and 1000";
        return false;
    }
    return true;
}

function rangeHandler() {
    return false;
}

submitBtn.addEventListener("click", function () {
	if (!isCorrectValue(inputOne) || !isCorrectValue(inputTwo)) return errorHandler();
    if (!isRangeValueOne(inputOne)) return rangeHandler();
    if (!isRangeValueTwo(inputTwo)) return rangeHandler();
    findPrimeNumbers(inputOne, inputTwo);
});