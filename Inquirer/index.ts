import inquirer from 'inquirer';

const questions = async ()=>{
    const answers = await inquirer.prompt([
    {
        type: 'rawlist',
        name: 'framework',
        message: 'Which framework do you want to use?',
        choices: ['React', 'Vue', 'Angular'],
    }
])
return answers.framework;
}
let fw=await questions();
console.log('\n','I use',fw,'framework');
