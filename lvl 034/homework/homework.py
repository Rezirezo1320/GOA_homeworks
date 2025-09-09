# def hello ():
#     print ("hello world")

# hello()


# def multiply(number):
#     return number * 10

# num = int(input("Enter a number: "))

# result = multiply(num)
# print(result)



# def greet (name):
#     return (f"hello {name}")

# name1 = input("enter a name")

# greet1 = greet(name1)
# print (greet1)




# def outer_function():
#     def inner_function():
#         print("Hello from the inner function!")
    
#     print("Calling the inner function...")
#     inner_function()

# outer_function()


# def check_even_odd(numbers):
#     for num in numbers:
#         if num % 2 == 0:
#             print(f"{num} is Even")
#         else:
#             print(f"{num} is Odd")

# numbers_list = [10, 15, 22, 31, 40]
# check_even_odd(numbers_list)



# def find_maximum(numbers):
#     if not numbers:
#         return None  

#     max_num = numbers[0]
#     for num in numbers:
#         if num > max_num:
#             max_num = num  
#     return max_num

# numbers_list = [10, 25, 7, 99, 56, 12]
# print("Maximum number:", find_maximum(numbers_list))

# def get_positive_numbers(numbers):
#     positive_numbers = []
#     for num in numbers:
#         if num > 0:
#             positive_numbers.append(num)
#     return positive_numbers

# numbers_list = [-10, 15, -3, 8, 0, -7, 22]
# print("Positive numbers:", get_positive_numbers(numbers_list))


def sum_divisible_by_3(start, end):
    total_sum = 0
    for num in range(start, end + 1):
        if num % 3 == 0:
            total_sum += num
    return total_sum

result = sum_divisible_by_3(1, 100)
print("Sum of numbers divisible by 3:", result)
