# node_todo
App to manage task to do using commands prompt and external JSON file to save data using NodeJS


Commands:

  app create  Create an element to do
  
  app update  Update the completed state of a task
  
  app delete  Delete an element to do
  

Options:

  --version  Show version number           [boolean]
  
  
  --help     Show help    



## Create a task
```
node app create -d "Name of a new task"
```


## List all tasks

```
node app list
```


## Update a task

```
node app update -u "Name of an existing task" -c true
```


## Delete a task

```
node app delete --del "Name of an existing task to delete" 
```

                                             [boolean]
