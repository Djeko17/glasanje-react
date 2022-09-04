import { useState } from 'react'

const TabelaRezultati = (props) => {

    var ucesnici = props.ucesnici;
    const [ucesniciTabela, setUcesniciTabela] = useState(ucesnici);
    const [filter, setFilter] = useState([]);
    const [filter2, setFilter2] = useState([]);

    const sortiraj = (dole) => {
        if (dole === "dole")
            setFilter(ucesniciTabela.sort((a, b) => b.brojGlasova - a.brojGlasova));

        if (dole === "gore")
            setFilter2(ucesniciTabela.sort((a, b) => a.brojGlasova - b.brojGlasova));

    }


    return (
        <div className="tabelarezultati">

            <button onClick={() => sortiraj("dole")} className='btn btn-primary'>Sort Opadajuce</button>
            <button onClick={() => sortiraj("gore")} className='btn btn-primary mx-3'>Sort Rastuce</button>

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
                    {console.log("OVDE")}
                    {ucesniciTabela.map(ucesnik => {
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