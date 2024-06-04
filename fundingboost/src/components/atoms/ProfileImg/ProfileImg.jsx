import React from 'react';
import './ProfileImg.scss';

import defaultProfileImg from '../../../assets/defaultProfile.svg';

function ProfileImg({ memberFundingData }) {
    console.log("프로필이미지:", memberFundingData?.homeMemberInfoDto?.profile);
    return(
        <div className="profile-img-wrapper">
            <img src={memberFundingData?.homeMemberInfoDto?.profile || defaultProfileImg} alt="프로필 이미지" className="profile-img" />
        </div>
    );
}

export default ProfileImg;
