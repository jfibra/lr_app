// src/components/FooterTaskbar.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faChartSimple, faHeadset, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/commonStyles'; // Import your common styles

const FooterTaskbar = ({ navigation }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.navigationButton}>
                <FontAwesomeIcon icon={faHome} size={25} style={styles.navIcon} />
                <Text style={styles.navLabel}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sales Report')} style={styles.navigationButton}>
                <FontAwesomeIcon icon={faChartSimple} size={25} style={styles.navIcon} />
                <Text style={styles.navLabel}>My Sales</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.navigationButton}>
                <FontAwesomeIcon icon={faHeadset} size={25} style={styles.navIcon} />
                <Text style={styles.navLabel}>Support</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Agent Profile')} style={styles.navigationButton}>
                <FontAwesomeIcon icon={faUser} size={25} style={styles.navIcon} />
                <Text style={styles.navLabel}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FooterTaskbar;