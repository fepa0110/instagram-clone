import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Stories from '../components/Stories';

const HomeScreen = () => {
    return (
        <SafeAreaView style={[tw`bg-white h-full`]}>
            <View style={tw`pr-2 pl-2 pt-8`}>
                <Image
                    style={{
                        width: 120, height: 50, resizeMode: "contain"
                    }}
                    source={
                        require('../res/iglogo.png')
                    }
                />
            </View>
            <Stories />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        marginTop: 10,
        paddingTop: 20
    },
    text: {
        color: "blue"
    }
})
