import React, {Component, Fragment} from 'react';

import ConnectionList from './connection-list.jsx';
import GraphBuilderWrapped from './graph-builder.jsx';
import Digraph from '../../graph/digraph';
import {Column, Container, Row} from '../../elements/structure.jsx';
import TransformJsonToGraph from '../../transform/transform-json-to-graph';
import CsvRow from '../csv/csv-row.jsx';
import withMessage from '../../context/message/with-message.jsx';
import transformGraphToGraphViewVis
    from '../../transform/transform-graph-to-graph-view-vis';
import GraphViewVis from './graph-view-vis.jsx';

class GraphEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: {
                id: null,
                title: '',
                description: ''
            },
            graph: new Digraph(),
            data: {
                nodes: [],
                edges: []
            },
            activeNode: null
        };
    }

    updateModel = (model) => {
        this.setState({model});
    };

    updateGraph = (graph) => {
        this.setState({graph});
    };

    updateData = (graph) => {
        const data = transformGraphToGraphViewVis(graph);
        this.setState({graph, data});
    };

    createGraphFromJson = (data) => {
        const graph = (new TransformJsonToGraph()).process(data);
        try {
            graph.populateNodesWithEquationData();
            graph.calculateEquations();
        } catch(e) {
            this.props.setMessage('Error Creating Graph: ' + e.message);
            this.props.showMessage();
        }
        this.updateData(graph);
    };

    componentDidMount() {

    }

    render() {
        const {message} = this.props;
        return (
            <Fragment>
                {message()}
                <Container>
                    <CsvRow
                        graph={this.state.graph}
                        createGraphFromJson={this.createGraphFromJson}
                    />
                    <Row>
                        <Column span={9} mSpan={8} sSpan={6}>
                            <GraphViewVis data={this.state.data}/>
                        </Column>
                        <Column span={3} mSpan={4} sSpan={6}>
                            <ConnectionList
                                graph={this.state.graph}
                                updateGraph={this.updateGraph}
                                updateData={this.updateData}
                            />
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <GraphBuilderWrapped
                                id={this.state.id}
                                graph={this.state.graph}
                                model={this.state.model}
                                updateGraph={this.updateGraph}
                                updateData={this.updateData}
                            />
                        </Column>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

GraphEditor = withMessage(GraphEditor);

export default GraphEditor;
