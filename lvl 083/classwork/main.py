# ფუნქცია რომრლდაც გადაეცემა სამი არგუმენტი (რიცხვი , მეორე რიცხვი, მათემატიკური სიმბოლო (მიმატება, გამრავლება, გამოკლება, გაყოფა) 
# და აბრუნებს შესაბამის შედეგს
# თუ არ იყოფა ორი რიცხხვი ან არ არის შესაბამისი არგუმენტები გადმოცემული გამოიტანოს ერორი

def calculate(num1, num2, operator):
    if operator == "+":
        return num1 + num2 
    if operator == "-":
        return num1-num2
    if operator == "*":
        return num1*num2
    if operator == "/":
        if num1 % num2 !=0:
            return("error")
        return num1/num2
    




