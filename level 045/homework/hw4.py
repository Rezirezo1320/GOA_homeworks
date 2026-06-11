def small_enough(array, limit):
    n = 0
    for i in array:
        if i > limit:
            n +=1
    if n >= 1:
        return False
    else:
        return True