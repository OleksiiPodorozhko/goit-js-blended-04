// Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

console.log('Завдання 1');

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(number => number ** 2);
console.log(doubleNumbers);

const getDoubleNumbers = array => array.map(number => number ** 2);

// Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

console.log('Завдання 2');

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const getValues = array => array.flatMap(el => el.values);

console.log(getValues(data));

// Завдання 3:
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.
console.log('Завдання 3');

const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const isYoung = people => people.some(person => person.age < 20);

console.log(isYoung(people));

// Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.
console.log('Завдання 4');

const numbers4 = [2, 4, 6, 8, 10];

const isEven = numbers => numbers.every(number => number % 2 === 0);

console.log(isEven(numbers4));

// Завдання 5:
// Знайдіть перше непарне число
console.log('Завдання 5');

const numbers5 = [2, 1, 6, 8, 9, 10, 12];

const findOdd = numbers => numbers.find(number => number % 2 !== 0);

console.log(findOdd(numbers5));

// Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

console.log('Завдання 6');

const numbersArray = [4, 2, 5, 1, 3];

const sortArray = array => array.toSorted((a, b) => a - b);

console.log(sortArray(numbersArray));

// Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
// у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

console.log('Завдання 7');

const stringArray = ['banana', 'orange', 'apple', 'pear'];

const sortFruits = fruits => fruits.toSorted((a, b) => a.localeCompare(b));

console.log(sortFruits(stringArray));

// Завдання 8:
// Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

console.log('Завдання 8');

const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const sortUsers = users =>
  users.toSorted((user1, user2) => user1.age - user2.age);

console.log(sortUsers(users));

// Завдання 9:
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

console.log('Завдання 9');

const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const filterUsers = users => users.filter(user => user.age > 20);

console.log(filterUsers(user));

// Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.
console.log('Завдання 10');

const numbers10 = [1, 2, 3, 4, 5];

const getSum = numbers =>
  numbers.reduce((accumulator, number) => accumulator + number, 0);

console.log(getSum(numbers10));

// Завдання 11:
// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).

console.log('Завдання 11');

class Calculator {
  #number;

  number(number) {
    this.#number = number;
    return this;
  }

  getResult() {
    return this.#number;
  }

  add(value) {
    this.#number += value;
    return this;
  }

  subtract(value) {
    this.#number -= value;
    return this;
  }

  multiply(value) {
    this.#number *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      console.error('Division by 0 is not allowed!');
      this.#number = NaN;
      return this;
    }
    this.#number /= value;
    return this;
  }
}

//
// Вимоги до класу Calculator:
// - Метод number(value) – встановлює початкове значення для обчислень.
// - Метод getResult() – повертає поточний результат.
// - Метод add(value) – додає число.
// - Метод subtract(value) – віднімає число.
// - Метод multiply(value) – множить.
// - Метод divide(value) – ділить (з перевіркою на 0).
// Усі методи (крім getResult) повертають this для chain-викликів.
//
// Приклад використання:
const calc = new Calculator();
const result = calc
  .number(10)
  .add(5)
  .subtract(3)
  .multiply(4)
  .divide(2)
  .getResult();
console.log(result); // 24

// Завдання 12:
// Напиши клас Client, який створює об'єкт з властивостями login, email.
// Використай приватні властивості #login та #email,
// доступ через геттери та сеттери.

console.log('Завдання 12');

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(login) {
    this.#login = login;
  }

  get email() {
    return this.#email;
  }

  set email(email) {
    this.#email = email;
  }
}

const client = new Client('user', 'test@email.com');
console.log(client.login);
client.login = 'admin';
console.log(client.login);

console.log(client.email);
client.email = 'new@email.com';
console.log(client.email);

// Завдання 13:
// Наслідування у класах!
// Створіть клас Person з властивостями name, age, gender, email
// і методом getDetails(), що повертає об'єкт з даними.
// Створіть клас Employee, який наслідує Person і має властивості
// salary, department та метод getEmployeeDetails(),
// що повертає дані про зарплату та відділ.

console.log('Завдання 13');

class Person {
  constructor(data) {
    this.name = data.name;
    this.age = data.age;
    this.gender = data.gender;
    this.email = data.email;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

class Employee extends Person {
  constructor(data) {
    super(data);
    this.salary = data.salary;
    this.department = data.department;
  }

  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}

const employee = new Employee({
  name: 'John',
  age: 21,
  gender: 'male',
  email: 'test@mail.com',
  salary: 1000,
  department: 'Department 1',
});

console.log(employee.getDetails());
console.log(employee.getEmployeeDetails());

// Завдання 14:
// 10. Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)

console.log('Завдання 14');

const products = [
  { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
  { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
  { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
  { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
  { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
  { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
  { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
  { name: 'Beef', category: 'meat', price: 7.0, stock: 25 },
  { name: 'Lemon', category: 'fruits', price: 2.2, stock: 30 },
];

const getMostExpensiveMeatProduct = products =>
  products.reduce(
    (accumulator, product) =>
      accumulator.price > product.price ? accumulator : product,
    products[0]
  );

console.log(getMostExpensiveMeatProduct(products));
