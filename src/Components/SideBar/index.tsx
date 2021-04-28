import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import './style.scss';

class SideBar extends React.Component {
    render() {
        return (
            <div className="SideBar">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'digipointvantaa',
                    }}
                    options={{
                        height: 800,
                    }}
                />
            </div>
        );
    }
}

export default SideBar;
