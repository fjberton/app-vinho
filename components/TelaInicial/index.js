import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function TelaInicial(){
    return(
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Tela início</Text>
        </View>
        
    );
}


const estilo  = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    titulo:{
        color: '#000'
    }

});