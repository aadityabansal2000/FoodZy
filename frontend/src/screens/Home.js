import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  // console.log(foodItem);
  const loadData = async () => {
    let response = await fetch("/api/foodData",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1]);
  }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <Navbar />
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ "objectFit": "contain !important" }}>
        <div className="carousel-inner" id='carousel'>
        <div className="covertext">
          <div className="col-lg-10" style={{float:"none", margin:"0 auto"}}>
            <h1 className="title">FoodZy</h1>
            <h3 className="subtitle">Delicious Moments, Delivered to Your Doorstep</h3>
          </div>
          {/* <div className="col-xs-12 explore">
            <a href="#"><button type="button" className="btn btn-lg explorebtn">dine in!</button></a>
          </div> */}
        </div>
          <div className="carousel-caption" style={{ "zIndex": "10" }}>
            <div className="d-flex justify-content-center">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
             
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{ "filter": "brightness(50%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?noodles" className="d-block w-100" style={{ "filter": "brightness(50%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?momos" className="d-block w-100" style={{ "filter": "brightness(50%)" }} alt="..." />
          </div>
        </div>
        <button style={{zIndex:"15"}} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button style={{zIndex:"15"}} className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div className="container-fluid main">
        <div id="myCarousel" class="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
          <div className="carousel-inner" role="listbox">
            <div className="item active background a"></div>
            <div className="item background b"></div>
            <div className="item background c"></div>
          </div>
        </div>

        <div className="covertext">
          <div className="col-lg-10" style={{float:"none", margin:"0 auto"}}>
            <h1 className="title">ELINE</h1>
            <h3 className="subtitle">A Tidy, Clean, Easy-to-Use, and Responsive Landing Page Template</h3>
          </div>
          <div className="col-xs-12 explore">
            <a href="#"><button type="button" className="btn btn-lg explorebtn">dine in!</button></a>
          </div>
        </div>

      </div> */}
      <div className='container'>
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (<div className="row mb-3" key={data._id}><div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem !== [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filterItems => {
                  return (
                    <div key={filterItems._id} className="col-12 col-md-6  col-lg-3">
                      <Card
                        // foodName={filterItems.name}
                        foodItem={filterItems}
                        options={filterItems.options[0]}
                      // imgSrc={filterItems.img}
                      ></Card>
                    </div>
                  )
                }) : <div>No Such Data Found</div>}
              </div>
              )
            }) : ""
        }

      </div>
      <div><Footer /></div>
    </div>
  )
}
