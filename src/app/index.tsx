import { View, StyleSheet } from 'react-native'
import Header from '../components/Header'
import MemoListItem from '../components/MemoListItem'
import CircleBotton from '../components/CircleBotton'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <Header />

      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>

      <CircleBotton>＋</CircleBotton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default Index
