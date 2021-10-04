import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { TodoProvider } from '../context/TodoContext'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import RegisterPage from '../pages/RegisterPage'
import TodosPage from '../pages/TodosPage'
import PrivateRoute from './PrivateRouter'
import PublicRoute from './PublicRouter'


export default function AppRouter() {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />

                <PublicRoute exact path="/login" component={LoginPage} />
                <PublicRoute exact path="/register" component={RegisterPage} />

                <TodoProvider>
                    <PrivateRoute exact path="/todos" component={TodosPage} />
                </TodoProvider>

                <Route path="/404" component={NotFoundPage} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </Router>
    )
}