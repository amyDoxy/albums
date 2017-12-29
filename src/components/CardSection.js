import React from 'react';
import { View } from 'react-native';
import container from '../styles/container'

const CardSection = (props) => {
	return (
		<View style={container.cardSection}>
			{props.children}
		</View>
		);
};

export default CardSection;