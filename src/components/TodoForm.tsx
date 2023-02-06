import { TextField } from '@mui/material';
import React, {useState,useRef} from 'react';
interface TodoFormProps{
    onAdd(title:string):void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null)
    const [title, setTitle] = useState<string>('')

    const changeHandler =(event: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value)
    }
    const keyPressHandler = (event: React.KeyboardEvent) =>{

        if(event.key==='Enter'&& !title.trim()){
            alert('Заполните поле')
        }else if (event.key==='Enter'&& title.trim()){
                props.onAdd(title);
                // console.log(title)
                
                
                setTitle('')
            }
    }
    // console.log(ref.current?.value);
    
    return (
        <div className='input-field mt2' style={{display: 'flex', justifyContent: 'center'}}>
            {/* <input
            // onChange={changeHandler}
            // value={title} 
            ref={ref}
            type="text" 
            id="title" 
            placeholder='Введите название дела' 
            onKeyPress={keyPressHandler}
            /> */}
            <TextField 
            //  ref={ref}
             value={title} 
            onChange={changeHandler}
             type="text" 
             id="title" 
             sx={{width: '50%'}}
            //  placeholder='Введите название дела' 
             onKeyPress={keyPressHandler}
             variant='standard'
             label={'Назовите дело'}
            />
        </div>
    );
};

export default TodoForm;