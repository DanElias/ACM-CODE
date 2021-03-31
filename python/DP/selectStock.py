
"""
You are given the values of stocks and their values at the end of the year
Select the stock so that you get the max profit at the end of the year
You are also given an initial savings to buy stocks
"""
def selectStock(currentValues, futureValues, savings):
    maxCapacity = savings
    values = []
    weights = currentValues

    # Calculate the profits that can be done with current and future values
    for i in range(len(currentValues)):
        values.append(futureValues[i] - currentValues[i])

    # Knapsack I/O. Dynamic Programming

    # Fill with zeroes - create an extra first row with zeroes
    knapsack = []
    for i in range(len(values)):
        row = []
        for j in range(maxCapacity + 1):
            row.append(0)
        knapsack.append(row)

    # Knapsack
    for i in range(len(values)):
        for j in range(maxCapacity + 1):
            # First row stays the same, you cannot get any stock with 0 savings
            if i == 0 or j == 0:
                knapsack[i][j] = 0
            else:
                # If we can buy the element, we choose the max value between
                # the old one which is the one above or the new one
                # Which is the current value + with what else we could buy with
                # the remaining savings
                if weights[i - 1] <= j:
                    new_value = knapsack[i - 1][j - weights[i - 1]] + values[i - 1]
                    old_value = knapsack[i - 1][j]
                    knapsack[i][j] = max(old_value, new_value)
                # We don't buy so we stays with the old value (the one up)
                else:
                    knapsack[i][j] = knapsack[i - 1][j]

    print("The Max profit can be: ")
    print(knapsack[len(values) - 1][maxCapacity])
    return knapsack[len(values) - 1][maxCapacity]

currentValues = [1,2,4,6]
futureValues = [5,3,5,6]
savings = 30
selectStock(currentValues, futureValues, savings)