import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Quotes from '../Quotes/Quotes';

const Data = () => {

    return (
        <>
        <div>
        <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onCLick={<Quotes />}>Quote I</Button>
            <Button variant="danger">Quote II</Button>
            <Button variant="info">Quote III</Button>
        </ButtonGroup>
        
        </div>
        <div>
        <Pagination>
       
        
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
        </div>
        </>
    );

};

export default Data;
