import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';

class header extends Component {

    render() {
        var maxid = 0;
        this.props.data.obj.map(function (obj) {
            if (obj.id > maxid) maxid = obj.id;
        });

        const maxID = (parseInt(maxid) + 1);
        const newObj = {

            id: maxID,
            title: "Task " + (this.props.data === null ? '' : maxID),
            isChecked: false
        }

        return (
            <Row>
                <Col md={22}>
                    <h1>Todo List</h1>
                </Col>
                <Col md={2} className="btn-top-padding" >
                    <Button onClick={(x) => this.props.onCreate(newObj)}><Icon type="plus" style={{ width: 30 }} /></Button>
                </Col>
            </Row >
        )
    }
}

export default header;