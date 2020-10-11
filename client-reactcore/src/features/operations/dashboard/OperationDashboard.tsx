import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IOperation } from '../../../models/operation'
import OperationDetails from './details/OperationDetails';
import OperationForm from './form/OperationForm';
import OperationList from './OperationList';

//The use of IProps interface throughout the application is a good example of polymorphic behavior
interface IProps {
    operations: IOperation[];
    selectOperation: (id: string) => void;
    // says either an operation is passed or a null is
    selectedOperation: IOperation | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedOperation: (operation: IOperation | null) => void;
    createOperation: (operation: IOperation) => void;
    editOperation: (operation: IOperation) => void;
}
//know about destructuring from the props object by using operations directly inside our OperationDashboard
//Also a good example of Dependency Injection
const OperationDashboard: React.FC<IProps> = ({operations, selectOperation, selectedOperation, editMode, setEditMode, setSelectedOperation, createOperation, editOperation}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <OperationList  operations={operations} selectOperation={selectOperation}/>           
            </Grid.Column>
            <Grid.Column width={6}>
                {/* we are displaying out operation details if our selected operation is not equal to null */}
                {selectedOperation && !editMode && ( 
                    <OperationDetails operation={selectedOperation} setEditMode={setEditMode}
                    setSelectedOperation={setSelectedOperation}/>
                )}
                {editMode && (
                <OperationForm setEditMode={setEditMode} operation={selectedOperation!} createOperation={createOperation} editOperation={editOperation}
                />
                )}
            </Grid.Column>
        </Grid>
    )
}

export default OperationDashboard;
