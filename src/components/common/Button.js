import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, children, backgroundColor = '#388e3c', textColor = '#fff', disabled }) => {
	const { buttonStyle, textStyle } = styles;
	return (
		<TouchableOpacity style={{ ...buttonStyle, borderColor: backgroundColor, backgroundColor: backgroundColor }} onPress={onPress} disabled={disabled} >
			<Text style={{ ...textStyle, color: textColor }}>{children}</Text>
		</TouchableOpacity >
	);
};

const styles = {
	buttonStyle: {
		alignSelf: 'stretch',
		borderRadius: 5,
		borderWidth: 1,
		marginLeft: 5,
		marginRight: 5,
		flex: 1
	},
	textStyle: {
		alignSelf: 'center',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	containerStyle: {
		padding: 5,
		flexDirection: 'row'
	}
};

export { Button };
