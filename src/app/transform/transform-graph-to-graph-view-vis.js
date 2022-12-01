import prettifyValue from '../utility/prettify-value';

function fontColor(color) {
    // const hexNumber = color ? parseInt(color.slice(1), 16) : 0x000000;
    // const midHexValue = (255 * 255 * 255) / 2;
    // console.log(hexNumber > midHexValue ? '#222' : '#ddd');
    return parseInt('#222');
}

const transformGraphToGraphViewVis = (graph) => {
    const data = {nodes: [], edges: []};
    const makeLink = (edge) => (node) => {
        return {
            from: edge.node.uuid,
            to: node.uuid
        };
    };
    for(const edge of graph.edges) {
        data.nodes.push({
            id: edge.node.uuid,
            label: (`${edge.node.id}\n${prettifyValue(
                edge.node.value,
                edge.node.conv,
                edge.node.prefix,
                edge.node.suffix
            )}`) || '',
            title: edge.node.title || '',
            font: {
                color: fontColor(edge.node.color)
            },
            color: {
                background: edge.node.color,
                border: edge.node.color
            }
        });
        data.edges = [
            ...data.edges,
            ...edge.edges.map(makeLink(edge))];
    }

    return data;
};

export default transformGraphToGraphViewVis;
