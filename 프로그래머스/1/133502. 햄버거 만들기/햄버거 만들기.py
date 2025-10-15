def solution(ingredient):
    result = 0
    stack = []
    
    # 재료를 하나씩 순회
    for i in ingredient:
        stack.append(i)
        
        # 스택의 길이가 4이상이고 뒤의 4개가 1231 이면
        if(len(stack) >= 4 and stack[-4:] == [1,2,3,1]):
            # 결과 1 증가
            result += 1
            #스택에서 제거
            for _ in range(4):
                stack.pop()
    return result
    
    

