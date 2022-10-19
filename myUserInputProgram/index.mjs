import promptSync from 'prompt-sync';

const prompt=promptSync();

var name=prompt('What is your name?')
console.log(name);

var age=prompt('what is your age?')
console.log(age)
console.log(typeof age)

var age=Number(prompt('what is your age?')) //parseInt works the same
console.log(age)
console.log(typeof age)
 