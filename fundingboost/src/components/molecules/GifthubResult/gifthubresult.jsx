import React from 'react';
import './gifthubresult.scss';
import { useNavigate } from 'react-router-dom';

const GifthubResult = ({ totalPrice, selectedItems, items }) => {
    const navigate = useNavigate();

    const handleFunding = () => {
        const totalFundingItemQuantity = selectedItems.reduce((total, selectedItem) => total + selectedItem.quantity, 0);
        // 총 수량이 5 이상인 경우 이동 제한
        if (totalFundingItemQuantity > 5) {
            alert('펀딩은 최대 5개까지만 가능합니다.');
            return;
        }
        navigate('/funding', { state: { selectedItems } });
        console.log(selectedItems);
    };

    const handlePurchaseButtonClick = () => {
        navigate('/order/pay', { state: { selectedItems } });
    };

    const isDisabled = selectedItems.length === 0;


    return (
        <div className="resultcontainer">
            <div className="price-noti-gifthub">
                <div className="total-price-noti">총 금액</div>
                <div className="giftbox-total-price">
                    {totalPrice.toLocaleString().toLocaleString()} 원
                </div>
            </div>
            <div className="gifthub-btn-container">
                <div className="gifthub-purchase-btn-container">
                    <button
                        className="gifthub-purchase-btn"
                        onClick={handlePurchaseButtonClick}
                        disabled={isDisabled}
                    >
                        구매하기
                    </button>
                </div>
                <div className="gifthub-funding-container">
                    <div className="gifthub-noti-font">※ 펀딩은 최대 5개까지 가능합니다.</div>
                    <button
                        className="gifthub-funding-btn"
                        onClick={handleFunding}
                        disabled={isDisabled}
                    >
                        펀딩하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GifthubResult;
