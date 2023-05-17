import './App.css';
import ReactDOM from "react-dom/client";
import {
	BrowserRouter as Router,
	Switch,
  Routes,
	Route,
	Redirect,
} from 'react-router-dom';
//
import Header from './components/Header';
import Footer from './components/Footer';
//
import Layout from "./container/Layout";
import Home from "./container/Home";
import Blogs from "./container/Blogs";
import Contact from "./container/Contact";
import NoPage from "./container/NoPage";
import DBControlPanel from "./container/DBControlPanel";
import {ApolloProvider} from "@apollo/client";
import clientHasuraPublic from "./apolloClient";


const App = () => {

  return (
    <ApolloProvider client={clientHasuraPublic}>
        <Router>
            <Header/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
                <Route path="dbcontrolpanel" element={<DBControlPanel />} />
            </Routes>
            <Footer/>

        </Router>
    </ApolloProvider>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

