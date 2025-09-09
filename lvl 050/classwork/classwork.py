# 1)შექმენი ცვლადი სადაც შეინახავ ინტეჯერს , შემდეგ გააკეთეთ TypeError, გაუშვით მისი შესაბამისი კოდი, გააკეთეთ try, except ბლოკები
num = 123

try:
    result = num + "Hello"
except TypeError as error:
    print(f"mistake: {error}")

# 2)მომხმარებელს შემოატანინეთ რაღაც მონაცემი (მაგ:სახელი ან გვარი) და try,except ბლოკების საშუალებით გააკონტროლეთ ყველა ერორის შემთხვევა რაც არსებობს
while True:
    try:
        name = input("Enter your name: ")


        if not name:
            raise ValueError("name shouldn't be empty")

        surname = input("enter your surname: ")

        if not surname:
            raise ValueError("surname shouldn't be empty")

        print(f"your name and surname: {name} {surname}")
        break

    except ValueError as e:
        print(f"error: {e}")

    except Exception as e:
        print(f"wrong information: {e}")