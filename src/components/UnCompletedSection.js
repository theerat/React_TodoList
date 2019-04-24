import React, { Component } from 'react';
import { Row, Col, List, Checkbox, Icon } from 'antd';

class ListUnCompleted extends Component {
    render() {
        const UncompletedList = this.props.data.obj.filter((x) => {
            return x.isChecked === false;
        })
        return (
            <div>
                <Row>
                    <Col sm={24}>
                        <List
                            itemLayout="horizontal"
                            dataSource={UncompletedList}
                            renderItem={item => (
                                <List.Item style={{ textAlign: "left", marginLeft: 20 }}>
                                    <Checkbox checked={item.isChecked} onChange={(e) => this.props.onChange(e, item.id)}> </Checkbox>

                                    <List.Item.Meta
                                        title={item.title}
                                    />
                                    <Icon type="close" onClick={(e) => this.props.onDelete(item.id)} style={{ marginRight: 20 }} />
                                </List.Item>
                            )}
                        />,</Col>
                </Row>
            </div>
        );
    }
}




export default ListUnCompleted;