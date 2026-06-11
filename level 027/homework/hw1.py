n_plus = 0
n_minus = 0
n_multiple = 1
n_divide = 1
for i in range(1, 101):
    n_plus+=i
    n_minus-=i
    n_multiple*=i
    n_divide/=i
print('plus: ', n_plus)
print('minus: ', n_minus)
print('multiple', n_multiple)
print('divide', n_divide)