import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault() // Evita que a página seja recarregada ao enviar o formulário
        setUserEmail(email)
        alert(`O e-mail ${userEmail} foi cadastrado com sucesso!`)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <label htmlFor="email">E-mail:</label>
                <input type="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar</button>
                {userEmail && (
                    <div>
                        <p>O e-mail cadastrado é: {userEmail}</p>
                        <button onClick={(limparEmail) => setUserEmail(null)}>Remover E-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional;