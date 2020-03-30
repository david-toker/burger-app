import React, { Component } from 'react';
import Aux from '../../hoc/Auxx-hoc';
import Toolbar from '../navigation/toolbar/toolbar';
import './layout.css';
import SideDrawer from '../navigation/side-drawer/side-drawer';

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
          showSideDrawer: false  
        }
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState)=>{
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }


    render () {
        return (
        <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}/>
            <main className="Content">
                {this.props.children}
            </main>
        </Aux>
        )
    }
    
}


export default Layout;