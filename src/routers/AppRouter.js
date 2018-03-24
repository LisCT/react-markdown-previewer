import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MarkdownPreviewer from '../components/MarkdownPreviewer';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={MarkdownPreviewer} exact={true}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;