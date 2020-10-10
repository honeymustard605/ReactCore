import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IOperation } from '../../../models/operation'
import OperationDetails from './details/OperationDetails';
import OperationForm from './form/OperationForm';
import OperationList from './OperationList';
interface IProps {
    operations: IOperation[]
}
//know about destructuring from the props object by using operations directly inside our OperationsDashboard
const OperationDashboard: React.FC<IProps> = ({operations}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <OperationList  operations={operations}/>           
            </Grid.Column>
            <Grid.Column width={6}>
                <OperationDetails />
                <OperationForm/>
            </Grid.Column>
        </Grid>
    )
}

export default OperationDashboard;
