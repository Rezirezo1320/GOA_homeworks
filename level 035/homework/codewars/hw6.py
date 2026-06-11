def abbrev_name(name):
    ok = name.split()
    string = ''
    for i in ok:
        string+=i[0].upper()
    return '.'.join(string)
