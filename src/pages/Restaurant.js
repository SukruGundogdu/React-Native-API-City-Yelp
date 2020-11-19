import axios from "axios"
import React, {useEffect, useState} from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import { RestaurantItem } from "../components";

const Restaurant = (props) => {
    const {selectedCity} = props.route.params

    const [restaurantList, setRestaurantList] = useState([]);

    const fetchRestaurant = () => {
        axios.get("http://opentable.herokuapp.com/api/restaurants",
        {
            params: {
                city : selectedCity
            }
        })
        .then(response => {
            setRestaurantList(response.data.restaurants);
        })
    }

    useEffect(() => {
        fetchRestaurant();
    }, [])

    const renderRestaurant = ({item}) => {
        return(
            <RestaurantItem 
            restaurant={item}
            />
        )
    }
    return (
        <SafeAreaView>
            <View>
                <Text>{selectedCity}</Text>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data= {restaurantList}
                    renderItem={renderRestaurant}
                />
            </View>
        </SafeAreaView>
    )
}

export {Restaurant}