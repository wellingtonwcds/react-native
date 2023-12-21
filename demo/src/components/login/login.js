import { React, useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default function Login({navigation}){

    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)

    return(
        <View style={styles.container}>
            <Text>User</Text>
            <TextInput value={user} onChangeText={(text) => setUser(text)}
                    keyboardType="default"></TextInput>
            <Text>Password</Text>
            <TextInput value={password} 
                    keyboardType="default" secureTextEntry={true}></TextInput>

            <Button title="Login" onPress={()=> navigation.navigate('Welcome', {user: user})}></Button>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'plum',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });