import React from 'react';
import OrderHistorySingleOrder from '../orderHistory-singleOrder/orderHistory-singleOrder';
import './orderHistoryList.scss';
import img from "../../../assets/detail-section-icon.svg";
const OrderHistoryList = ({orderHistoryData}) => {
    console.log("구매내역:",orderHistoryData);
    return (
        <div className="orderHistoryList">
            <div className="orderHistoryList-container">
                <div className="orderHistoryList-box">
                    <div className="order-history-list">
                        <div className="order-history-list-head">
                            <div className="order-history-list-delivery-management">구매 이력</div>
                            <div className="order-history-detail">
                                <img className="order-history-detailedInquiryImg" alt="Line" src={img}/>
                                <div className="order-history-list-add-delivery">상세 조회</div>
                            </div>
                        </div>
                        <div className="order-history-list-line"/>

                        <div className="MyPageFriendFundingListOverlap-group">
                            <div className="MyPageFriendFundingListText-wrapper-7">ITEM</div>
                            <div className="MyPageFriendFundingListText-wrapper-6">구매한 금액</div>
                        </div>

                        {orderHistoryData?.orderHistoryItemDtoList?.map((orderHistoryListData, index) => (
                            <div key={index} className="order-history-list-addresses" >
                                <OrderHistorySingleOrder orderHistoryData={orderHistoryListData}/>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHistoryList;