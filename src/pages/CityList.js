import React, {useState, useEffect} from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";

import Axios from "axios";

import {CityItem} from "../components";



const CityList = () => {

    const [cityList, setCityList] = useState([]);

    const fetchData = async() => {
        const {data} = await Axios.get(
            "http://opentable.herokuapp.com/api/cities"
        );
        setCityList(data.cities)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const renderCities = ({item}) => <CityItem cityName={item}/>

    const renderSeperator = () => <View style={{borderColor:"#e0e0e0", borderWidth:1}}/>

    return (
        <SafeAreaView>
            <View>
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