import React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'

const StatusBarPage = () => {
    return (
        <View>
            <StatusBar
                animated={true}
                backgroundColor="black"
                />
        </View>
    )
}

export default StatusBarPage;

const styles = StyleSheet.create({})

