function Form(props) {

    function cadastrarUsuario(e){
        e.preventDefault(); // para comportamento padrão do html (reload da página) e executa console abaixo
        console.log("cadastrou o usuário");
    }

    return (
        <div>
           <h1>Meu Cadastro</h1>
           <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"></input> 
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
           </form>
        </div>
    );
}

export default Form;