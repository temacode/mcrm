const USERPIC_ERROR = 'USERPIC-ERROR';
const USERPIC_ERROR_TYPE = 'USERPIC-ERROR-TYPE';

let initialState = {
    error: ''
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERPIC_ERROR:
            let errorState = { ...state };
            errorState.error = 'Возникла ошибка при загрузке изображения! Повторите попытку или выберите другое изображение.';
            return errorState;
        case USERPIC_ERROR_TYPE:
            let errorTypeState = { ...state };
            errorTypeState.error = 'Недопустимый формат изображения!';
            return errorTypeState;
        default:
            return state;
    }
}

export const userpicChangeErrorActionCreator = (data) => {
    if (data.error) {
        switch (data.error) {
            case 415:
                return {
                    type: USERPIC_ERROR_TYPE
                }
            default:
                return {
                    type: USERPIC_ERROR
                }
        }
    }
}

export default settingsReducer