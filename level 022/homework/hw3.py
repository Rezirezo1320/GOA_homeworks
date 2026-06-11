my_list = [1237498721498, 237429374, 'hello!', 'hello!', 'how are you?', 4.324, 4.234, 7.324, -5.32423]
list_int = []
list_str = []
list_float = []
for i in range(len(my_list)):
    if type(my_list[i]) == int:
        list_int.append(my_list[i])
    elif type(my_list[i]) == str:
        list_str.append(my_list[i])
    else:
        list_float.append(my_list[i])
print('Integers: ', list_int)
print('Strings: ', list_str)
print('Float', list_float)