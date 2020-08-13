import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg' 
import './styles.css';

export default function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
        <img src="https://avatars3.githubusercontent.com/u/13836640?s=460&u=1885b105ad166c7f396e99ec16288a37373639c9&v=4" alt="Daniel Cabral"/>
        <div>
            <strong>Daniel Cabral</strong>
            <span>Quimica</span>
        </div>
        </header>
        <p>
        There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look even
          slightly believable.
        </p>
        <footer>
            <p>
                Preço/Hora
                <strong>R$ 20,00</strong>
            </p>
            <button type="button"><img src={whatsappIcon} alt="whatsapp"/>Entrar em contato</button>
        </footer>
    </article>
    );
}
