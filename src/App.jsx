import GraphEditorWithMessage from './app/component/graph-editor';
import Footer from './app/component/footer/footer.jsx';

const App = () => (
    <div className="page-wrapper">
        <h1 className="gutter-margin-bottom">Graph Editor</h1>
        <GraphEditorWithMessage/>
        <Footer/>
    </div>
);

export default App;
