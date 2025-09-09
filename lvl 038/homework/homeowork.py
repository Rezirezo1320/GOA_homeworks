
my_tuple = (10, 20, 30, 40, 50)

second_element = my_tuple[1]


last_element = my_tuple[-1]


middle_elements = my_tuple[1:4]
print(f"Second Element: {second_element}")
print(f"Last Element: {last_element}")
print(f"Middle Elements: {middle_elements}")



try:
    my_tuple[2] = 100
except TypeError as e:
    print(f"Error: {e}")



packed_tuple = (1, "Hello", 3.14, True)

a, b, c, d = packed_tuple

print(f"a: {a}, b: {b}, c: {c}, d: {d}")




my_tuple = (10, 20, 30, 10, 40, 10)

count_10 = my_tuple.count(10)

index_10 = my_tuple.index(10)

print(f"Occurrences of 10: {count_10}")
print(f"Index of the first occurrence of 10: {index_10}")



my_set = {1, 2, 3, 4, 5}
my_set.add(6)
my_set.remove(2)
is_present = 3 in my_set
print(my_set)
print(f"Is 3 present? {is_present}")



set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
union_set = set1.union(set2)
intersection_set = set1.intersection(set2)
difference_set = set1.difference(set2)
print(f"Union: {union_set}")
print(f"Intersection: {intersection_set}")
print(f"Difference: {difference_set}")




my_list = [1, 2, 2, 3, 4, 4, 5]
unique_list = list(set(my_list))
print(unique_list)
