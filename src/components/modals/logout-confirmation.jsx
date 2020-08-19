import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import { useLogout, Confirm } from "react-admin";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

// by using Portal we will tell react to add our modal to end of document 
// not as a child to another component
export default function LogoutConfirmation(props) {

    const logout = useLogout();
    const lemmeOut = () => {
        props.hide();
        logout();
    }

    return props.isShowing ? ReactDOM.createPortal(

        <Fragment>

            <Confirm
                isOpen={props.isShowing}
                title="Logout Confirmation"
                content="Are you sure you want to logout now?"
                onConfirm={lemmeOut}
                onClose={props.hide}
                confirm="Yes"
                ConfirmIcon={ThumbUpIcon}
                cancel="Forget it"
                CancelIcon={ThumbDownIcon}
            />

        </Fragment>, document.body

    ) : <></>;

};