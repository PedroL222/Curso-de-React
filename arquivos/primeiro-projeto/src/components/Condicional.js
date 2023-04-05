import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState("Sem email");
    const [useEmail, setUserEmail] = useState();

    function enviar(e){
        e.preventDefault();
        setUserEmail(email);
    }

    function limpar(e){
        e.preventDefault();
        setUserEmail("");
    }

    return(
        <div>
            <h2>Cadastrar Email</h2>
            <form>
                <input 
                type="email" 
                placeholder="Email" 
                onChange={(e)=>{setEmail(e.target.value)}}
                />
                <button onClick={enviar}>Enviar Email</button>
                <button onClick={limpar}>Limpar Email</button>
                {useEmail &&(
                    <div>
                        <p>Email preenchido {useEmail}</p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional