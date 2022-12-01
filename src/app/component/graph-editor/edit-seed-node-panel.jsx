import React, {Component} from 'react';
import EditNodeInput from './edit-node-input.jsx';
import {Button} from '../../elements/button.jsx';
import {Column, Row} from '../../elements/structure.jsx';

export default class EditSeedNodePanel extends Component {
    updateValue = (key, value) => {
        const {updateNode} = this.props;
        updateNode(key, value);
    };

    render() {
        const {node, removeNode} = this.props;
        return (
            <Row>
                <Column>
                    <div className={'edit-node--panel'}>
                        <Row>
                            <Column
                                span={6} className={'edit-node--column'}
                            >
                                <EditNodeInput
                                    label={'Id'}
                                    value={node.id}
                                    handleOnChange={e => this.updateValue(
                                        'id', e.target.value
                                    )}
                                />
                                <EditNodeInput
                                    label={'Prefix'}
                                    value={node.prefix}
                                    handleOnChange={e => this.updateValue(
                                        'prefix',
                                        e.target.value
                                    )}
                                    className={'node-input--narrow'}
                                />
                                <EditNodeInput
                                    label={'Value'}
                                    value={node.value}
                                    type="number"
                                    handleOnChange={e =>
                                        this.updateValue(
                                            'value',
                                            e.target.value
                                        )
                                    }
                                    className={'node-input--grow'}
                                />
                                <EditNodeInput
                                    label={'Minimum'}
                                    value={node.min}
                                    type="number"
                                    handleOnChange={e => this.updateValue(
                                        'min',
                                        e.target.value
                                    )}
                                    className={'node-input--narrow'}
                                />
                                <EditNodeInput
                                    label={'Maximum'}
                                    value={node.max}
                                    type="number"
                                    handleOnChange={e => this.updateValue(
                                        'max',
                                        e.target.value
                                    )}
                                    className={'node-input--narrow'}
                                />
                                <EditNodeInput
                                    label={'Step'}
                                    value={node.step}
                                    type="number"
                                    handleOnChange={e => this.updateValue(
                                        'step',
                                        e.target.value
                                    )}
                                    className={'node-input--narrow'}
                                />
                                <EditNodeInput
                                    label={'Suffix'}
                                    value={node.suffix}
                                    handleOnChange={e => this.updateValue(
                                        'suffix',
                                        e.target.value
                                    )}
                                    className={'node-input--narrow'}
                                />
                            </Column>
                            <Column
                                span={6}
                                className={'edit-node--column no-padding-bottom'}
                            >
                                <EditNodeInput
                                    label={'Conversion'}
                                    value={node.conv}
                                    type="number"
                                    handleOnChange={e => this.updateValue(
                                        'conv',
                                        e.target.value
                                    )}
                                    className={'node-input--narrow'}
                                />
                                <EditNodeInput
                                    label={'Label'}
                                    value={node.label}
                                    handleOnChange={e => this.updateValue(
                                        'label',
                                        e.target.value
                                    )}
                                />
                                <EditNodeInput
                                    label={'Title'}
                                    value={node.title}
                                    handleOnChange={e => this.updateValue(
                                        'title',
                                        e.target.value
                                    )}
                                    className={'node-input--grow'}
                                />
                                <EditNodeInput
                                    label={'Colour'}
                                    value={node.color} type={'color'}
                                    handleOnChange={e => this.updateValue(
                                        'color',
                                        e.target.value
                                    )}
                                    className={'node-input--narrow'}
                                />
                                <div className={'edit-node--action-column'}>
                                    <Button
                                        type={'destructive'}
                                        onClick={removeNode}
                                    >x
                                    </Button>
                                </div>
                            </Column>
                        </Row>
                    </div>
                </Column>
            </Row>
        );
    }
}
