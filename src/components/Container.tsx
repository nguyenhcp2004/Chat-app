import { View, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyles'

interface Props {
  children: React.ReactNode
  styles?: StyleProp<ViewStyle>
}

const Container = (props: Props) => {
  const { children, styles } = props
  return <View style={[globalStyles.container, {}, styles]}>{children}</View>
}

export default Container
