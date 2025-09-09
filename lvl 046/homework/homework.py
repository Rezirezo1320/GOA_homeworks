# 2) Create a list comprehension that generates a list of numbers from 1 to 10.
list = [i for i in range(1,11)]
print(list)
# 3) Generate a list of squares of numbers from 1 to 5 using list comprehension.
list1 = [x**2 for x in range(1,6)]
print(list1)
# 4) Create a list of all even numbers between 1 and 20 using list comprehension.
list2 = [n for n in range(1,20) if n % 2 == 0]
print(list2)
# 5) Generate a list of the first letters of each word in a given list of words using list comprehension.
words = ["goa" , "basketball" , "nika"]
list3 = [y[0] for y in words]
print(list3)
# 6) Create a list comprehension that converts all words in a given list to uppercase.
words2 = ["goa" , "basketball" , "nika"]
list4 = [m.upper() for m in words2]
print(list4)
# 7) Create a list comprehension that generates a list of numbers from 1 to 50 that are divisible by 3.
list5 = [h for h in range(1,51) if h % 3 == 0]
print(list5)
# 8) Create a list comprehension that extracts words with more than 4 letters from a given list of words.
words3 = ["goa" , "txa" , "basketball" , "nika"]
list6 = [u for u in words3 if len(u)<4]
print(list6)
# 9) Create a list comprehension that converts a list of temperature values in Celsius to Fahrenheit.
celsius_temps = [0, 20, 37, 1]
fahrenheit_temps = [(c * 9/5) + 32 for c in celsius_temps]
print(celsius_temps)
print(fahrenheit_temps)
# 10) Create a list comprehension that finds all prime numbers between 1 and 100.
# ?
# 11) Create a list comprehension that extracts all words from a given sentence that contain at least one vowel and are longer than 5 characters.
words4 = ["nika" , "kjhfg" , "dfrrfva" , "rfg" , "gta"]
list8 = [c for c in words4 if len(c)> 5]
print(list8)