import React, { useContext } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from '../Global/ContextAPI';


const ProfileHeader = ({ navigation, title }) => {

    const { user, setUser } = useContext(UserContext);

    return (
        <View style={styles.header}>
            {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../imgs/backArrow.png')} />
            </TouchableOpacity> */}
 
            {/* TODO: add a placeholder/default image and username to profile is user is a guest  */}
            <Image source={{ uri: user.user.photo }} style={styles.profileImage} width={75} height={75} />
            
            <View>
                <Text style={styles.headerTitle}>{user.user.name}</Text>
                <Text style={styles.subHeader}>{user.user.email}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',

        // TODO: add a background color or the background image to the header
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 30,
        paddingLeft: 24,
    },
    backButton: {
        color: '#fff',
        fontSize: 16,
        marginRight: 10,
    },
    // username css
    headerTitle: {
        color: '#000',
        fontSize: 23,
        paddingLeft: 22,
        fontWeight: 'bold',
    },
    // email css
    subHeader: {
        color: '#000',
        fontSize: 20,
        paddingLeft: 22,
        paddingTop: 3,

    },
    profileImage: {
        backgroundColor: 'red',
        borderRadius: 50
    }
});

export default ProfileHeader;