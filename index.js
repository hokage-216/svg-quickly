import { input , select } from '@inquirer/prompts';

const logo = {
    text: '',
    shape: '',
    textColor: '',
    shapeColor: ''
}

const colorKeywordRegex = /^[a-zA-Z]+$/;
const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

async function validateColorKeyword(colorChoice) {
    return colorKeywordRegex.test(colorChoice);
}

async function validateColorHex(colorChoice) {
    return hexColorRegex.test(colorChoice);
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

async function getTextColor() {
    const response = await select({
        message: "What color will the text be? (Color Keyword or Hexadecimal) ",
        choices: [
            { name: 'Color Keyword', value: 'keyword' },
            { name: 'Hexidecimal', value: 'hex' }
        ]
    });

    if (response === 'keyword') {
        const keywordResponse = await input({ message: 'Enter the color keyword: ' });
        const keyword = keywordResponse.value;
        if (await validateColorKeyword(keyword)) {
            return keyword;
        } else {
            console.log("Invalid Color Keyword. Try Again.");
            return getTextColor();
        }
    } else if (response === 'hex') {
        const hexResponse = await input({ message: 'Enter the hexadecimal of the color: ' });
        const hex = hexResponse.value;
        if (await validateColorHex(`#${hex}`)) {
            return `#${hex}`;
        } else {
            console.log("Invalid Hex Color. Try Again.");
            return getTextColor();
        }
    }
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

async function getShapeColor() {
    const response = await select({
        message: "What color will the shape be? (Color Keyword or Hexadecimal) ",
        choices: [
            { name: 'Color Keyword', value: 'keyword' },
            { name: 'Hexidecimal', value: 'hex' }
        ]
    });

    if (response === 'keyword') {
        const keywordResponse = await input({ message: 'Enter the color keyword: ' });
        const keyword = keywordResponse.value;
        if (await validateColorKeyword(keyword)) {
            return keyword;
        } else {
            console.log("Invalid Color Keyword. Try Again.");
            return getShapeColor();
        }
    } else if (response === 'hex') {
        const hexResponse = await input({ message: 'Enter the hexadecimal of the color: ' });
        const hex = hexResponse.value;
        if (await validateColorHex(`#${hex}`)) {
            return `#${hex}`;
        } else {
            console.log("Invalid Hex Color. Try Again.");
            return getShapeColor();
        }
    }
}

async function init() {
    logo.text = await getLogoText();
    logo.textColor = await getTextColor();
    logo.shape = await getShape();
    logo.shapeColor = await getShapeColor();
    console.log(logo);
 }

 init();