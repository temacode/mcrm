import { connect } from 'react-redux';
import Menu from './Menu';

let mapStateToProps = state => {
    return({
        menu: state.menu
    });
}

let mapDispatchToProps = dispatch => {
    return({

    });
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;