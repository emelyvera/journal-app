import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <Router>
            {/* 
            * se llama auth porque asi se llama la carpeta quie contiene el componente
            * que quierpo modificar sus estilos 
             */ }
            <div >
                <Switch>
                    <Route path='/auth' component={AuthRouter} />
                    <Route exact path='/' component={JournalScreen} />
                    <Redirect to='/auth/login' />
                </Switch>

            </div>
        </Router>
    )
}
