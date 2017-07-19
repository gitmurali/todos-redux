import React, {Component} from 'react';
import TodoAdd from './todos_add';
import TodoList from '../containers/todos_list';

class App extends Component {
    render() {
        return (
            <div class="container-fluid text-center">
                <div class="row content">
                    <div class="col-sm-4 sidenav"></div>
                    <div class="col-sm-4 text-left">
                        <h1>TODO: =></h1>
                        <div className="">
                            <TodoAdd />
                            <TodoList />
                        </div>
                    </div>
                    <div class="col-sm-4 sidenav"></div>
                </div>
            </div>
        );
    }

}

export default App;