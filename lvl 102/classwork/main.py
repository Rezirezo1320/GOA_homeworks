def unique_in_order(sequence):
    result = []
    for item in sequence:
        if not result or result[-1] != item:
            result.append(item)
    return result
