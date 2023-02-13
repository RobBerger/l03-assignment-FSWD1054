import React from 'react';
import styles from './Experience.module.css'

class Experience extends React.Component {
    render () {
        let { data } = this.props;
        return (
            <div class={styles.experience}>
                <h1>{data.companyName}, {data.jobTitle}</h1>
                <p>{data.description}</p>
            </div>
        );
    }

}

export default Experience