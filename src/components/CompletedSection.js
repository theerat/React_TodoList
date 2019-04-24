import React, { Component } from 'react';
import { Row, Col, List, Checkbox, Icon } from 'antd';

class completedSection extends Component {
    render() {
        const CompletedList = this.props.data.obj.filter((x) => {
            return x.isChecked === true;
        })
        return (
            < div >
                <Row>
                    <Col sm={22}>
                        <h4>{CompletedList.length} Completed</h4>
                    </Col>
                    <Col sm={2}>
                        <a onClick={(x) => this.props.onShowCompleted(!this.props.data.showComplete)}><h4>{this.props.data.showComplete === true ? 'Hide' : 'Show'}</h4></a>
                    </Col>
                </Row>
                {this.props.data.showComplete === true ?
                    <Row>
                        <Col sm={24}>
                            <List
                                itemLayout="horizontal"
                                dataSource={CompletedList}
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
                    </Row> : null}

            </div >
        );
    }
}

export default completedSection;
