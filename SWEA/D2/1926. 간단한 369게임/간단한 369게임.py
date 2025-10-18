N = int(input())
match_char = ['3', '6', '9']

result = []

for i in range(1, N+1):
    nums = str(i)
    clap_count = 0
    
    for char in nums:
        if char in match_char:
            clap_count += 1
            
    if clap_count > 0:
        result.append('-' * clap_count)
    else:
        result.append(nums)
            
print(" ".join(result))
     