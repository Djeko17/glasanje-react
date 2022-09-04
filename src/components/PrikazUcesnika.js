const PrikazUcesnika = (props) => {

    var ucesniciSkale = props.ucesniciSkale;

    return (
        <div className="prikazucesnika">

            {ucesniciSkale.map(ucesnik => {
                return (
                    <div>
                        <h3 className="text-primary">{ucesnik.ime + " " + ucesnik.prezime}  </h3>
                        <h4 className="text-secondary mx-5">{ucesnik.pesma}</h4>
                        <button className="btn btn-danger mx-5" id="glasaj-button">Glasaj</button>
                    </div>
                );
            })}


        </div>
    )
}

export default PrikazUcesnika;