geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
def goose_filter(birds):
    new_list = []
    for i in geese:
        for j in birds:
            if i == j:
                birds.remove(i)
    return birds