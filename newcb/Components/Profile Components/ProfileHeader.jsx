import React, { useContext } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from '../Global/ContextAPI';


const ProfileHeader = ({ navigation, title }) => {

    const { user, setUser } = useContext(UserContext);

    return (
        <View style={styles.header}>
            {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../imgs/backArrow.png')} style={styles.backButton} />
            </TouchableOpacity> */}

            <Image source={user ? { uri: user.user.photo } : require('../../imgs/defaultPfp60x60.png')} style={styles.profileImage} width={60} height={60} />

            <View>
                <Text style={styles.headerTitle}>{user ? user.user.name : "Guest"}</Text>
                {
                    user ?
                        <Text style={styles.subHeader}>{user ? user.user.email : ""}</Text>
                        :
                        null
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',

        // TODO: add a background color or the background image to the header
        backgroundColor: '#ffffff0f',
        padding: 20,
        paddingLeft: 24,
        marginTop: 10,
    },
    backButton: {
        marginRight: 18,
        transform: [{ scale: 1.3 }]
    },
    // username css
    headerTitle: {
        color: '#AC6A36',
        fontSize: 22,
        paddingLeft: 20,
        // fontWeight: 'bold',
        fontFamily: "LeagueSpartan-SemiBold",
    },
    // email css
    subHeader: {
        color: '#AC6A36',
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 3,
        fontFamily: "LeagueSpartan-Regular",

    },
    profileImage: {
        backgroundColor: '#6e3b6e',
        borderRadius: 50
    }
});

export default ProfileHeader;