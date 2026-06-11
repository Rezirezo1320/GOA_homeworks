def array_diff(a, b):
    new_list = []
    for i in a:
        if i not in b:
            new_list.append(i)
    return new_list