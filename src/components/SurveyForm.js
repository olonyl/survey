import React, { Component } from 'react';

import {
    Card, CardSection, CardHeader, Container, Button,
    RadioGroup, ModalSpinner, Header
} from './common'
import {
    View, Text, Switch, TextInput, Picker, TouchableOpacity,
    ScrollView, CheckBox, AsyncStorage, Alert, ActivityIndicator, ToastAndroid, Image
} from 'react-native';
import { CREATE_SURVEY } from './graphql/SurveyMutation';

import { connect } from 'react-redux';

import {
    firstChanged,
    secondChanged,
    thirdChanged,
    fourthChanged,
    fourth_FirstChanged,
    fifthLatitudChanged,
    fifthLongitudChanged,
    sixthChanged,
    seventhChanged,
    eighthChanged,
    ninthChanged,
    tenthChanged,
    eleventhBATChanged,
    eleventhPMIChanged,
    twelvethBATChanged,
    twelvethPMIChanged,
    thirteenthFirstChanged,
    thirteenthSecondChanged,
    thirteenthThirdChanged,
    thirteenthFourthChanged,
    thirteenthFifthChanged,
    fourteenthFirstChanged,
    fourteenthSecondChanged,
    fourteenthThirdChanged,
    fourteenthFourthChanged,
    fourteenthFifthChanged,
    fifteenthFirstChanged,
    fifteenthSecondChanged,
    fifteenthThirdChanged,
    sixteenthCalidadVisualChanged,
    sixteenthTraficoChanged,
    sixteenthUbicacionChanged,

    seventeenthFirstChanged,
    seventeenthSecondChanged,
    seventeenthThirdChanged,
    seventeenthFourthChanged,
    seventeenthFifthChanged,
    seventeenthSixthChanged,

    eighteenthChanged,
    nineteenthChanged,
    twentiethFirstChanged,
    twentiethSecondChanged,
    twentiethThirdChanged,
    twentiethFourthChanged,
    loggedStatusChanged,
    resetState
} from '../actions';


const image = require('../img/location.png');
class SurveyForm extends Component {

