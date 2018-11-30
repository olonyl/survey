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
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGGED_STATUS_CHANGED,
	RESET_STATE
} from './types'

export const firstChanged = (text) => {
	return {
		type: FIRST_CHANGED,
		payload: text
	};
};
export const secondChanged = (text) => {
	return {
		type: SECOND_CHANGED,
		payload: text
	};
};
export const thirdChanged = (text) => {
	return {
		type: THIRD_CHANGED,
		payload: text
	};
};
export const fourthChanged = (text) => {
	return {
		type: FOURTH_CHANGED,
		payload: text
	};
};
export const fourth_FirstChanged = (text) => {
	return {
		type: FOURTH_FIRST_CHANGED,
		payload: text
	};
};
export const fifthLatitudChanged = (text) => {
	return {
		type: FIFTH_LATITUD_CHANGED,
		payload: text
	};
};
export const fifthLongitudChanged = (text) => {
	return {
		type: FIFTH_LONGITUD_CHANGED,
		payload: text
	};
};
export const sixthChanged = (text) => {
	return {
		type: SIXTH_CHANGED,
		payload: text
	};
};
export const seventhChanged = (text) => {
	return {
		type: SEVENTH_CHANGED,
		payload: text
	};
};
export const eighthChanged = (text) => {
	return {
		type: EIGHTH_CHANGED,
		payload: text
	};
};
export const ninthChanged = (text) => {
	return {
		type: NINTH_CHANGED,
		payload: text
	};
};
export const tenthChanged = (text) => {
	return {
		type: TENTH_CHANGED,
		payload: text
	};
};
export const eleventhBATChanged = (text) => {
	return {
		type: ELEVENTH_BAT_CHANGED,
		payload: text
	};
};
export const eleventhPMIChanged = (text) => {
	return {
		type: ELEVENTH_PMI_CHANGED,
		payload: text
	};
};
export const twelvethBATChanged = (text) => {
	return {
		type: TWELVETH_BAT_CHANGED,
		payload: text
	};
};
export const twelvethPMIChanged = (text) => {
	return {
		type: TWELVETH_PMI_CHANGED,
		payload: text
	};
};
export const thirteenthFirstChanged = (text) => {
	return {
		type: THIRTEENTH_FIRST_CHANGED,
		payload: text
	};
};
export const thirteenthSecondChanged = (text) => {
	return {
		type: THIRTEENTH_SECOND_CHANGED,
		payload: text
	};
};
export const thirteenthThirdChanged = (text) => {
	return {
		type: THIRTEENTH_THIRD_CHANGED,
		payload: text
	};
};
export const thirteenthFourthChanged = (text) => {
	return {
		type: THIRTEENTH_FOURTH_CHANGED,
		payload: text
	};
};
export const thirteenthFifthChanged = (text) => {
	return {
		type: THIRTEENTH_FIFTH_CHANGED,
		payload: text
	};
};
export const fourteenthFirstChanged = (text) => {
	return {
		type: FOURTEENTH_FIRST_CHANGED,
		payload: text
	};
};
export const fourteenthSecondChanged = (text) => {
	return {
		type: FOURTEENTH_SECOND_CHANGED,
		payload: text
	};
};
export const fourteenthThirdChanged = (text) => {
	return {
		type: FOURTEENTH_THIRD_CHANGED,
		payload: text
	};
};
export const fourteenthFourthChanged = (text) => {
	return {
		type: FOURTEENTH_FOURTH_CHANGED,
		payload: text
	};
};
export const fourteenthFifthChanged = (text) => {
	return {
		type: FOURTEENTH_FIFTH_CHANGED,
		payload: text
	};
};
export const fifteenthFirstChanged = (text) => {
	return {
		type: FIFTEENTH_FIRST_CHANGED,
		payload: text
	};
};
export const fifteenthSecondChanged = (text) => {
	return {
		type: FIFTEENTH_SECOND_CHANGED,
		payload: text
	};
};
export const fifteenthThirdChanged = (text) => {
	return {
		type: FIFTEENTH_THIRD_CHANGED,
		payload: text
	};
};

export const sixteenthCalidadVisualChanged = (text) => {
	return {
		type: SIXTEENTH_CALIDAD_VISUAL_CHANGED,
		payload: text
	};
};
export const sixteenthTraficoChanged = (text) => {
	return {
		type: SIXTEENTH_TRAFICO_CHANGED,
		payload: text
	};
};
export const sixteenthUbicacionChanged = (text) => {
	return {
		type: SIXTEENTH_UBICACION_CHANGED,
		payload: text
	};
};

export const seventeenthFirstChanged = value => {
	return {
		type: SEVENTEENTH_FIRST_CHANGED,
		payload: value
	};
};
export const seventeenthSecondChanged = value => {
	return {
		type: SEVENTEENTH_SECOND_CHANGED,
		payload: value
	};
};
export const seventeenthThirdChanged = value => {
	return {
		type: SEVENTEENTH_THIRD_CHANGED,
		payload: value
	};
};
export const seventeenthFourthChanged = value => {
	return {
		type: SEVENTEENTH_FOURTH_CHANGED,
		payload: value
	};
};
export const seventeenthFifthChanged = value => {
	return {
		type: SEVENTEENTH_FIFTH_CHANGED,
		payload: value
	};
};
export const seventeenthSixthChanged = value => {
	return {
		type: SEVENTEENTH_SIXTH_CHANGED,
		payload: value
	};
};

export const eighteenthChanged = (text) => {
	return {
		type: EIGHTEENTH_CHANGED,
		payload: text
	};
};
export const nineteenthChanged = (text) => {
	return {
		type: NINETEENTH_CHANGED,
		payload: text
	};
};
export const twentiethFirstChanged = (text) => {
	return {
		type: TWENTIETH_FIRST_CHANGED,
		payload: text
	};
};
export const twentiethSecondChanged = (text) => {
	return {
		type: TWENTIETH_SECOND_CHANGED,
		payload: text
	};
};
export const twentiethThirdChanged = (text) => {
	return {
		type: TWENTIETH_THIRD_CHANGED,
		payload: text
	};
};
export const twentiethFourthChanged = (text) => {
	return {
		type: TWENTIETH_FOURTH_CHANGED,
		payload: text
	};
};
export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};
export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};
export const loggedStatusChanged = (value) => {
	return {
		type: LOGGED_STATUS_CHANGED,
		payload: value
	};
};
export const resetState = (value) => {
	return {
		type: RESET_STATE,
		payload: null
	};
};