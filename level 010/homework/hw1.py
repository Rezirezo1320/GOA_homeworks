num1 = int(input('Enter num: '))
num2 = int(input('Enter num 2: '))
move = input('Enter move(1.plus 2.minues 3.multiple 4.division): ')
if move == 'plus':
    print(num1, '+', num2, '=', num1+num2)
elif move == 'minus':
    print(num1, 'i', num2, '=', num1-num2)
elif move == 'multiple':
    print(num1, '*', num2, '=', num1*num2)
elif move == 'division':
    print(num1, '/', num2, '=', num1/num2)