    componentWillMount() {
        this.getLocalSurveyData()
        this.resetAllData();
    }
    createAnswer = (QueryId, answerDescription, answerValue) => {
        return {
            QueryId,
            SurveyId: 1,
            answerDescription,
            answerValue
        }
    }
    createSurvey = (answers) => {
        const list =
            [
                this.createAnswer(1, "first", answers.first),
                this.createAnswer(2, "second", answers.second),
                this.createAnswer(3, "third", answers.third),
                this.createAnswer(4, "fourth", answers.fourth),
                this.createAnswer(21, "fourth_First", answers.fourth_First),
                this.createAnswer(5, "fifthLatitud", answers.fifthLatitud),
                this.createAnswer(5, "fifthLongitud", answers.fifthLongitud),
                this.createAnswer(6, "sixth", answers.sixth),
                this.createAnswer(7, "seventh", answers.seventh),
                this.createAnswer(8, "eighth", answers.eighth),
                this.createAnswer(9, "ninth", answers.ninth),
                this.createAnswer(10, "tenth", answers.tenth),
                this.createAnswer(11, "eleventhBAT", answers.eleventhBAT),
                this.createAnswer(11, "eleventhPMI", answers.eleventhPMI),
                this.createAnswer(12, "twelvethBAT", answers.twelvethBAT),
                this.createAnswer(12, "twelvethPMI", answers.twelvethPMI),
                this.createAnswer(13, "thirteenthFirst", answers.thirteenthFirst),
                this.createAnswer(13, "thirteenthSecond", answers.thirteenthSecond),
                this.createAnswer(13, "thirteenthThird", answers.thirteenthThird),
                this.createAnswer(13, "thirteenthFourth", answers.thirteenthFourth),
                this.createAnswer(13, "thirteenthFifth", answers.thirteenthFifth),
                this.createAnswer(14, "fourteenthFirst", answers.fourteenthFirst),
                this.createAnswer(14, "fourteenthSecond", answers.fourteenthSecond),
                this.createAnswer(14, "fourteenthThird", answers.fourteenthThird),
                this.createAnswer(14, "fourteenthFourth", answers.fourteenthFourth),
                this.createAnswer(14, "fourteenthFifth", answers.fourteenthFifth),
                this.createAnswer(15, "fifteenthFirst", answers.fifteenthFirst),
                this.createAnswer(15, "fifteenthSecond", answers.fifteenthSecond),
                this.createAnswer(15, "fifteenthThird", answers.fifteenthThird),
                this.createAnswer(16, "sixteenthCalidadVisual", answers.sixteenthCalidadVisual),
                this.createAnswer(16, "sixteenthTrafico", answers.sixteenthTrafico),
                this.createAnswer(16, "sixteenthUbicacion", answers.sixteenthUbicacion),

                this.createAnswer(17, "seventeenthFirst", answers.seventeenthFirst ? 'Si' : 'No'),
                this.createAnswer(17, "seventeenthSecond", answers.seventeenthSecond ? 'Si' : 'No'),
                this.createAnswer(17, "seventeenthThird", answers.seventeenthThird ? 'Si' : 'No'),
                this.createAnswer(17, "seventeenthFourth", answers.seventeenthFourth ? 'Si' : 'No'),
                this.createAnswer(17, "seventeenthFifth", answers.seventeenthFifth ? 'Si' : 'No'),
                this.createAnswer(17, "seventeenthSixth", answers.seventeenthSixth ? 'Si' : 'No'),

                this.createAnswer(18, "eighteenth", answers.eighteenth),
                this.createAnswer(19, "nineteenth", answers.nineteenth),
                this.createAnswer(20, "twentiethFirst", answers.twentiethFirst),
                this.createAnswer(20, "twentiethSecond", answers.twentiethSecond),
                this.createAnswer(20, "twentiethThird", answers.twentiethThird),
                this.createAnswer(20, "twentiethFourth", answers.twentiethFourth),
                this.createAnswer(22, "deviceDate", this.getDate())]

        return list;
    }

