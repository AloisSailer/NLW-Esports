import { StatusBar } from 'expo-status-bar';
import { ButtonProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title: string;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Legal, demais!!!!!
      </Text>

      <Button title="Enviar 1" />
      <Button title="Enviar 2" />
      <Button title="Enviar 3" />
      <Button title="Hello World!" />


      <StatusBar style="auto" />
    </View>
  );
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'red',
    fontSize: 22
  }
});
