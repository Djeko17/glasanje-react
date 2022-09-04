const PrikazUcesnika = (props) => {

    var ucesniciSkale = props.ucesniciSkale;


    const glasaj = (ime, prezime) => {
        alert("Hvala sto ste glasali za " + ime + " " + prezime + "!")
    }


    return (
        <div className="prikazucesnika">

            {ucesniciSkale.map(ucesnik => {
                return (
                    <div>
                        <h3 className="text-primary">{ucesnik.ime + " " + ucesnik.prezime}  </h3>
                        <h4 className="text-secondary mx-5">{ucesnik.pesma}</h4>
                        <button onClick={() => glasaj(ucesnik.ime, ucesnik.prezime)} className="btn btn-danger mx-5" id="glasaj-button">Glasaj</button>
                    </div>
                );
            })}


        </div>
    )
}

export default PrikazUcesnika;