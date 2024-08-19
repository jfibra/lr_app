// src/navigation/HelpPage.js
import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TextInput, Linking, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';

import { useFonts } from '../helpers/useFonts';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faComment, faCommentDots, faEnvelopeOpenText, faPhone, faRightFromBracket, faSearch, faSquareEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import AxiosInstance from '../config/AxiosInstance';

import headerStyles from '../styles/headerStyles';
import helpPageStyles from '../styles/helpPageStyles';

const HelpPage = ({ navigation }) => {
    const [faqs, setFaqs] = useState([]);

    const openEmail = () => {
        Linking.openURL('mailto:it.dept.leuteriorealty@gmail.com');
    };

    const openDialer = () => {
        Linking.openURL('tel:254-8900');
    };

    const retrieveFAQs = async () => {
        try {
            const response = await AxiosInstance.get(`https://leuteriorealty.com/faq.json`);
            const data = response.data;
            
            setFaqs(data);
        } catch (error) {
            console.error('Error retrieving FAQs:', error);
        }
    }

    React.useEffect(() => {
        useFonts();
        retrieveFAQs();
    }, []);

    const renderFAQItem = ({ item }) => (
        <TouchableOpacity style={helpPageStyles.faqButton}>
            <Text style={helpPageStyles.faqButtonLabel}>{item.Answer}</Text>
        </TouchableOpacity>
    );

    const navigateToFAQSearch = (question, answer) => {
        navigation.navigate('FAQ Search Page', { faqs });
    };

    const navigateToFAQDetails = (question, answer) => {
        navigation.navigate('FAQ Details Page', { question, answer });
    };

    return (
        <View style={helpPageStyles.container}>
            <ImageBackground
                source={require('../../assets/images/helppage.png')}
                style={helpPageStyles.topCorner}
            >
                <Text style={helpPageStyles.searchHeader}>How can we help</Text>

                <TouchableOpacity onPress={() => navigateToFAQSearch(faqs)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 5, top: -30, margin: 20 }}>
                        <FontAwesomeIcon icon={faSearch} size={18} color={'#d33342'} style={{ marginLeft: 10, }} />
                        <Text style={{ height: 35, padding : 7 }}>SEARCH</Text>
                    </View>
                </TouchableOpacity>

            </ImageBackground>
            <View style={helpPageStyles.content}>
                <View style={helpPageStyles.getInTouch}>
                    <Text style={helpPageStyles.headerLabel}>Frequently Asked Questions</Text>
                    <FlatList
                        data={faqs.slice(0, 3)} // Display only the first 5 items
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={helpPageStyles.faqButton}
                                onPress={() => navigateToFAQDetails(item.Question, item.Answer)}
                            >
                                <Text style={helpPageStyles.faqButtonLabel}>{item.Question}</Text>
                                <FontAwesomeIcon icon={faChevronRight} size={18} color={'#d33342'} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />

                    <Text style={helpPageStyles.headerLabel}>Get in touch with us</Text>

                    <TouchableOpacity style={helpPageStyles.button} onPress={() => navigation.navigate('Chat with us')}>
                        <FontAwesomeIcon icon={faCommentDots} size={18} color={'#d33342'} />
                        <Text style={helpPageStyles.buttonLabel}>Chat with us</Text>
                        <FontAwesomeIcon icon={faChevronRight} size={18} color={'#d33342'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={helpPageStyles.button} onPress={openEmail}>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} size={18} color={'#d33342'} />
                        <Text style={helpPageStyles.buttonLabel}>it.dept.leuteriorealty@gmail.com</Text>
                        <FontAwesomeIcon icon={faChevronRight} size={18} color={'#d33342'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={helpPageStyles.button} onPress={openDialer}>
                        <FontAwesomeIcon icon={faPhone} size={18} color={'#d33342'} />
                        <Text style={helpPageStyles.buttonLabel}>Dial 254-8900 to call support</Text>
                        <FontAwesomeIcon icon={faChevronRight} size={18} color={'#d33342'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default HelpPage;
