my_list = [42321,2135356,24232,234324,4563737,425745213,13535,345235235325,3555,7884]
for i in my_list:
    if i % 2 == 0:
        my_list.remove(i)
print(my_list)