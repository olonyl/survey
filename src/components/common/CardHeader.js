import React from 'react';
import { View, Text } from 'react-native';

const CardHeader = (props) => {
    const { containerStyle, textStyle } = styles;
    return <View style={containerStyle}>
        <Text style={textStyle} >{props.children.toUpperCase()} </Text>

    </View>;
};

const styles = {
    textStyle: {
        color: '#fff',
        marginLeft: 10,
        fontWeight: "bold"
    },
    containerStyle: {
        backgroundColor: '#0288d1',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        marginTop: 10,
        height: 40
    }
};
export { CardHeader };
