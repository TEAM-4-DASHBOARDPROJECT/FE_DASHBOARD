import React, { useState, useEffect } from 'react';
import Greeting from '../component/greeting';
import Sidebar from '../component/sidebar';
import { Form, Button, Row, Col, InputGroup, Table, Pagination, Container } from 'react-bootstrap';
import Router from 'next/router';
import { AiFillWallet, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { getCookie } from 'cookies-next';

const menteelist = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // Get API
  const getData = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://group4.altaproject.online/mentee',
      headers: {
        Authorization: `Bearer ${getCookie('Token')}`,
      },
    };

    axios(config)
      .then(function (response) {
        setDatas(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Delete Class
  const handleDelete = ({ id }) => {
    var axios = require('axios');
    var config = {
      method: 'delete',
      url: `https://group4.altaproject.online/mentee/${id}`,
      headers: {
        Authorization: `Bearer ${getCookie('Token')}`,
      },
    };

    axios(config)
      .then(function (response) {
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addNewMentee = () => {
    Router.push({
      pathname: '/addnewmentee',
      query: {
        datas: datas,
      },
    });
  };

  const editMentee = (data) => {
    Router.push({
      pathname: '/editmentee',
      query: {
        fullname: data.fullname,
        address: data.address,
        homeaddress: data.homeaddress,
        email: data.email,
        telegram: data.telegram,
        id: data.id,
      },
    });
  };

  const menteeLog = () => {
    Router.push({
      pathname: '/menteelog',
    });
  };

  const logOut = () => {
    Router.push({
      pathname: '/',
    });
  };

  return (
    <div className="condash">
      <Container className="condash1">
        <Row>
          <Col lg={{ span: 4, offset: 0 }} className="col1">
            <Sidebar />
          </Col>
          <Col lg={{ span: 8, offset: 5 }} className="col2">
            <div className="colr2">
              <Greeting title="Mentee" clickLogOut={() => logOut()} />
            </div>
            <div className="searchbutton">
              <InputGroup>
                <Form.Control placeholder="Search" aria-label="Recipient's username with two button addons" />
                <Button variant="outline-warning">Search</Button>
                <button onClick={() => addNewMentee()} className="buttonlist1">
                  Add New
                </button>
              </InputGroup>
            </div>
            <div className="d-flex flex-wrap" style={{ marginTop: '70px', justifyContent: 'flex-end' }}>
              <div style={{ marginTop: '38px' }}>
                <button className="buttonlist2">Export</button>
              </div>
              <Form className="d-flex flex-wrap" style={{ margin: '0px 15px' }}>
                <Row>
                  <Form.Group className="mb-3" controlId="formPlaintext">
                    <Col>
                      <Form.Label column sm="2">
                        Class
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>All Class</option>
                        <option value="1">BE 11</option>
                        <option value="2">FE 8</option>
                        <option value="3">FE 7</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formPlaintext">
                    <Col>
                      <Form.Label column sm="2">
                        Status
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>All Status</option>
                        <option value="1">Active</option>
                        <option value="2">Placement</option>
                        <option value="3">Graduate</option>
                        <option value="4">Eliminate</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formPlaintext">
                    <Col>
                      <Form.Label column sm="2">
                        Category
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>All Category</option>
                        <option value="1">Informatics</option>
                        <option value="2">Non-Informatics</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Row>
              </Form>
              <div style={{ marginTop: '38px' }}>
                <button className="buttonlist3">Filter</button>
              </div>
            </div>
            <div className="tableclass" style={{ marginTop: '40px' }}>
              {datas.map((data, index) => {
                return (
                  <div key={index}>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Class</th>
                          <th>Status</th>
                          <th>Category</th>
                          <th>Genre</th>
                          <th>Detail</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{index}</td>
                          <td>{data.fullname}</td>
                          <td>{data.classname}</td>
                          <td>{data.status}</td>
                          <td>{data.educationcategory}</td>
                          <td>{data.gender}</td>
                          <td onClick={() => menteeLog()}>
                            <AiFillWallet />
                          </td>
                          <td>
                            <AiFillEdit onClick={() => editMentee(data)} />
                          </td>
                          <td>
                            <AiFillDelete onClick={() => handleDelete(data)} />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                );
              })}
            </div>
            <div style={{ float: 'right', marginTop: '30px' }}>
              <Pagination>
                <Pagination.Prev>{'Prev'}</Pagination.Prev>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next>{'Next'}</Pagination.Next>
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default menteelist;
