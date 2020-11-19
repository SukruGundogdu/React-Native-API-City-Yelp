import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";


const RestaurantItem = (props) => {

    return (
        <TouchableOpacity  style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: props.restaurant.image_url}}
            />
            <Text style={styles.text} >{props.restaurant.name}</Text>
        </TouchableOpacity>
    )
}

export {RestaurantItem}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#bdbdbd",
        padding:5,
        margin:5
    },
    image: {
        height: Dimensions.get("window").height / 3       
    },
    name: {
        fontWeight: "bold",
        fontSize:20
    }
})