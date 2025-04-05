const prompt = require('prompt-sync')() ;
const fs = require('fs');




// this is the file path
const filePath = './todo.json'

const addTask = (task) => {
    const taskList = loadTask()
    taskList.push({task});
    saveTask(taskList);
};

const removeTask = (id) => {
    let taskList = loadTask();
    taskList = taskList.filter((task , index) => index !== id );
    saveTask(taskList);
};

const updateTask = (id , newTask) => {
    let taskList = loadTask();
    taskList[id]['task'] = newTask ;
    saveTask(taskList);
    console.log('\nSuccessfully Updated the task ')
};

const saveTask = (tasks) => {
    const tasksJson = JSON.stringify(tasks);
    fs.writeFileSync(filePath , tasksJson);
};

const clearTasks = () => {

    fs.truncateSync(filePath , 0);
};

const loadTask = () => {
    // logic for loading the task 
    try {
        const taskBuffer = fs.readFileSync(filePath);
        const taskJson = taskBuffer.toString();
        const tasks = JSON.parse(taskJson);
        return tasks;
    } catch{
        return []
    }
};


function main() {
    let task  ,  id , choice ;
    while(true){
        console.log('\n\n Which Option you want to Perform!!');
        console.log('------1.Add Tasks------');
        console.log('------2.Show Tasks------');
        console.log('------3.Remove Tasks------');
        console.log('------4.Update Task------');
        console.log('------5.Clear Tasks------');
        console.log('------6.Exit-------------\n')
        choice = prompt('Enter your Choice : ');
        
        
        if(isNaN(choice) || parseInt(choice) > 6 || parseInt(choice) <1 ) {
            console.log('Enter a valid number ');
            continue;
        }
        choice = parseInt(choice);
    
            switch (choice) {
            case 1:
                task = prompt('Enter the task you want to Enter : ');
                addTask(task);
                break;
            case 2 :
                const tasksList = loadTask();
                // listing all the task 
                if(tasksList.length !== 0) {
                    console.log('\n---The Tasks Are---')
                    tasksList.forEach((task , index) => {
                        console.log(`${index+1} - ${task['task']}`)   
                    });
                }
                else console.log('You have not entered any Task.\n')
                break
            case 3 :
                id = parseInt(prompt('Enter the number of task: '));
                removeTask(id-1);
                break;
            case 4 :
                id = parseInt(prompt('Enter the number of task which you want to update : '));
                task = prompt('Enter the updated Task: ');
                updateTask(id-1 , task);
                break;
            case 5 :
                clearTasks();
                break ;
            case 6:
                console.log('Existing......')
                return ;
            default:
                break;
        }
       

    }
}

main();
