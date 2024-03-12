import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style = {styles.container}
      source = {{uri:'https://img.a.transfermarkt.technology/portrait/big/32568-1493385031.jpg?lm=1'}}
      
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
