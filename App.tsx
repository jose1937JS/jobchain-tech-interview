import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Image } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {
  const [isFocused, setIsFocused] = useState(false);


  return (
    <SafeAreaProvider>
      <View style={styles.container}>

        <View style={styles.outerBorder}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#ccc"
              placeholder="Escribe tu correo electrónico"
            />
          </View>
        </View>

        <View style={styles.outerBorder}>
          <View style={styles.containerInput}>
            <View style={{ width: '90%' }}>
              <Text style={styles.label}>Correo Electrónico</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#ccc"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </View>
            {isFocused && <Image source={require('./assets/x.png')} style={styles.x} />}
          </View>
        </View>

        <View style={styles.outerBorder}>
          <View style={styles.containerInput}>
            <View style={{ width: '90%' }}>
              <Text style={styles.label}>Correo Electrónico</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#ccc"
                placeholder="Escribe tu correo electrónico"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </View>
            {isFocused && <Image source={require('./assets/x.png')} style={styles.x} />}
          </View>
        </View>

        {/* erorr input */}
        <View style={[styles.outerBorder, styles.outerBorderError]}>
          <View style={[styles.containerInput, styles.errorContainer]}>
            <View style={{ width: '90%' }}>
              <Text style={[styles.label, styles.labelError]}>Correo Electrónico</Text>
              <TextInput
                style={[styles.input, styles.inputError]}
                placeholderTextColor="#ccc"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </View>
            {isFocused && <Image source={require('./assets/x.png')} style={styles.x} />}
          </View>
        </View>

        <View style={[styles.containerInput]}>
          <View style={{ width: '90%' }}>
            <Text style={styles.label}>Correo Electrónico</Text>
            <TextInput
              style={[styles.input]}
              placeholderTextColor="#ccc"
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  label: {
    fontSize: 10,
    color: '#7871FF',
    position: 'absolute',
    top: -5,
    left: 3
  },
  labelError: {
    color: '#B44B4B'
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#141534',
    borderColor:' #7871FF',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 16,
    height: 65,
    width: '100%',

  },
  errorContainer: {
    borderColor: '#B44B4B',
    backgroundColor: 'rgba(255, 69, 69, 0.15)',

  },
  inputError: {
    color: 'rgb(255, 0, 0)'
  },
  input: {
    color: 'white',
    width: '90%',
  },
  xContainer: {
    padding: 10,
    backgroundColor: '#141534'
  },
  x: {
    width: 20,
    height: 20
  },
  innerBorder: {
    borderWidth: 1,
    borderColor: '#141534'
  },
  outerBorder: {
    borderWidth: 0.8,
    padding: 1,
    borderRadius: 16,
    borderColor: '#7871FF',
    marginBottom: 20
  },
  outerBorderError: {
    borderColor: '#B44B4B'
  }
});

export default App;
