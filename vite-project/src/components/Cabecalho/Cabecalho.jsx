/*Inserindo propriedade dentro componente Cabecalho*/ 
const Cabecalho = (props) => {
    /*Declarado o nome do usuario da props para facilitar chamada*/ 
    const { nomeUsuario } = props;
    return (
        <div>
            Bem vindo, {nomeUsuario}
        </div>
    );
};

export { Cabecalho };