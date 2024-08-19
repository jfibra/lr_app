// FAQDetailsPage.js
import React, { useState, useCallback } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { shuffle } from 'lodash'; // Import the shuffle function from lodash

import { useFonts } from '../helpers/useFonts';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight, faPenToSquare, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import AxiosInstance from '../config/AxiosInstance';

import faqDetailsStyles from '../styles/faqDetailsStyles';

const FAQDetailsPage = ({ navigation, route }) => {
    const { question, answer } = route.params;
    const [faqs, setFaqs] = useState([]);

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

    const navigateToFAQDetails = (question, answer) => {
        // Navigate to FAQDetailsPage with the selected question and answer
        navigation.navigate('FAQ Details Page', { question, answer });
    };

    // Shuffle the faqs array to randomize the order
    const shuffledFaqs = useCallback(() => shuffle(faqs), [faqs]);

    return (
        <View style={faqDetailsStyles.container}>
            <TouchableOpacity style={faqDetailsStyles.headerButton} onPress={() => navigation.goBack()}>
                <FontAwesomeIcon icon={faChevronLeft} size={18} color={'#001f3f'} />
                <Text style={faqDetailsStyles.headerButtonLabel}>Frequently Asked Question</Text>
            </TouchableOpacity>
            <View style={faqDetailsStyles.content}>
                <Text style={faqDetailsStyles.headerQuestion}>{question}</Text>
                <Text style={faqDetailsStyles.headerContentLabel}>Answer : </Text>
                <Text style={faqDetailsStyles.headerContentAnswer}>{answer}</Text>
                <Text style={faqDetailsStyles.moreLikeThis}>More Questions</Text>

                <FlatList
                    data={shuffledFaqs().slice(0, 3)} // Display only the first 3 randomized items
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={faqDetailsStyles.faqButton}
                            onPress={() => navigateToFAQDetails(item.Question, item.Answer)}
                        >
                            <Text style={faqDetailsStyles.faqButtonLabel}>{item.Question}</Text>
                            <FontAwesomeIcon icon={faChevronRight} size={18} color={'#d33342'} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

export default FAQDetailsPage;
