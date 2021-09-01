import React from 'react'
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native'
import {
    Avatar,
    Badge,
    withBadge,
    Icon
} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const stories = [
    {
        id: "1",
        image: "",
        backgroundColor: "navy",
        title: "-A"
    },
    {
        id: "2",
        image: "",
        backgroundColor: "violet",
        title: "A"
    },
    {
        id: "3",
        image: "",
        backgroundColor: "crimson",
        title: "B"
    },
    {
        id: "4",
        image: "",
        backgroundColor: "red",
        title: "C"
    },
    {
        id: "5",
        image: "",
        backgroundColor: "orange",
        title: "D"
    },
    {
        id: "6",
        image: "",
        backgroundColor: "yellow",
        title: "E"
    }
];

const Stories = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            <FlatList
                horizontal
                data={stories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    item.id == 1 ? (
                        <TouchableHighlight style={tw``}>
                            <View style={[tw`p-2`, {}]}>
                                <Avatar
                                    size={65}
                                    rounded
                                    overlayContainerStyle={{
                                        backgroundColor: "navy",
                                    }}
                                />
                                <Badge
                                    value="+"
                                    status="primary"
                                    containerStyle={{ 
                                        position: 'absolute', 
                                        bottom: 10, 
                                        right: 4,
                                        borderRadius: 20,
                                        borderWidth: 2,
                                        borderColor: "white" }} />
                            </View>
                        </TouchableHighlight>
                    ):
                    (
                        <TouchableOpacity style={tw``}>
                            <View style={[tw`p-2`, {}]}>
                                <Avatar
                                    size={65}
                                    rounded
                                    title={item.title}
                                    overlayContainerStyle={{
                                        backgroundColor: item.backgroundColor,
                                        borderWidth: 3,
                                        borderStyle: "solid",
                                        // borderTopColor: "#8a49a1",
                                        borderColor: "#c1558b",
                                        // borderBottomColor: "#e56969",
                                        // borderLeftColor: "#ffc273"
                                    }}
                                />
                                <Text style={tw`text-center`}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                )}
            />
        </View>
    )
}

export default Stories