import {
    FIRST_CHANGED,
    SECOND_CHANGED,
    THIRD_CHANGED,
    FOURTH_CHANGED,
    FOURTH_FIRST_CHANGED,
    FIFTH_LATITUD_CHANGED,
    FIFTH_LONGITUD_CHANGED,
    SIXTH_CHANGED,
    SEVENTH_CHANGED,
    EIGHTH_CHANGED,
    NINTH_CHANGED,
    TENTH_CHANGED,
    ELEVENTH_BAT_CHANGED,
    ELEVENTH_PMI_CHANGED,
    TWELVETH_BAT_CHANGED,
    TWELVETH_PMI_CHANGED,
    THIRTEENTH_FIRST_CHANGED,
    THIRTEENTH_SECOND_CHANGED,
    THIRTEENTH_THIRD_CHANGED,
    THIRTEENTH_FOURTH_CHANGED,
    THIRTEENTH_FIFTH_CHANGED,
    FOURTEENTH_FIRST_CHANGED,
    FOURTEENTH_SECOND_CHANGED,
    FOURTEENTH_THIRD_CHANGED,
    FOURTEENTH_FOURTH_CHANGED,
    FOURTEENTH_FIFTH_CHANGED,
    FIFTEENTH_FIRST_CHANGED,
    FIFTEENTH_SECOND_CHANGED,
    FIFTEENTH_THIRD_CHANGED,
    SIXTEENTH_CALIDAD_VISUAL_CHANGED,
    SIXTEENTH_TRAFICO_CHANGED,
    SIXTEENTH_UBICACION_CHANGED,
    SEVENTEENTH_FIRST_CHANGED,
    SEVENTEENTH_SECOND_CHANGED,
    SEVENTEENTH_THIRD_CHANGED,
    SEVENTEENTH_FOURTH_CHANGED,
    SEVENTEENTH_FIFTH_CHANGED,
    SEVENTEENTH_SIXTH_CHANGED,
    EIGHTEENTH_CHANGED,
    NINETEENTH_CHANGED,
    TWENTIETH_FIRST_CHANGED,
    TWENTIETH_SECOND_CHANGED,
    TWENTIETH_THIRD_CHANGED,
    TWENTIETH_FOURTH_CHANGED,
    RESET_STATE
} from '../actions/types';

