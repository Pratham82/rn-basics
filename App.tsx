import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter</Text>
      <View>
        <Text style={styles.result}>{count}</Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btnStyle}>
          <Button
            title="+"
            onPress={() => setCount(count + 1)}
            color="lightgreen"
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            title=" - "
            onPress={() => count > 0 && setCount(count - 1)}
            color="red"
          />
        </View>
        <View style={styles.btnStyle}>
          <Button title=" reset " onPress={() => setCount(0)} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
    // justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  btnStyle: {
    paddingTop: 20,
    paddingRight: 10,
  },
  result: {
    paddingTop: 10,
    fontSize: 22,
  },
})
