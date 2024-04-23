import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderBar from "../../organisms/header/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from '../../organisms/footer/footer'
import GifthubPane from '../../organisms/contents/gifthub/gifthub'

export function GifthubPage() {

    const [itemId, setitemId] = useState(null);
    const [itemName, setitemName] = useState(null);
    const [itemImageUrl, setitemImageUrl] = useState(null);
    const [optionName, setoptionName] = useState(null);
    const [itemPrice, setitemPrice] = useState(null);
    const [quantity, setquantity] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: 'https://8269110c-f6c2-4f52-bca9-81b9e076730c.mock.pstmn.io/api/v1/gifthub',
                    responseType: 'json'
                })

                if (response.data) {
                    const {itemId, itemName, itemImageUrl, optionName, itemPrice, quantity} = response.data;
                    setitemId(itemId);
                    setitemName(itemName);
                    setitemImageUrl(itemImageUrl);
                    setoptionName(optionName);
                    setitemPrice(itemPrice);
                    setquantity(quantity);
                }

                console.log(response.data);
            }catch(error){
                console.error("Error fetching data:", error);
            }
        };
        loadData();
        console.log(itemId, itemName, itemImageUrl, optionName, itemPrice, quantity);
    }, []);

    return (
        <div className="gifthub-pages">
            <HeaderBar />
            <GifthubPane />
            <Footer />
        </div>
    );
}

export default GifthubPage;