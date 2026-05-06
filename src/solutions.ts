//?Problem-01
//Even Number Array
const isEven:number[] =[]
const filterEvenNumbers=(even:number[])=>{
    even.map((n:number)=>{
        if(n%2 === 0){
            isEven.push(n)
        }
    })
    return isEven
}

const even =filterEvenNumbers([1, 2, 3, 4, 5, 6])
// console.log(even);

//?Problem-02
//reverseString

function reverseString(revers:string){
    const reversingString = revers.split("").reverse().join("")
    // console.log(reversingString);
}

reverseString("typescript")