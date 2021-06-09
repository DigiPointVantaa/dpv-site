import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import './style.scss';

class SideBar extends React.Component {
    render() {
        return (
            <div className="SideBar">
                <div className="twitter-embed">
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'digipointvantaa',
                        }}
                        options={{
                            width: '320',
                            height: '560px',
                        }}
                    />
                </div>
                <embed className="te-embed" src="https://toimistot.te-palvelut.fi/tapahtumat"/>
            </div>
        );
    }
}

export default SideBar;
