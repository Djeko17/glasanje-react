const TabelaRezultati = (props) => {

    var ucesnici = props.ucesnici;
    const [ucesniciTabela, setUcesniciTabela] = useState([ucesnici]);


    return (
        <div className="tabelarezultati">

            <table className="table" id="tabela-glasanje">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ime i prezime</th>
                        <th>Pesma</th>
                        <th>Broj glasova</th>
                    </tr>
                </thead>
                <tbody>
                    {ucesnici.map(ucesnik => {
                        return (
                            <tr key={ucesnik.id}>
                                <td>{ucesnik.id}</td>
                                <td>{ucesnik.ime} {" " + ucesnik.prezime}</td>
                                <td>{ucesnik.pesma}</td>
                                <td>{ucesnik.brojGlasova}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div >
    )
}

export default TabelaRezultati;