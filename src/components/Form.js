function Form(){

    function cadastrarUsuario(){
        alert("Usuário cadastrado com sucesso!")
    }

    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <input type="text" placeholder="Digite seu nome" />                
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form