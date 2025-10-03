const person = {
    name: "გიორგი",
    age: 30,
    profession: "დეველოპერი",
    city: "თბილისი"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}