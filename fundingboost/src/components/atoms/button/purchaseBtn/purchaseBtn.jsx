import React from 'react';
import Button from 'react-bootstrap/Button';
import './purchaseBtn.scss'
import {useNavigate} from "react-router-dom";

const PurchaseBtn = ({itemId, itemName, itemPrice, itemThumbnailImageUrl, selectOption}) => {
    const navigate = useNavigate();

    const purchaseBtnClick = () => {
        if (selectOption && selectOption !== "상품 옵션을 선택해주세요.") {
            const itemPurchase = {
                optionName: selectOption,
                itemName: itemName,
                itemPrice: itemPrice,
                itemImageUrl: itemThumbnailImageUrl,
                itemId: itemId
            };
            navigate(`/order/pay`, {state: {itemPurchase}});
        } else {
            alert('상품 옵션을 선택해주세요');
        }
    };

    return (
        <div className="purchaseBox">
            <Button className="purchaseBtn" onClick={purchaseBtnClick}>구매하기</Button>
        </div>
    );
};

export default PurchaseBtn;