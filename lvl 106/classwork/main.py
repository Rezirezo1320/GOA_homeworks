def match(usefulness, months):

    husband_usefulness = sum(usefulness)

    initial_needs = 100
    decay_rate = 0.15
    current_needs = initial_needs * ((1 - decay_rate) ** months)

    if husband_usefulness >= current_needs:
        return "Match!"
    else:
        return "No match!"