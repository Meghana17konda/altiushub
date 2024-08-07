def rotate_array(arr,k):
    return arr[-k:]+arr[:-k]
arr=[1,2,3,4,5,6,7,8,9]
k=4
print(rotate_array(arr,k))