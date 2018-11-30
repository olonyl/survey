import React, { Component } from 'react';

import { Modal, StyleSheet, TouchableWithoutFeedback, View, ActivityIndicator, Text } from "react-native";

class ModalSpinner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    /**
     * This component render a modal with Spinner component and messsage
     * @returns {*}
     */
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={true} onRequestClose={() => { }}>

                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.setModalVisible(false);
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            <View style={{
                                margin: 10,
                                backgroundColor: '#fff',
                                width: 250,
                                height: 250,
                                borderRadius: 10,
                                padding: 5,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <ActivityIndicator color='#52ABE3' size="large" />
                                <Text style={styles.text}>{this.props.message}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#52ABE3',
        textAlign: 'center',
        paddingTop: 10
    }
});

export { ModalSpinner }