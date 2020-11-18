import React, {useState, useEffect} from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";

import Axios from "axios";

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

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data ={cityList}
                    renderItem={({item}) => <Text>{item}</Text>}
                />
            </View>
        </SafeAreaView>
    )
}

export {CityList}