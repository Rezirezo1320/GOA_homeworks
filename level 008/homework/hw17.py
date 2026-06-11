user = int(input('Enter num: '))
if user < 0 and user % 2 == 0:
    print('this number is negative and even')
elif user < 0 and user % 2 != 0:
    print('this number is negative and odd')
elif user > 0 and user % 2 == 0:
    print('this number is positive and even')
elif user > 0 and user % 2 != 0:
    print('this number is positive and odd')
else:
    print('its 0')