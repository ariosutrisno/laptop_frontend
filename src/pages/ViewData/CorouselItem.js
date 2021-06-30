import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'


const { width, height } = Dimensions.get('window')
const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={item.url} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        width: width,
        height: height / 3,
        backgroundColor: 'white',
        // flex: 1,
        // margin: 10,
        // // borderRadius: 10,
        // // shadowColor: '#fff',
        // // shadowOffset: { width: 0.5, height: 0.5 },
        // // shadowOpacity: 0.5,
        // // shadowRadius: 3,
        // // elevation: 1,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width,
        height: height/4 ,
        borderRadius:5,
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
})

export default CarouselItem