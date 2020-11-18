import Axios from "axios";
import axios from "axios"
import React, {useEffect} from "react";
import { SafeAreaView, View, Text } from "react-native";

const Restaurant = (props) => {
    const {selectedCity} = props.route.params

    const fetchRestaurant = () => {
        axios.get("http://opentable.herokuapp.com/api/restaurants",
        {
            params: {
                "city": selectedCity
            }
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchRestaurant();
    }, [])
    return (
        <SafeAreaView>
            <View>
                <Text>{selectedCity}</Text>
            </View>
        </SafeAreaView>
    )
}

export {Restaurant}