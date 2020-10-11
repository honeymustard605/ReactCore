import React, {useState, useEffect, Fragment} from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { IOperation } from '../../models/operation';
import Navbar from '../../features/nav/NavBar';
import OperationDashboard from '../../features/operations/dashboard/OperationDashboard';



const App = () => {
  const [operations, setOperations] = useState<IOperation[]>([])
  const [selectedOperation, setSelectedOperation] = useState<IOperation | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleSelectedOperation = (id: string) => {
    setSelectedOperation(operations.filter(o => o.id === id)[0])
  }

  const handleOpenCreateForm = () => {
    setSelectedOperation(null);
    setEditMode(true);
  }

  const handleCreateOperation = (operation: IOperation) => {
    setOperations([...operations, operation])
    //after we create the Operation we display it with setSelectedOperation
    setSelectedOperation(operation);
    setEditMode(false);
  }


  const handleEditOperation = (operation: IOperation) => {
    //an array of all of the new operations that do not match the id of the operation we are passing in
    setOperations([...operations.filter(o =>o.id !== operation.id), operation])
    setSelectedOperation(operation);
    setEditMode(false);
  }
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
       <Navbar openCreateForm={handleOpenCreateForm}/>
       <Container style={{marginTop: '7em'}}>
        <OperationDashboard
         operations={operations}
         selectOperation={handleSelectedOperation}
         selectedOperation={selectedOperation}
         editMode={editMode}
         setEditMode={setEditMode}
         setSelectedOperation={setSelectedOperation}
         createOperation={handleCreateOperation}
         editOperation={handleEditOperation}
          />
       </Container>
        
        
      </Fragment>
    );
  
  
};

export default App;
