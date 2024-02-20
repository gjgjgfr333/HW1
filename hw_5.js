const students = [
  { name: "Alice", grades: [85, 90, 92] },
  { name: "Bob", grades: [78, 80, 75] },
  { name: "Charlie", grades: [90, 92, 88] },
  { name: "Anna", grades: [99, 60, 83] },
  { name: "George", grades: [77, 82, 77] },
  { name: "Nick", grades: [70, 90, 83] },
];

students.forEach((student) => {
  const sum = student.grades.reduce((acc, current) => acc + current, 0);
  const middleNum = sum / student.grades.length;

  student.averageGrade = Math.round(middleNum);
});
//console.log(students);

students.sort((a, b) => b.averageGrade - a.averageGrade);
//console.log(students);

const topStudent = students.slice(0, 3);
//console.log(topStudent);

//2

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.findAndPush = function (searchEl) {
  for (let i = 0; i < this.length; i++) {
    if (searchEl === this[i]) {
      let index = this.indexOf(searchEl);
      this.splice(index, 1);
      this.splice(this.length, 0, searchEl);
      return this;
    }
  }
  return `в массиве нет данного элемента: ${searchEl}`;
};

console.log(arrayNumber.findAndPush(5));

//3
function differenceDate(dataStart, dataEnd) {
  let yesrs = dataEnd.getFullYear() - dataStart.getFullYear();
  let month = dataEnd.getMonth() - dataStart.getMonth();
  let days = dataEnd.getDate() - dataStart.getDate();
  let hours = dataEnd.getHours() - dataStart.getHours();
  let minutes = dataEnd.getMinutes() - dataStart.getMinutes();
  let seconds = dataEnd.getSeconds() - dataStart.getSeconds();

  if (month < 0) {
    yesrs--;
    month += 12;
  }
  if (days < 0) {
    month--;
    let previousMonthEndDate = new Date(
      dataEnd.getFullYear(),
      dataEnd.getMonth(),
      0,
    );
    days += previousMonthEndDate.getDate();
  }
  return {
    yesrs: yesrs,
    month: month,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

let startDate = new Date(2023, 7, 20, 12, 0, 0);
let endDate = new Date(2024, 5, 10, 18, 30, 45);

console.log(differenceDate(startDate, endDate));

//4

const student = {
  name: "Alice",
  age: 20,
  grade: "A",
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", " traveling"],
};

function printStudentInfo(objStudent) {
  let { name, age, grade, address, hobbies } = objStudent;
  return `Student: ${name}, Age: ${age}, Grade: ${grade}, City: ${address.city}, Zip: ${address.zip}, Hobbies: ${hobbies}`;
}

console.log(printStudentInfo(student));

//5

const user = {
  name: "Boris",
  age: 24,
};

const { name, age } = user;
const newUser = { name, age };
newUser.key = 123;

console.log(newUser);
console.log(user);
