import React, {useEffect, useState} from 'react';
import './mypage-delivery-mange.scss';
import MypageIndex from '../../../molecules/MypageIndex/mypageindex';
import MypageProfile from '../../../molecules/MypageProfile/mypageprofile';
import MyPageIndex from "../../../molecules/MypageIndex/mypageindex";
import axios from "axios";

const MypageDeliveryPane = () => {
    const [apiData, setApiData] = useState(null);
    const handleButtonClick = (index) => {
        console.log(`Selected index: ${index}`);
    };

    useEffect(() => {
        // API 호출 함수
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_FUNDINGBOOST}/delivery`,
                    headers: {
                        "Access-Control-Allow-Credentials": true,
                        "Authorization": `Bearer ${accessToken}`,
                        "Access-Control-Allow-Origin": "http://localhost:3000/"
                    },
                    responseType: 'json'
                });
                console.log(response.data); // 콘솔에 데이터 출력
                // setApiData(response.data.data); // 상태에 데이터 저장

            } catch (error) {
                console.error("API 호출 중 오류가 발생했습니다.", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="mypage-myhistory-total-container">
            <div className="mypage-myhistory-left-pane-container">
                {/*{apiData && <MypageProfile profileInfo={apiData} />}*/}
                <MyPageIndex onButtonClick={handleButtonClick} currentPageIndex={4} />
            </div>
            <div className="mypage-myhistory-right-pane-containter">
                배송지 관리 content
            </div>
        </div>
    );
}

export default MypageDeliveryPane;