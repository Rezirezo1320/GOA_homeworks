user = input('Enter name: ')
user1 = input('Enter surname: ')
my_str = user+user1
my_str1 = ''
for i in range(len(my_str)-1, -1, -1):
    my_str1+=my_str[i]
print(my_str1)