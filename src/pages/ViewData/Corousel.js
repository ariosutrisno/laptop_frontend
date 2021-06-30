import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import CarouselItem from './CorouselItem'


const { width, heigth } = Dimensions.get('window')
let flatList = 0

const infiniteScroll = (dataList) =>{
    const numberOfData = dataList.length
    var scrollValue = 0, scrolled = 0
    
    setInterval(() => {
        scrolled ++
        if (this.flatList != null) {
            
            if(scrolled < numberOfData)
            scrollValue = scrollValue + width
    
            else{
                scrollValue = 0
                scrolled = 0
            }
            this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
        }
    }, 3000);
  
}


const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)

    const [dataList, setDataList] = useState(data)
    useEffect(()=> {
        setDataList(data)
        infiniteScroll(dataList)
    })


    if (data && data.length) {
        return (
            <View>
                <FlatList data={data}
                ref = {(flatList) => {this.flatList = flatList}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX }  } }],{useNativeDriver: false}
                    )}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5, 
                                bottom:65,
                            }}
                            />
                        )
                    })}

                </View>
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' }
})

export default Carousel