def greet (name):
    return ("hello" + name)

hello = greet
print(hello("cotne"))


def manual_range(start, end, step):
    for i in range(start, end, step):
        if i % 2 == 0:
            print(i)

manual_range(1, 10, 1)
manual_range(0, 20, 2)
manual_range(5, 30, 5)
manual_range(10, 0, -1)
manual_range(2, 15, 3)




def manual_len(my_list):
    count = 0
    for _ in my_list:
        count += 1
    print(count)

manual_len([1, 2, 3, 4])
manual_len([])
manual_len(['a', 'b', 'c'])
manual_len([10])
manual_len([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
