import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CityItem = (props) => {
    return (
        <TouchableOpacity style={styles.container} >
            <Text style={styles.text} >{props.cityName}</Text>
        </TouchableOpacity>
    )
}

export {CityItem}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        alignItems:"center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 20
    }
})