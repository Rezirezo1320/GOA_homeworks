def withdraw(n):
    a,c = 0,0
    while n%50!=0:
        n, c = n-20, c+1
    while n>=100:
        n-=100
        a+=1
    return [a,n//50,c]