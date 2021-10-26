import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  avatar: {
   width: 48,
   height: 48,
   borderWidth: 3,
   borderColor: COLORS.BLACK_SECONDARY
  },
  container: {
     justifyContent: 'center',
     alignItems: 'center'
  }
});