def max_subarray(nums):
    if not nums:
        return 0
    cur_sum=nums[0]
    max_sum=nums[0]
    for i in nums:
        cur_sum=max(i,cur_sum+i)
        max_sum=max(max_sum,cur_sum)
    return max_sum
nums=[2,3,5,6,7,1,0,-1,-3]
print(max_subarray(nums))