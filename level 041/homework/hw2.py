def to_jaden_case(string):
    my_list = string.split()
    new_list = []
    for i in my_list:
        new_list.append(i.capitalize())
    return ' '.join(new_list)