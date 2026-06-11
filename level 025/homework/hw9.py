my_list = [42321,2135356,24232,234324,4563737,425745213,13535,345235235325,3555,7884]
second_list = []
for i in my_list:
    if i % 2 == 0:
        second_list.append(i)
print(second_list)