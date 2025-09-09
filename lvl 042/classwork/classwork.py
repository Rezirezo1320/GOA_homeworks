student_info = {
    "name": "გიორგი",
    "surname": "ბერიძე",
    "academy": "Goa Academy",
    "fav-color": "ლურჯი",
    "city": "თბილისი",
    "goa-student": True,
    "age": 20,
    "fav-programming-lang": "Python"
}

for key, value in student_info.items():
    print(value)



book_info = {
    "title": "1984",
    "author": "George Orwell",
    "year": 1949,
    "genre": "Dystopian",
    "pages": 328
}

print("Keys:", book_info.keys())

print("Values:", book_info.values())

print("Key-Value Pairs:", book_info.items())

for key, value in book_info.items():
    print(f"{key}: {value}")
