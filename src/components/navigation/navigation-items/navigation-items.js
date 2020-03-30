import React from 'react';
import './navigation-items.css';
import NavigationItem from './navigation-item/navigation-item';

const NavigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default NavigationItems;