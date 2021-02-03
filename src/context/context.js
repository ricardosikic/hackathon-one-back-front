// React
import React from 'react';

// React apollo
/* import { graphql } from 'react-apollo';
import compose from 'lodash.flowright'; */

// App context
export const Context = React.createContext();

/* // Mutations
import mutations from './mutation';
 */


class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: {},
            actions: {
                loginData: this.loginData
            }
        }
    }

    loginData = (/* text, name */e) => {
        console.log(e)
/*         const { loginCredentials } = this.state;
        const loginData = { [name]: text }
        const newData = {...loginCredentials, ...loginData};
        this.setState({
            loginCredentials: newData
        }); */
    }

    /* signIn = async(e) => {
       const { loginCredentials } = this.state;

       this.setState({
         isLoadingAuth: true
       });

       const { signInUser } = this.props;
       try {
           const resp = await signInUser({variables: {
                email: loginCredentials.email,
                password: loginCredentials.password
           }});

           this.setState({
               isUserAuthenticated: true,
               isLoadingAuth: false
           });
           this.storeData(resp.data.signInUser.token);
       } catch(err) {
           console.log(err);
       }
    }

    signUpInputData = (text, name) => {
        const { signUpCredentials } = this.state;
        const signUpData = { [name]: text }
        const newData = {...signUpCredentials, ...signUpData}
        this.setState({
            signUpCredentials: newData
        });
    }
 */


    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default AppProvider;
/*     graphql(mutations.signInUser, { name: 'signInUser' }),
    graphql(mutations.createUser, { name: 'createUser' }) */