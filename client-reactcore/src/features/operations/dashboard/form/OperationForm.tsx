import React, {FormEvent, useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { IOperation } from '../../../../models/operation'
import {v4 as uuid} from 'uuid';
interface IProps {
    setEditMode: (editMode: boolean) => void;
    operation: IOperation;
    createOperation: (operation: IOperation) => void;
    editOperation: (operation: IOperation) => void;
}


const OperationForm: React.FC<IProps> = ({
    setEditMode, 
    operation: initialFormState,
    createOperation,
    editOperation
    }) => {
    
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        } else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue:''
            };
        }
    };

    const [operation, setOperation] = useState<IOperation>(initializeForm);
    
    const handleSubmit = () => {
       if (operation.id.length === 0) {
           let newOperation = {
               ...operation,
               id: uuid()
           }
           createOperation(newOperation);
        }else {
               editOperation(operation);
           }
       
    }

    // Best way to Strongly Type Event changes
    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setOperation({...operation, [name]: value });
    };

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name='title' placeholder='Title' value={operation.title}/>
                <Form.TextArea onChange={handleInputChange} name='description' rows={2} placeholder='Description' value={operation.description}/>
                <Form.Input onChange={handleInputChange} name='category' placeholder='Category' value={operation.category}/>
                <Form.Input onChange={handleInputChange} name='date' type='date' placeholder='Date' value={operation.date}/>
                <Form.Input onChange={handleInputChange} name='city' placeholder='City' value={operation.city}/>
                <Form.Input onChange={handleInputChange} name='venue' placeholder='Venue' value={operation.venue}/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={() => setEditMode(false)} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default OperationForm
