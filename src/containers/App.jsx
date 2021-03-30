import React,{useEffect,useState}  from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {

    const [ videos,setVideos ] = useState({ mylist: [], trends: [], originals: [] });

    useEffect(()=>{
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    },[]);

    return(
        <div className="App">
            <Header></Header>
            <Search></Search>

        { videos.mylist.length > 0 &&
            <Categories tittle="My List">
                <Carousel>
                    <CarouselItem/>
                </Carousel>
            </Categories>
        }
            
            
        <Categories tittle="Colection">
            <Carousel>
                {videos.trends.map(item=>
                    <CarouselItem key={item.id} {...item}/>
                )}            
            </Carousel>
        </Categories>

            <Footer></Footer>
        </div>
);}

export default App;
