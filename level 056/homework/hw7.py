def rot13(m):

    b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    c = dict(zip(a, b))
    
    return ''.join(c.get(i, i) for i in m)