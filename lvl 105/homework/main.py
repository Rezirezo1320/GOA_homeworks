def matrix_sum(matrix):
    total = 0
    for row in matrix:
        for num in row:
            total += num
    return total

matrix = [[1, 3], [1, 4], [4, 1], [2, 2]]
print(matrix_sum(matrix))


def diagonal_sums(matrix):
    n = len(matrix)  
    main_diagonal_sum = 0
    secondary_diagonal_sum = 0

    for i in range(n):
        main_diagonal_sum += matrix[i][i]
        secondary_diagonal_sum += matrix[i][n - i - 1]

    return main_diagonal_sum, secondary_diagonal_sum

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
main_sum, secondary_sum = diagonal_sums(matrix)
print( main_sum, secondary_sum)


