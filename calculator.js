function multiply(a,b):
    return a * b

function add(a,b):
    return a + b

function substract(a,b):
    return a - b

function divide(a,b):
    return a / b
function square(a):
	return a ** 2
function cube(a):
	return a ** 3

function square_n_times(a,n):
	return a ** n

console.log("I'm going use the calculator functions to multiply 5 and 6")
var x = multiply(5,6)
console.log(x)

console.log("I'm going use the calculator functions to square 5, 6 times")
var x = square_n_times(5,6)
console.log(x)