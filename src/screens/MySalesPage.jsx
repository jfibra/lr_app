// src/screens/MySalesPage.jsx
import React, { useState, } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, ActivityIndicator, RefreshControl, Image } from 'react-native';

import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import AxiosInstance from '../config/AxiosInstance';

import { useFonts } from '../helpers/useFonts';
import mySalesStyles from '../styles/mySalesStyles'; // Import your mySalesStyles
import headerStyles from '../styles/headerStyles';

const MySalesPage = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadingTable, setLoadingTable] = useState(false);
    const [enablePrevious, setEnablePrevious] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [totalValidSales, setTotalValidSales] = useState(0);
    const [totalSales, setTotalSales] = useState(0);
    const [totalInvalidSales, setTotalInvalidSales] = useState(0);
    const [totalNotYetValidSales, setNotYetValidSales] = useState(0);
    const [page, setPage] = useState(null);
    const [lastPage, setLastPage] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPaging, setIsPaging] = useState(false);
    const [isNextButton, setIsNextButton] = useState(true);

    const myData = useSelector((state) => state.AuthReducers.userData);
    const userData = myData ? myData : null;

    const [searchQuery, setSearchQuery] = useState(null);

    const handleSearch = (query) => {
        setLoadingTable(true);
        setSearchQuery(query);
    };

    const getSales = async (page, search = null) => {
        if (userData !== null) {
            setLoadingTable(true);
            const query = search !== null ? search : "all";
            const { memberid } = userData[0].details;
            const url = `sales/${memberid}/${query}?page=${page}`;
            const response = await AxiosInstance.get(url);

            const urlLink = response.data.links.last;
            const nextButton = response.data.links.next;
            if (nextButton === null) {
                setIsNextButton(false);
            }
            else {
                setIsNextButton(true);
            }

            // Split the URL by "?" to get the part after the "?"
            const queryString = urlLink.split("?")[1];

            // Split the query string by "=" to get the part after "="
            const pageNumber = queryString.split("=")[1];
            setLastPage(pageNumber);
            let current_page = response.data.links.prev;
            let newTableData = response.data.data.salesreport;

            // Check if newTableData is not an empty array
            newTableData = newTableData.length !== 0 ? newTableData : null;
            if (current_page === null) {
                setEnablePrevious(false);
            }
            else {
                setEnablePrevious(true);
            }

            // Update the state with the newTableData
            setTableData(newTableData);

            // Set loading to false once data is fetched
            setLoading(false);
            setLoadingTable(false);
            setRefreshing(false);
        }
    }

    const getTotalSales = async () => {
        if (userData !== null) {
            const { memberid } = userData[0].details;
            const url = `total-sales/${memberid}`;

            try {
                const response = await AxiosInstance.get(url);
                const formattedTotalValidSales = formatNumber(response.data.total_valid_sales);
                setTotalValidSales(formattedTotalValidSales);
                const formattedTotalSales = formatNumber(response.data.total_sales);
                setTotalSales(formattedTotalSales);
                const formattedTotalInvalidSales = formatNumber(response.data.total_invalid_sales);
                setTotalInvalidSales(formattedTotalInvalidSales);
                const formattedTotalNotYetValidSales = formatNumber(response.data.total_not_valid_sales);
                setNotYetValidSales(formattedTotalNotYetValidSales);
            } catch (error) {
                console.error('Error fetching total sales:', error);
            }
        }
    }

    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US', {
            maximumFractionDigits: 0
        }).format(number);
    };

    const handleNextPress = async () => {
        let currPage = page + 1;
        const search = searchQuery !== "" ? searchQuery : null;
        setPage(currPage); // Increment the page
        setIsPaging(true);
        setLoadingTable(true);
        getSales(currPage, search); // Wait for getSales to finish fetching data
    };

    const handlePreviousPress = async () => {
        let currPage = page - 1;
        const search = searchQuery !== "" ? searchQuery : null;
        setPage(currPage); // Decrement the page
        setIsPaging(true);
        setLoadingTable(true);
        getSales(currPage, search); // Wait for getSales to finish fetching data
    };

    // Action function to navigate to SaleDetailsPage
    const handleViewSale = (saleId) => {
        navigation.navigate('Sale Details Page', { saleId }); // Navigate to SaleDetailsPage with saleId parameter
    };

    const onRefresh = () => {
        setRefreshing(true);
        getTotalSales();
        getSales(1, null);
    };

    React.useEffect(() => {
        if (!isLoaded) {
            setIsLoaded(true);
            setLoading(true);
            useFonts();
            getSales(1, searchQuery);
            getTotalSales();
        }

        const delayDebounce = setTimeout(() => {
            const search = searchQuery !== "" ? searchQuery : null;

            setIsPaging(false);
            setPage(1);
            setLoadingTable(true);
            getSales(1, search);
        }, 1000);

        return () => clearTimeout(delayDebounce);
    }, [searchQuery]);

    return (
        <FlatList
            data={[{ key: 'mySalesView' }]}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {loading ? (
                        <>
                            <View style={headerStyles.myNavigationContainer}>
                                <Image source={require('../../assets/images/logoMain.png')} style={headerStyles.myNavigationLogo}></Image>
                            </View>
                            <View style={{ padding: 20, marginTop: 200, alignItems: 'center' }}>
                                <ActivityIndicator size="large" color="#0000ff" />
                                <Text>Fetching data. Please wait.</Text>
                            </View>
                        </>
                    ) : (
                        <>
                            {userData !== null && (
                                <>
                                    <View style={headerStyles.myNavigationContainer}>
                                        <Image source={require('../../assets/images/logoMain.png')} style={headerStyles.myNavigationLogo}></Image>
                                    </View>
                                    <View style={mySalesStyles.salesContainer}>
                                        <View style={mySalesStyles.boxWidth}>
                                            {totalSales ? (
                                                <View style={mySalesStyles.salesSummary}>
                                                    <View style={mySalesStyles.totalSales}>
                                                        <Text style={mySalesStyles.totalSalesNo}>{totalSales}</Text>
                                                        <Text style={mySalesStyles.totalSalesSub}>Total Uploaded Sales</Text>
                                                    </View>
                                                </View>
                                            ) :
                                                <View style={mySalesStyles.salesSummary}>
                                                    <View style={mySalesStyles.totalSales}>
                                                        <Text style={mySalesStyles.totalSalesNo}>0</Text>
                                                        <Text style={mySalesStyles.totalSalesSub}>Total Sales</Text>
                                                    </View>
                                                </View>}
                                            {totalValidSales ? (
                                                <View style={mySalesStyles.salesValidBox}>
                                                    <View style={mySalesStyles.totalValidated}>
                                                        <Text style={mySalesStyles.totalSalesNo}>{totalValidSales}</Text>
                                                        <Text style={mySalesStyles.totalSalesSub}>Validated Sales</Text>
                                                    </View>
                                                </View>
                                            ) :
                                                <View style={mySalesStyles.salesValidBox}>
                                                    <View style={mySalesStyles.totalValidated}>
                                                        <Text style={mySalesStyles.totalSalesNo}>0</Text>
                                                        <Text style={mySalesStyles.totalSalesSub}>Validated Sales</Text>
                                                    </View>
                                                </View>}
                                        </View>
                                        <View style={mySalesStyles.boxWidth}>
                                            {totalInvalidSales ? (
                                                <View style={mySalesStyles.salesSummary}>
                                                    <View style={mySalesStyles.totalInvalid}>
                                                        <Text style={mySalesStyles.totalSalesNo}>{totalInvalidSales}</Text>
                                                        <Text style={mySalesStyles.totalSalesSub}>Invalid Sales</Text>
                                                    </View>
                                                </View>
                                            ) :
                                                <View style={mySalesStyles.salesSummary}>
                                                    <View style={mySalesStyles.totalInvalid}>
                                                        <Text style={mySalesStyles.totalSalesNo}>0</Text>
                                                        <Text style={mySalesStyles.totalSalesSub}>Invalid Sales</Text>
                                                    </View>
                                                </View>}
                                            {totalNotYetValidSales ? (
                                                <View style={mySalesStyles.salesValidBox}>
                                                    <View style={mySalesStyles.totalNotValidated}>
                                                        <Text style={mySalesStyles.totalSalesNo}>{totalNotYetValidSales}</Text>
                                                        <Text style={mySalesStyles.totalSalesSub}>Not Yet Validated Sales</Text>
                                                    </View>
                                                </View>
                                            ) :
                                                <View style={mySalesStyles.salesValidBox}>
                                                    <View style={mySalesStyles.totalNotValidated}>
                                                        <Text style={mySalesStyles.totalSalesNo}>0</Text>
                                                        <Text style={mySalesStyles.totalSalesSub}>Not Yet Validated Sales</Text>
                                                    </View>
                                                </View>}
                                        </View>
                                        <View style={mySalesStyles.tableContainer}>
                                            <View style={mySalesStyles.tableBoxWidthHeader}>
                                                <Text style={mySalesStyles.tableHeaderLeft}>CLIENT</Text>
                                                <Text style={mySalesStyles.tableHeader}>PROJECT & DEVELOPER</Text>
                                                <Text style={mySalesStyles.tableHeaderRight}>ACTION</Text>
                                            </View>
                                            {/* Search Input */}
                                            <View style={{ paddingTop: 10, backgroundColor: "white", borderColor: '#f8faf8', borderWidth: 1 }}>
                                                <TextInput
                                                    style={mySalesStyles.searchInput}
                                                    placeholder="Search a client..."
                                                    onChangeText={(text) => setSearchQuery(text)}
                                                />
                                            </View>
                                            {loadingTable ? (
                                                // Display loading state 
                                                <View style={{ padding: 20, alignItems: 'center', backgroundColor: 'white', borderColor: '#f8faf8', borderWidth: 1 }}>
                                                    <ActivityIndicator size="large" color="#0000ff" />
                                                    <Text>Fetching data.</Text>
                                                    {isPaging === true ? <><Text>Page {page} of {lastPage}.</Text></> : <></>}
                                                    <Text>Please wait.</Text>
                                                </View>
                                            ) : (
                                                <>
                                                    {tableData && tableData.length > 0 ? ( // Check if tableData is not empty
                                                        <ScrollView contentContainerStyle={mySalesStyles.tableBoxWidth}>
                                                            <View>
                                                                <FlatList
                                                                    data={tableData} // Use the state variable
                                                                    keyExtractor={(item, index) => index.toString()}
                                                                    renderItem={({ item }) => (
                                                                        <View style={[mySalesStyles.tableRow, { height: 60 }]}>
                                                                            <Text style={item.validSale === "No" ? mySalesStyles.tableCellDanger1 : item.validSale === "Yes" ? mySalesStyles.tableCell1 : mySalesStyles.tableCellWarning1}>
                                                                                {item.clientName}
                                                                            </Text>
                                                                            <Text style={item.validSale === "No" ? mySalesStyles.tableCellDanger2 : item.validSale === "Yes" ? mySalesStyles.tableCell2 : mySalesStyles.tableCellWarning2}>
                                                                                {item.developer} - {item.project}
                                                                            </Text>
                                                                            <TouchableOpacity
                                                                                style={item.validSale === "No" ? mySalesStyles.tableCellDanger3 : item.validSale === "Yes" ? mySalesStyles.tableCell3 : mySalesStyles.tableCellWarning3}
                                                                                onPress={() => handleViewSale(item.id)}
                                                                            >
                                                                                <Text style={mySalesStyles.tableButtonView}>VIEW</Text>
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    )}
                                                                />
                                                            </View>
                                                        </ScrollView>
                                                    ) : (
                                                        // Display message when no search result is found
                                                        <View style={{ padding: 20, alignItems: 'center', backgroundColor: 'white' }}>
                                                            <Text>No search result found.</Text>
                                                        </View>
                                                    )}
                                                </>
                                            )}

                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                {enablePrevious ? (
                                                    <TouchableOpacity style={mySalesStyles.prevBtn} onPress={handlePreviousPress}>
                                                        <FontAwesomeIcon icon={faCaretLeft} size={15} color={'#0358b4'} />
                                                        <Text style={mySalesStyles.prevBtnLabel}> PREVIOUS</Text>
                                                    </TouchableOpacity>
                                                ) : (
                                                    <></>
                                                )}
                                                {isNextButton === true ? (
                                                    <TouchableOpacity style={mySalesStyles.nextBtn} onPress={handleNextPress}>
                                                        <Text style={mySalesStyles.nextBtnLabel}> NEXT</Text>
                                                        <FontAwesomeIcon icon={faCaretRight} size={15} color={'#0358b4'} />
                                                    </TouchableOpacity>
                                                ) : (
                                                    <></>
                                                )}
                                            </View>
                                        </View>
                                    </View>
                                </>
                            )}
                        </>
                    )}
                </ScrollView >
            )}
        />
    );
};

export default MySalesPage;
