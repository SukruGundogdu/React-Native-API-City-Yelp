import React from "react";
import { SafeAreaView, View, TextInput, StyleSheet } from "react-native";

const SearchBar = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container} >
                <TextInput
                placeholder={props.placeholder}
                onChangeText={(value) => props.onSearch(value)}
                />
            </View>
        </SafeAreaView>
    )
}

export {SearchBar}


const styles = StyleSheet.create({
    container: {
        margin:5,
        padding:5,
        borderRadius:10,
        backgroundColor: "#e0e0e0",
    }
})
