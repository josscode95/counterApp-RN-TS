import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export const ContadorScreen = () => {

  const [contador, setContador] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: { contador }
      </Text>
      <TouchableOpacity
        onPress={() => setContador(contador + 1)}
      >
        <View style={styles.buttonIncrease}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title:{
    textAlign: 'center',
    fontSize: 40,
    top: -15
  },
  buttonIncrease:{
    backgroundColor: 'red',
    borderRadius: 100
  }
})
