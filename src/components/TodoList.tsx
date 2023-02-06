import React, { useEffect } from 'react';
import { ITodo } from '../interfaces';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';


type TodoListProps ={
    todos: ITodo[]
    onToggle(id:number): void
    onRemove: (id:number)=> void
}

const TodoList:React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {

    const navigate = useNavigate()

      console.log(todos);

    if (todos.length ===0){
        return <p className='center'>Пока дел нет!</p>
    }
  

    const removeHandler= (event: React.MouseEvent,id: number) =>{
        event.preventDefault()

        onRemove(id)
    }
    
    return (
        <Box sx={{display:'flex', justifyContent: 'center', marginTop: '50px'}}>
        <ul style={{width: '70%'}}>
            {todos.map(todo=>{
                const classes= ['todo']
                if(todo.completed){
                    classes.push('completed')
                }
                if (todo.completed!== true){
                return(
                    <li className={classes.join(' ')} key={todo.id}>
                        <div>
                            <label>
                        <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={onToggle.bind(null, todo.id)} 
                        />
                        <span>{todo.title}</span>
                        </label>
                        <label>
                        <Button onClick={()=>navigate(`/oneTodo/${todo.id}`)}>edit</Button>
                        <Button onClick={event =>removeHandler(event,todo.id)} >delete</Button>
                    </label>
                    </div>
                </li>
                )}
            })}
       

        </ul>
        </Box>
    );
};

export default TodoList;