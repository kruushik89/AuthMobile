import { StyleSheet, Text, View } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [message, setMessage] = useState('');

  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios.get('https://react-native-course-1ddb3-default-rtdb.firebaseio.com/message.json?auth=' + token)
         .then(res => setMessage(res.data));
  }, [])
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      {!!message && <Text>{message}</Text>}
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
