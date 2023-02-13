import React from 'react';

class Experience extends React.Component {
    render () {
        let { data } = this.props;
        return (
            <div>
                <h1>{data.companyName}, {data.jobTitle}</h1>
                <p>{data.description}</p>
            </div>
        );
    }

}

export default Experience