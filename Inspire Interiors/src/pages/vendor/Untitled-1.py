#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'minimumAverage' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY customers as parameter.
#

def minimumAverage(customers):
    # Write your code here
    customers.sort(key=lambda x: x[1])
    customers.sort(key=lambda x: x[0])
    print(customers)
    time = 0
    total = 0
    for i in range(len(customers)):
        time += customers[i][0]
        total += customers[i][1] * time
    return total // len(customers)
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    customers = []

    for _ in range(n):
        customers.append(list(map(int, input().rstrip().split())))

    result = minimumAverage(customers)

    fptr.write(str(result) + '\n')

    fptr.close()
