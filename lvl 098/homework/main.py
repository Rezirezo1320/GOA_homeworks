def find_elements(matrix):
    flat_list = []
    for row in matrix:
        for item in row:
            flat_list.append(item)

    unique_elements = []
    for item in flat_list:
        count = 0
        for other_item in flat_list:
            if item == other_item:
                count += 1
        if count == 1:
            unique_elements.append(item)
    
    return unique_elements