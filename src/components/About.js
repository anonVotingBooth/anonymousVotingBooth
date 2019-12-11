import React, { Component } from 'react';
import Sidebar from './Sidebar';
import jasmine from '../assets/jasmineCarbone.jpg';
import sharon from '../assets/sharonYi.jpg';
import mehdi from '../assets/mehdiPilehvarian.jpg';
import vince from '../assets/vinceDang.jpg';
import FooterDashboard from './FooterDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

// the dream team about page!! best team ever!! :)
class About extends Component {
    constructor() {
        super();
        this.state = {
            currentView: null,
            hidden: true,
            isSidebarHidden: true,
        }
    }

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
    render() {
        const { signOut } = this.props;
        return (
            <div className='flexDashboardParent'>
                <Sidebar handleSignOut={signOut} isSidebarHidden={this.state.isSidebarHidden} />
                <FontAwesomeIcon onClick={this.handleSidebarClick} className="hamburger" icon={faCaretDown} />
                <div className='dashboard'>
                    <div className='dreamTeam'>
                        <h1>meet the developers</h1>
                        <p> and hire them!</p>
                        <ul className='dreamTeamFlexChild'>
                            <li className='dreamTeamList'>
                                <img className='dreamTeamImage' src={jasmine} alt='jasmine on purple background'></img>
                                <h2>jasmine carbone</h2>
                                <ul className='socialLinks'>
                                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/tiltedcanvas">
                                        <FontAwesomeIcon icon={faGithubAlt} /></a></li>
                                    <li><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/tiltedcanvas'><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a target='_blank' rel='noopener noreferrer' href="mailto:jasmine@tiltedcanvas.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                                </ul>
                            </li>
                            <li className='dreamTeamList'>
                                <img className='dreamTeamImage' src={mehdi} alt='mehdi on a yellow background'></img>
                                <h2>mehdi pilehvarian</h2>
                                <ul className='socialLinks'>
                                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/mantonionip">
                                        <FontAwesomeIcon icon={faGithubAlt} /></a></li>
                                    <li><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/mp_codes'><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a target='_blank' rel='noopener noreferrer' href="mailto:mehdi.pilehvarian@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                                </ul>
                            </li>
                            <li className='dreamTeamList'>
                                <img className='dreamTeamImage' src={vince} alt='vincent on a yellow background'></img>
                                <h2>vincent dang</h2>
                                <ul className='socialLinks'>
                                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/DangVincent">
                                        <FontAwesomeIcon icon={faGithubAlt} /></a></li>
                                    <li><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/VinceDCodes'><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a target='_blank' rel='noopener noreferrer' href="mailto:vncntdang@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                                </ul>
                            </li>
                            <li className='dreamTeamList'>
                                <img className='dreamTeamImage' src={sharon} alt='sharon on a purple background'></img>
                                <h2>sharon yi</h2>
                                <ul className='socialLinks'>
                                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/sharon-yi">
                                        <FontAwesomeIcon icon={faGithubAlt} /></a></li>
                                    <li><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/sharon_yi'><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a target='_blank' rel='noopener noreferrer' href="mailto:sharon.yi@me.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <FooterDashboard />
                </div>
            </div>
        )
    }
}

export default About;