    getDate = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        return `${date}-${month}-${year}`;
    }
    insertSurvey = () => {
        if (!this.validateInputs(this.props)) return false;
        this.setState({ saving: true, message: 'Guardando Encuesta' })
        this.setState({
            saving: true
        }, () => {
            //Intentar guardar encuesta en Base de Datos Remota
            this.props.customClient
                .mutate({
                    mutation: CREATE_SURVEY,
                    variables: {
                        answer: [...this.createSurvey(this.props)]
                    }
                })
                .then(({ data }) => {


                    this.resetAllData()
                    this.setState({
                        saving: false,
                    }, () => {
                        this.refs.scrollView.scrollTo({
                            y: 0,
                            animated: false,
                        });
                        ToastAndroid.showWithGravity(
                            'Encuesta guardada exitosamente',
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER,
                        );
                    });

                })
                .catch(error => {
                    console.log("Entrando al error guardando remoto", this.state.localData)
                    //Si da error el guardado de la base de datos de forma remota entonces guardarla de manera local
                    this.setState({ message: 'Guardando datos localmente' })
                    this.saveSurvetToLocal();
                })

        })
    };

    saveSurvetToLocal = async () => {
        try {
            var localData = this.state.localData;
            localData.push(...this.createSurvey(this.props))

            await AsyncStorage.setItem('localData', JSON.stringify(localData));

            this.setState({ localData: localData }, () => console.log("Datos Para Guardar en Local", this.state.localData))
            this.setState({ saving: false })
            this.resetAllData()

            ToastAndroid.showWithGravity(
                'Encuesta guardada localmente',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            this.refs.scrollView.scrollTo({
                y: 0,
                animated: false,
            })
        } catch (error) {
            this.setState({ saving: false })
            ToastAndroid.showWithGravity(
                'Error Guardando Datos localmente',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        }
    }

    saveLocalDataIntoDB = async () => {
        this.setState({ sincronizando: true, message: 'Sincronizando Datos' })
        //Intentar guardar encuesta en Base de Datos Remota
        this.props.customClient
            .mutate({
                mutation: CREATE_SURVEY,
                variables: {
                    answer: this.state.localData
                }
            })
            .then(({ data }) => {


                this.resetAllData();
                this.deleteLocalData();

                this.refs.scrollView.scrollTo({
                    y: 0,
                    animated: false,
                })
                this.setState({ sincronizando: false }, () => {
                    ToastAndroid.showWithGravity(
                        'Sincronización exitosa',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                    );

                })
            })
            .catch(error => {
                ToastAndroid.showWithGravity(
                    'Error al sincronizar datos',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                );
                this.setState({ sincronizando: false })
            })

    }
    deleteLocalData = async () => {
        await AsyncStorage.removeItem('localData');
        this.setState({ sincronizando: false, localData: [] })
    }
    resetAllData = () => {
        this.props.resetState()

        this.setState({ dataCompraCigarrillo: [{ "label": "Si", "size": 20, "selected": true }, { "label": "No", "size": 20, "selected": false }] })
        this.setState({ dataClienteOCAL: [{ "label": "Si", "size": 20, "selected": true }, { "label": "No", "size": 20, "selected": false }] })
        this.setState({ dataIncidenciaOtrasMarcas: [{ "label": "Si", "size": 20, "selected": true }, { "label": "No", "size": 20, "selected": false }] })
        this.setState({
            dataTipoComercio: [
                { "label": "Distribuidor", "size": 20 },
                { "label": "Supermercado", "size": 20 },
                { "label": "Autoservicio", "size": 20 },
                { "label": "Hoteles", "size": 20 },
                { "label": "Restaurante", "size": 20 },
                { "label": "Mini mart", "size": 20 },
                { "label": "Pulperias", "size": 20 },
                { "label": "Otros", "size": 20 }
            ]
        })

        this.props.data.MaterialesExhibicionData.map(item => {
            this.setState({ [`Checked${item.value}`]: false })
        })
        // this.getPosition()
    }
    // fetch the data back asyncronously
    getLocalSurveyData = async () => {
        try {
            const value = await AsyncStorage.getItem('localData');
            if (value !== null) {
                this.setState({ localData: JSON.parse(value) })

            } else {
                this.setState({ localData: [] })
            }
        } catch (error) {
            ToastAndroid.showWithGravity(
                'Error cargando datos de memoria',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        }
    }



    validateInputs = (data) => {
        if (data.fourth.trim() == '' ||
            data.sixth.trim() == '' ||
            data.seventh.trim() == '' ||
            data.eighth.trim() == '' ||
            data.ninth.trim() == '' ||
            data.fifthLongitud.trim() == '' ||
            data.fifthLatitud.trim() == '') {
            ToastAndroid.showWithGravity(
                'Faltan campos obligatorios (*)',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );

            return false;
        }
        return true;
    };

    constructor(props) {
        super(props);
        const { TipoComercioData, CompraCigarrilloData, ClienteOCALData, IncidenciaOtrasMarcasData, DepartamentosData } = props.data

        this.state = {
            latitude: null,
            longitude: null,
            error: null,

            dataTipoComercio: TipoComercioData,
            dataCompraCigarrillo: CompraCigarrilloData,
            dataClienteOCAL: ClienteOCALData,
            dataIncidenciaOtrasMarcas: IncidenciaOtrasMarcasData,
            frecuenciaVisitaBAT: '',
            frecuenciaVisitaPMI: '',
            volumenCompraBAT: '',
            volumenCompraPMI: '',
            localData: [],
            message: ''

        }
    }
    onSuccessPosition = (position) => {
        this.props.fifthLatitudChanged(position.coords.latitude.toString())
        this.props.fifthLongitudChanged(position.coords.longitude.toString())
        this.setState({ coordinates: false })
    }
    onFailedPosition = (error) => {
        this.setState({
            error: error,
        });
        ToastAndroid.showWithGravity(
            'Error obteniendo coordenadas',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
        this.setState({ coordinates: false })
    }
    getPosition = () => {
        this.setState({ coordinates: true, message: 'Obteniendo Coordenadas' })
        navigator.geolocation.getCurrentPosition(
            this.onSuccessPosition,
            this.onFailedPosition,
            { enableHighAccuracy: false, timeout: 30000 },
        );
    }

    onPressCompraCigarrillo = dataCompraCigarrillo => this.setState({ dataCompraCigarrillo }, this.obtenerCompraCigarrilloSeleccionado);
    obtenerCompraCigarrilloSeleccionado = () => {
        let selectedButton = this.state.dataCompraCigarrillo.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.dataCompraCigarrillo[0].label;
        this.props.firstChanged(selectedButton)
    }
    onPressClienteOCAL = dataClienteOCAL => this.setState({ dataClienteOCAL }, this.obtenerClienteOCALSeleccionado);
    obtenerClienteOCALSeleccionado = () => {
        let selectedButton = this.state.dataClienteOCAL.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.dataClienteOCAL[0].label;
        this.props.secondChanged(selectedButton)
    }
    onPressTipoComercio = dataTipoComercio => this.setState({ dataTipoComercio }, this.obtenerTipoComercioSeleccionado);
    obtenerTipoComercioSeleccionado = () => {
        let selectedButton = this.state.dataTipoComercio.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.dataTipoComercio[0].label;
        this.props.tenthChanged(selectedButton)
    }
    onPressIncidenciaOtrasMarcas = dataIncidenciaOtrasMarcas => this.setState({ dataIncidenciaOtrasMarcas }, this.obtenerIncidenciaOtrasMarcasSeleccionado);
    obtenerIncidenciaOtrasMarcasSeleccionado = () => {
        let selectedButton = this.state.dataIncidenciaOtrasMarcas.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.dataIncidenciaOtrasMarcas[0].label;
        this.props.eighteenthChanged(selectedButton)
    }

    render() {
        const { questionStyle, containerStyle, buttonStyle, textButtonStyle,
            buttonContainerStyle, labelGrayStyle, textInputStyle, variantTextInputStyle,
            pickerInputStyle, containerIndicatorStyle, textIndicatorStyle, imageStyle, wrapperPickerDefault } = styles;
        const { FrecuenciaVisitaData, VolumenCompraData, MarcaCigarrilloData, VarianteCigarrilloData, FormatoCigarrilloData, PotencialImagenData, MaterialesExhibicionData, DepartamentosData } = this.props.data;

        return (
            <Card>
                <Header
                    logout={this.props.logout}
                    headerText="ENCUESTA DE MERCADO" />

                <ScrollView ref='scrollView' scrollEnabled={!this.state.sincronizando}>
                    {this.state.localData.length > 0 && <CardSection>
                        <Button onPress={this.saveLocalDataIntoDB} disabled={this.state.sincronizando} backgroundColor='#ef5350' textColor='#fff'>Sincronizar Datos ({this.state.localData.length / 45})</Button>
                        {/* {this.state.sincronizando && <View style={{ ...containerIndicatorStyle, borderColor: '#f44336' }}><Text style={{ ...textIndicatorStyle, color: '#f44336' }}>Sincronizando...</Text><ActivityIndicator size="small" /></View>} */}
                    </CardSection>}
                    <CardHeader  >MANEJANTE DE LA CATEGORIA</CardHeader>
                    <Container>
                        <View style={containerStyle}>
                            <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <Text style={{ ...questionStyle, marginBottom: 5 }}> 1. Compra y Vende Café?</Text>
                                <RadioGroup style={{ flex: 1 }} radioButtons={this.state.dataCompraCigarrillo} onPress={this.onPressCompraCigarrillo} />
                            </View>
                            <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <Text style={{ ...questionStyle, marginBottom: 5 }}>2. Es cliente atendido por nosotros?</Text>
                                <RadioGroup style={{ flex: 1 }} radioButtons={this.state.dataClienteOCAL} onPress={this.onPressClienteOCAL} />
                            </View>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, height: 70 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>3. Código del Cliente</Text>
                            <TextInput style={variantTextInputStyle} placeholder="Código del Cliente" value={this.props.third} onChangeText={this.props.thirdChanged} ></TextInput>
                        </View>
                    </Container>
                    <CardHeader>INFORMACION DEL CLIENTE</CardHeader>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, height: 70 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>* 4. Nombre del Cliente</Text>
                            <TextInput style={variantTextInputStyle} placeholder="Nombre del Cliente" value={this.props.fourth} onChangeText={this.props.fourthChanged}></TextInput>
                        </View>

                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, height: 70 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}> 4.1 Nombre del Comercio</Text>
                            <TextInput style={variantTextInputStyle} placeholder="Nombre del Comercio" value={this.props.fourth_First} onChangeText={this.props.fourth_FirstChanged}></TextInput>
                        </View>

                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={questionStyle}>5. </Text>
                            <View style={buttonContainerStyle}>
                                <TouchableOpacity style={buttonStyle} onPress={this.getPosition} >
                                    <Image source={image} style={imageStyle} />
                                    <Text style={textButtonStyle}>CAPTURAR COORDENADAS</Text>
                                </TouchableOpacity >
                            </View>
                        </View>
                    </Container>
                    <Container >
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'stretch', marginTop: -15, marginBottom: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }} >
                                <Text style={labelGrayStyle} >* Lon</Text>
                            </View>
                            <View style={{ flex: 2, justifyContent: 'center' }} >
                                <TextInput style={{ borderBottomWidth: 1, borderColor: "lightgray", color: '#896000' }} placeholderTextColor='#896000' editable={false} value={this.props.fifthLongitud} placeholder="Longitud"></TextInput>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }} >
                                <Text style={labelGrayStyle}   >* Lat</Text>
                            </View>
                            <View style={{ flex: 2, justifyContent: 'center' }} >
                                <TextInput style={{ borderBottomWidth: 1, borderColor: "lightgray", color: '#896000' }} placeholderTextColor='#896000' editable={false} value={this.props.fifthLatitud} placeholder="Latitud"></TextInput>
                            </View>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>* 6. Dirección Exacta</Text>
                            <TextInput style={textInputStyle}
                                multiline={true}
                                numberOfLines={4}
                                placeholder="Dirección Exacta"
                                value={this.props.sixth}
                                onChangeText={this.props.sixthChanged}
                            ></TextInput>
                        </View>

                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}> * 7. Barrio</Text>
                            <TextInput style={textInputStyle}
                                multiline={true}
                                numberOfLines={4}
                                placeholder="Barrio"
                                value={this.props.seventh}
                                onChangeText={this.props.seventhChanged}></TextInput>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, height: 70 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>* 8. Departamento</Text>
                            <View style={wrapperPickerDefault}>
                                <Picker style={pickerInputStyle} selectedValue={this.props.eighth} onValueChange={this.props.eighthChanged}>
                                    {DepartamentosData.map(item => {
                                        return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                    })}
                                </Picker>
                            </View>

                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, height: 70 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>* 9. Municipio</Text>
                            <TextInput style={variantTextInputStyle} placeholder="Municipio" value={this.props.ninth}
                                onChangeText={this.props.ninthChanged}></TextInput>
                        </View>

                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>10. Tipo de Comercio</Text>
                            <RadioGroup style={{ flex: 1 }} radioButtons={this.state.dataTipoComercio} onPress={this.onPressTipoComercio} />
                        </View>
                    </Container>
                    <CardHeader>11. FRECUENCIA DE VISITA DE LA COMPETENCIA</CardHeader>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 25 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>BAT </Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.eleventhBAT} onValueChange={this.props.eleventhBATChanged}>
                                        {FrecuenciaVisitaData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 25 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>PMI </Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.eleventhPMI} onValueChange={this.props.eleventhPMIChanged}>
                                        {FrecuenciaVisitaData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <CardHeader>12. VOLUMEN DE COMPRA PROMEDIO POR VISITA</CardHeader>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 25 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>BAT </Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.twelvethBAT} onValueChange={this.props.twelvethBATChanged}>
                                        {VolumenCompraData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 25 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>PMI </Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.twelvethPMI} onValueChange={this.props.twelvethPMIChanged}>
                                        {VolumenCompraData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <CardHeader>13. Marca de café más vendida</CardHeader>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 1</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.thirteenthFirst} onValueChange={this.props.thirteenthFirstChanged}>
                                        {MarcaCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 2</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.thirteenthSecond} onValueChange={this.props.thirteenthSecondChanged}>
                                        {MarcaCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 3</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.thirteenthThird} onValueChange={this.props.thirteenthThirdChanged}>
                                        {MarcaCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 4</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.thirteenthFourth} onValueChange={this.props.thirteenthFourthChanged}>
                                        {MarcaCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 5</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.thirteenthFifth} onValueChange={this.props.thirteenthFifthChanged}>
                                        {MarcaCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>


                    <CardHeader>14. Variantes de café más vendidas</CardHeader>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 1</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.fourteenthFirst} onValueChange={this.props.fourteenthFirstChanged}>
                                        {VarianteCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 2</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.fourteenthSecond} onValueChange={this.props.fourteenthSecondChanged}>
                                        {VarianteCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 3</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.fourteenthThird} onValueChange={this.props.fourteenthThirdChanged}>
                                        {VarianteCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 4</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.fourteenthFourth} onValueChange={this.props.fourteenthFourthChanged}>
                                        {VarianteCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 5</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.fourteenthFifth} onValueChange={this.props.fourteenthFifthChanged}>
                                        {VarianteCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>

                    <CardHeader>15. Formato de café más vendido</CardHeader>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 1</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.fifteenthFirst} onValueChange={this.props.fifteenthFirstChanged}>
                                        {FormatoCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 2</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.fifteenthSecond} onValueChange={this.props.fifteenthSecondChanged}>
                                        {FormatoCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginRight: 55 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Opción 3</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.fifteenthThird} onValueChange={this.props.fifteenthThirdChanged}>
                                        {FormatoCigarrilloData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>

                    <CardHeader>16. Potencial de Imagen del Punto de Venta</CardHeader>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Calidad Visual</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.sixteenthCalidadVisual} onValueChange={this.props.sixteenthCalidadVisualChanged}>
                                        {PotencialImagenData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Tráfico</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.sixteenthTrafico} onValueChange={this.props.sixteenthTraficoChanged}>
                                        {PotencialImagenData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>Ubicación</Text>
                            <Container >
                                <View style={variantTextInputStyle}>
                                    <Picker style={pickerInputStyle} selectedValue={this.props.sixteenthUbicacion} onValueChange={this.props.sixteenthUbicacionChanged}>
                                        {PotencialImagenData.map(item => {
                                            return < Picker.Item key={item.value} label={item.label} value={item.label2} />
                                        })}
                                    </Picker>
                                </View>
                            </Container>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>17. Materiales de Exhibición</Text>
                            <Container >

                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <CheckBox value={this.props.seventeenthFirst}
                                            onValueChange={(checkedStatus) => {
                                                this.props.seventeenthFirstChanged(checkedStatus)
                                            }}>
                                        </CheckBox>
                                        <Text style={{ marginTop: 7 }}>BAT - Exhibidor</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <CheckBox value={this.props.seventeenthSecond}
                                            onValueChange={(checkedStatus) => {
                                                this.props.seventeenthSecondChanged(checkedStatus)
                                            }}>
                                        </CheckBox>
                                        <Text style={{ marginTop: 7 }}>BAT - Temporales (Afiches, marcajes, otros)</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <CheckBox value={this.props.seventeenthThird}
                                            onValueChange={(checkedStatus) => {
                                                this.props.seventeenthThirdChanged(checkedStatus)
                                            }}>
                                        </CheckBox>
                                        <Text style={{ marginTop: 7 }}>PMI - Exhibidor</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <CheckBox value={this.props.seventeenthFourth}
                                            onValueChange={(checkedStatus) => {
                                                this.props.seventeenthFourthChanged(checkedStatus)
                                            }}>
                                        </CheckBox>
                                        <Text style={{ marginTop: 7 }}>PMI - Temporales (Afiches, marcajes, otros)</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <CheckBox value={this.props.seventeenthFifth}
                                            onValueChange={(checkedStatus) => {
                                                this.props.seventeenthFifthChanged(checkedStatus)
                                            }}>
                                        </CheckBox>
                                        <Text style={{ marginTop: 7 }}>JTI - Exhibidor</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <CheckBox value={this.props.seventeenthSixth}
                                            onValueChange={(checkedStatus) => {
                                                this.props.seventeenthSixthChanged(checkedStatus)
                                            }}>
                                        </CheckBox>
                                        <Text style={{ marginTop: 7 }}>JTI - Temporales (Afiches, marcajes, otros)</Text>
                                    </View>
                                </View>
                            </Container>

                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, height: 80, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>18. Incidencia de OTRAS marcas</Text>
                            <RadioGroup style={{ flex: 1 }} radioButtons={this.state.dataIncidenciaOtrasMarcas} onPress={this.onPressIncidenciaOtrasMarcas} />
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, height: 70 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>19. OTRAS marcas identificadas</Text>
                            <TextInput style={variantTextInputStyle} placeholder="Nombre de la OTRA marca" value={this.props.nineteenth} onChangeText={this.props.nineteenthChanged}></TextInput>
                        </View>
                    </Container>
                    <CardHeader>20. REALIZO COMPRA DE CONTADO</CardHeader>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, height: 70 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>1001 - My Coffee 20s</Text>
                            <TextInput style={variantTextInputStyle} keyboardType='numeric' placeholder="Cantidad" value={this.props.twentiethFirst} onChangeText={(text) => this.props.twentiethFirstChanged(this.getIntegerOnly(text))}></TextInput>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, height: 70 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>1002 -My Coffee 10s</Text>
                            <TextInput style={variantTextInputStyle} keyboardType='numeric' placeholder="Cantidad" value={this.props.twentiethSecond} onChangeText={(text) => this.props.twentiethSecondChanged(this.getIntegerOnly(text))}></TextInput>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, height: 70 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>1003 - My Coffee 100s</Text>
                            <TextInput style={variantTextInputStyle} keyboardType='numeric' placeholder="Cantidad" value={this.props.twentiethThird} onChangeText={(text) => this.props.twentiethThirdChanged(this.getIntegerOnly(text))}></TextInput>
                        </View>
                    </Container>
                    <Container>
                        <View style={{ flexDirection: 'column', flex: 1, height: 70 }}>
                            <Text style={{ ...questionStyle, marginBottom: 5 }}>1029 - My Coffee 200s</Text>
                            <TextInput style={variantTextInputStyle} keyboardType='numeric' placeholder="Cantidad" value={this.props.twentiethFourth} onChangeText={(text) => this.props.twentiethFourthChanged(this.getIntegerOnly(text))}></TextInput>
                        </View>
                    </Container>
                    <CardSection>
                        <Button
                            // onPress={this.saveSurvey} 
                            onPress={this.insertSurvey}
                            disabled={this.state.sincronizando || this.state.saving}>Guardar Encuesta</Button>
                        {/* {this.state.saving && <View style={{ ...containerIndicatorStyle, borderColor: '#007aff' }}><Text style={{ ...textIndicatorStyle, color: '#007aff' }}>Guardando...</Text><ActivityIndicator size="small" /></View>} */}
                    </CardSection>
                    {(this.state.saving || this.state.sincronizando || this.state.coordinates) && <ModalSpinner message={this.state.message} />}
                </ScrollView>
            </Card >
        )
    }
    getIntegerOnly = (text) => {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
        }
        return newText;
    }
}

