import React, { useEffect, useState } from 'react';
import { Text, View, Image, ActivityIndicator, Alert } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ApiConstants from '../../ApiConstants'
import styles from '../../Styles'
import { CustomColors } from '../../CustomColors'

const DetailsPage = ( {route, navigation} ) => {
    const {id} = route.params;

    const [isLoading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState({});

    loadData = async () => {
        try
        {

            const getData = await fetch(`${ApiConstants.getMovieDetailsBaseURL}${id}?api_key=${ApiConstants.tmdbKey}&language=en-US`)
            const data = await getData.json();
            setMovieData(data);
            setLoading(false);
            console.log('Fetch complete!');
        }
        catch
        {
            Alert.alert('Fetch Failed!');
        }
    }

    useEffect(  () => {
        console.log('Fetching...')
        loadData();
    }, []);

    
        


    return (
        <View style={styles.detailsViewStyle}>
           <ScrollView>
           {
               isLoading ? (<ActivityIndicator size="large" color={CustomColors.customRed} style={styles.activityIndicator}/> ) 
               :
               ( <View style={styles.detailsViewStyle}>
                    <Image
                    style={styles.imageFullView}
                    source={{
                    uri: `${ApiConstants.imageBaseURL}${movieData.poster_path}`,
                    }}/>
                    <View style={styles.detailsTextView}>
                        <Text style={styles.titleText}>{ movieData.original_title }
                        </Text>
                        
                        <View style={styles.budgetView}>
                            <Text style={styles.budgetText}> Budget | $ {movieData.budget}</Text>
                        </View>
                        <View>
                            <FlatList
                            horizontal={true}
                            data={movieData.genres} 
                            renderItem={ ({ item }) => <View style={styles.genreView}>
                                <Text style={styles.genreText}>
                                { item.name }
                                </Text>
                            </View> }
                            keyExtractor={item => item.id.toString()}
                            />
                        </View>

                        <View>
                            <FlatList
                            horizontal={true}
                            data={movieData.production_companies} 
                            renderItem={ ({ item }) => {
                                if(item.logo_path != null)
                                {
                                    return (
                                        
                                        <View style={styles.productionLogoView}>
                                            <Image
                                            style={styles.productionLogo}
                                            source={{
                                            uri: `${ApiConstants.imageBaseURL}${item.logo_path}`,
                                            }}/>    
                                        </View>
                               
                                    )
                                }
                            } }
                            keyExtractor={item => item.id.toString()}
                            />
                        </View>

                      <View>

                        <Text style={styles.overview}>{ movieData.overview }</Text>
                          </View>
                        </View>
                </View>
              )
           }
           </ScrollView>
        </View>
    )

}

export default DetailsPage;