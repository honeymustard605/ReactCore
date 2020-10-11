import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

interface IProps {
    openCreateForm: () => void;
}
//We Destructure out open create Form from this
const NavBar: React.FC<IProps> = ({openCreateForm}) => {
    return (

        
        <Menu fixed='top' inverted>
        <Container>

            
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            ReactCore
        </Menu.Item>

        <Menu.Item name='Activities' />

        <Menu.Item header>
            <Button onClick={openCreateForm} positive content='Create Acivity' />
        </Menu.Item>
      
        </Container>
      </Menu>
    );
};

export default NavBar;
