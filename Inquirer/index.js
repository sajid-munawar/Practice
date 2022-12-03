import inquirer from 'inquirer';
const questions = async () => {
    const answers = await inquirer.prompt([
        {
            //input, list, rawlist, expand, checkbox, confirm, input, password, editor
            type: 'input',
            // type: 'rawlist', 
            name: 'myanswer',
            message: 'what is your answer?',
            // choices: ['React', 'Vue', 'Angular'],
        }
    ]);
    return answers.myanswer;
};
let fw = await questions();
console.log('my answer is==> ', fw);
