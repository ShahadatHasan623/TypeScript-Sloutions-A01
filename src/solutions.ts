//?Problem-01

const isEven: number[] = [];
const filterEvenNumbers = (even: number[]) => {
  even.map((n: number) => {
    if (n % 2 === 0) {
      isEven.push(n);
    }
  });
  return isEven;
};

const even = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(even);

//?Problem-02
//reverseString

function reverseString(revers: string) {
  const reversingString = revers.split("").reverse().join("");
  // console.log(reversingString);
}

reverseString("typescript");

//?Problem -03
//check of type

const checkType = (type: number | string) => {
  if (typeof type === "number") {
    return "Number";
  } else {
    return "String";
  }
};
const typeCheck = checkType(20);
// console.log(typeCheck);

//?Problem-04

type User = {
  id: number;
  Name: string;
  Age: number;
};

const user: User = {
  id: 1,
  Name: "Shahadat",
  Age: 20,
};

const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const property = getProperty(user, "Name");
// console.log(property);

//?Problem -05

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Shahadat",
  publishedYear: 2024,
};

const toggleReadStatus = (book: Book) => {
  return { ...book, isRead: true };
};
const bookCreator = toggleReadStatus(myBook);
// console.log(bookCreator);

//?Problem -06

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age} ,Grade: ${this.grade}`);
  }
}

const student =new Student("Alice", 20, "A")
// student.getDetails()

//?Problem-07

const getIntersection =(arr1:number[],arr2:number[])=>{
  const element:number[] =[]
  for(let num of arr1){
    if(arr2.includes(num)){
      element.push(num)
    }
  }
  return element
}

const arrNumber =getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
console.log(arrNumber);
