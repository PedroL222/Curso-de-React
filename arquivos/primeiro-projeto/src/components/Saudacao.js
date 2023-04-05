function Saudacao({nome}){

    function gerar(algum){
        return `Olá ${algum}, tudo taixns?`;
    }

    return <>{nome ? (<p>{gerar(nome)}</p>) : (<p>Sem nome aindanpm</p>) }</>
}

export default Saudacao