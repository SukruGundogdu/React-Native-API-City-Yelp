import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Linking, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


 
const RestaurantDetails = (props) => {

    function showPrice(length) {
        const priceLabel = [];

        for (let i = 0; i < length; i++) {
          priceLabel.push(
            <Icon key={i} name="currency-usd" size={25} color="#33691e" />,
          );
        }
    
        return priceLabel;
    }


    const {selectedRestaurant} = props.route.params
    console.log(selectedRestaurant)
    console.log(selectedRestaurant.reserve_url)
    // mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=67558


 


      
       

    return (
        <SafeAreaView  style={{flex:1}}>
            <View style={styles.container} >
                <Text style={styles.name} >{selectedRestaurant.name}</Text>

                <View>
                    <Image 
                        style={styles.image}
                        source={{uri: selectedRestaurant.image_url}}
                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                {showPrice(selectedRestaurant.price)}
                </View>

                <View style={styles.infoContainer} >
                    <Text style={styles.infoText} >{selectedRestaurant.address}</Text>
                </View>

                <View style={styles.infoContainer} >
                    <Text style={styles.infoText} >{selectedRestaurant.area}</Text>
                </View>

            <TouchableOpacity>
                <Text style={{ color: '#1D8AE5', textAlign: 'center', margin: 20 }}>Rezervasyon Yaptir</Text>
            </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}

export {RestaurantDetails}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:5,
    },
    name: {
        fontWeight: "300",
        fontSize:30,
        textAlign:"center"
    },
    image: {
        height: Dimensions.get("window").height / 3
    },
    infoContainer: {
        backgroundColor: "#81d4fa",
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    infoText: {
        color: "white",
        fontWeight: "bold"
    }
})