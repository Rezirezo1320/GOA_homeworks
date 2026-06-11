def number_of_duplicate_digits(ndigit):
    total_num = 10 ** ndigit
    total_num_no_repeat = 9 ** ndigit
    total_num_cero = 10 ** (ndigit-1)
    answer = total_num - total_num_no_repeat - total_num_cero
    return answer