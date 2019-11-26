import axios from 'axios';
import { userpicChangeErrorActionCreator } from './settingsReducer';

const SHOW_MENU = 'SHOW-MENU';
const USERPIC_CHANGE = 'USERPIC-CHANGE';

let initialState = {
    displayed: false,
    userpic: false
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERPIC_CHANGE:
            var userpicState = { ...state };
            userpicState.userpic = action.data;
            return userpicState;
        case SHOW_MENU:
            let stateCopy = { ...state };
            stateCopy.displayed = !stateCopy.displayed;
            return stateCopy;
        default:
            return state;
    }
}

export const showMenuActionCreator = () => {
    return { type: SHOW_MENU };
};

export const userpicChangeActionCreator = (data) => {
    //Нужно установить проверку файла
    return {
        type: USERPIC_CHANGE,
        data: data
    }
}

export const userpicChangeThunkCreator = (file) => (dispatch) => {
    let userpic = file.files[0];
    var userpicName = 'userpic' + userpic.name.split('.')[1];
    let formData = new FormData();;
    formData.append('userpic', userpic, userpicName);
    axios.post('/api/settings', formData, {
        headers: {
            'Content-Type': 'multypart/form-data'
        }
    }).then(res => {
        dispatch(userpicChangeActionCreator(res.data));
        return res;
    }).catch(err => {
        if (err) {
            console.log('herllo');
            dispatch(userpicChangeErrorActionCreator({error: 415}))
        }
    });
}

export default sidebarReducer;