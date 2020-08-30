import React, { Component } from 'react'
import data from '../data';
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap';

export default class Products extends Component {
    render() {
        return (
            <div>
                <h2>สินค้าทั่งหมด</h2> 
                <Row>
                {
                   
                    data.product.map(item=>
                    <Col md={4}>
                        <Card>
                            <CardImg src={item.pic}/>
                            <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardSubtitle>ราคา {item.price} บาท</CardSubtitle>
                            <CardSubtitle>(คงเหลือ) {item.stork} ชิ้น</CardSubtitle>

                            </CardBody>
                        </Card>
                    </Col> 
                    )

                }
                </Row>
            </div>
        )
    }
}
