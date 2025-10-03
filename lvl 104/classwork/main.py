def domain_name(url):
    i = 0
    while i < len(url):
        if i + 6 < len(url) and url[i] == "h" and url[i + 1] == "t" and url[i + 2] == "t" and url[i + 3] == "p" and url[i + 4] == ":" and url[i + 5] == "/" and url[i + 6] == "/":
            i += 7  
        elif i + 7 < len(url) and url[i] == "h" and url[i + 1] == "t" and url[i + 2] == "t" and url[i + 3] == "p" and url[i + 4] == "s" and url[i + 5] == ":" and url[i + 6] == "/" and url[i + 7] == "/":
            i += 8  
        else:
            break
    url = url[i:] 

    i = 0
    while i < len(url):
        if i + 3 < len(url) and url[i] == "w" and url[i + 1] == "w" and url[i + 2] == "w" and url[i + 3] == ".":
            i += 4  
        else:
            break
    url = url[i:]  

    domain_name = ""
    for char in url:
        if char == "." or char == "/": 
            break
        domain_name += char  

    return domain_name