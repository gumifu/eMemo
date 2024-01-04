import { View, Text, TextInput, StyleSheet } from 'react-native'
import Header from '../../components/Header'

const Login = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value='aaa' />
        <TextInput style={styles.input} value='password' />
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>Submit</Text>
        </View>
        <View>
          <Text>Not registered?</Text>
          <Text>Sign up here!</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F4F8',
    flex: 1
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24
  },
  title: {
    color: '#212121',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  button: {
    backgroundColor: '#467FD3'
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32
  }
})

export default Login
