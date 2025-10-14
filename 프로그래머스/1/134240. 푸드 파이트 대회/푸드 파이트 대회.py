def solution(food):
    left_side = ''
    for i in range(1, len(food)):
        count = food[i] // 2
        left_side += str(i) * count
    
    right_side = left_side[::-1]

    answer = left_side + '0' + right_side
    
    return answer
    
# 2로 나눴을때 몫 만큼 배치하고 0 , 나머지는 뒤집어서 붙임
