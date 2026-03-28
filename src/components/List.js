import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="BMW" ano_lancamento={1964} />
                <Item marca="Audi" />
                <Item ano_lancamento={2022} />
                <Item />
            </ul>
        </>
    )
}

export default List