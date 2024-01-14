import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import BookList from '../book-list';
import { Wrapper } from './styles';
import BookDetail from "../book-detail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetail />} />
          </Routes>
        </Wrapper>
      </Router>
    </Provider>
  );
}

export default App;