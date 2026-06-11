my_list = [1,3,34,554,2345,34,525,423,562456,5,46,3456,3456,34,634,6,3456,34,6,45614435,5244,-23,-123123,-54675465,-24345,-43535]
sum_opposite = 0
sum_negative = 0
for i in range(len(my_list)):
    if my_list[i] > 0:
        sum_opposite+=my_list[i]
    elif my_list[i] < 0:
        sum_negative+=my_list[i]
    else:
        None
print('Sum negatives:', sum_negative)
print('Sum opposite', sum_opposite)