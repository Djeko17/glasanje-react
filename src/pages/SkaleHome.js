import { useState } from 'react'
import Navbar from '../components/Navbar';
import PrikazUcesnika from '../components/PrikazUcesnika';

const SkaleHome = () => {

    const [ucesnici, setUcesnici] = useState([
        { id: 1, ime: "Nevena", prezime: "Božović", pesma: "Kraj" },
        { id: 2, ime: "Zorja", prezime: "", pesma: "Lavine" },
        { id: 3, ime: "Rasta x Link", prezime: "", pesma: "Dan i noć" },
        { id: 4, ime: "Zoi", prezime: "", pesma: "Problem" },
        { id: 5, ime: "Albino", prezime: "", pesma: "Carstvo poroka" },
        { id: 6, ime: "Grupa Klon", prezime: "", pesma: "Nisam ti ja taj" },

    ]);


    return (
        <div className="skale">
            <Navbar />

            <h3 id='ss-22'>Suncane Skale '22</h3>

            <PrikazUcesnika ucesniciSkale={ucesnici} />

        </div>
    )
}

export default SkaleHome;