import React, { Component, Fragment } from 'react';
import { BrowserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import AllBlogs from './main';
import Blog from './blog';
import BlogComponent from '../components/blog';
import InputBlog from '../containers/inputBlog';
import styles from '../styles/links.scss';
import Update from '../components/updateBlog';
import UpdateBlog from '../containers/update';

import AuthButton from '../components/auth/authButton';
import Login from '../components/auth/login';
import Logout from '../components/auth/logout';
import Donate from './donate';
import PrivateRoute from '../components/auth/privateRoute';


class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className={ styles.container }>
                        <Link className={ styles.link } to="/">Home</Link>
                        <br/>
                        <Link className={ styles.link } to="/blogs">ShowBlogs</Link>
                        <br/>
                        <Link className={ styles.link } to="/blogs/add">Add a Blog</Link>
                        <br/>
                        <Link className={ styles.link } to="/donate">Donate</Link>
                        <AuthButton />
                    </div>
                    
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/donate" component={Donate} />
                        <Route exact path="/blogs/:id/update" component={UpdateBlog} />
                        <Route exact path="/blogs" component={ AllBlogs } />
                        <Route path="/blogs/add" component={ InputBlog } />
                        <Route exact path="/blogs/:id" component={ Blog } />
                        {/* <PrivateRoute path="/blogs/add" component={ InputBlog }/> */}
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;