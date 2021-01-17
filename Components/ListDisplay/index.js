import React, { useEffect, useState } from 'react';
import {  View, ActivityIndicator, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../Card'
import ApiConstants from '../../ApiConstants'
import styles from '../../Styles'
import { CustomColors } from '../../CustomColors'

const ListDisplay = ({ baseURL, navigation  }) => {
   
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    loadData = async (pageNumber) => {
        try
        {
            const getData = await fetch(`${baseURL}${ApiConstants.tmdbKey}&language=en-US&page=${pageNumber}`)
            const data = await getData.json();
            setData(data.results);
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
        loadData(1);
    }, []);
  
  return (
      <View style={styles.listDisplayView} >

        { isLoading ?<View style={{marginTop:70, flex: 1}}>
                    <ActivityIndicator size="large" color={CustomColors.customRed} style={styles.activityIndicator}/> 
             </View>
             :
        (<FlatList data={data} 
        renderItem={ ({ item }) => <Card navigation={navigation} voteAverage={item.vote_average} releaseDate={item.release_date} language={item.original_language} title= {item.original_title} id= {item.id} imagePath={item.poster_path}/> }
        keyExtractor={item => item.id.toString()}/>) }
      </View>
  );
}

export default ListDisplay;