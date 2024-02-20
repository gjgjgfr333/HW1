const person = {
  name: "Pete",
  age: 24,
  salary: 2550,
  street: "Some street",
  houseNum: 52,
};

function middleNumber(obj) {
  let sum = 0;
  let count = 0;
  for (let key in obj)
    if (typeof obj[key] === "number") {
      sum += obj[key];
      console.log(sum);
      count++;
    }
  if (count > 0) {
    const average = sum / count;
    console.log("Среднее арифметическое:", average);
    return average;
  } else {
    console.log("В объекте нет числовых значений.");
    return null;
  }
}

let date = new Date();

function formatDate(date) {
  const array = [];
  let years = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  month = month.toString().padStart(2, "0");

  return `${day}.${month}.${years}, ${hours}:${minutes}:${seconds}`;
}

const currentDate = new Date();
//console.log(formatDate(currentDate));

//arrays
const numbers = [3, -1, 8, -4, 5, 2, -7, 6];
const positiveNumbers = numbers.filter((positiv) => positiv >= 0);
console.log(positiveNumbers);
const totalSum = numbers.reduce((accum, current) => accum + current, 0);
console.log(totalSum);
const maxValue = numbers.reduce((accum, current) =>
  accum > current ? accum : current,
);
console.log(maxValue);
const minValue = numbers.reduce((accum, current) =>
  accum < current ? accum : current,
);
console.log(minValue);
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
