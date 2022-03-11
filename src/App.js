// import { useState, useRef, useEffect } from 'react';
// import Confetti from 'react-confetti';
import {BrowserRouter as Router, Routes, Route,Navigate,} from 'react-router-dom';
import Article from './Components/Article';
import { BlogProvider } from './Components/BlogContext';
import CategoryPage from './Components/CategoryPage';
import Header from './Components/Header';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';

function App() {
  // const [height, setHeight] = useState(null);
  // const [width, setWidth] = useState(null);
  // const confettiRef = useRef(null);

  // useEffect(() => {
  //   setHeight(confettiRef.current.clientHeight)
  //   setWidth(confettiRef.current.clientWidth)
  // }, [])

  return (
    // <div ref={confettiRef}>
    <div>
      <BlogProvider>
        <Router>
          <Header />
          {/* <Confetti
            width={width}
            height={height}
          /> */}
          <Routes>
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/article/:articleTitle/:articleCategory' element={<Article />}/>
            <Route path='/categoryPage/:categoryName' element={<CategoryPage />}/>
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </Router>
      </BlogProvider>

    </div>
  );
}

export default App;