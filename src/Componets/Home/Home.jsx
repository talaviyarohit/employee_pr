import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getData } from '../../Services/Helper/helper';
import { useNavigate } from 'react-router';
// import { Form } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Home() {


    const [view, setView] = useState(getData("myData"));

    // console.log("view", view);

    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    }

    const handleDelete = (id) => {
        //delete logic

        const data = view.filter((data) => {
            return data.id !== id
        })


        localStorage.setItem("myData", JSON.stringify(data));
        setView(data)


    }

    const handleSort = (key) => {

        let sortedData;

        switch (key) {
            case "asc":
                sortedData = [...view].sort((dataF, dataS) => {
                    return dataF.empname.localeCompare(dataS.empname)
                })
                break;
            case "des":
                sortedData = [...view].sort((dataF, dataS) => {
                    return dataS.empname.localeCompare(dataF.empname)
                })
                break;
            case "htl":
                sortedData = [...view].sort((dataF, dataS) => {
                    return dataF.empsalary.localeCompare(dataS.empsalary)
                })
                break;
            case "lth":
                sortedData = [...view].sort((dataF, dataS) => {
                    return dataS.empsalary.localeCompare(dataF.empsalary)
                })
                break;
            case "ha":
                sortedData = [...view].sort((dataF, dataS) => {
                    return dataF.empage.localeCompare(dataS.empage)
                })
                break;
            case "la":
                sortedData = [...view].sort((dataF, dataS) => {
                    return dataS.empage.localeCompare(dataF.empage)
                })
                break;
            case "edh":
                sortedData = [...view].sort((dataF, dataS) => {
                    return dataF.empdepart.localeCompare(dataS.empdepart)
                })
                break;
            case "edl":
                sortedData = [...view].sort((dataF, dataS) => {
                    return dataS.empdepart.localeCompare(dataF.empdepart)
                })
                break;
            case "eph":
                sortedData = [...view].sort((dataF, dataS) => {
                    return dataF.empposition.localeCompare(dataS.empposition)
                })
                break;
            case "epl":
                sortedData = [...view].sort((dataF, dataS) => {
                    return dataS.empposition.localeCompare(dataF.empposition)
                })
                break;

            default:
                break;
        }


        setView(sortedData)
    }

    const [search, setsearch] = useState('');

    const handleChange = (item) => {
        setsearch(item.target.value);


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dat = getData("myData");
        const filteredData = dat.filter((data) => {
            return (
                data.empname.toLowerCase().includes(search.toLowerCase()) ||
                data.empage.toLowerCase().includes(search.toLowerCase()) ||
                data.empdepart.toLowerCase().includes(search.toLowerCase()) ||
                data.empposition.toLowerCase().includes(search.toLowerCase())
            )
        })
        console.log(filteredData);
        setView(filteredData)
    }








    return (

        <>
            <div>
                <h1 className='text-center'>
                    VIEW DATA
                </h1>


                <div className='d-flex'>
                    <div className='col-6'>
                        <Form onSubmit={handleSubmit}>
                            <div className='d-flex'>
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control type="text" placeholder="Enter search" name='search' value={search} onChange={handleChange} />

                                    </Form.Group>



                                </div>
                                <div>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </Form>

                    </div>

                </div>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>EmpId</th>
                            <th>EmpName
                                <button className='bg-info' onClick={() => { handleSort("asc") }}>
                                    A-Z
                                </button>||
                                <button className='bg-info' onClick={() => { handleSort("des") }}>
                                    Z-A
                                </button>

                            </th>
                            <th>EmpAge
                                <button className='bg-info' onClick={() => { handleSort("ha") }}>
                                    L-H
                                </button>||
                                <button className='bg-info' onClick={() => { handleSort("la") }}>
                                    H-L
                                </button>
                            </th>
                            <th>EmpDepartment
                                <div className='d-flex '>
                                    <div className='p-1'>
                                        <button className='bg-info' onClick={() => { handleSort("edh") }}>
                                            A-Z
                                        </button>||
                                        <button className='bg-info' onClick={() => { handleSort("edl") }}>
                                            Z-A
                                        </button>
                                    </div>
                                    <div>
                                        <DropdownButton id="dropdown-item-button" >

                                            <Dropdown.Item as="button">Photo</Dropdown.Item>
                                            <Dropdown.Item as="button">Ele</Dropdown.Item>
                                            <Dropdown.Item as="button">Php</Dropdown.Item>
                                            <Dropdown.Item as="button">Full Stack</Dropdown.Item>

                                        </DropdownButton>
                                    </div>
                                </div>

                            </th>
                            <th>EmpPosition
                                <button className='bg-info' onClick={() => { handleSort("eph") }}>
                                    A-Z
                                </button>||
                                <button className='bg-info' onClick={() => { handleSort("epl") }}>
                                    Z-A
                                </button>
                            </th>
                            <th>EmpSalary
                                <button className='bg-info' onClick={() => { handleSort("htl") }}>
                                    L-H
                                </button>||
                                <button className='bg-info' onClick={() => { handleSort("lth") }}>
                                    H-L
                                </button>
                            </th>
                            <th>EmpEmail</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            view.map((data) => {

                                return (

                                    <>
                                        <tr>
                                            <td>{data.id}</td>
                                            <td className='text-dark'>{data.empname}</td>
                                            <td>{data.empage}</td>
                                            <td>{data.empdepart}</td>
                                            <td>{data.empposition}</td>
                                            <td>{data.empsalary}</td>
                                            <td>{data.empemail}</td>
                                            <td>
                                                <button onClick={() => handleEdit(data.id)}>Edit</button>||
                                                <button onClick={() => handleDelete(data.id)}>Delete</button>
                                            </td>


                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </Table>

            </div>
        </>
    )
}

export default Home
