let input = prompt("What would you like to do?")
const todos = ['Collect eggs','Clean the house']
while(input!== 'quit' && input!=='q'){
   
    if(input === 'list'){
        console.log('********************')
        for(let i=0;i<todos.length;i++){
            console.log(`${i}:${todos[i]}`);
        }
        console.log('********************')
     
    }
    else if(input === 'new'){
        
        const newTodo = prompt('Enter the new todo');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }
    else if(input === 'delete'){
        const index = parseInt(prompt('Enter index which is to be deleted'));
        
        const deleted = todos.splice(index,1);
        console.log(`ok deleted ${deleted[0]}`);
    }
    input = prompt("What would you like to do?")
}
console.log("You quit the app")