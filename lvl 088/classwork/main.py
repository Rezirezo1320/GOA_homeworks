def highest_rank(arr):
    max_count = None
    count = 0
    for i in arr:
        if arr.count(i) > count:
            count = arr.count(i)
            max_count = i
        elif arr.count(i) == count:
            if i > max_count:
                max_count = i
            else:
                continue
        else:
            continue
    return max_count

    