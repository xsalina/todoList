import React, { Component } from 'react'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span className="todo-count"><strong>0</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </div>
        )
    }
}
export default Footer;