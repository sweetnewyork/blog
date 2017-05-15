import React from 'react'
import {Link} from 'react-router-dom'

import './scss/common.scss'

class Header extends React.Component {

    render() {
        return (
            <header>
                <nav className="clear-fix">
                    <img src="/images/logo.png"/>
                    <ul>
                        <li>
                            <input id="nav-lab-all" name="nav-lab" type="radio"/>
                            <label htmlFor="nav-lab-all"><Link to="/">All</Link></label>
                        </li>
                        <li>
                            <input id="nav-lab-tech" name="nav-lab" type="radio"/>
                            <label htmlFor="nav-lab-tech"><Link to="/tech">Technology</Link></label>
                        </li>
                        <li>
                            <input id="nav-lab-math" name="nav-lab" type="radio"/>
                            <label htmlFor="nav-lab-math"><Link to="/math">Mathematics</Link></label>
                        </li>
                        <li>
                            <input id="nav-lab-life" name="nav-lab" type="radio"/>
                            <label htmlFor="nav-lab-life"><Link to="/life">Daily Life</Link></label>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header