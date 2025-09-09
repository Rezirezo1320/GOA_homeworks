# def manual_list(start, end, step, user_num):
#     result = [num for num in range(start, end, step) if num > user_num]
#     return result


# print(manual_list(1, 20, 2, 5))
# print(manual_list(10, 50, 5, 25))
# print(manual_list(0, 30, 3, 10))



# list1 = [i for i in range(1 , 101) if i % 3 == 0 or i % 5 == 0]
# print (list1)


palindromes = [x for x in range(10, 201) if str(x) == str(x)[::-1]]
print(palindromes)
