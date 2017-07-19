import React, {Component} from 'react';
import TodoAdd from './todos_add';
import TodoList from '../containers/todos_list';

class App extends Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <div className="row content">
                    <div className="col-sm-4 sidenav"></div>
                    <div className="col-sm-4 text-left">
                        <h1>TODO: =></h1>
                        <div>
                            <TodoAdd />
                            <TodoList />
                        </div>
                    </div>
                    <div className="col-sm-4 sidenav"></div>
                </div>
            </div>
        );
    }

}

export default App;