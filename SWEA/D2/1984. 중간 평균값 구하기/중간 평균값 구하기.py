T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    nums = list(map(int,input().split()))
    
    # 최대수 제거
    nums.remove(max(nums))
    # 최소수 제거
    nums.remove(min(nums))
    
    sum = 0
    for i in range(0,8):
        
        sum += nums[i]
        
    avg = round(sum / 8)
    
    print(f'#{test_case} {avg}')
                
    
    