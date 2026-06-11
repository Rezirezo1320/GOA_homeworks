user = int(input('Enter num(dont enter 0): '))
user_2 = int(input('Enter num 2: '))
n_plus = 0
n_multiple = 1
for i in range(user, user_2):
    n_plus+=i
    n_multiple*=i
print('plus: ', n_plus)
print('multiple: ', n_multiple)