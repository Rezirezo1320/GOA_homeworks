import math

def count_area(shape, *dimensions):
    if shape == 'rectangle':
        length, width = dimensions
        return length * width
    elif shape == 'circle':
        radius, = dimensions
        return math.pi * radius ** 2
    elif shape == 'triangle':
        a, b, c = dimensions
        s = (a + b + c) / 2  
        area = math.sqrt(s * (s - a) * (s - b) * (s - c))
        return area
    else:
        return "Invalid shape"


