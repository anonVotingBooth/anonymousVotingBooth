import React, { Component } from 'react';
import Sidebar from './Sidebar';
import CreateAPoll from './CreateAPoll';
import Polls from './Polls';
// import ImageApi from './ImageApi';
// import ViewPolls from './ViewPolls';
import '../App.scss';
// import firebase from 'firebase';
import 'firebase/auth';
import FooterDashboard from './FooterDashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            currentView: null,
            hidden: true,
            isSidebarHidden: true,
        }
    }

    // this handle click shows the create a poll section above 'polls' when clicked. 
    handleClick = (e) => {
        this.setState({
            currentView: e.target.id,
            hidden: false,
        })
    }
    handleSidebarClick = () => {
        this.setState({
            isSidebarHidden: !this.state.isSidebarHidden
        })
    }
    // handleMobileClick = (e) => {
    //     console.log('i was clicked!!!!!!')
    //     console.log(!this.state.isMobileHidden)
    //     this.setState({
    //         currentView: e.target.id,
    //         isMobileHidden: !this.state.isMobileHidden,
    //     })
    // }

    render() {

        return (
            <div className='flexDashboardParent'>
                
                <Sidebar isSidebarHidden={this.state.isSidebarHidden}/>
                
                <FontAwesomeIcon onClick={this.handleSidebarClick} className="hamburger" icon={faCaretDown} />

                {this.state.hidden && <div> <FontAwesomeIcon className="createPollMobile" icon={faPlus} id='createPoll' onClick={this.handleClick} /> </div>}
                <div className='dashboard'>
                    {this.state.hidden && <div> <button className='createPollButton' id='createPoll' onClick={this.handleClick}>+ create your own</button> </div>}

                    {this.state.currentView === 'createPoll' && <CreateAPoll />}
                    <Polls userId={this.props.userId} />
                    {/* <ImageApi /> */}
                    <FooterDashboard />
                </div>
            </div>
        );
    };
};

export default Dashboard