import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { RectButton } from 'react-native-gesture-handler';
import { Provider } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #28262e;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const UserName = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab-Medium';
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 16px 24px 16px;
`;

export const ProvidersListTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  margin-bottom: 24px;
  color: #f4ede8;
`;

export const ProviderContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 16px;
  padding: 20px;
  background: #3e3b47;
`;

export const ProviderAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 32px;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
`;

export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProviderMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
`;
