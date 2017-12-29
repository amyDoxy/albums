import React, { Component } from 'react';
import { Text, View } from 'react-native';
import container from '../styles/container';

export default class Header extends Component {

	render() {
		return (
				<View style={container.header}>
					<Text style={container.text}>{ this.props.headerText }</Text>
				</View>
			);
	}

}