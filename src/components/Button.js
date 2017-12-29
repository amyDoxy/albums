import React from 'react';
import { 
	Text, 
	TouchableOpacity
	} from 'react-native';
import text from '../styles/text';
import button from '../styles/button';

const Button = ({ onPress, children }) => {

	return (
					<TouchableOpacity 
						onPress={onPress}
						style={button.buttonBuyNow}
					>
						
						<Text style={text.buttonText}>{ children }</Text>
					</TouchableOpacity>
	);
};	
export default Button;