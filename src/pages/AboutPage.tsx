import React from 'react';
import {useNavigate} from 'react-router-dom'

const AboutPage: React.FC = () => {
    const navigate = useNavigate()
    return (
       <>
       <h1>Страница игформации</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus explicabo ipsa incidunt. Distinctio rerum quas autem totam amet! Facere?</p>
       <button
       onClick={()=>navigate('/')}
       className="btn">Обратно к списку дел</button>
       </>
    );
};

export default AboutPage
