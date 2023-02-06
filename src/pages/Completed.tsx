import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';
import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../components/redux';
import { addTodo } from '../components/redux/redusSlice';
import { ITodo } from '../interfaces';
import './editCss.css'


const Completed: React.FC= () => {
    const todoRedux = useSelector((state: RootState)=>state.one.todos)
    const dispatch = useDispatch()
    const [todos, setTodos] = useState<ITodo[]>([])


    function getLocal(){
        const local = JSON.parse(localStorage.getItem('todos') || '[]')
        // const complete = local.filter((item: any)=>item.completed== true)
        setTodos(local)        
    }

    const removeHandler = (id:number) =>{
        const shoudRemove = window.confirm('Вы уверены что хотите удалить элеменет?')
        if(shoudRemove){
          setTodos(prev => prev.filter(todo=>todo.id!==id))
  
        }
      }

      const getCompl=()=>{
        dispatch(addTodo(todos))
        localStorage.setItem('todos', JSON.stringify(todos))

      }
console.log(todos);
console.log(todoRedux);


    useEffect(()=>{
           getLocal()     
    },[])
    useEffect(()=>{
        getCompl()
    },[todos])


    const finishedTodo = todos.filter(item=>item.completed==true) 
  



    return (

        <Grid sx={{display: 'flex',  flexDirection: 'column',alignItems: 'center', marginTop: '70px'}}>

                {/* {if (finishedTodo.length==0){
        return <p className='center'>Выполненных дел нет!</p>
    }} */}

    {finishedTodo.length==0? (<h1 className='center'>Выполненных дел нет!</h1>) : (  <h1>Выполненные задачи</h1>) }
    

          
                           {todos.map((item: any)=>{

                            {if(item.completed==true){

                                return(
                                    <ul className='compl__ul' key={item.id}>
                                    <li>{item.title}</li>
                                    <Button sx={{width: '20%'}} onClick={()=>removeHandler(item.id)}>Удалить</Button>
                                    </ul>
                            )
                            }}
                    })}

               
        </Grid>
    );
};

export default Completed;