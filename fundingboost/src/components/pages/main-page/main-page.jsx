import React, { useEffect, useState, useRef } from 'react';
import HeaderBar from "../../organisms/header/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from '../../organisms/footer/footer';
import MainPane from '../../organisms/contents/main/main';
import MainFunding from "../../molecules/mainFunding/mainFunding";
import axios from "axios";

function MainPage() {
    const [mainData, setMainData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [lastItemId, setLastItemId] = useState(null);
    const loader = useRef(null);

    const fetchData = async (lastItemIdParam) => {
        if (isLoading) return;
        setIsLoading(true);

        try {
            let accessToken = localStorage.getItem('accessToken') || "";
            const url = `${process.env.REACT_APP_FUNDINGBOOST}/home${lastItemIdParam ? `?lastItemId=${lastItemIdParam}` : ''}`;

            const response = await axios.get(url, {
                responseType: 'json',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                    "Access-Control-Allow-Origin": "http://localhost:3000/",
                    "Access-Control-Allow-Credentials": true
                },
            });

            const data = response.data;
            console.log(data)
            if (data && data.data && Array.isArray(data.data.itemDtoList)) {
                setMainData(prev => lastItemIdParam ? [...prev, ...data.data.itemDtoList] : data.data.itemDtoList);
                if (data.data.itemDtoList.length > 0) {
                    setLastItemId(data.data.itemDtoList[data.data.itemDtoList.length - 1].itemId - 20);
                }
            } else {
                console.error("Error: Unexpected response structure", data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(null);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoading && lastItemId !== null) {
                fetchData(lastItemId);
            }
        });

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [isLoading, lastItemId]);

    return (
        <div className="Main-pages">
            <HeaderBar />
            <MainFunding mainData={mainData} />
            <MainPane mainData={{ data: { itemDtoList: mainData } }} />
            <div ref={loader} style={{ height: "100px", margin: "0 auto" }}></div>
            <Footer />
        </div>
    );
}

export default MainPage;
