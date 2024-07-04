function Tabela({vetor}){
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vetor.map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice+1}</td>
                                <td>{obj.codigo}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.marca}</td>
                                <td><button className="btn btn-success">Selecionar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tabela;