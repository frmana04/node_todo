import {argv} from './config/yargs'
import {create,list,update,deleteTask} from './to-do/to-do'

let command= argv._[0];
switch (command){

    case 'create':
        let task=create(argv.description)
        
        break;
     
    case 'list':
    
    if (list().length==0) console.log('List empty')
    list().forEach((element,i) => {
        console.log(`\n############# Task number ${i+1} #############\n\nDescription:${element.description}\nCompleted:${element.completed}\n\n#################################\n\n\n`); 
     });
        break;

     case 'update':
        let upd=update(argv.description,argv.completed)
        if (upd) console.log('task updated')
        else console.log('Task doesn´t exist')
        break;

        case 'delete':
        let deleted=deleteTask(argv.description)
        if (deleted) console.log('Task deleted')
        else console.log ('Task doesn´t exist')        
        break;

     default:
        console.log('Command not found');

}