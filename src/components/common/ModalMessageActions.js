import React, { Component } from 'react';
//import { Icon, Text } from 'native-base';
import { Text, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

/**
 * This component show a modal with icon
 * and a Text with props message
 */
class ModalMessageActions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
        }
    }

    /**
     * To update the state modalVisible value
     *
     * @param visible boolean parameter
     */
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    /**
     * This component render a modal with an Icon component and a Message
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
                    visible={true}>
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
                                {/* <Icon
                                    name={this.props.iconName}
                                    style={{ fontSize: 100, color: '#52ABE3' }}
                                /> */}
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
        fontSize: 20,
        color: '#52ABE3',
        textAlign: 'center',
    }
});

export { ModalMessageActions }