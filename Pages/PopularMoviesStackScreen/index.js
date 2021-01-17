import React from 'react';
import ListDisplay from '../../Components/ListDisplay';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetails from '../../Components/MovieDetails'
import ApiConstants from '../../ApiConstants'
import StackScreenOptions from '../../StackScreenOptions'

const PopularMovies = ({navigation}) => {
    return (
        <ListDisplay navigation={navigation} baseURL={ApiConstants.popularMoviesURL}/>
        
    );
}

const CardDetailStack = createStackNavigator();

export default PopularMoviesStackScreen = () => {
    return (
      <CardDetailStack.Navigator>
        <CardDetailStack.Screen options={StackScreenOptions.options} name="Popular Movies" component={PopularMovies}/>
        <CardDetailStack.Screen options={StackScreenOptions.options} name="Movie Details" component={MovieDetails}/>
      </CardDetailStack.Navigator>
    )
  }