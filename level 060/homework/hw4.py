def proofread(st):
    st = st.lower()
    st = st.replace('ie', 'ei')
    st = st.capitalize()
    sign = False
    tmp = ''
    for c in st:
        if sign and str.isalpha(c):
            tmp += c.upper()
            sign = False
        else:
            tmp += c
            if c == '.':
                sign = True
    return tmp