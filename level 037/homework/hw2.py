import random
student_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','z']
result = []
student_group = []
member_number = int(input("შეიყვანე ჯგუფში რამდენი მოსწავლეც გინდა რომ იყოს: "))

if len(student_list) % member_number == 0:
    while student_list != []:
        random_student = random.choice(student_list)
        student_group.append(random_student)
        student_list.remove(random_student)

        if len(student_group) == member_number:
            result.append(student_group)
            student_group = []
else:
    while len(student_list) != len(student_list) % member_number:
        random_student = random.choice(student_list)
        student_group.append(random_student)
        student_list.remove(random_student)
        if len(student_group) == member_number:
            result.append(student_group)
            student_group = []
    result.append(student_list)
print('')
print('ჯგუფები შედგენილია')
print('')
print('')
for group in range(len(result)):   
    print('ჯგუფი '+str(group+1) + ': '+str(result[group]))