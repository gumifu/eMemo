import { signOut } from 'firebase/auth'
import { Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { auth } from '../config'
import { router } from 'expo-router'

const handlePress = (): void => {
  signOut(auth)
    .then(() => {
      router.replace('auth/login')
    })
    .catch(() => {
      Alert.alert('ログアウトに失敗しました')
    })
}

const LogOutButton = (): JSX.Element => {
  return (
    <TouchableOpacity onPress={handlePress}>
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
