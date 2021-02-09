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
            },
            actions: {
                loginData: this.loginData,
                signIn: this.signIn
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
        const { store: { loginData, loggedIn } } = this.state;
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
    /* graphql(mutations.createUser, { name: 'createUser' }) */
)(AppProvider);