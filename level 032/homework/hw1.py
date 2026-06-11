def count_sheeps(sheep):
    For_true = []
    For_false = []
    for i in sheep:
        if i == True:
            For_true.append(i)
        elif i == False:
            For_false.append(i)
    return len(For_true)