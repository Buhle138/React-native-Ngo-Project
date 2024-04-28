
import React, {useState} from 'react'
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';




const Info = () => {

    const route = useRoute();
    const {item} = route.params;
    const titleN = item;
    const [title, setTitle] = useState("")

    const navigation = useNavigation();
   
    const handlePress = () => {navigation.goBack();
    };


    const arrayOfObjects = [
        [
            "Jobs wanted & Offered", 
            "Labour Disputes Pay Notice Harassment", 
            "UIF", 
            "Pensions Provident Fund", 
            "Compensation - Injury on duty", 
            "Unfair Dismissal",
            "Accommodation", 
            "Eviction/Notice", 
            "Rental/Lease", 
            "Sale/Purchase Transfer", 
            "Neighbours", 
            "Admin Problems",
            "Divorce, Family & Marriage", 
            "Welfare Grants", 
            "Support/Child Maintenance", 
            "Children/Adoption", 
            "Addiction", 
            "Missing Persons",
            "Loans/Banks Investments", 
            "Debts Blacklisting Hire purchase", 
            "Fraud",
            "Insurance Taxation",
            "Funerals/Wills Estates/Death Benefits", 
            "Accident Claims RAF",
            "Births/Marriage Death Certificates", 
            "ID/Passports", 
            "Trade & Licences", "Resident Permits", "Voting",
            "Accommodation", 
            "Old Age Pensions", 
            "Employment", 
            "Concessions", 
            "Assistance & Complaints",
            "Action or Advice needed", 
            "Court Cases", 
            "Complaints against lawyers", 
            "Police/Criminal Protection", 
            "Prison: letters from prisoners", 
            "Constitutional Rights",
            "Education & Training", 
            "Funding Bursaries",
            "Vocational Training", 
            "Adult Education", 
            "Educational Enterprise"]
        // ["Destitute", "Transport", "Home-nursing baby sitting", "Befriending Social"],
        // ["Information", "Copies, fax, calls: use sparingly!", "Recreation: clubs support groups"],
        // ["Services / Clinics" , "Disability Pensions", "Mental Health", "Sexual Enquiries HIV/Aids", "Medical Aid Accounts", "Physical Abuse"],
        // ["Rates/Accounts", "Pollution Noise", "Services Neighbourhood Problems", "Traffic Department", "Regulations"],
        // ["Advice Information", "Complaints", "Legislation", "Repairs", "Business Advice"],
        // ["Volunteers", "Disposal of Goods", "Services"],

    ]

  return (
    <View style={styles.container}>
       
        <Text style={styles.textTitle}>{titleN}</Text>
    <TouchableOpacity onPress={handlePress} style={styles.Prof}>
      <Ionicons name="arrow-back" size={25} color="black" />
    </TouchableOpacity>

    
    <View style={styles.InfoContainer}>

    
    <AntDesign style={styles.pdfDoc}  name="pdffile1" size={24} color="black" />
        <Text style={styles.widthContainer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </View>
  </View>
  );
};

export default Info

const styles = StyleSheet.create({

    pdfDoc: {
        position: 'absolute',
        marginTop : 50,
        marginLeft: 340
    },
    widthContainer: {
        position: 'absolute',
        marginLeft: 30,
        marginTop: 40,
        width: '70%'
    },
    textTitle: {
        fontWeight: 700,
        fontSize: 30,
        textAlign: 'center',
        marginTop: 170
    },
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        justifyContent: 'flex-start',
    }, Prof: {
        backgroundColor: '#E5E4E2',
        width: 50,
        height: 50,
        position: 'absolute',
        top: 45,
        left: 20,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
      }, InfoContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '70%',
        backgroundColor: '#E5E4E2',
        borderTopLeftRadius: 100
      }
});