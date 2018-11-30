import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'

import { connect } from 'react-redux';
import LoginForm from './LoginForm'
import SurveyForm from './SurveyForm'
import { loggedStatusChanged, resetState } from '../actions/index'
import { ModalSpinner } from './common'
class MainForm extends Component {

    constructor(props) {
        super(props);

    }
    componentWillMount() {
        this.setState({ loading: true })
        this.isLoggedIn()
    }
    // To store the Access Token with AsyncStorage and auth the user
    isLoggedIn = async () => {
        try {

            const value = await AsyncStorage.getItem('accessToken');
            this.props.loggedStatusChanged(value);
            this.setState({ loading: false })

        } catch (error) {
            this.setState({ loading: false })
        }
    };
    logout = async () => {
        this.setState({ loginout: true, message: 'Saliendo' })
        await AsyncStorage.removeItem('accessToken');
        this.props.loggedStatusChanged(false);
        this.setState({ loggedIn: false, loginout: false })
        this.props.resetState()
    }

    render() {
        if (this.state.loading) {
            return <View style={{ flex: 1 }}>
                <ModalSpinner message={"Cargando"} />
            </View>
        }
        return <View style={{ flex: 1 }}>
            {this.props.loggedIn && <SurveyForm customClient={this.props.customClient} logout={this.logout} />}
            {!this.props.loggedIn &&
                <View style={{ backgroundColor: '#3ca2c8', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <LoginForm loginClient={this.props.loginClient} />
                </View>}

            {this.state.loginout && <ModalSpinner message={this.state.message} />}
        </View>
    }
}
const mapStateToProps = (state) => {

    return {
        loggedIn: state.auth.loggedIn
    }
}
export default connect(mapStateToProps, { loggedStatusChanged, resetState })(MainForm)