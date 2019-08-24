import React, { useState, useEffect } from 'react';
import './App.style.scss';
import SearchFilter from './SearchFilter';
import hotelResultService from '../../services/hotel-result/hotel-result.service';

const App = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        hotelResultService.get()
        .then(response => {
            setHotels(response.results.hotels)
            setLoading(false);
        })
    }, []);

    const search = searchValue => {
      setLoading(true);
      setErrorMessage(null);

      hotelResultService.get()
        .then(response => {
          if (response === "True") {
            setHotels(jsonResponse.results.hotels);
            setLoading(false);
          } else {
            setErrorMessage(response.Error);
            setLoading(false);
          }
        });
    };

    return (
        <div className="app-container">
          <div className="content">
            <SearchFilter search={search}/>
            {loading && !errorMessage ? (<span>loading...</span>)
            : errorMessage ? (<div className="errorMessage">{errorMessage}</div>)
            : (<div className="hotel-list">
                  {hotels.map(hotel => (
                      <div className="hotel-card" key={hotel.id}>
                          <div
                              className="image"
                              style={{ backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})`}}>
                          </div>
                          <div className="hotel-details">
                              <div className="hotel-name">
                                  {hotel.hotelStaticContent.name}
                              </div>
                              <div className="location">
                                  {hotel.hotelStaticContent.neighborhoodName}
                              </div>
                          </div>
                          <div className="price-details">
                              <span className="price">
                                  <span dangerouslySetInnerHTML={{ __html: hotel.lowestAveragePrice.symbol }}></span>
                                  {hotel.lowestAveragePrice.amount}
                              </span>
                              <span className="rewards">
                                  {hotel.rewards.miles} miles
                              </span>
                              <button className="button">Select</button>
                          </div>
                      </div>
                  ))}
              </div>)}
          </div>
        </div>
    )
}

export default App;
