const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
         '':  ' ',
};

function decode(expr) {
    let strWithCommas = '';

    for (let i = 0; i < expr.length; i++) {
      if (i % 10 === 0 && i !== 0) strWithCommas += ',';
      strWithCommas += expr[i];
    }
    
    let expr2Arr = strWithCommas.split(',');
    let morseArr = expr2Arr.map(item => numsStr2Morse(item));

    return morseArr.map(item => morse2text(item)).join('');
}

function numsStr2Morse(str) {
  let commas = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0 && i !== 0) commas += ',';
    commas += str[i];
  }

  let commas2arr = commas.split(',');
  let morse ='';

  for (let i = 0; i < commas2arr.length; i++) {
    if (commas2arr[i] === '10') morse += '.';
    if (commas2arr[i] === '11') morse += '-';
  }

  return morse;
}

function morse2text(str) {
  let text = '';

  for (let key in MORSE_TABLE) {
    if (str === key) text += MORSE_TABLE[key];
  }
  
  return text;
}

module.exports = {
    decode
}