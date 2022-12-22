import { useState, useEffect } from "react";
import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Cards = async () => {
    const [cards, setCard] = useState("");
    const url = "https://api.manoapp.com/api/v1/users/products/whats_new";

    useEffect(() => {
        axios
            .get(url, {
                headers: {
                    Authorization: process.env.AUTH_TOKEN,
                    UserId: process.env.USER_ID_ADDRESS,
                    StoreId: process.env.STORE_ID,
                },
            })
            .then((res) => {
                setCard(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <div className="container">
            <div className="cardsContainer">
                <div className="boxCard">
                    <h1>{cards.}</h1>
                </div>
            </div>
        </div>
    );
};

export default Cards;
