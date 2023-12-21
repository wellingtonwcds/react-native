import { React, useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default function Welcome({navigation, route}){

    return(
        <View style={styles.container}>
            <Text>Wellcome {route.params.user}</Text>
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