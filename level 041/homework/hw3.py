def digital_root(n):
    m = str(n)
    m = str(n)
    new_list = []
    for i in m:
        new_list.append(int(i))
    new_list = [sum(new_list)]
    m = ' '.join(str(new_list[0]))
    k = m.split()
    new_list_one = []
    new_list_two = []
    for j in k:
        new_list_one.append(int(j))
    new_list_two.append(str(sum(new_list_one)))
    while len(str((new_list_two[0])))!=1:
        w = ' '.join(new_list_two[0])
        j = w.split()
        b = list(map(int, j))
        new_list_two.clear()
        new_list_two.append(sum(b))
    return int(new_list_two[0])

print(digital_root(9119))