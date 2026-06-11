user = int(input('Enter num: '))
user1 = int(input('Enter num 2: '))
if user > user1 and user % 10 == 0:
    print('first number is more than second and first number is jeradi of 10')
elif user < user1 and user1 % 10 == 0:
    print('Second number is more tha second and secodn number is jeradi of 10')
elif user == user1 and user1 % 10 == 0:
    print('first and second number are the same and both are jeradi of 10')
elif user == user1 and user1 % 10 != 0:
    print('first and second number are the same and both are not jeradi of 10')