const styles = {
    questionStyle: {
        color: '#42a5f5',
        fontWeight: '100',
        fontSize: 16

    },
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    buttonContainerStyle: {
        justifyContent: 'center',
        paddingHorizontal: 10,

    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#f5c400',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#e8b900'
    },
    textButtonStyle: {
        color: '#896000'
    },
    labelGrayStyle: {
        color: '#c0c0c0'
    },
    textInputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        textAlignVertical: 'top',
        fontSize: 16
    },
    variantTextInputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        height: 30,
        flex: 1,
        fontSize: 14,
        paddingLeft: 8,
    },
    pickerInputStyle: {
        borderWidth: 1,
        borderColor: "lightgray",
        flex: 1
    },
    wrapperPickerDefault: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        flex: 1,
        fontSize: 14
    },
    containerIndicatorStyle: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
    },
    textIndicatorStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5

    },
    imageStyle: {
        width: 18,
        height: 18,
        marginRight: 3
    }
}
const mapStateToProps = (state) => {
    const { first, second, third,
        fourth, fourth_First, fifthLatitud, fifthLongitud, sixth, seventh, eighth,
        ninth, tenth, eleventhBAT, eleventhPMI, twelvethBAT, twelvethPMI,
        thirteenthFirst, thirteenthSecond, thirteenthThird, thirteenthFourth, thirteenthFifth,
        fourteenthFirst, fourteenthSecond, fourteenthThird, fourteenthFourth, fourteenthFifth,
        fifteenthFirst, fifteenthSecond, fifteenthThird, fifteenthFourth,
        sixteenthCalidadVisual, sixteenthTrafico, sixteenthUbicacion,
        seventeenthFirst, seventeenthSecond, seventeenthThird, seventeenthFourth, seventeenthFifth, seventeenthSixth,
        eighteenth, nineteenth, twentiethFirst, twentiethSecond, twentiethThird, twentiethFourth } = state.survey
    return {
        data: state.data,
        first, second, third,
        fourth, fourth_First, fifthLatitud, fifthLongitud, sixth, seventh, eighth,
        ninth, tenth, eleventhBAT, eleventhPMI, twelvethBAT, twelvethPMI,
        thirteenthFirst, thirteenthSecond, thirteenthThird, thirteenthFourth, thirteenthFifth,
        fourteenthFirst, fourteenthSecond, fourteenthThird, fourteenthFourth, fourteenthFifth,
        fifteenthFirst, fifteenthSecond, fifteenthThird, fifteenthFourth,
        sixteenthCalidadVisual, sixteenthTrafico, sixteenthUbicacion,
        seventeenthFirst, seventeenthSecond, seventeenthThird, seventeenthFourth, seventeenthFifth, seventeenthSixth,
        eighteenth, nineteenth, twentiethFirst, twentiethSecond, twentiethThird, twentiethFourth
    };

}
export default connect(mapStateToProps, {
    firstChanged,
    secondChanged,
    thirdChanged,
    fourthChanged,
    fourth_FirstChanged,
    fifthLatitudChanged,
    fifthLongitudChanged,
    sixthChanged,
    seventhChanged,
    eighthChanged,
    ninthChanged,
    tenthChanged,
    eleventhBATChanged,
    eleventhPMIChanged,
    twelvethBATChanged,
    twelvethPMIChanged,
    thirteenthFirstChanged,
    thirteenthSecondChanged,
    thirteenthThirdChanged,
    thirteenthFourthChanged,
    thirteenthFifthChanged,
    fourteenthFirstChanged,
    fourteenthSecondChanged,
    fourteenthThirdChanged,
    fourteenthFourthChanged,
    fourteenthFifthChanged,
    fifteenthFirstChanged,
    fifteenthSecondChanged,
    fifteenthThirdChanged,
    sixteenthCalidadVisualChanged,
    sixteenthTraficoChanged,
    sixteenthUbicacionChanged,

    seventeenthFirstChanged,
    seventeenthSecondChanged,
    seventeenthThirdChanged,
    seventeenthFourthChanged,
    seventeenthFifthChanged,
    seventeenthSixthChanged,

    eighteenthChanged,
    nineteenthChanged,
    twentiethFirstChanged,
    twentiethSecondChanged,
    twentiethThirdChanged,
    twentiethFourthChanged,
    loggedStatusChanged,
    resetState
})(SurveyForm);