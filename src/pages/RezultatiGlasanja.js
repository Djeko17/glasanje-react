const RezultatiGlasanja = () => {

    const [ucesnici, setUcesnici] = useState([
        { id: 1, ime: "Nevena", prezime: "Božović", pesma: "Kraj", brojGlasova: 65 },
        { id: 2, ime: "Zorja", prezime: "", pesma: "Lavine", brojGlasova: 20 },
        { id: 3, ime: "Rasta x Link", prezime: "", pesma: "Dan i noć", brojGlasova: 50 },
        { id: 4, ime: "Zoi", prezime: "", pesma: "Problem", brojGlasova: 80 },
        { id: 5, ime: "Albino", prezime: "", pesma: "Carstvo poroka", brojGlasova: 30 },
        { id: 6, ime: "Grupa Klon", prezime: "", pesma: "Nisam ti ja taj", brojGlasova: 10 },

    ]);

    return (
        <div>
            <Navbar />

            <h3 id='ss-22'>Suncane Skale '22</h3>
        </div>
    )
}

export default RezultatiGlasanja;