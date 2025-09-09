
num1 = input(("Enter a numerator: "))
num2 = input(("Enter a denominator: "))

try:
    num1 = float(num1)
    num2 = float(num2)
    result = num1 / num2
except ValueError:
    print("Please enter valid numbers.")
except ZeroDivisionError:
    print("You cannot divide by zero.")
else:
    print(f"The result is: {result}")
finally:
    print("Operation complete.")



# def apply_to_list(func, values):
#     return [func(x) for x in values]

# def square(x):
#     return x * x

# numbers = [1, 2, 3, 4, 5]
# squared_numbers = apply_to_list(square, numbers)
# print(squared_numbers)