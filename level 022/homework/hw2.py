my_list= [23,4,2,42,423,234234,334,44,5,1,7,5,134213,23,4]
my_list2 = []
for i in range(len(my_list)):
    if my_list[i] <= 10:
        my_list2.append(my_list[i])
print(my_list2)