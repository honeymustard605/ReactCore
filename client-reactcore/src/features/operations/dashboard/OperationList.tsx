import React from 'react';
import { Item, Image, Button, Label, Segment } from 'semantic-ui-react';
import {IOperation } from '../../../models/operation';
interface IProps {
    operations: IOperation[];
    selectOperation: (id: string) => void;
}


const OperationList: React.FC<IProps> = ({operations, selectOperation}) => {
    return (
        <Segment clearing>
            <Item.Group divided>
                {operations.map(operation => (
                     <Item key={operation.id}>
          
    
                     <Item.Content>
                <Item.Header as='a'>{operation.title}</Item.Header>
                <Item.Meta>{operation.date}</Item.Meta>
                       <Item.Description>
                            <div>{operation.description}</div>
                <div>{operation.city}, {operation.venue}</div>
                       </Item.Description>
                       <Item.Extra>
                           <Button onClick={() => selectOperation(operation.id)} floated='right'
                            content='View' color='blue'/>
                           <Label basic content={operation.category} />
                       </Item.Extra>
                     </Item.Content>
                   </Item>
                ))}
       
            </Item.Group>
        </Segment>
        
    );
};

export default OperationList
