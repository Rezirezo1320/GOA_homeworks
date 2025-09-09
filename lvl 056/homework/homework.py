# Printing a name
print("cotne gagnidze")

# Printing a string
print("idk")

# Printing multiple lines of text
print("poem1")
print("poem2")
print("poem3")

# Printing numbers and patterns
print(2 + 3)
print("#")
print("###")
print("#####")

# Performing arithmetic operations with integers and floats
num1 = int("42")
num2 = float(3.5)
num3 = float(2.5)
print(num2 + num3)

# Concatenating strings and checking variable types
hello = "hello"
world = "world"
print(hello + " " + world)
a = "hi"
b = 42
c = 3.14
print(type(a))
print(type(b))
print(type(c))

# Taking user input and performing operations
age = int(input("enter your age: "))
print(age + 1)

name = str(input("enter your name: "))
print("hello", name)

num1 = int(input("first number: "))
num2 = int(input("second number: "))
print(num1 + num2)

color = str(input("what is your favorite color?: "))
print("your favorite color is", color)

# Conditional statement to check height
height = int(input("enter your height in cm: "))
if height > 180:
    print("you are very tall")
else:
    print("you are short")

# Using a for loop to iterate through a range
for i in range(1, 6):
    print(i)

# Summing numbers using a for loop
sum_numbers = 0
for i in range(1, 11):
    sum_numbers += i
print(sum_numbers)

# Printing multiplication table using a for loop
for i in range(1, 6):
    print(f"2 x {i} = {2 * i}")

# Using a while loop with a break condition
num1 = 1
while True:
    if num1 == 6:
        break
    else:
        print(num1)
    num1 += 1

# Countdown using a while loop
num = 10
while num > 0:
    print(num)
    num -= 1

# Printing odd numbers using a while loop
num = 1
while num <= 10:
    if num % 2 != 0:
        print(num)
    num += 1

# Password validation using a while loop
password = "exit"
while True:
    user = input("enter your password: ")
    if user == password:
        print("correct password")
        break
    else:
        print("try again")

# Iterating through a list and printing its elements
list1 = ["apple", True, 3.14, 7]
for i in list1:
    print(i)

# Printing the length of a list
list1 = [10, 20, 30, 40, 50]
print("The length of the list is:", len(list1))

# Accessing elements in a list by index
list1 = ["index1", "index2"]
print(list1[1])

# Adding and removing elements from a list
list1 = ["apple", "banana", "cherry"]
list1.append("grape")
print(list1)

list1.remove("banana")
print(list1)

# Using list comprehensions for various operations
squares = [x**2 for x in range(1, 6)]
print(squares)

even_numbers = [x for x in range(2, 11) if x % 2 == 0]
print(even_numbers)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odd_numbers = [x for x in numbers if x % 2 != 0]
print(odd_numbers)

list1 = ["apple", "banana", "cherry"]
upper = [x.upper() for x in list1]
print(upper)

squared_if_divisible_by_2 = [x**2 for x in numbers if x % 2 == 0]
print(squared_if_divisible_by_2)

# Defining and using functions
def greet(name):
    return f"hello {name}"

print(greet("cotne"))

def calculate(num1, num2):
    return num1 + num2

print(calculate(2, 5))

def even_or_odd(num):
    if num % 2 == 0:
        return "even"
    else:
        return "odd"

def area(length, width):
    return length * width

def reverse(string):
    return string[::-1]

# Working with tuples
tuple1 = (1, "hello", 3.14)
print(tuple1)

print(tuple1[1])

print(len(tuple1))

tuple2 = ("a", "b", "c")
result = tuple1 + tuple2
print(result)

element_to_check = "hello"
if element_to_check in tuple1:
    print("Found")
else:
    print("Not found")

# Working with sets
my_set = {1, "hello", 3.14}
print(my_set)

if "hello" in my_set:
    print("Yes")
else:
    print("No")

my_set.add("new_element")
print(my_set)

my_set.remove("hello")
print(my_set)

set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1 | set2
print(union_set)

#codewars

a = "code"
b = "wa.rs"
name = a + b

def get_char(c):
    return chr(c)

print(get_char(65))
print(get_char(97))
print(get_char(48))