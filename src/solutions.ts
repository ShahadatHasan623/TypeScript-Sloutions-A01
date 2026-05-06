//?Problem-01
//Even Number Array
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
/**
 * Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.
 */

type User = {
  id: number;
  name: string;
  age: number;
};

const user: User = {
  id: 1,
  name: "Shahadat",
  age: 20,
};

const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const property = getProperty(user, "name");
// console.log(property);

//?Problem -05

/**
 * Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.
 */

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

const toggleReadStatus =(book:Book)=>{
   return {...book,
    isRead:true}
}
const bookCreator = toggleReadStatus(myBook)
console.log(bookCreator);
