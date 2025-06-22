
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import ArticleList from './components/newsComponents/ArticleList';
import ArticleDetail from './components/newsComponents/ArticleDetail';

function App() {
  return (
      // <Form></Form>
      <Router>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
