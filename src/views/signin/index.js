// React
import React from 'react';

// Components
import SignInForm from '../../components/signInForm';

// Style
import './style.sass';

// Images
import girlReading from '../../assets/images/singin/girl-reading.png';

class SignIn extends React.Component {
    render() {
        return(
            <div className="signIn-container">
                <div className="signIn-form">
                    <SignInForm />
                </div>
                <div className="signIn-image">
                    <div className="signIn-image-container">
                        <img src={girlReading}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;