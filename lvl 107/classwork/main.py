def non_repeating_element(sequence):
    counts = {}

    for char in sequence:
        counts[char] = counts.get(char, 0) + 1

    for char in sequence:
        if counts[char] == 1:
            return char
    return False

print(non_repeating_element("hannah"))  
print(non_repeating_element("abbia"))