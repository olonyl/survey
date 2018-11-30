import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	const { containerStyle } = styles;

	return <View style={containerStyle}>{props.children}</View>;
};

const styles = {
	containerStyle: {

		borderColor: '#ddd',
		borderBottomWidth: 0,
		marginBottom: 5,
		flexDirection: 'column',
		flex: 1
	}
};
export { Card };
