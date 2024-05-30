import React from "react";
import "./deliveryList.scss";
import DeliveryAddress from "../deliveryAddress/deliveryAddress";

export default function DeliveryAddressList({deliveryData}) {
    return (
        <div className="deliveryList">
            <div className="deliveryAddressList-container">
                <div className="deliveryList-box">
                    <div className="delivery-address-list">
                        <div className="delivery-address-list-head">
                            <div className="delivery-address-list-delivery-management">배송지 관리</div>
                            <button className="delivery-address-list-add-delivery">배송지 추가</button>
                        </div>
                        <div className="delivery-address-list-line"/>

                        {deliveryData?.myPageDeliveryDtoList.map((deliveryAddressData, index) => (
                        <div  key={index} className="delivery-address-list-addresses">
                            <DeliveryAddress deliveryData={deliveryAddressData}/>
                        </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>

    );
};