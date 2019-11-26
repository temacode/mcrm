import { connect } from "react-redux";
import Settings from "./Settings";
import { userpicChangeThunkCreator } from '../reducers/sidebarReducer';

let mapStateToProps = state => {
    return {
        error: state.settings.error
    }
}

let mapDispatchToProps = dispatch => {
    return {
        userpicChange: (file) => {
            dispatch(userpicChangeThunkCreator(file));
        }
    }
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps) (Settings);

export default SettingsContainer;