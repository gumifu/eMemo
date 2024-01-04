import { View, Text, ScrollView, StyleSheet } from 'react-native'
// import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import CircleBotton from '../../components/CircleBotton'
import Icon from '../../components/Icon'
import { router } from 'expo-router'

const handlePress = (): void => {
  router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2024年01月03日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleBotton style={{ top: 160, bottom: 'auto' }} onPress={handlePress}>
        {/* <Feather name="plus" size={40} /> */}
        <Icon name='pencil' size={48} color='#ffffff'/>
      </CircleBotton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingHorizontal: 19
  },
  memoTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32,
    color: '#ffffff'
  },
  memoDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#ffffff'
  },

  memoBody: {
    paddingHorizontal: 27,
    paddingVertical: 32
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#212121'
  }
})

export default Detail
