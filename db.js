const fs= require ('fs');


const saveDB = (listToDo)=>{

    let data= JSON.stringify(listToDo);
    fs.writeFile('./db/data.json',data,(err)=>{
        
        if (err) throw new Error ('Data can´t be saved', err)
      
    })
}

const loadDB = ()=>{
    try{
    let listToDo=require('./db/data.json');
    return listToDo
    }
    catch (error){
        let listToDo = [];
        console.log('List doesn´t exist. A new list has been created')
        return listToDo
    }
}

export {saveDB,loadDB}