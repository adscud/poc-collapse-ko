import React, {useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {AntDesign} from '@expo/vector-icons';

export default function App() {
    const [isCollapsedDesc, setIsCollapsedDesc] = useState(true)
    const [isCollapsedAddress, setIsCollapsedAddress] = useState(true)


    return (
        <View style={styles.container}>
            <View style={styles.divider} />
            <TouchableWithoutFeedback onPress={() => setIsCollapsedDesc(prevState => !prevState)}>
                <View style={styles.row}>
                    <AntDesign name={isCollapsedDesc ? 'plus' : 'minus'} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'center', fontSize: 22 }}>Add description</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Collapsible collapsed={isCollapsedDesc}>
                <View style={{ padding: 16 }}>
                    <Text>The user will add a description... !</Text>
                </View>
            </Collapsible>
            <View style={styles.divider} />
            <TouchableWithoutFeedback onPress={() => setIsCollapsedAddress(prevState => !prevState)}>
                <View style={styles.row}>
                    <AntDesign name={isCollapsedAddress ? 'plus' : 'minus'} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'center', fontSize: 22 }}>Add address</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Collapsible collapsed={isCollapsedAddress}>
                <View style={{ padding: 16 }}>
                    <Text>The user will add an address... !</Text>
                </View>
            </Collapsible>
            <View style={styles.divider} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        padding: 16,
    },
    divider: {
        height: 5,
        width: '100%',
        backgroundColor: '#EDF1F7'
    }
});
