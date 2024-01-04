import {
  View, TextInput, StyleSheet, KeyboardAvoidingView
} from 'react-native'
import CircleBotton from '../../components/CircleBotton'
import Icon from '../../components/Icon'
import { router } from 'expo-router'

const handlePress = (): void => {
  router.back()
}

const Edit = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value={'買い物リスト'} />
      </View>
      <CircleBotton onPress={handlePress}>
        <Icon name='check' size={40} color='#ffffff' />
      </CircleBotton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default Edit