const INITIAL_STATE = {
    first: 'Si', second: 'Si', third: '',
    fourth: '', fourth_First: '', fifthLatitud: '', fifthLongitud: '', sixth: '', seventh: '', eighth: 'Alabama',
    ninth: '', tenth: 'Distribuidor',
    eleventhBAT: 'N/D', eleventhPMI: 'N/D',
    twelvethBAT: 'N/D', twelvethPMI: 'N/D',
    thirteenthFirst: 'N/D', thirteenthSecond: 'N/D', thirteenthThird: 'N/D', thirteenthFourth: 'N/D', thirteenthFifth: 'N/D',
    fourteenthFirst: 'N/D', fourteenthSecond: 'N/D', fourteenthThird: 'N/D', fourteenthFourth: 'N/D', fourteenthFifth: 'N/D',
    fifteenthFirst: 'N/D', fifteenthSecond: 'N/D', fifteenthThird: 'N/D',
    sixteenthCalidadVisual: 'N/D', sixteenthTrafico: 'N/D', sixteenthUbicacion: 'N/D',
    seventeenthFirst: false, seventeenthSecond: false, seventeenthThird: false, seventeenthFourth: false, seventeenthFifth: false, seventeenthSixth: false,
    eighteenth: 'Si', nineteenth: '',
    twentiethFirst: '0', twentiethSecond: '0', twentiethThird: '0', twentiethFourth: '0'
};
export default (state = INITIAL_STATE, action) => {
    console.log("Survey Reducer", action)
    switch (action.type) {
        case FIRST_CHANGED:
            return { ...state, first: action.payload }
        case SECOND_CHANGED:
            return { ...state, second: action.payload }
        case THIRD_CHANGED:
            return { ...state, third: action.payload }
        case FOURTH_CHANGED:
            return { ...state, fourth: action.payload }
        case FOURTH_FIRST_CHANGED:
            return { ...state, fourth_First: action.payload }
        case FIFTH_LATITUD_CHANGED:
            return { ...state, fifthLatitud: action.payload }
        case FIFTH_LONGITUD_CHANGED:
            return { ...state, fifthLongitud: action.payload }
        case SIXTH_CHANGED:
            return { ...state, sixth: action.payload }
        case SEVENTH_CHANGED:
            return { ...state, seventh: action.payload }
        case EIGHTH_CHANGED:
            return { ...state, eighth: action.payload }
        case NINTH_CHANGED:
            return { ...state, ninth: action.payload }
        case TENTH_CHANGED:
            return { ...state, tenth: action.payload }
        case ELEVENTH_BAT_CHANGED:
            return { ...state, eleventhBAT: action.payload }
        case ELEVENTH_PMI_CHANGED:
            return { ...state, eleventhPMI: action.payload }
        case TWELVETH_BAT_CHANGED:
            return { ...state, twelvethBAT: action.payload }
        case TWELVETH_PMI_CHANGED:
            return { ...state, twelvethPMI: action.payload }
        case THIRTEENTH_FIRST_CHANGED:
            return { ...state, thirteenthFirst: action.payload }
        case THIRTEENTH_SECOND_CHANGED:
            return { ...state, thirteenthSecond: action.payload }
        case THIRTEENTH_THIRD_CHANGED:
            return { ...state, thirteenthThird: action.payload }
        case THIRTEENTH_FOURTH_CHANGED:
            return { ...state, thirteenthFourth: action.payload }
        case THIRTEENTH_FIFTH_CHANGED:
            return { ...state, thirteenthFifth: action.payload }
        case FOURTEENTH_FIRST_CHANGED:
            return { ...state, fourteenthFirst: action.payload }
        case FOURTEENTH_SECOND_CHANGED:
            return { ...state, fourteenthSecond: action.payload }
        case FOURTEENTH_THIRD_CHANGED:
            return { ...state, fourteenthThird: action.payload }
        case FOURTEENTH_FOURTH_CHANGED:
            return { ...state, fourteenthFourth: action.payload }
        case FOURTEENTH_FIFTH_CHANGED:
            return { ...state, fourteenthFifth: action.payload }
        case FIFTEENTH_FIRST_CHANGED:
            return { ...state, fifteenthFirst: action.payload }
        case FIFTEENTH_SECOND_CHANGED:
            return { ...state, fifteenthSecond: action.payload }
        case FIFTEENTH_THIRD_CHANGED:
            return { ...state, fifteenthThird: action.payload }
        case SIXTEENTH_CALIDAD_VISUAL_CHANGED:
            return { ...state, sixteenthCalidadVisual: action.payload }
        case SIXTEENTH_TRAFICO_CHANGED:
            return { ...state, sixteenthTrafico: action.payload }
        case SIXTEENTH_UBICACION_CHANGED:
            return { ...state, sixteenthUbicacion: action.payload }

        case SEVENTEENTH_FIRST_CHANGED:
            return { ...state, seventeenthFirst: action.payload }
        case SEVENTEENTH_SECOND_CHANGED:
            return { ...state, seventeenthSecond: action.payload }
        case SEVENTEENTH_THIRD_CHANGED:
            return { ...state, seventeenthThird: action.payload }
        case SEVENTEENTH_FOURTH_CHANGED:
            return { ...state, seventeenthFourth: action.payload }
        case SEVENTEENTH_FIFTH_CHANGED:
            return { ...state, seventeenthFifth: action.payload }
        case SEVENTEENTH_SIXTH_CHANGED:
            return { ...state, seventeenthSixth: action.payload }


        case EIGHTEENTH_CHANGED:
            return { ...state, eighteenth: action.payload }
        case NINETEENTH_CHANGED:
            return { ...state, nineteenth: action.payload }
        case TWENTIETH_FIRST_CHANGED:
            return { ...state, twentiethFirst: action.payload }
        case TWENTIETH_SECOND_CHANGED:
            return { ...state, twentiethSecond: action.payload }
        case TWENTIETH_THIRD_CHANGED:
            return { ...state, twentiethThird: action.payload }
        case TWENTIETH_FOURTH_CHANGED:
            return { ...state, twentiethFourth: action.payload }
        case RESET_STATE:
            return { ...state, ...INITIAL_STATE }
        default:
            return state;
    }
};
