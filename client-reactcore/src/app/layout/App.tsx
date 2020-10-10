import React, {useState, useEffect, Fragment} from 'react';
import { Container, Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { IOperation } from '../../models/operation';
import Navbar from '../../features/nav/NavBar';
import OperationDashboard from '../../features/operations/dashboard/OperationDashboard';



const App = () => {
  const [operations, setOperations] = useState<IOperation[]>([])

  useEffect(() => {
       
    axios.get<IOperation[]>('http://localhost:5000/api/operations')
      .then(response => {
        //when we use setOperations our response.data is strongly typed to our array of operations
          setOperations(response.data)
        });
        //empty array assures us that our component runs one time only 
      }, []);
  


  
  

  
    return (
      <Fragment>
       <Navbar />
       <Container style={{marginTop: '7em'}}>
        <OperationDashboard operations={operations}/>
       </Container>
        
        
      </Fragment>
    );
  
  
};

export default App;
