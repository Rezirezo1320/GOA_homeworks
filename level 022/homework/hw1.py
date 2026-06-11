my_list = ['hello!', 'hi', 'god', 'good', 'Excelent', 'Ok', 'okay', 'Incredible']
my_list2 = []
for i in range(len(my_list)):
    if len(my_list[i]) <=4:
        my_list2.append(my_list[i])
print(my_list2)