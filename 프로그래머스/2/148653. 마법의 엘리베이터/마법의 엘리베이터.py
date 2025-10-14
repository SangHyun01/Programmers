def solution(storey):
    answer = 0
    
    while storey > 0:
        remainder = storey % 10
        next_digit = (storey // 10) % 10
        
        if remainder > 5:
            answer += (10 - remainder)
            storey += 10
        elif remainder < 5:
            answer += remainder
        else: # 마지막 자리가 5일때
            if next_digit >= 5:
                answer += 5
                storey += 10
            else:
                answer += 5
                
        storey //= 10
        
            
    return answer

        
#         각 자릿수가 5보다 크면 올라가는게 이득
#         작으면 내려가는게 이득
    
#     2554
#     4 -> 내려가는게 이득 -1 * 4
#     5 -> 올라갔을때 다음 자릿수가 5이상이면 올리는게 이득, 5보다 작으면 내리는게 이득