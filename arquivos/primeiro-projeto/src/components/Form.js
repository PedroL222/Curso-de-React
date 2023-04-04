import {useState} from 'react';

function Form(){

    const cadUsu = (e)=>{
        e.preventDefault();
        console.log(name)
        console.log("Cadastrado");
        console.log(`usu ${name} senha ${password}`)
    }

    const [name, setName] = useState("matue");
    const [password, setPassword] = useState("matue")

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
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Enviar"/>
            </div>
        </form>
    )
}

export default Form