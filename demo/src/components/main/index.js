import { React } from "react"
import { View } from "react-native"
import MainForm from "../main-form";
import Title from "../title";

export default function Main(){
    return(
        <View>
            <Title></Title>
            <MainForm/>
        </View>
    );
}