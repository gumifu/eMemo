import { View, StyleSheet } from 'react-native'
// import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleBotton from '../../components/CircleBotton'
import Icon from '../../components/Icon'
import { router } from 'expo-router'

const handlePress = (): void => {
  // ログイン
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <Header />

      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>

      <CircleBotton onPress={handlePress}>
        {/* <Feather name='plus' size={40}/> */}
        <Icon name='plus' size={40} color='#ffffff'/>
      </CircleBotton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default List
