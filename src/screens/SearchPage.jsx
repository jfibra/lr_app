
import React, { useState, useCallback } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, TextInput } from 'react-native';

import { useFonts } from '../helpers/useFonts';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight, faPenToSquare, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import AxiosInstance from '../config/AxiosInstance';

import searchPageStyles from '../styles/searchPageStyles';

const SearchPage = ({ navigation, route }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { faqs } = route.params;

    const handleSearch = (query) => {
        const filteredFaqs = faqs.filter((faq) =>
            faq.Question.toLowerCase().includes(query.toLowerCase()) || faq.Answer.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredFaqs);
    };

    const navigateToFAQDetails = (question, answer) => {
        // Navigate to FAQDetailsPage with the selected question and answer
        navigation.navigate('FAQ Details Page', { question, answer });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={searchPageStyles.faqButton}
            onPress={() => navigateToFAQDetails(item.Question, item.Answer)}
        >
            <Text style={searchPageStyles.faqButtonLabel}>{item.Question}</Text>
            <FontAwesomeIcon icon={faChevronRight} size={18} color={'#d33342'} />
        </TouchableOpacity>
    );

    React.useEffect(() => {
        useFonts();
    }, []);

    return (
        <View style={searchPageStyles.container}>
            <View style={searchPageStyles.topSearchBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faChevronLeft} size={30} color={'#001f3f'} style={{ marginTop: 5, }} />
                </TouchableOpacity>
                <TextInput
                    style={{ borderWidth: 1, borderColor: '#001f3f', width: '90%', padding: 10, height: 40, }}
                    placeholder="Search FAQs"
                    onChangeText={(text) => {
                        setSearchQuery(text);
                        handleSearch(text);
                    }}
                    value={searchQuery}
                />
            </View>
            {searchQuery.trim() === '' ? (
                <Text style={{ padding: 20, fontSize: 20, fontWeight: 'bold' }}>No results found.</Text>
            ) : (
                <FlatList
                    data={searchResults}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
        </View>
    );
};

export default SearchPage;
