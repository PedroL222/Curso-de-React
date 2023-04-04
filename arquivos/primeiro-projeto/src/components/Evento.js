function Evento(){

    function meuEvento(){
        console.log("Chamaa");
    }

    return(
        <div>
            <p>Click aqui para algo legal</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento