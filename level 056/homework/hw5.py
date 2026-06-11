def branch(n):
    x, s = 1, 2
    while True:
        for i in range(4):
            x += s
            if x >= n:
                return i
        s += 2