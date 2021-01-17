import { StyleSheet } from 'react-native'
import { CustomColors } from '../CustomColors'

export default styles = StyleSheet.create({
    mainViewArea: {
        height: 60,
        backgroundColor: CustomColors.customWhite,
        flex: 4
    },
    header: {
        height: 60,
        padding: 15,
        backgroundColor: CustomColors.customBlack,
    },
    headerText:{
        color: CustomColors.customWhite,
        fontSize: 25,
        textAlign: 'center',
    },
    detailsViewStyle: {
        flex: 6,
        backgroundColor: CustomColors.customBlack
    },
    detailsTextView:{
        flex: 3,
        backgroundColor: CustomColors.customBlack,
        color: CustomColors.customWhite
    },
    imageFullView: {
        resizeMode: 'contain',
        flex: 4,
        width: 'auto',
        height: 500,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      },
      productionLogoView: { 
          height: 100,
           borderLeftColor: CustomColors.customRed,
            borderLeftWidth: 5,
             marginLeft: 8
        },
      productionLogo: {
        width: 100,
        height: 100,
        flex: 1,
        backgroundColor: CustomColors.customWhite,
        margin: 5,
        resizeMode: 'contain',
      },
      genreView: {
        borderWidth: 2,
        borderColor: CustomColors.customRed,
        borderRadius: 18,
        margin: 8,
        height: 'auto',
        width: 'auto',
        padding: 5
    },
    genreText: {
        fontSize: 18,
        textAlign: 'center',
        color: CustomColors.customWhite,
    },
    activityIndicator: {
        justifyContent: 'center',
         alignItems: 'center',
          flex: 6
        },
    titleText: {
        fontSize: 25,
        textAlign: 'center',
        color: CustomColors.customWhite,
    },
    budgetView: {
        borderWidth: 2,
        borderColor: CustomColors.customRed,
        borderRadius: 25
    },
    budgetText: {
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
        color: CustomColors.customWhite,
    },
    overview: {
        fontSize: 16,
        textAlign: 'justify',
        justifyContent: 'center',
        color: CustomColors.customWhite,
        margin: 6,
        padding: 3
    },
    cardView: {
        backgroundColor: CustomColors.customBlack,
        flex: 6,
        flexDirection: 'row',
        margin: 10,
        elevation: 35,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        marginHorizontal: 10,
        borderLeftColor: CustomColors.customRed,
        borderLeftWidth: 8,
        borderRightWidth: 5,
    },  
    cardTitle:{
        color: CustomColors.customWhite,
        fontSize: 21,
        textAlign: 'center',
        margin: 10, 
        flex: 1
    },
    cardText: {
        width: 'auto',
        color: CustomColors.customWhite,
        fontSize: 18,
        textAlign: 'center', 
        flex: 1,
        borderColor: CustomColors.customRed,
        borderWidth: 2,
        margin: 5,
        borderRadius: 25,
        backgroundColor: CustomColors.customBlack,
        color: CustomColors.customWhite,
        fontWeight: 'bold',
        paddingTop: 5
        
    },
    cardLogo: {
        width: 150,
        height: 200,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        flex: 1
      },
    listDisplayView: {
        backgroundColor: CustomColors.customWhite
    }

    

});