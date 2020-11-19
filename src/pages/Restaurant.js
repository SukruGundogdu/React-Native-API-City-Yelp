import axios from "axios"
import React, {useEffect, useState} from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import { RestaurantItem, SearchBar } from "../components";

let originalList = [];

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
            originalList = [...response.data.restaurants]
        })
    }

    useEffect(() => {
        fetchRestaurant();
    }, [])

    const renderRestaurant = ({item}) => {
        return(
            <RestaurantItem 
            restaurant={item}
            onSelect={() => props.navigation.navigate("Details", {selectedRestaurant: item})}
            />
        )
    }

    const searchRestaurants = (search) =>  {
        const filteredRestaurants = originalList.filter(restaurant => {
          const text = search.toUpperCase();
          const restaurantName = restaurant.name.toUpperCase();
    
          return restaurantName.indexOf(text) > -1;
        })
        setRestaurantList(filteredRestaurants);
      }

    return (
        <SafeAreaView style={{flex:1}} >
            <View style={{flex:1}} >
                <Text style={{margin: 5, fontWeight: "bold", fontSize:40}} >{selectedCity}</Text>
                <SearchBar
                    placeholder="Search a restaurant.."
                    onSearch={searchRestaurants}
                />
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