import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = "Ferrari" lancamento={1999} />
                <Item marca = "Bugati" lancamento={14} />
                <Item />
            </ul>
        </>
    )
}

export default List