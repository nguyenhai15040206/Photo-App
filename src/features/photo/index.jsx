import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AddEditPage from './pages/AddEdit/AddEditPage';
import Mainpage from './pages/Main/Mainpage';

function Photo(props) {
    const match = useRouteMatch();
    //console.log(match);
    return (
        <Switch>
            <Route exact path={match.url} component={Mainpage} />

            <Route path={`${match.url}/add`} component={AddEditPage} />
            <Route path={`${match.url}/:photoId`} component={AddEditPage} />
        </Switch>
    )
}


export default Photo

