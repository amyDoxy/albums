import React from 'react';
import { View } from 'react-native';
import container from '../styles/container'

const Card = (props) => {
	return (
		<View style={container.card}>
			{props.children}
		</View>
		);
};

export default Card;