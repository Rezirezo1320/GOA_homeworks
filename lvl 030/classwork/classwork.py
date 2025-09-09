# name = str(input("enter your name"))


# choice = str(input("u or l"))

# if choice == "u":
#     print (name.upper())
# elif choice == "l":
#     print (name.lower())

# else:
#     print ("wrong information")


def manual_find(main_string, str_to_find):

    index = main_string.find(str_to_find)

    if index != -1:
        return index
    else:
        return -1

main_string = "mezineba zaan"
str_to_find = "zaan"
print(manual_find(main_string, str_to_find))

str_to_find = "skibidi"
print(manual_find(main_string, str_to_find))


def manual_swapcase(text):
    return text.swapcase()


input_text = "Hello World! 123"
result = manual_swapcase(input_text)
print("Original:", input_text)
print("Swapped:", result)

main_str = str(input("Enter main string: "))
str_to_count = str(input("Enter string to count: "))
print(main_str.count(str_to_count))