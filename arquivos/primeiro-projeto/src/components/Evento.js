import Button from "./evento/Button";

function Evento(){

    function meuEvento(){
        console.log("Chamaa");
    }

    function segundo(){
        console.log("segundo evento");
    }

    return(
        <div>
            <p>Click aqui para algo legal</p>
            <Button event = {meuEvento} text="Primeiro evento" />
            <Button event = {segundo} text="Segundo evento" />
        </div>
    )
}

export default Evento