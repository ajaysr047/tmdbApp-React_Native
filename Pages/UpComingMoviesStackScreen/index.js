import React from 'react';
import ListDisplay from '../../Components/ListDisplay';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetails from '../../Components/MovieDetails'
import ApiConstants from '../../ApiConstants'

const UpcomingMovies = ({navigation}) => {
    return (
      <ListDisplay navigation={navigation} baseURL={ApiConstants.upcomingMoviesURL}/>
    );
  }
  
const CardDetailStack = createStackNavigator();

export default UpcomingMoviesStackScreen = () => {
    return (
      <CardDetailStack.Navigator>
        <CardDetailStack.Screen options={StackScreenOptions.options} name="Upcoming Movies" component={UpcomingMovies}/>
        <CardDetailStack.Screen options={StackScreenOptions.options} name="Movie Details" component={MovieDetails}/>
      </CardDetailStack.Navigator>
    )
  }