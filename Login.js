import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

const sendText = async (phoneNumber) => {
  const loginResponse = await fetch("https://dev.stedi.me/twofactorlogin/"+phoneNumber,{
    method: 'post',
    headers: {
      'Content-Type': 'application/text'
    }
  });
  const loginResponseText = await loginResponse.text()
  console.log("PhoneNumber:",phoneNumber);
  console.log('Login Response',loginResponseText);
}

const getToken = async ({phoneNumber, oneTimePassword}) => {
  console.log(phoneNumber);
  console.log(oneTimePassword);
  const loginResponse = await fetch("https://dev.stedi.me/twofactorlogin",{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      phoneNumber,
      oneTimePassword
    })

  });
  const token = await loginResponse.text();
  console.log(token)
}

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView style={styles.mainView}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="123-456-7890"
        placeholderTextColor="#b4b5bd"
      />
      <TouchableOpacity
      style={styles.button}
      onPress={()=>sendText(phoneNumber)}
      >
        <Text>Send Text</Text>        
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1234"
        placeholderTextColor="#b4b5bd"
        keyboardType="numeric"
        secureTextEntry={true}
      />
      
      <TouchableOpacity
      style={styles.button}
      onPress={()=>getToken({phoneNumber, oneTimePassword})}
      >
        <Text>Login</Text>        
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  mainView:{
    marginTo:100,
  },
  button: {
    alignSelf:"center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    maxWidth: 200,
  },
});

export default Login;