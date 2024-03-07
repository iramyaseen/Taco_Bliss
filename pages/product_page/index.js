import React from "react";
import { IoAdd, IoClose } from "react-icons/io5";

const Index = () => {
  return (
    <div className="bg-black">
      {" "}
      <div class="container">
        <div class="row">
          <div class="d-flex justify-content-end">
            <button class="close border-1 border-solid border-white">
              <i class="ri-close-line"></i>
              <IoClose />
            </button>
          </div>
          <div class="col-md-4 d-flex justify-content-center align-items-center">
            <img src="./images/main image.png" class="img-fluid" alt="" c />
          </div>
          <div class="col-md-8">
            <h2 class="text-white">Guacamole and Chips</h2>
            <p class="custom-color-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt
            </p>
            <h2 class="custom-color-2 text-white">$ 7.99</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <h2 class="text-white mb-4">Recommended Sides</h2>
          <div class="col-md-3">
            <div class="card border-1 border-solid border-white">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <img src="./images/piza.png" class="mb-3" alt="" />
                <h5 class="card-title">Chicken wrap</h5>
                <p class="card-text">$ 16.9</p>
                <button class="custom-color-2 bg-dark">
                  {/* <i class="ri-add-circle-line"></i> */}
                  <IoAdd />
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-1 border-solid border-white">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <img src="./images/piza.png" class="mb-3" alt="" />
                <h5 class="card-title">Chicken wrap</h5>
                <p class="card-text">$ 16.9</p>
                <button class="custom-color-2 bg-dark">
                  {/* <i class="ri-add-circle-line"></i> */}
                  <IoAdd />
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-1 border-solid border-white">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <img src="./images/piza.png" class="mb-3" alt="" />
                <h5 class="card-title">Chicken wrap</h5>
                <p class="card-text">$ 16.9</p>
                <button class="custom-color-2 bg-dark">
                  {/* <i class="ri-add-circle-line"></i> */}
                  <IoAdd />
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-1 border-solid border-white">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <img src="./images/piza.png" class="mb-3" alt="" />
                <h5 class="card-title">Chicken wrap</h5>
                <p class="card-text">$ 16.9</p>
                <button class="custom-color-2 bg-dark">
                  {/* <i class="ri-add-circle-line"></i> */}
                  <IoAdd />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <h2 class="text-white mb-4">Recommended Beverages</h2>
          <div class="col-md-3">
            <div class="card border-1 border-solid border-white">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <img src="./images/piza.png" class="mb-3" alt="" />
                <h5 class="card-title">Chicken wrap</h5>
                <p class="card-text">$ 16.9</p>
                <button class="custom-color-2 bg-dark">
                  {/* <i class="ri-add-circle-line"></i> */}
                  <IoAdd />
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-1 border-solid border-white">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <img src="./images/piza.png" class="mb-3" alt="" />
                <h5 class="card-title">Chicken wrap</h5>
                <p class="card-text">$ 16.9</p>
                <button class="custom-color-2 bg-dark">
                  {/* <i class="ri-add-circle-line"></i> */}
                  <IoAdd />
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-1 border-solid border-white">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <img src="./images/piza.png" class="mb-3" alt="" />
                <h5 class="card-title">Chicken wrap</h5>
                <p class="card-text">$ 16.9</p>
                <button class="custom-color-2 bg-dark">
                  {/* <i class="ri-add-circle-line"></i> */}
                  <IoAdd />
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-1 border-solid border-white">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <img src="./images/piza.png" class="mb-3" alt="" />
                <h5 class="card-title">Chicken wrap</h5>
                <p class="card-text">$ 16.9</p>
                <button class="custom-color-2 bg-dark">
                  {/* <i class="ri-add-circle-line"></i> */}
                  <IoAdd />
                </button>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-end gap-3 m-3 border-1 border-solid border-white">
            <p class="text-white">Login to pay with points</p>
            <div>
              <button class="text-white custom-bg">
                <i class="ri-subtract-fill"></i>
              </button>
              <input type="text" class="custom-bg" />
              <button class="text-white custom-bg">
                <i class="ri-add-line"></i>
              </button>
            </div>
            <div>
              <button class="add-to-cart p-2 text-white border-0">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
