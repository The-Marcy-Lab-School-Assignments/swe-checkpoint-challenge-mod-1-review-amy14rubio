# Short Responses

For this assessment, aim to write a response with the following qualities:

- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = 'A';
  } else if (score >= 80) {
    let letter = 'B';
  } else if (score >= 70) {
    let letter = 'C';
  } else {
    let letter = 'F';
  }

  return 'Your grade is: ' + letter;
};

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

This bug is occurring because the variable `letter` is being declared within each scope of `if` and `else if` statements. Therefore, each time `letter` is declared, JavaScript creates a _new_ block-scoped variable and stores it in the heap. Each `letter` variable **does not** point to the same reference in memory, which then causes `letter` to have a value `undefined` as the only function-scoped memory JavaScript has of `letter` is when it was first declared: `let letter`.

**Part B:**

I would fix this bug by only declaring the `letter` variable once within the function scope, as shown below:

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    letter = 'A';
  } else if (score >= 80) {
    letter = 'B';
  } else if (score >= 70) {
    letter = 'C';
  } else {
    letter = 'F';
  }

  return 'Your grade is: ' + letter;
};
```

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

The console would log `75`. This is because objects **pass a reference** and point to the **same reference in memory**. When `newSettings.volume` is reassigned, so is `originalSettings.volume` being reassigned.

**Part B:**

I would modify the code using the **spread operator** to create a **shallow copy** of `originalSettings` as shown below:

**Corrected Code:**

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = { ...originalSettings };
newSettings.volume = 75;
console.log(originalSettings.volume);
```

---

## Prompt 3

Given this array of products and the code using `filter`:

```js
const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 700, inStock: false },
  { name: 'Watch', price: 300, inStock: true },
  { name: 'Tablet', price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock;
});
```

Walk through what happens in the first iteration of filter:

- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

In the first iteration of `filter`, `product` has a value of `{ name: "Laptop", price: 1000, inStock: true }`, which is the first element in the `products` array. The callback returns `true` as the `inStock` property of the first element of `products` has a value of `true`. This returned truthy value then gets pushed onto a new array called `itemsInStock`, and the process repeats.
