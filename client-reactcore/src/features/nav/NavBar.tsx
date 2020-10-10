import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

const NavBar = () => {
    return (

        
        <Menu fixed='top' inverted>
        <Container>

            
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            ReactCore
        </Menu.Item>

        <Menu.Item name='Activities' />

        <Menu.Item header>
            <Button positive content='Create Acivity' />
        </Menu.Item>
      
        </Container>
      </Menu>
    );
};

export default NavBar;
