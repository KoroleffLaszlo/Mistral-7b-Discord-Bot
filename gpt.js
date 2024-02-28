const { createCompletion, loadModel } = require('gpt4all');
const { spawn } = require('child_process');
const { EventEmitter } = require('events');

async function Chat(user_messages){
    const model = await loadModel(
        'mistral-7b-openorca.Q4_0.gguf',
        { verbose: true, device: 'gpu' }
    );

    const response = await createCompletion(model, [
        { role : 'user', content: user_messages  } 
    ], { verbose : true });

    console.log(`\n\nUSER_MESSAGE: ${user_messages} \n\n ------`);
    console.log(response.choices[0].message.content);

    model.dispose()
    return new Promise(resolve => setTimeout(() => resolve(response.choices[0].message.content), 1000));
}

module.exports = Chat;