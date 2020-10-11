import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import { IOperation } from '../../../../models/operation';

interface IProps {
  operation: IOperation
  setEditMode: (editMode: boolean) => void;
  setSelectedOperation: (operation: IOperation | null) => void;
}
const OperationDetails: React.FC<IProps> = ({operation, setEditMode, setSelectedOperation}) => {
    return (
        <Card fluid>
    <Image src={`/assets/${operation.category}.jpg`} wrapped ui={false} />
    <Card.Content>
    <Card.Header>{operation.title}</Card.Header>
      <Card.Meta>
        <span >{operation.date}</span>
      </Card.Meta>
      <Card.Description>
        {operation.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     <Button.Group widths={2}>
       <Button onClick={() => setEditMode(true)} basic color='blue' content='Edit' />
       <Button onClick={() => setSelectedOperation(null)} basic color='grey' content='Cancel' />
     </Button.Group>
    </Card.Content>
  </Card>
    )
}

export default OperationDetails;
