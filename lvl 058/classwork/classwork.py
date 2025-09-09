import string


reverse_and_capitalize = lambda s: s[::-1].capitalize()

print(reverse_and_capitalize("hello"))
print(reverse_and_capitalize("world"))
print(reverse_and_capitalize("python"))


print((lambda x: x * 2)(10))

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(list(map(lambda x: x ** 2, numbers)))

def weather_info (temp):
    c = (temp)
    if (c < 0):
        return (c," is freezing temperature")
    else:
        return (c," is above freezing temperature")

print(weather_info(-10))