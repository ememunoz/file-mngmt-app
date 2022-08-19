import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'

type Props = {
  onPress: (event: GestureResponderEvent) => void
  children: string
  style?: ViewStyle | ViewStyle[]
}

const Button: React.FC<Props> = ({ children, onPress, style: customStyle }) => {
  const [isPress, setIsPress] = useState(false)

  const handlePressIn = () => setIsPress(true)
  const handlePressOut = () => setIsPress(false)

  let finalStyle: StyleProp<ViewStyle>[]
  if (Array.isArray(customStyle)) {
    finalStyle = [styles.button, ...customStyle]
  } else {
    finalStyle = [styles.button, customStyle]
  }
  if (isPress) {
    finalStyle.push(styles.buttonPress)
  }

  return (
    <Pressable
      style={finalStyle}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'hsl(243, 100%, 69%)',
  },
  buttonPress: {
    elevation: 0,
    backgroundColor: 'hsl(243, 80%, 71%)',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

export default Button
