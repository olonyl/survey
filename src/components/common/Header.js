//Import libraries for making a component
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from './Button'
const image = require('../../img/logo.jpg');
const imagesalir = require('../../img/salir.png');
const styles = {
	textStyle: {
		fontSize: 21,
		color: '#6d4c41',
		flex: 4
	},
	viewStyle: {
		flexDirection: 'row',
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		elevation: 1
	},
	imageStyle: {
		width: 60,
		height: 60,
		marginLeft: 10,
		marginRight: 15,
		flex: 1
	},
	buttonContainerStyle: {
		justifyContent: 'center',
		paddingHorizontal: 10
	},
	buttonStyle: {
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
		borderColor: '#e0e0e0',
		borderWidth: 1,
		padding: 10,
		flexDirection: 'row',
		borderRadius: 5
	},
	textButtonStyle: {
		color: 'red'
	},

	buttonImageStyle: {
		width: 18,
		height: 18,
		marginRight: 3
	}
};
//Make a component
const Header = (props) => {
	const { textStyle, viewStyle, imageStyle, buttonImageStyle, buttonContainerStyle, buttonStyle, textButtonStyle } = styles;
	return (
		<View style={viewStyle}>
			<Image source={image} style={imageStyle} />
			<Text style={textStyle}>{props.headerText}</Text>
			<View style={buttonContainerStyle}>
				<TouchableOpacity style={buttonStyle} onPress={props.logout} >
					<Image source={imagesalir} style={buttonImageStyle} />
					<Text style={textButtonStyle}>Salir</Text>
				</TouchableOpacity >
			</View>
			{/* <View style={{ flex: 2, marginBottom: 5, marginTop: 5 }}>
				<Button onPress={props.logout} backgroundColor='#ef5350' textColor='#fff'>Salir</Button>
			</View> */}
		</View>
	);
};

//Make the component available to other parts of the apps
export { Header };
