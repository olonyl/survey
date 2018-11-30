import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	emailChanged,
	passwordChanged,
	loggedStatusChanged
} from '../actions';
import { Form, Item, Thumbnail } from 'native-base';
import { Alert, AsyncStorage, StyleSheet, Text, TextInput, TouchableHighlight, View, ToastAndroid } from 'react-native';
import { Card, Container, Input, Button, ModalSpinner } from './common';
import { GET_USERS_QUERY } from './graphql/LoginFormQuery';

const image = require('../img/avatar.png');
class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			showToast: false
		}
	}

	doLogin = () => {

		this.setState({
			loading: true,
			message: 'Autenticando...'
		}, () => {
			this.props.loginClient
				.query({
					query: GET_USERS_QUERY,
					variables: {
						Code_User: `'${this.props.email}'`,
						Password: `'${this.props.password}'`
					},
					fetchPolicy: 'no-cache'
				})
				.then((data) => {
					const user = data.data.getvalid_users;
					if (!user) {
						this.setState({
							loading: false
						}, () =>
								ToastAndroid.showWithGravity(
									'Datos inválidos, intente nuevamente',
									ToastAndroid.SHORT,
									ToastAndroid.CENTER,
								))

						return false;
					}
					if (user.IsActive == 0) {
						this.setState({
							loading: false
						}, () => {
							ToastAndroid.showWithGravity(
								'Datos inválidos, intente nuevamente',
								ToastAndroid.SHORT,
								ToastAndroid.CENTER,
							);
						});
					} else {

						this.storeUserID(user.Id);
						this.storeAccessToken(user.Token);

						this.setState({
							loading: false
						}, () => {
							this.props.loggedStatusChanged(true);
						});

					}
				})
				.catch(error => {
					this.setState({
						loading: false,
					});

					ToastAndroid.showWithGravity(
						'Error de conexión',
						ToastAndroid.SHORT,
						ToastAndroid.CENTER,
					);
				})
		});
	}

	// To store the Access Token with AsyncStorage and auth the user
	storeAccessToken = async (key) => {
		try {
			await AsyncStorage.setItem('accessToken', key);
		} catch (error) {
			ToastAndroid.showWithGravity(
				'Error guardando access token',
				ToastAndroid.SHORT,
				ToastAndroid.CENTER,
			);
		}
	};

	storeUserID = async (key) => {
		try {
			await AsyncStorage.setItem('userId', key.toString());
		} catch (error) {
			// Show error dialog
		}
	};

	validateInputs = () => {
		if (this.props.email.toString() == '' ||
			this.props.password.toString() == '') {
			ToastAndroid.showWithGravity(
				'Complete todos los campos',
				ToastAndroid.SHORT,
				ToastAndroid.CENTER,
			);
		} else {
			this.doLogin()
		}
	};
	render() {

		return (
			<Form style={styles.container}>
				<View style={styles.thumbnailContainer}>
					<Thumbnail
						style={styles.thumbnail}
						large
						source={image}
					/>
				</View>
				<Item style={styles.item}>
					<TextInput
						style={{
							padding: 8,
							fontSize: 15,
							flex: 1
						}}
						placeholder="Username"
						value={this.props.email}
						onChangeText={this.props.emailChanged} />
				</Item>
				<Item style={{ ...styles.item, marginBottom: 20 }}>
					<TextInput
						style={{
							padding: 8,
							fontSize: 15,
							flex: 1
						}}
						secureTextEntry
						placeholder="Password"
						onChangeText={this.props.passwordChanged}
						value={this.props.password} />
				</Item>
				<Container>
					<Button disabled={this.state.loading} textColor='#fff' backgroundColor='#3ca2c8' onPress={this.validateInputs}>Login</Button>
				</Container>
				<Container>
					{this.state.loading && <ModalSpinner message={this.state.message} />}
				</Container>
			</Form>
		);
	}
}
const styles = {
	container: {
		height: 300,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		margin: 15,
		padding: 5,
		paddingBottom: 40,
		paddingTop: 30,
		position: 'relative'
	},
	item: {
		alignSelf: 'stretch',
		marginRight: 15,
		marginTop: 20,
	},
	touchableStyles: {
		marginTop: 30,
		marginLeft: 15,
		marginRight: 15,
		borderRadius: 5,
		alignSelf: 'stretch',
		backgroundColor: '#3ca2c8',
		flex: 1
	},
	buttonStyle: {
		padding: 12,
		borderRadius: 5
	},
	buttonText: {
		color: '#FFF',
		alignSelf: 'stretch',
		textAlign: 'center'
	},
	thumbnail: {
		width: 100,
		height: 100,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#eee',
		padding: 30,
		position: 'absolute',
		bottom: -10,
		borderRadius: 50
	},
	thumbnailContainer: {
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',


	}
};
const mapStateToProps = state => {
	const { email, password, loggedIn } = state.auth;
	return {
		email,
		password,
		loggedIn
	}
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loggedStatusChanged })(LoginForm);
