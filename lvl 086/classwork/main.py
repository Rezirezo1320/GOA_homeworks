def find_it(seq):
    for num in seq:
        count = 0  

        for n in seq:
            if n == num:
                count += 1

        if count % 2 != 0:
            return num