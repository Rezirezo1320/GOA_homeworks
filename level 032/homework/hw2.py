def find_multiples(integer, limit):
    new_list = []
    for i in range(integer, limit+1, integer):
        new_list.append(i)
    return new_list