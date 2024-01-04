import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const LogOutButton = (): JSX.Element => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: '#ffffff'
  }

})

export default LogOutButton
