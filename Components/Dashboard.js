import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, {useState} from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Info from './Info';


const ItemComponent = ({item, onItemClick }) =>  {
    console.log(item);
    return (
        <Text onPress={() => onItemClick(item)}>{item}</Text>
    );
};


const Dashboard = () => {
        const navigation = useNavigation();
        const [selectedButton, setSelectedButton] = useState(null)
        const [searchInput, setSearchInput] = useState("")
       
        const arrayOfObjects = [
            {cateGoryName: "Employement", firstItem: "Jobs wanted & Offered", secondItem: "Labour Disputes Pay Notice Harassment", thirdItem: "UIF", fourthItem: "Pensions Provident Fund", fifth: "Compensation - Injury on duty", sixth: "Unfair Dismisal"}
        ]

        const array1 = ["Jobs wanted & Offered", "Labour Disputes Pay Notice Harassment", "UIF", "Pensions Provident Fund", "Compensation - Injury on duty", "Unfair Dismissal"];
        const array2 = ["Accommodation", "Eviction/Notice", "Rental/Lease", "Sale/Purchase Transfer", "Neighbours", "Admin Problems"];
        const array3 = ["Divorce, Family & Marriage", "Welfare Grants", "Support/Child Maintenance", "Children/Adoption", "Addiction", "Missing Persons"];
        const array4 = ["Loans/Banks Investments", "Debts Blacklisting Hire purchase", "Fraud","Insurance Taxation","Funerals/Wills Estates/Death Benefits", "Accident Claims RAF"];
        const array5 = ["Births/Marriage Death Certificates", "ID/Passports", "Trade & Licences", "Resident Permits", "Voting"];
        const array6 = ["Accommodation", "Old Age Pensions", "Employment", "Concessions", "Assistance & Complaints"];
        const array7 = ["Action or Advice needed", "Court Cases", "Complaints against lawyers", "Police/Criminal Protection",  "Prison: letters from prisoners", "Constitutional Rights"];
        const array8 = ["Education & Training", "Funding Bursaries", "Vocational Training", "Adult Education", "Educational Enterprise"];
        const array9 = ["Destitute", "Transport", "Home-nursing baby sitting", "Befriending Social"];
        const array10 = ["Information", "Copies, fax, calls: use sparingly!", "Recreation: clubs support groups"];
        const array11 = ["Services / Clinics" , "Disability Pensions", "Mental Health", "Sexual Enquiries HIV/Aids", "Medical Aid Accounts", "Physical Abuse"];
        const array12 = ["Rates/Accounts", "Pollution Noise", "Services Neighbourhood Problems", "Traffic Department", "Regulations"];
        const array13 = ["Advice Information", "Complaints", "Legislation", "Repairs", "Business Advice"];
        const array14 = ["Volunteers", "Disposal of Goods", "Services"];

        let selectedArray = [];

        switch(selectedButton){
            case 1 : selectedArray = array1; break;
            case 2 : selectedArray = array2; break;
            case 3 : selectedArray = array3; break;
            case 4 : selectedArray = array4; break;
            case 5 : selectedArray = array5; break;
            case 6 : selectedArray =  array6; break;
            case 7 : selectedArray = array7; break;
            case 8 : selectedArray = array8; break;
            case 9 : selectedArray = array9; break;
            case 10 : selectedArray = array10; break;
            case 11 : selectedArray = array11; break;
            case 12 : selectedArray = array12; break;
            case 13 : selectedArray = array13; break;
            case 14 : selectedArray = array14; break;
            default: selectedArray = [];
        }

        //When a single item is clicked.
        const handleItemClick = (item) => {
            navigation.navigate("Info", {item});
        }

  return (
    <View>
        <View style={styles.searchBarView}>
             <TextInput value={searchInput} onChangeText={(text) => setSearchInput(text)} style={styles.searchBar} placeholder="search"/>
        </View>
       
       
        <TouchableOpacity style={styles.optIcon}>
            <SimpleLineIcons name="options-vertical" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.DashContainer}>
            <View style={styles.DashInfo}></View>
            <TouchableOpacity style={styles.DashVid}></TouchableOpacity>
        </View>

        <Text style={styles.Categories}>Categories</Text>

        <View style={styles.CategoriesContainer}>

            <ScrollView   showsHorizontalScrollIndicator={false} horizontal style={styles.ScrollStyle}>
                <TouchableOpacity style={styles.CategoryItems} title="Array 1" onPress={() => setSelectedButton(1)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 2" onPress={() => setSelectedButton(2)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 3" onPress={() => setSelectedButton(3)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 4" onPress={() => setSelectedButton(4)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 3" onPress={() => setSelectedButton(5)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 3" onPress={() => setSelectedButton(6)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 3" onPress={() => setSelectedButton(7)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 3" onPress={() => setSelectedButton(8)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 3" onPress={() => setSelectedButton(9)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 3" onPress={() => setSelectedButton(10)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 3" onPress={() => setSelectedButton(11)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 3" onPress={() => setSelectedButton(12)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 3" onPress={() => setSelectedButton(13)}></TouchableOpacity>
                <TouchableOpacity style={styles.CategoryItems} title="Array 3" onPress={() => setSelectedButton(14)}></TouchableOpacity>

            </ScrollView>

            <Text style={styles.SubCategories}>Sub Categories</Text>

        </View>

        {/*Sub categories */}

        <View style={styles.CategoriesContent}>
            <ScrollView>
                
                {selectedArray.map((item, index) => (

                    <TouchableOpacity style={styles.content}>
                        <View style={styles.contentPlay}>

                        </View>
                
                     <ItemComponent key={index} item={item} onItemClick={handleItemClick}/>
                     
                    </TouchableOpacity>
                    
                ))}
            </ScrollView>
        </View>

    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    searchBarView: {
        position: "absolute",
        padding: 10,
        flexDirection: "row",
        width: "78%",
        backgroundColor: "#d9dbda",
        borderRadius: 10,
        alignItems: "center",
        marginTop: 65,
        marginRight: 200,
        marginLeft: 10
    },
    optIcon: {
        marginTop: 65,
        position: 'absolute',
        right: 25
    },
    srchIcon: {
        marginTop: 65,
        position: 'absolute',
        right: 65
    },
    DashContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '50%',
        top: 120
    },
    DashInfo: {
        backgroundColor: 'purple',
        height: '90%',
        width: '60%',
        margin: 10,
        borderRadius: 15
    },
    DashVid: {
        backgroundColor: 'blue',
        height: '90%',
        width: '33%',
        marginTop: 10,
        borderRadius: 15
    },
    Categories: {
        position: 'absolute',
        fontWeight: '700',
        fontSize: 20,
        marginTop: 340,
        margin: 10
    },
    CategoriesContainer: {

        width: '100%',
        position: 'absolute',
        height: '37%',
        top: 375,
       
    }, 
    CategoryItems: {
        height: 140,
        backgroundColor: 'green',
        width: 120,
        margin: 10,
        borderRadius: 10
    },
    SubCategories : {
        fontWeight: '700', 
        fontSize: 20,
        position: 'absolute',
        marginTop: 160,
        marginLeft: 10
    },
    CategoriesContent: {
        width: '100%',
        height: '67%',
        position: 'absolute',
        bottom: -422
    },
    content: {
        backgroundColor: 'pink',
        height: 65,
        margin: 10,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row'
    },
    contentPlay: {
        backgroundColor: '#fff',
        height: 50,
        width: 50,
        borderRadius: 10,
        margin: 7.5
    }
})