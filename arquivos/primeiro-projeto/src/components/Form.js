import {useState} from 'react';
import PropTypes from 'prop-types';

function Form(){

    const cadUsu = (e)=>{
        e.preventDefault();
        console.log(name)
        console.log("Cadastrado");
        console.log(`usu ${name} senha ${password}`)
    }

    const [name, setName] = useState("Nome");
    const [password, setPassword] = useState("");
    const [idade, setIdade] = useState("Idade");

    return(
        <form onSubmit={cadUsu}>
            <label htmlFor="name"></label>
            <div>
                <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder = "Seu nome..." 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder = "Sua senha..." 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
                <input 
                type="text" 
                id="idade" 
                name="idade" 
                placeholder = "Sua idade..." 
                value={idade}
                onChange={(e)=>setIdade(e.target.value)}
                />
            </div>
            <div>
                <input type="submit" value="Enviar"/>
            </div>
        </form>
    )
}

Form.prototype = {
    password: PropTypes.number.isRequired,
}

export default Form