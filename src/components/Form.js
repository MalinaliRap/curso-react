import {useState} from 'react';

function Form(props) {

    function cadastrarUsuario(e) {
        e.preventDefault(); // para comportamento padrão do html (reload da página) e executa console abaixo
        console.log(`Usuário: ${name}, Senha: ${password} `);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Digite a sua nome"
                    onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password"
                    id="password" 
                    name="password" 
                    placeholder="Digite a sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                   
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    );
}

export default Form;