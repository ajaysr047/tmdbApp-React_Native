import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import ApiConstants from '../../ApiConstants'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Moment from 'moment';
import styles from '../../Styles';

const Card = ( { language, voteAverage, releaseDate, title, id, navigation, imagePath} ) => {

    Moment.locale('en');
    return (
        <TouchableHighlight underlayColor='#fff' onPress={() => { navigation.navigate('Movie Details', {id})  }} >
            <View style={styles.cardView}>
               <View>
                    <Image
                    style={styles.cardLogo}
                    source={{
                    uri: `${ApiConstants.imageBaseURL}${imagePath}`,
                    }}
                />
               </View>
                <View style={{flex: 5,}}>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.cardTitle} >{title}</Text>
                        <Text style={styles.cardText}>{Moment(releaseDate).format('MMM d yy') }</Text>
                        <Text style={styles.cardText}>{voteAverage} <FontAwesomeIcon color='yellow' size={18} icon={faStar} /></Text>
                        <Text style={styles.cardText}>{language}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}


export default Card;