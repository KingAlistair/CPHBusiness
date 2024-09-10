import { topicSeperator } from "./topicSeperator.js";

topicSeperator('2. Lesson Exercises');

topicSeperator('Loops & Arrays')


const loopArray = ['Peter', 7, 'Marianne', true, 'Helle', 8];

loopArray.forEach(element => {
        console.log(element + ' is a ' + typeof element);
});

topicSeperator('Loops & Objects');

const books = [
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
    { title: "You Don’t Know JS: Scope & Closures", author: "Kyle Simpson" },
    { title: "JavaScript: The Definitive Guide", author: "David Flanagan" },
    { title: "Learn JavaScript Visually", author: "Ivelin Demirov" }
  ];
  
  const bookList = document.getElementById('bookList');

  books.forEach(element => {
    const book = document.createElement('li')
    book.innerText = element.title + ' ' + element.author;
    console.log(book + '1')

    bookList.appendChild(book);
  })

  topicSeperator('IF exercises');


  const findLargest = (number1,number2,number3, number4) => {
    let largestNumber = number1;
    const numbers = [number1, number2, number3, number4]
    
    for (let index = 1; index < numbers.length; index++) {
      if (largestNumber < numbers[index]) {
        largestNumber = numbers[index];
      }
    }
    return largestNumber;
};

console.log('The larger number is: ' + findLargest(10,-40,52,33));


const isInRange = (number1, start, end) => {
  if (number1>= start && number1 <= end) {
    return true;
  } 
  return false;
}

console.log(isInRange(1, 0, 5));
console.log(isInRange(7, -5, 6));