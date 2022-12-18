import inquirer from 'inquirer';
/*
const questions = async ()=>{
    const answers = await inquirer.prompt([
    {
        //input, list, rawlist, expand, checkbox, confirm, input, password, editor
        type: 'input',
        // type: 'rawlist',
        name: 'myanswer',
        message: 'what is your answer?',
        // choices: ['React', 'Vue', 'Angular'],
    }
])
return answers.myanswer;
}
let fw=await questions();
console.log('my answer is==> ', fw);
*/
inquirer
    .prompt([
    {
        type: 'expand',
        message: 'Conflict on `file.js`: ',
        name: 'overwrite',
        choices: [
            {
                key: 'y',
                name: 'Overwrite',
                value: 'overwrite',
            },
            {
                key: 'a',
                name: 'Overwrite this one and all next',
                value: 'overwrite_all',
            },
            {
                key: 'd',
                name: 'Show diff',
                value: 'diff',
            },
            new inquirer.Separator(),
            {
                key: 'x',
                name: 'Abort',
                value: 'abort',
            },
        ],
    },
])
    .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});
