function SegundaLista({ itens }){
    return(
        <>
            <h3>Lista Legal</h3>

            {itens.length > 0 ? (
            itens.map((iten, index)=>
                (<p key={index}>{iten}</p>)
            )) : (
                <p>Sem dados ainda</p>
                )}
            
        </>
    )
}

export default SegundaLista