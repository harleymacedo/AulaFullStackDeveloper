import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardEvento from './components/CardEvento';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Eventos do IFCE Campus Crato</Text>
      <Text style={styles.text2}>Próximos Eventos</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: '#fff',
    fontSize: 20
  },
  text2: {
    color: '#fff',
    fontSize: 14,
    marginTop: 20
  }
});
