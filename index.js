import { input , select } from '@inquirer/prompts';

const logo = {
    text: '',
    shape: '',
    textColor: '',
    shapeColor: ''
}

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

    return shape;
}


async function init() {
    logo.text = await getLogoText();
    logo.shape = await getShape();
    console.log(logo);
 }

 init();