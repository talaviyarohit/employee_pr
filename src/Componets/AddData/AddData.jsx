import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import generateUniqueId from 'generate-unique-id';
import { getData } from '../../Services/Helper/helper';
import { Navigate, useNavigate } from 'react-router';

function AddData() {

    const [inputData, setInputData] = useState({
        id: '',
        empname: '',
        empage: '',
        empdepart: '',
        empposition: '',
        empsalary :'',
        empemail :''
    });


    const [addData, setAddData] = useState(getData("myData"));
    const navigate = useNavigate();
    const [myfalse, setMyFalse] = useState(false);

    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setInputData({ ...inputData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            ...inputData,
            id: generateUniqueId({
                length: 2,
                useLetters: false
            })
        }
        setAddData([...addData, obj]);
        setMyFalse(true);

    }
    useEffect(() => {

        localStorage.setItem("myData", JSON.stringify(addData));
    }, [addData]);

    useEffect(() => {
        if (myfalse) {
            navigate('/');
        }
    }, [myfalse])



    return (
        <div>
            <h1 className='text-center display-1'>
                ADD DATA
            </h1>
            <Container className='bg-dark p-4  '>
                <Form onSubmit={handleSubmit}>
                    <Form.Control name='id' value={inputData.id} onChange={handleChange} hidden />

                    <Row className="mb-3 ">
                        <Form.Group as={Col} >
                            <Form.Label> Employee Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name='empname' value={inputData.empname} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 ">
                        <Form.Group as={Col} >
                            <Form.Label>Employee Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter Age" name='empage' value={inputData.empage} onChange={handleChange} />
                        </Form.Group>

                    </Row>
                    <Row className="mb-3 ">
                        <Form.Group as={Col} >
                            <Form.Label>Employee Department</Form.Label>
                            <Form.Control type="text" placeholder="Enter Department" name='empdepart' value={inputData.empdepart} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 ">
                        <Form.Group as={Col} >
                            <Form.Label> Employee position</Form.Label>
                            <Form.Control type="text" placeholder="Enter position" name='empposition' value={inputData.empposition} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 ">
                        <Form.Group as={Col} >
                            <Form.Label>Employee salary</Form.Label>
                            <Form.Control type="number" placeholder="Enter salary" name='empsalary' value={inputData.empsalary} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 ">
                        <Form.Group as={Col} >
                            <Form.Label> Employee Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" name='empemail' value={inputData.empemail} onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <div className='d-flex justify-content-center '>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>



                </Form>
            </Container>

        </div>
    )
}

export default AddData
