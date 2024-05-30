import React, { useState } from "react";
import "./mypageindex.scss";
import { useNavigate } from "react-router-dom";

export default function MyPageIndex({ onButtonClick, currentPageIndex }) {
    // 선택된 버튼의 인덱스를 저장하는 상태
    const navigate = useNavigate();
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(currentPageIndex);

    // 버튼을 클릭할 때 호출되는 함수
    const handleButtonClick = (index) => {
        setSelectedButtonIndex(index);
        onButtonClick(index);
        navigateToMyPage(index);
        console.log(index);
    };

    const navigateToMyPage = (index) => {
        switch (index) {
            case 0:
                navigate("/mypage");
                break;
            case 1:
                navigate("/mypage/funding-history");
                break;
            case 2:
                navigate("/mypage/friend-funding-history");
                break;
            case 3:
                navigate("/mypage/order-history");
                break;
            case 4:
                navigate("/mypage/delivery");
                break;
            case 5:
                navigate("/mypage/favorite");
                break;
            case 6:
                navigate("/mypage/review");
                break;
            default:
                break;
        }
    };

    return (
        <div className="MyPageIndexBox">
            <button
                className={`MyPageIndexBoxText ${
                    selectedButtonIndex === 0 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(0)}
            >
                MY 펀딩 현황
            </button>
            <button
                className={`MyPageIndexBoxText ${
                    selectedButtonIndex === 1 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(1)}
            >
                지난 펀딩 이력
            </button>


            <button
                className={`MyPageIndexBoxText ${
                    selectedButtonIndex === 2 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(2)}
            >
                친구 펀딩 기록
            </button>
            <button
                className={`MyPageIndexBoxText ${
                    selectedButtonIndex === 3 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(3)}
            >
                구매 이력
            </button>
            <button
                className={`MyPageIndexBoxText ${
                    selectedButtonIndex === 4 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(4)}
            >
                배송지 관리
            </button>
            <button
                className={`MyPageIndexBoxText ${
                    selectedButtonIndex === 5 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(5)}
            >
                위시리스트
            </button>
            <button
                className={`MyPageIndexBoxText ${
                    selectedButtonIndex === 6 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(6)}
            >
                MY 리뷰
            </button>
            <div className="horizontalLine"></div>
            <button
                className={`MyPageIndexBoxText ${
                    selectedButtonIndex === 7 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(7)}
            >
                공지사항
            </button>
            <button
                className={`MyPageIndexBoxText ${
                    selectedButtonIndex === 8 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(8)}
            >
                고객센터
            </button>
            <button
                className={`MyPageIndexBoxText ${
                    selectedButtonIndex === 9 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(9)}
            >
                로그아웃
            </button>
            <div className="horizontalLine"></div>
        </div>
    );
}
