// main (manager) function - create variables, send variables to check, write result in result area
const mainFunction = () => {
	// area of main variables
	const userNumber1 = document.getElementById('userInput1').value; // user number 1
	const userNumber2 = document.getElementById('userInput2').value; // user number 2
	const resultArea = document.getElementById('textArea'); // Area for result
	const checkResult = checkFunction(userNumber1, userNumber2); // send arguments to check

	if (!checkResult[0]) {
		resultArea.style.color = 'red'; // result area color
		resultArea.innerHTML = checkResult[1]; // write result in result area
	} else {
		resultArea.style.color = 'green'; // result area color
		resultArea.innerHTML = checkResult[1]; // write result in result area
	}
};

// Function, check user entered numbers
const checkFunction = (x, y) => {
	let result; // variable for result

	if (isNaN(x) || isNaN(y)) {
		result = [false, 'Enter only numbers.']; // invalid data
	} else if (x == '' || y == '') {
		result = [false, 'Enter data in inputs.']; // invalid data
	} else if (x && y) {
		// loop for x finding
		while (x !== y) {
			if (x > y) {
				x = x - y; // x - y (subtraction)
			}
			// if x > y is not true => do next conditional

			if (x < y) {
				x = y - x; // y - x (subtraction)
			}
			// if x < y is not true => do loop again
		}
		result = [true, `Result equals ${x}`]; // valid data
	}

	return result; // return result to main function
};
