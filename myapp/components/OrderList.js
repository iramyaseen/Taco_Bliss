import React, { useEffect, useState } from "react";
import { TbLocation } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import LocationMap from "../components/location";
import { FiRefreshCcw } from "react-icons/fi";

const OrderList = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(LocationMap);
  const searchLocationFun = () => {
    const filtered = LocationMap.filter((item) =>
      item.city.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setFilteredLocations(filtered);
  };
  const clearSearch = () => {
    setSearchLocation("");
    setFilteredLocations(LocationMap);
  };
  useEffect(() => {
    searchLocationFun();
  }, [searchLocation]);
  return (
    <div className="order-list-box">
      <div className="container location-box">
        <div className="search-location">
          <div className="input-box">
            <input
              type="text"
              placeholder="Search Locations..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            <IoMdCloseCircleOutline
              className="close-btn"
              onClick={() => clearSearch()}
            />
          </div>
          <TbLocation onClick={searchLocationFun} className="search-btn" />
        </div>
        <div className="order-location">
          {filteredLocations.length === 0 ? (
            <p className="no-search-found">
              No matching Location found. Please check again{" "}
              <FiRefreshCcw onClick={clearSearch} />
            </p>
          ) : (
            filteredLocations.map((item, index) => {
              return (
                <div key={index} className="location-id">
                  <h3>{item?.city}</h3>
                  <div className="flex-same">
                    <LuPhone />
                    <p>{item?.phone}</p>
                  </div>
                  <div className="flex-same">
                    <MdOutlineEmail />
                    <p>{item?.email}</p>
                  </div>
                  <div className="flex-same">
                    <IoLocationOutline />
                    <p>{item?.location}</p>
                  </div>
                  <div
                    style={{
                      marginTop: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <div className="time-box">
                      <IoTimeOutline />
                      <p>{item?.time}</p>
                    </div>
                    <div>
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#06B906",
                        }}
                      >
                        See Hours <FaAngleRight />{" "}
                      </p>
                    </div>
                  </div>
                  <div className="order-now-btn">
                    <button>Order Now</button>
                  </div>
                  <div className="order-now-btn make-location">
                    <button>Make this your location</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
