import {Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import AddPostPage from "./components/pages/AddPostPage.jsx";
import EditPostPage from "./components/pages/EditPostPage.jsx";
import PostPage from "./components/pages/PostPage.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import {Container} from "react-bootstrap";
import NavBar from "./components/views/NavBar/NavBar.jsx";
import Footer from "./components/views/Footer/Footer.jsx";
import DeleteModal from "./components/views/Modal/DeleteModal.jsx";
import Categories from "./components/pages/Categories.jsx";
import CategoryPostPage from "./components/pages/CategoryPostPage.jsx";
import Posts from "./components/features/Posts.jsx";



function App() {

  return (
    <Container>
       <NavBar/>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/post/add' element={<AddPostPage/>}/>
            <Route path='/post/edit/:id' element={<EditPostPage/>}/>
            <Route path='/post/:id' element={<PostPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/categories/:category' element={<Posts/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </Container>
  )
}

export default App
