// React
import React from 'react';

// React apollo
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright';

// React-router-dom
import { withRouter } from 'react-router-dom';

// Mutations
import mutations from './graph-queries/mutations';

// App context
export const Context = React.createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: {
                loginData: {
                    email: '',
                    password: ''
                },
                signUpData: {
                    firstName: '',
                    email: '',
                    password: ''
                }
            },
            actions: {
                loginData: this.loginData,
                signIn: this.signIn,
                signUpData: this.signUpData,
                signUp: this.signUp
            }
        }
    }

    loginData = (e) => {
        const { name, value } = e.target;
        const { store: { loginData } } = this.state;

        const inputData = { [name]: value };
        const newData = { ...loginData, ...inputData };
        
        this.setState({
            store: {
                loginData: newData
            }
        });
    }

    signIn = async(e) => {
        e.preventDefault();
        const { store: { loginData } } = this.state;
        const { signinUser, history } = this.props;

        const variables = {
            email: loginData.email,
            password: loginData.password
        };
        
        try {
            const response = await signinUser({variables});
            
            if(response) {
              const { data: {signinUser:{token}} } = response;
              localStorage.setItem('token', token);
              history.push('/books/home');
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    signUpData = (e) => {
        const { value, name } = e.target;
        const { store: { signUpData } } = this.state;
        
        const signUpObject = { [name]: value };
        const newData = { ...signUpData, ...signUpObject };
        
        this.setState({
            store: {
                signUpData: newData
            }
        });
    }

    signUp = async(e) => {
        e.preventDefault();
        const { store: { signUpData } } = this.state;
        const { createUser, history } = this.props;
        console.log(this.props)
        const variables = {
            firstName: signUpData.firstName,
            email: signUpData.email,
            password: signUpData.password
        };
        try {
            const response = await createUser({variables});
            // have to pass state to redirect !
            history.push('/books/home');
        } catch (err) {
            console.log(err);
        }
    }
 

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default compose(
    withRouter,
    graphql(mutations.signinUser, { name: 'signinUser' }),
    graphql(mutations.createUser, { name: 'createUser' })
)(AppProvider);