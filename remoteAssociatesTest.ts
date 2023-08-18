// https://www.remote-associates-test.com/

const phrases1: string[] = ['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP'];
const phrases2: string[] = ['BATHROOM', 'BATH SALTS', 'BLOODBATH'];
const phrases3: string[] = ['COTTAGE CHEESE', 'SWISS CHEESE', 'CHEESE CAKE'];
const phrases4: string[] = ['SORE LOSER', 'SORE THROAT', 'SORE SPOT'];
const phrases5: string[] = ['DUCKBILL', 'BILLFOLD', 'DOLLAR BILL'];

function getQuestionPart(phrases: string[]): string[] {

  const trimPhrases: string[] = phrases.map(str => str.replace(/\s/g, ''));

  const splitFirstPhrases: string[] = trimPhrases[0].split('');

  const duplicateWord: string[] = [];
  for(let i = 0; i < splitFirstPhrases.length; i++) {
    let sumarray: string = splitFirstPhrases.slice(i, i + 2).join('');
    
    if (trimPhrases[1].includes(sumarray) === true) {
      duplicateWord.push(sumarray);
    }
  }

  const oddIndexedElements: string[] = duplicateWord.filter((_, index) => index % 2 === 0);
  const outputString: string = oddIndexedElements.join('');
  const removedBillArray: string[] = trimPhrases.map(str => str.replace(outputString, ''));

  return removedBillArray;
}

console.log(`${phrases1} === ${getQuestionPart(phrases1)}`);
console.log(`${phrases2} === ${getQuestionPart(phrases2)}`);
console.log(`${phrases3} === ${getQuestionPart(phrases3)}`);
console.log(`${phrases4} === ${getQuestionPart(phrases4)}`);
console.log(`${phrases5} === ${getQuestionPart(phrases5)}`);
