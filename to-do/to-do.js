import {saveDB,loadDB} from '../db'

let listToDo = [];



const create = (description)=>{
    
    listToDo=loadDB();
    let toDo={
        description,
        completed:false,
       
    }
    listToDo.push(toDo);
    console.log(listToDo)
    saveDB(listToDo);
    return toDo
}

const list = ()=>{
    listToDo=loadDB();

   return listToDo;
}

const update= (desc,completed)=>{
    listToDo=loadDB();
    var enc=false;
    listToDo.forEach(element=>{
        if (element.description==desc){
            element.completed=completed;
            enc=true
        }
      
        })

        saveDB(listToDo);
    return enc

}

const deleteTask= (desc)=>{
    listToDo=loadDB();
    var enc=false;
    let index=listToDo.findIndex(element=>
        element.description==desc
        )
        if (index!=-1){listToDo.splice(index,1)
            saveDB(listToDo);    
            return true
        }     
        return false;
       
    

}

export {create,list,update,deleteTask}