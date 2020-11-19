import React from "react";
import { SafeAreaView, View, Text } from "react-native";

const RestaurantDetails = (props) => {
    const {selectedRestaurant} = props.route.params
    console.log(selectedRestaurant)

    return (
        <SafeAreaView>
            <View>
                <Text>{selectedRestaurant.name}</Text>
                <Text>{selectedRestaurant.address}</Text>
                <Text>{selectedRestaurant.phone}</Text>
            </View>
        </SafeAreaView>
    )
}

export {RestaurantDetails}