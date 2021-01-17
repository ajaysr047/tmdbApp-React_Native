import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Header from './Components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFire, faStar, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import PopularMoviesStackScreen from './Pages/PopularMoviesStackScreen'
import TopRatedMoviesStackScreen from './Pages/TopRatedMoviesStackScreen'
import UpcomingMoviesStackScreen from './Pages/UpComingMoviesStackScreen'
import styles from './Styles'
import { CustomColors } from './CustomColors'

const Tab = createBottomTabNavigator();


const TmdbApp = () => {
  return (
    <SafeAreaView style={{flex: 6}}>
      <Header title='The Movie Database'/>
      <View style={styles.mainViewArea}>
          <NavigationContainer style={{flex: 1}}>
            <Tab.Navigator
              screenOptions={
                ({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if(route.name === 'Popular')
                    {
                      iconName = faFire;
                    }
                    else if(route.name == 'Top-Rated')
                      iconName = faStar;
                    else
                      iconName = faCalendarCheck;

                    return <FontAwesomeIcon size={24} icon={iconName}/>;
                  },
                })
              }
              tabBarOptions={{
                activeTintColor: CustomColors.customWhite,
                inactiveTintColor: CustomColors.customRed,
                activeBackgroundColor: CustomColors.customWhite,
                tabStyle: {
                  backgroundColor: CustomColors.customRed,
                },
                labelStyle: {
                  fontSize: 14
                }
              }}
            >
              <Tab.Screen name="Popular" component={PopularMoviesStackScreen} />
              <Tab.Screen name="Top-Rated" component={TopRatedMoviesStackScreen} />
              <Tab.Screen name="Up-Coming" component={UpcomingMoviesStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
      </View>
      
    </SafeAreaView>
  );
}

export default TmdbApp;