import { StyleSheet } from 'react-native'
import { colors } from '../constants/colors'
import { fontFamilyies } from '../constants/fontFamilies'
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamilyies.regular,
    lineHeight: 19
  }
})
