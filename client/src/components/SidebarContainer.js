import Sidebar from "./Sidebar";
import { connect } from 'react-redux';
import { showMenuActionCreator } from '../reducers/sidebarReducer';

let mapStateToProps = state => {
    return {
        displayed: state.sidebar.displayed,
        userpic: state.sidebar.userpic,
        userpicChanged: state.sidebar.userpicChanged
    };
}

let mapDispatchToProps = dispatch => {
    return {
        showMenu: () => {
            dispatch(showMenuActionCreator());
        }
    };
}


const SidebarContainer = connect(mapStateToProps, mapDispatchToProps) (Sidebar);

export default SidebarContainer;