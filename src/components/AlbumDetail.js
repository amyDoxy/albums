import React from 'react';
import { 
	View,
	Text, 
	Image,
	Linking
	} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'
import container from '../styles/container';
import images from '../styles/images';
import text from '../styles/text';

const AlbumDetail = ({ album }) => {

	const { title, artist, thumbnail_image, image, url } = album;
	return (
			<Card>
				<CardSection>
					<View style={container.thumbnailStyle}>
						<Image 
							style={images.thumbnailAlbum}
							source={{uri: thumbnail_image}} 
						/>
					</View>
					<View style={container.cardSectionText}>
						<Text style={text.headerText}>{title}</Text>
						<Text>{artist}</Text>
					</View>

				</CardSection>
				<CardSection>
					<Image
						style={images.imageAlbum}
						source={{ uri: image }}
					/>
				</CardSection>
				<CardSection>
					<Button onPress={() => Linking.openURL(url)}> Buy Now</Button>
				</CardSection>
			</Card>
		);
};
const _onPressButton =() =>{

};

export default AlbumDetail;