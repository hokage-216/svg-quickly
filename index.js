import { input , select } from '@inquirer/prompts';
import { generateLogo } from './generateLogo.js';
import fs from 'fs/promises';


const logo = {
    shape: '',
    text: '',
    textFill: '',
    shapeFill: '',
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
        const keyword = keywordResponse.valueOf();
        if (await validateColorKeyword(keyword)) {
            return keyword;
        } else {
            console.log("Invalid Color Keyword. Try Again.");
            return getTextColor();
        }
    } else if (response === 'hex') {
        const hexResponse = await input({ message: 'Enter the hexadecimal of the color: ' });
        const hex = hexResponse.valueOf();
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

    return shape.choice;
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
        const keyword = keywordResponse.valueOf();
        if (await validateColorKeyword(keyword)) {
            return keyword;
        } else {
            console.log("Invalid Color Keyword. Try Again.");
            return getShapeColor();
        }
    } else if (response === 'hex') {
        const hexResponse = await input({ message: 'Enter the hexadecimal of the color: ' });
        const hex = hexResponse.valueOf();
        if (await validateColorHex(`#${hex}`)) {
            return `#${hex}`;
        } else {
            console.log("Invalid Hex Color. Try Again.");
            return getShapeColor();
        }
    }
}



function saveSVG(svgMarkup, filename) {
    // Define the path relative to the current working directory
    const path = `./${filename}.svg`;

    // Write the SVG markup to a file
    fs.writeFile(path, svgMarkup, (err) => {
        if (err) {
            console.error('Error saving SVG:', err);
        } else {
            console.log(`SVG saved successfully to ${path}`);
        }
    });
}

async function init() {
    logo.shape = await getShape();
    logo.shapeFill = await getShapeColor();
    logo.text = await getLogoText();
    logo.textFill = await getTextColor();
    logo.filename = await input({ message: 'What would you like to name this file?: '});

    return saveSVG(generateLogo(logo), logo.filename);
 }

 init();