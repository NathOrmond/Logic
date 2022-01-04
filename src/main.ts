const prompts = require('prompts');

const languages = [
    { title: 'Propositional Logic', value: 'PL' },
    { title: 'Predicate Logic', value: 'PRPL' },
    { title: 'Modal Logic K', value: 'K' },
    { title: 'Modal Logic S5', value: 'S5' }
]

function getTextResponse(){ 

}

async function chooseLanguage(){ 
    return await prompts([
        {
          type: 'select',
          name: 'selection',
          message: 'Pick logic language to play in',
          choices: languages,
          initial: 0
        }
      ])
}

async function propositionalLogic(){ 
    // Create a formula
    // Test formula using tableaux
    // print tableaux
}

async function main(){ 
    let language = await chooseLanguage();
    switch(language.selection){
        case languages[0].value: 
        propositionalLogic();
            break;
        default: 
            console.log('Not yet implemented');
    }
}

main();

