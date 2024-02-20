const { createCompletion, loadModel, create } = require('gpt4all');

async function chat(){
    const model = await loadModel(
        'mistral-7b-openorca.Q4_0.gguf',
        { verbose: true, device: 'gpu' }
    );
    
    const response = await createCompletion(model, [
        { role : 'user', content: 'What is 1 + 1?'  } 
    ], {verbose : true});
    
}

chat();