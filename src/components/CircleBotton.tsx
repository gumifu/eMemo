import { View, Text, StyleSheet, type ViewStyle } from 'react-native'

interface Props {
  children: JSX.Element
  style?: ViewStyle
}

const CircleBotton = (props: Props): JSX.Element => {
  const { children, style } = props

  return (
    <View style={[styles.circleBotton, style]}>
      <Text style={styles.circleBottonLabel}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circleBotton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  },
  circleBottonLabel: {
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
    // fontSize: 40,
    // lineHeight: 48
  }
})

export default CircleBotton
