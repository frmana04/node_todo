
const description ={

    demand:true,
    alias: 'd',
    desc: 'Description of task to do'
};

const completed= {
    default:true,
    alias:'c',
    desc: 'Tick as completed or pending a task'
}

const argv= require('yargs')
            .command('create', 'Create an element to do', {
                description

            })
            .command('update', 'Update the completed state of a task', {
                description,
                completed
            })
            .command('delete', 'Delete an element to do', {
                description
            })
            .help()
            .argv;
            
export {argv}