import React, {useEffect,useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../components/redux';
import { addTodo, getOneTodo } from '../components/redux/redusSlice';
import { useSelector, useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import { ITodo } from '../interfaces';
import { Button } from '@mui/material';
import './editCss.css'

const OneTodo: React.FC = () => {
  const {id} = useParams()
  const oneTodo = useSelector((state: RootState)=>state.one.oneTodo)
  const todoRedux = useSelector((state: RootState)=>state.one.todos)
  const [oneState, setOneState] = useState<any>(oneTodo)
const dispatch = useDispatch()
const navigate = useNavigate()


const handlerOneTodo =  (id: any) =>{
  const localTodos =  JSON.parse(localStorage.getItem('todos') || '[]')
 const one =  localTodos.find((item: any)=>{
    if(item.id==id){
      return item
    }
 }
    
  )  
dispatch(addTodo(localTodos))
dispatch(getOneTodo(one))  

}

const editHandler =(event:  React.ChangeEvent<HTMLInputElement>)=>{
  setOneState({...oneState, title: event.target.value})

}

const saveEdit = (id:any) =>{
 const test =  todoRedux.filter((item: any)=>item.id!==id)

 if(!oneState.title.trim()){
  alert('Заполните поле')
 }else{

   test.push(oneState)
  
  dispatch(addTodo(test))
 }

// console.log(test);

}




console.log(todoRedux);

useEffect(()=>{
  handlerOneTodo(id)
},[])

useEffect(()=>{
  setOneState(oneTodo)
},[oneTodo])


useEffect(()=>{
  localStorage.setItem('todos', JSON.stringify(todoRedux))
},[todoRedux])

console.log(todoRedux);
    return (
         <div className='edit__block'>
        
          {oneState !== '{}' ? ( <>
          <TextField 
          sx={{width: '40%'}}
           type="text" 
           label={'Изменить'}
          value={oneState.title}
           onChange={editHandler}
           />
           <Button
           onClick={()=>{
            saveEdit(oneState.id)
           }}
           
           >Изменить</Button>
           </>
           
           ) : (null)}
          

          </div>
              );
};

export default OneTodo;