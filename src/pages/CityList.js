import React, {useState, useEffect} from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";

import Axios from "axios";

import {CityItem, SearchBar} from "../components";

let orginalList = [];

const CityList = (props) => {

    const [cityList, setCityList] = useState([]);

    const fetchData = async() => {
        const {data} = await Axios.get(
            "http://opentable.herokuapp.com/api/cities"
        );
        setCityList(data.cities)
        orginalList= [...data.cities]
    }

    useEffect(() => {
        fetchData()
    }, [])

    const searchCity = (search) =>  {
        const filteredCities = orginalList.filter(city => {
          const text = search.toUpperCase();
          const cityName = city.toUpperCase();
    
          return cityName.indexOf(text) > -1;
        })
        setCityList(filteredCities);
      }

    const renderCities = ({item}) => {
        return(
            <CityItem 
            cityName={item}
            onSelect={() => props.navigation.navigate("Restaurant", {selectedCity: item})}
            />)}

    const renderSeperator = () => <View style={{borderColor:"#e0e0e0", borderWidth:1}}/>


    return (
        <SafeAreaView>
            <View>
                <SearchBar
                    placeholder="Search a city"
                    onSearch={searchCity}
                />
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data ={cityList}
                    renderItem={renderCities}
                    ItemSeparatorComponent ={renderSeperator}
                />
            </View>
        </SafeAreaView>
    )
}

export {CityList}