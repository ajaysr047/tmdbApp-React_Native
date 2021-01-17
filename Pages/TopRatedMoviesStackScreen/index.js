import React from 'react';
import ListDisplay from '../../Components/ListDisplay';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetails from '../../Components/MovieDetails'
import ApiConstants from '../../ApiConstants'


const TopRatedMovies = ({navigation}) => {
    return (
      <ListDisplay navigation={navigation} baseURL={ApiConstants.topRatedMoviesURL}/>
    );
  }

const CardDetailStack = createStackNavigator();

export default TopRatedMoviesStackScreen = () => {
    return (
      <CardDetailStack.Navigator>
        <CardDetailStack.Screen options={StackScreenOptions.options} name="Top Rated Movies" component={TopRatedMovies}/>
        <CardDetailStack.Screen options={StackScreenOptions.options} name="Movie Details" component={MovieDetails}/>
      </CardDetailStack.Navigator>
    )
  }