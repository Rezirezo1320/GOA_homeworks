const obj = {
    arr: [
        {
            level: [10, 50, 100]
        },
        {
            level: [20, 40, 60], 
            students: [
            {
                name: "Jamala", 
                surname: "barkalaia", 
                score:[8, 10]
            }, 
            {
                name: "jumbera",
                surname: "lamazi",
                score:[10, 7, 9]
            }
            ]
        }
    ]
}
const {
    arr: [
        {
            level:[low, medium, high]
        }, 
        {
            level:[low1, medium1, high1],
            students: [
            {
                name: name1,
                surname: surname1,
                score:[q1, q2]},
            {
                name: name2,
                surname: surname2, 
                score:[s1, s2, s3]
            }
            ]
        }
    ]
} = obj
console.log(low, medium, high, low1, medium1, high1, name1, surname1, q1, q2, name2, surname2, s1, s2, s3)