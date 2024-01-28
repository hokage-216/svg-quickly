import { input , select } from '@inquirer/prompts';

let text; 
let shape;

async function getLogoText() {
    const response = await input({ message: "Input what letters your logo will display: " });
    const text = response.valueOf();

    if (text.length < 1 || text.length > 3) {
        console.log('Please enter up to three characters.');
        return getLogoText();
    } 

    return text;
}

async function getShape() {
    const shape = {
        choice: await select({
            message: "Choose the shape of your logo: ",
            choices: [
                {name: 'Circle', value: 'circle'},
                {name: 'Square', value: 'square'},
                {name: 'Triangle', value: 'triangle'}
            ]
        }),
    
    }
}


async function init() {
    text = await getLogoText();
    shape = await getShape();
 }

 init();