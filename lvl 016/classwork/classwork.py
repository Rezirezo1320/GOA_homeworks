# num1 = int(input("enter a number: "))

# total = 0

# for i in range (0, num1):
#     total += i

# print (total)



# correct_password = "cotne"

# while True:
#     password = input("enter your password: ")
#     if password == correct_password:
#         print ("access granted")
#     else:
#         print ("wrong password")


# საკლასო დავალება:

# რიცხვის გამოცნობის პროგრამა:

# შექმენით my_num ცვლადი და 1-დან 10-მდე ნებისმიერი რიცხვი მიანიჭეთ მნიშვნელობად.

# სანამ მომხმარებლის შემოტანილი რიცხვი არ იქნება my_num-ის ტოლი, ისევ შეეკითხეთ მომხმარებელს ეს რიცხვი.

# საბოლოოდ დაუბეჭდეთ "you guessed" და რამდენი ცდა დაჭირდა

my_num = 4

while True:
    guess = int(input("1-10: "))
    if guess == my_num:
        print ("you guessed the number correctly")
        break
    else:
        print ("try again")