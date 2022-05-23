export default function Ticket() {
    return (
        <>
            <header><h1>CINEFLEX</h1></header>
            <main>
                <div className="select"><h4>Pedido feito com sucesso!</h4></div>
                <div className="ticket">
                    <h6>Filme e sessão</h6>
                    <p>Filme: {}</p>
                    <p>Sessão: {}</p>
                </div>
                <div className="ticket">
                    <h6>Ingressos</h6>
                    <p>assento </p>
                </div>
                <div className="ticket">
                    <h6>Comprador</h6>
                    <p>Nome: {}</p>
                    <p>CPF: {}</p>
                </div>
            </main>
        </>
    );
}