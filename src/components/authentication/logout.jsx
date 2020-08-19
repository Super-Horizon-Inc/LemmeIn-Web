import React, { forwardRef } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import LogoutConfirmation from "../modals/logout-confirmation";
import useModal from '../modals/useModal';

const Logout = forwardRef((props, ref) => {

    const {isShowing, toggle} = useModal();

    const getConfirmation = () => {
        toggle();
    }

    return (
        <>
            <MenuItem onClick={getConfirmation}>
                <ExitIcon /> <span style={{ marginLeft: '20px' }}>Logout</span>
            </MenuItem>
            <LogoutConfirmation isShowing={isShowing} hide={toggle} />
        </>
    );

});

export default Logout;