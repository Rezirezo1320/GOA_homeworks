def count(s):
    char_count = {}
    
    for char in s:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    
    return char_count



def solution(s):
    pairs = []
    for i in range(0, len(s), 2):
        if i + 1 < len(s):
            pairs.append(s[i] + s[i + 1])
        else:
            pairs.append(s[i] + "_")
    
    return pairs