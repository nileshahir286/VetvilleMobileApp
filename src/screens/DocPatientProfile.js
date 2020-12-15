import React, { useState, useEffect } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Header from '../Components/Header';
import Global from '../utils/Global';

import Entypo from 'react-native-vector-icons/Entypo';
import { Card } from 'react-native-paper';

import { Container, Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';

import PatAppointments from './PatAppointments';
import PatPrescriptions from './PatPrescriptions';
import PatMedicalRecords from './PatMedicalRecords';
import PatBilling from './PatBilling';


const DocPatientProfile = (props) => {

    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            Global.activeScreen = "DocPatientProfile";
            //console.log("..........", props.route.params.patientInfo.patientId);
        });

        return unsubscribe;
    }, [props.navigation]);

    return (
        <View style={{ flex: 1 }}>
            <Header title="Patient Profile" isBack={true} navigation={props.navigation} />
            <View style={{ flex: 1 }}>

                <Card style={{ margin: 4 }}>
                    <View style={{ paddingTop: 20, justifyContent: "center", alignItems: "center" }}>
                        <Image style={{ height: 100, width: 100, borderRadius: 50 }} source={{ uri: props.route.params.patientInfo.profileImage ? props.route.params.patientInfo.profileImage : "https://vetville.accepire.co/assets/img/default.png" }} />

                        <Text style={{ marginTop: 8, fontSize: 20, color: "#696969", fontWeight: "bold" }}>
                            {props.route.params.patientInfo.firstName} {props.route.params.patientInfo.lastName}
                        </Text>

                        <View style={{ padding: 4, flexDirection: "row" }}>
                            <Text style={{ color: "#696969", fontWeight: "bold", fontSize: 14 }}>Patient ID : </Text>
                            <Text style={{ color: "#696969", fontSize: 14 }}>{props.route.params.patientInfo.patientNumber}</Text>
                        </View>


                        <View style={{ padding: 4, flexDirection: "row" }}>
                            <Entypo name="location-pin" color="#696969" size={15} />
                            <Text style={{ color: "#696969", fontSize: 14 }}>{props.route.params.patientInfo.address}, {props.route.params.patientInfo.city}</Text>
                        </View>


                        <View style={{ height: 1, marginTop: 4, backgroundColor: "#D3D3D3", width: "100%" }} />

                        <View style={{ width: "100%", padding: 8 }}>
                            <View style={{ padding: 4, flexDirection: "row" }}>
                                <Text style={{ color: "#696969", fontWeight: "bold", fontSize: 14 }}>Phone : </Text>
                                <Text style={{ color: "#696969", fontSize: 14 }}>{props.route.params.patientInfo.phone}</Text>
                            </View>

                            <View style={{ padding: 4, flexDirection: "row" }}>
                                <Text style={{ color: "#696969", fontWeight: "bold", fontSize: 14 }}>Age : </Text>
                                <Text style={{ color: "#696969", fontSize: 14 }}>51 year</Text>
                            </View>

                            <View style={{ padding: 4, flexDirection: "row" }}>
                                <Text style={{ color: "#696969", fontWeight: "bold", fontSize: 14 }}>Blood Group : </Text>
                                <Text style={{ color: "#696969", fontSize: 14 }}>{props.route.params.patientInfo.bloodGroup ? props.route.params.patientInfo.bloodGroup : ""}</Text>
                            </View>
                        </View>
                    </View>
                </Card>

                <View>

                    <Container>
                        <Tabs
                            tabBarBackgroundColor="#fff"
                            tabBarUnderlineStyle={{ backgroundColor: Global.buttonColor2, height: 2 }}
                            renderTabBar={() => <ScrollableTab />}
                            onChangeTab={tab => console.log(tab)}
                        >
                            <Tab

                                heading={
                                    <TabHeading style={styles.tabHeading} >
                                        <Text>Appointments</Text>
                                    </TabHeading>
                                }
                            >
                                <PatAppointments patientId={props.route.params.patientInfo.patientId} />

                            </Tab>

                            {/* <Tab
                        heading={
                            <TabHeading style={styles.tabHeading} >
                                <Text>Prescriptions</Text>
                            </TabHeading>
                        }
                    >
                        <PatPrescriptions />
                    </Tab>

                    <Tab
                        heading={
                            <TabHeading style={styles.tabHeading} >
                                <Text>Medical Records</Text>
                            </TabHeading>
                        }
                    >
                        <PatMedicalRecords />
                    </Tab>

                    <Tab
                        heading={
                            <TabHeading style={styles.tabHeading} >
                                <Text>Billing</Text>
                            </TabHeading>
                        }
                    >
                        <PatBilling />
                    </Tab> */}
                        </Tabs>
                    </Container>

                </View>

            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    image: {
        width: "80%",
        height: 180,
    },
    tabHeading: {
        backgroundColor: "#fff"
    }
});

export default DocPatientProfile;