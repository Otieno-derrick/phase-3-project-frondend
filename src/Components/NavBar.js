
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Employees from './Employees'

const Header = styled(AppBar)`
    background: #0e420d;
`;

const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {

    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="./" exact>CodeWorld</Tabs>
                <Tabs to="all" exact>Employees</Tabs>
                <Tabs to="add" exact>Add Employee</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;