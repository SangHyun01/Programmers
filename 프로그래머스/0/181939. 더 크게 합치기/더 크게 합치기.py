def solution(a, b):
    num1 = str(a) + str(b)
    num2 = str(b) + str(a)
    if num1 > num2:
        return int(num1)
    else:
        return int(num2)
    