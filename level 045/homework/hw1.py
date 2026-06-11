def sequence_sum(begin_number, end_number, step):
    n = 0
    for i in range(begin_number, end_number+1, step):
        n+=i
    return n