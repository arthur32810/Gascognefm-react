import axios from "axios";
import { useEffect, useState } from "react";
import CartFooter from "./CartFooter";

export default function Footer() {

    const [partnersData, setPartnersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const apiUrl = 'https://127.0.0.1:8000/api/logo_partenaires';

        axios.get(apiUrl, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                console.log(response.data);
                setPartnersData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })

    }, [])

    return (
        <footer>
            <h2>
                Nos partenaires :
            </h2>

            {partnersData && partnersData.length > 0 && partnersData.map((partner) => {
                return <CartFooter key={partner.id} name={partner.name} />
            })}

        </footer>
    )
}