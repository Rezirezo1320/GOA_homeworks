def sum_triangular_numbers(n):
    my_int = 0
    sum = 0
    for i in range(1, n+1):
        sum+=i
        my_int+=sum
    return my_int