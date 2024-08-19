// ImagePicker.js
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ImagePicker } from 'expo-image-multiple-picker';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const ImagePickerTechnicalSupportPage = ({ navigation }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.exitButtonContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.exitButton}>
                    <FontAwesomeIcon icon={faX} size={23} color={ 'black' } />
                </TouchableOpacity>
            </View>
            <ImagePicker onSave={(asset) => {
                // navigation.setParams({ assetsPOT: asset });
                navigation.navigate("Support", { assetsPOT: asset });
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 20,
    },
    exitButton: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 100,
        backgroundColor: "white",
    },
    exitButtonContainer: {
        alignSelf: "flex-start",
        marginTop: 50,
        marginLeft: 20,
        width: 60,
        position: "absolute",
        bottom: 50,
        right:25,
        zIndex: 9999,
    }
});

export default ImagePickerTechnicalSupportPage;
