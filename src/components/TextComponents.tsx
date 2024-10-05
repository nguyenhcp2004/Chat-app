import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyles'
import { fontFamilyies } from '../constants/fontFamilies'
import { colors } from '../constants/colors'

interface Props {
  text: string
  font?: string
  color?: string
  size?: number
  type?: 'title' | 'description'
  styles?: StyleProp<TextStyle>
}
const TextComponents = (props: Props) => {
  const { text, type, color, size, font, styles } = props
  return (
    <Text
      style={[
        globalStyles.text,
        {
          fontFamily:
            type === 'title' ? fontFamilyies.bold : fontFamilyies.regular,
          fontSize: type === 'title' ? 16 : 14,
          color: color ?? colors.white
        },
        styles
      ]}
    >
      {text}
    </Text>
  )
}

export default TextComponents
