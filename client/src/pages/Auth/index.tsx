import Taro from '@tarojs/taro';
import { View, Image, Label } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './index.scss';
import { CommonEventFunction } from '@tarojs/components/types/common';

import topImage from './images/inspection.png';

export default function Auth() {
  const getUserInfo: CommonEventFunction<any> = (res) => {
    console.log(res.detail);
    if (res.detail && res.detail.userInfo) {
      Taro.setStorage({
        key: 'userInfo',
        data: JSON.stringify(res.detail.userInfo)
      })
      Taro.navigateBack();
    }
  }

  return (
    <View className="container">

      <View className="titleView">
        <Image src={topImage} className="image" />
        <Label className="title">授权应用获取以下信息</Label>
      </View>

      <View className="tipView"><Label className="tip">您的微信头像</Label></View>
      <View className="tipView"><Label className="tip">您的微信昵称</Label></View>
      <View className="tipView"><Label className="tip">其他基本信息</Label></View>

      <View className="btnView">
        <AtButton
          customStyle={{ marginTop: '60Px', backgroundColor: '#4991FF' }}
          type="primary"
          openType="getUserInfo"
          onGetUserInfo={getUserInfo}
        >微信信息授权
      </AtButton>
      </View>
      
      
    </View>
  )
}

Auth.config = {
  "navigationBarTitleText": "授权"
}