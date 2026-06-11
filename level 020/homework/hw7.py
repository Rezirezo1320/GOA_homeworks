my_list = [1,2,23,23,23,1,34,534,34,5,2345,435,345,45,23,22]
new_list = []
for i in range(len(my_list)):
    if my_list[i] % 2 == 0:
        new_list.append(my_list[i])
print(new_list)