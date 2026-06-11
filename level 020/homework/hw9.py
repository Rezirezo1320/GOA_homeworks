my_list = [1,3,34,554,2345,34,525,423,562456,5,46,3456,3456,34,634,6,3456,34,6,45614435,5244]
sum_odd = 0
sum_even = 0
for i in range(len(my_list)):
    if my_list[i] % 2 == 0:
        sum_even+=my_list[i]
    else:
        sum_odd+=my_list[i]
print('odds sum:', sum_odd)
print('evens sum:', sum_even)