import React, { useState, useEffect } from "react";
import "./singlegifthubitem.scss";
import "./../../organisms/contents/gifthub/gifthub";
import Checkbox from "../../atoms/checkbox/checkbox";
import axios from 'axios';
import GifthubOptionCount from '../Modal/GifthubOptionCount/gifthuboptioncount';

export default function SingleGiftHubItem({ item, onCheckboxChange, onDelete }) {
    const [isChecked, setIsChecked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(item.quantity || 1);
    const gifthubItemId = item.itemId;

    // console.log(gifthubItemId)

    useEffect(() => {
        setIsChecked(false);
    }, [item]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);

        if (onCheckboxChange) {
            onCheckboxChange(item, !isChecked);
        }
    };

    const handleDeleteItem = async () => {
        try {
            await axios.delete(`https://8bef-112-218-95-58.ngrok-free.app/api/v1/gifthub/${gifthubItemId}?memberId=1`, null, {
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                    'ngrok-skip-browser-warning': true,
                },
            });
            console.log('아이템 삭제 성공');
        } catch (error) {
            console.error('아이템 삭제 에러:', error);
        }

        setIsChecked(false);
        if (onDelete) {
            onDelete(item);
        }
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    return (
        <div className="giftbox-total-container">
            <div className="checkbox-item-container">
                <Checkbox
                    isSelected={isChecked} // 체크박스의 상태를 전달
                    onCheckboxChange={handleCheckboxChange}
                />
                <div className="gifthub-fundingRegistItem">
                    <img src={item.itemImageUrl} alt={item.itemName} className="sequenceGroup" />
                    <div className="gifthub-itemDetail">
                        <div className="gifthub-title">{item.itemName}</div>
                        <button className="delete-button" onClick={handleDeleteItem}>삭제</button>
                        <div className="gifthub-optionDetail">
                            <div className="gifthub-optionGroup">
                                <div className="gifthub-option">옵션</div>
                            </div>
                            <div className="gifthub-optionName">{item.optionName}</div>
                            <div className="quantity-container">
                                <div className="quantity-text">수량 </div>
                                <div className="quantity-number">{quantity}</div>
                                <GifthubOptionCount
                                    onQuantityChange={handleQuantityChange}
                                    gifthubItemId={gifthubItemId}
                                />
                            </div>
                            <div className="giftbox-item-price">{item.itemPrice} 원</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
