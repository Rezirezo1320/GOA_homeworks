my_list= ['aleksandre', 'giorgi', 'gabrieli', 'aleksandre', 'ana', 'elene', 'nini', 'tato', 'tertioni', 'tamari']
second_list = []
for i in my_list:
    if i[0] == 't':
        second_list.append(my_list.pop(my_list.index(i)))
print(second_list)