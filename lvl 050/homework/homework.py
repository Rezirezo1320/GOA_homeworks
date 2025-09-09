# 1)Prompt the user to enter a number. If the input is not a number, display an error message.
while True:
    try:
        num = int(input("Enter number: "))
        print(f"you have entered number: {num}")
        break
    except ValueError:   
        print("Error: Please enter a valid number.")
# 2)Create a list and try to access an index that does not exist. Handle IndexError.
list1 = [1 , 2 , 3 , 4 , 5]
try:
    print(list1[6])
except IndexError:
    print("Wrong index")
# 3)Try adding an integer to a string and catch the TypeError
name = "nika"
age = 14
try:
    print(name + age)
except TypeError:
    print("You can't add string to an integer")