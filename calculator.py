def multiply(a,b):
    return a * b

def add(a,b):
    return a + b

def substract(a,b):
    return a - b

def divide(a,b):
    return a / b

def square(a):
	return a ** 2

def cube(a):
	return a ** 3

def square_n_times(a,n):
	return a ** n

print("I'm going use the calculator functions to multiply 5 and 6")
x = multiply(5,6)
print(x)

print("I'm going use the calculator functions to square 5, 6 times")
x = square_n_times(5,6)
print(x)