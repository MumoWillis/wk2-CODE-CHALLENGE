//creation of constants start && end
const start =""
const end = ""

//creation of a function that accepts two variables( start, end)
function arraysBetween(start, end){
    return Array.from({length: end - start+1}, (_, index) => start + index )}//returns missing numbers in their respective arrays(first and last numbers included)

    const numberGenerator = arraysBetween(3, 10);

    console.log(numberGenerator)//output = (3,4,5,6,7,8,9,10)
