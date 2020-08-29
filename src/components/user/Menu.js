import * as React from 'react';
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink, getResources } from 'react-admin';
import DefaultIcon from '@material-ui/icons/ViewList';
import LabelIcon from '@material-ui/icons/Label';
import Badge from '@material-ui/core/Badge';

const Menu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);
    return (
        <div>
            <MenuItemLink
                to="/"
                primaryText={<Badge badgeContent={4} color="primary">Dashboard</Badge>}
                leftIcon={<LabelIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            
            {resources.map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={
                        (resource.options && resource.options.label) ||
                        resource.name
                    }
                    leftIcon={
                        resource.icon ? <resource.icon /> : <DefaultIcon />
                    }
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}
            
            <MenuItemLink
                to="/setting"
                primaryText="Setting"
                leftIcon={<LabelIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            {isXSmall && logout}
        </div>
    );
};

export default Menu;