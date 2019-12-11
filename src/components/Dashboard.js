import React, { Component } from 'react';
import Sidebar from './Sidebar';
import CreateAPoll from './CreateAPoll';
import Polls from './Polls';
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

        const {
            isSidebarHidden
        } = this.state;

        this.setState({
            isSidebarHidden: !isSidebarHidden
        })
    }

    render() {

        const {
            handleClick,
            handleSidebarClick,
            state: {
                hidden,
                isSidebarHidden,
                currentView
            },
            props: {
                signOut,
                userId
            }
        } = this;

        return (
            <div className='flexDashboardParent'>
                <Sidebar handleSignOut={signOut} isSidebarHidden={isSidebarHidden} />
                <FontAwesomeIcon onClick={handleSidebarClick} className="hamburger" icon={faCaretDown} />
                {hidden && <div> <FontAwesomeIcon className="createPollMobile" icon={faPlus} id='createPoll' onClick={handleClick} /> </div>}
                <div className='dashboard'>
                    {hidden && <div> <button className='createPollButton' id='createPoll' onClick={handleClick}>+ create your own</button> </div>}
                    {currentView === 'createPoll' && <CreateAPoll userId={userId} />}
                    <Polls userId={userId} />
                    <FooterDashboard />
                </div>
            </div>
        );
    };
};

export default Dashboard