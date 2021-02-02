// React
import React from 'react';

// Components
import SignUpForm from '../../components/signupForm';

// Style
import './style.sass';

// Images
import girlReadingFront from '../../assets/images/signup/girl-reading-second.png';

class SignUp extends React.Component {
    render() {
        return(
            <div className="signUp-container">
                <div className="signUp-form">
                    <SignUpForm />
                </div>
                <div className="signUp-image">
                    <div className="signUp-image-container">
                        <img src={girlReadingFront}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;