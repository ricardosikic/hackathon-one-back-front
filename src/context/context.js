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
                },
                isLogged: false
            },
            actions: {
                loginData: this.loginData,
                signIn: this.signIn,
                signUpData: this.signUpData,
                signUp: this.signUp,
                signOut: this.signOut
            }
        }
    }

    componentDidMount() {
        if(localStorage.getItem('token') !== null)
         this.setState({
             store: {
                 isLogged: true
             }
         })
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
              const { data: {signinUser:{token, user}} } = response;
              localStorage.setItem('token', token);
              this.setState({
                  store: {
                      isLogged: true
                  }
              });
              if(user.roleId === 2) {
                  history.push('/admin/dashboard');
              } else {
                  history.push('/books/home');
              }

            }
            
        } catch (error) {
            console.log(error.message);
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
 
        const variables = {
            firstName: signUpData.firstName,
            email: signUpData.email,
            password: signUpData.password
        };
        try {
            const response = await createUser({variables});
            if(response) {
                const { data: { createUser: { sessionToken } } } = response;
                localStorage.setItem('token', sessionToken);
                this.setState({
                    store: {
                        isLogged: true
                    }
                })
                history.push('/books/home');
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    signOut = async() => {
        const { signoutUser, history } = this.props;
        try {
            await signoutUser();
            localStorage.removeItem('token');
            history.push('/signin');
            this.setState({
                store: {
                    isLogged: false
                }
            });
        } catch(err) {
            console.log(err.message);
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
    graphql(mutations.createUser, { name: 'createUser' }),
    graphql(mutations.signoutUser, { name: 'signoutUser' })
)(AppProvider);