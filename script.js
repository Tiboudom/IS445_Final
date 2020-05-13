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
    result.innerHTML = "Number 1 input " + inputOne.value + " is not a valid number\nNumber 2 input " + inputTwo.value + " is not a valid input";
    result.classList.add("text-danger");
    return false;
}

function isRangeValueOne(elem) {
    const value = elem.value;
    const number = parseInt(value, 10);
    if (number < 2 || number > 100) {
        result.innerHTML = "Number 1 input " + inputOne.value + " is not in range of 2 and 1000";
        return false;
    }
    return true;
}

function isRangeValueTwo(elem) {
    const value = elem.value;
    const number = parseInt(value, 10);
    console.log(number);
    if (number < 2 || number > 100) {
        result.innerHTML = "Number 2 input " + inputTwo.value + " is not in range of 2 and 1000";
        return false;
    }
    return true;
}

function isCaseThree(one, two) {
    const valueOne = one.value;
    const valueTwo = two.value;
    const numberOne = parseInt(valueOne, 10);
    const numberTwo = parseInt(valueTwo, 10);

    if (!valueOne || isNaN(valueOne)) {
        if (numberTwo < 2 || numberTwo > 100) {
            result.innerHTML = "Number 1 input " + inputOne.value + " is not a valid number\nNumber 2 input " + inputTwo.value + " is not in range of 2 and 1000";
            return false;
        }
	}
    if (!valueTwo || isNaN(valueTwo)) {
        if (numberOne < 2 || numberOne > 100) {
            result.innerHTML = "Number 1 input " + inputOne.value + " is not in range of 2 and 1000\nNumber 2 input " + inputTwo.value + " is not a valid number";
            return false;
        }
    }
    return true;
}

function rangeHandler() {
    result.classList.add("text-danger");
    return false;
}

function isEvenNumber(n) {
    return n % 2 === 0;
}

function findEvenNumbers(one, two) {
    const valueOne = one.value;
    const valueTwo = two.value;
    const n1 = +valueOne < +valueTwo ? +valueOne : +valueTwo;
    const n2 = +valueOne < +valueTwo ? +valueTwo : +valueOne;
    const evenNumbers = [];

    for (let i = n1; i <= n2; i++) {
        if (isEvenNumber(i)) {
            evenNumbers.push(i);
        }
    }
    result.innerHTML = "There are " + evenNumbers.length + " even numbers:\n" + evenNumbers;
    result.classList.remove("text-danger");
    result.classList.add("text-success");
}

submitBtn.addEventListener("click", function () {
    if (!isCaseThree(inputOne, inputTwo)) return rangeHandler();
    if (!isCorrectValue(inputOne) || !isCorrectValue(inputTwo)) return errorHandler();
    if (!isRangeValueOne(inputOne)) return rangeHandler();
    if (!isRangeValueTwo(inputTwo)) return rangeHandler();
    findEvenNumbers(inputOne, inputTwo);
});