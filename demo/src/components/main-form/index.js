import { React, useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "../result-imc"


export default function MainForm(){
    
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator(){
        return setImc((weight / (height*height)).toFixed(2))
    }

    function validateImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Ppreencha o peso e a altura")
    }
    
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                    value={height}
                    onChangeText={setHeight}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput 
                    value={weight}
                    onChangeText={setWeight}
                    placeholder="Ex. 75.367"
                    keyboardType="numeric"
                />

                <Button 
                onPress={validateImc}
                title={textButton} />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}