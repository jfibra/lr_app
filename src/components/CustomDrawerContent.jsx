// src/components/CustomDrawerContent.js
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faHeadset, faRightFromBracket, faUserLock } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/commonStyles'; // Import your common styles
import { useAuthProvider } from '../config/AuthProvider';

const CustomDrawerContent = ({ navigation }) => {
    const authenticated = useAuthProvider();

    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
            {authenticated ? <>
                <TouchableOpacity onPress={() => navigation.navigate('Auth Screen')} style={styles.sidebarNav}>
                    <FontAwesomeIcon icon={faHome} size={22} style={styles.sidebarNavIcon} />
                    <Text style={styles.sidebarNavLabel}> DASHBOARD</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Logout')} style={styles.sidebarNav}>
                    <FontAwesomeIcon icon={faRightFromBracket} size={22} style={styles.sidebarNavIcon} />
                    <Text style={styles.sidebarNavLabel}> LOGOUT</Text>
                </TouchableOpacity>
            </> :
                <>
                    <View style={{ alignItems: 'left' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Auth Screen')} style={styles.sidebarNav}>
                            <FontAwesomeIcon icon={faUserLock} size={22} style={styles.sidebarNavIcon} />
                            <Text style={styles.sidebarNavLabel}> LOGIN SCREEN</Text>
                            <FontAwesomeIcon icon={faUserLock} size={22} style={styles.sidebarNavIcon} />
                        </TouchableOpacity>
                    </View>
                </>
            }

        </View>
    );
};

export default CustomDrawerContent;
