user = int(input("Enter num: "))
if user > 100 and user % 2 == 0:
    print('this number is more than 100 and is even')
elif user < 100 and user % 2 != 0:
    print('this number is less than 100 and is odd')
elif user > 100 and user % 2 != 0:
    print('this number is more than 100 and is odd')
elif user == 100:
    print('this number is 100 and ofc its even')
elif user < 100 and user % 2 == 0:
    print('this numbe is less than 100 and is even')
else:
    print('what even is that?')