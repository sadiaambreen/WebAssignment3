import React from 'react'
import './App.css'

function Ourcollections (){
    return(
        <section id="collections">
        <h1 style={{fontSize: '22px', marginBottom: '5px', textAlign: 'center', paddingTop: '20px'}}
        >
          Our Collections
        </h1>
        {/* <!-- Carousel wrapper --> */}
        <div
          id="carouselMultiItemExample"
          className="carousel slide carousel-dark text-center"
          data-mdb-ride="carousel"
        >
          {/* <!-- Controls --> */}

          {/* <!-- Inner --> */}
          <div className="carousel-inner py-4">
            {/* <!-- Single item --> */}
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                        className="card-img-top"
                        alt="Waterfall"
                      />
                      <div className="card-body">
                        <h5 className="card-title">NATURE</h5>
                        <p className="card-text">
                          Nature photography is a wide range of photography taken outdoors and devoted to displaying natural elements such as landscapes, wildlife, plants, and close-ups of natural scenes and textures.
                        </p>
                        <a href="#!" className="btn btn-primary">MORE</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                        className="card-img-top"
                        alt="Sunset Over the Sea"
                      />
                      <div className="card-body">
                        <h5 className="card-title">AESTHETIC</h5>
                        <p className="card-text">
                          Aesthetics, on the other hand, goes a little further than technical aspects. Aesthetics in photography refers to patterns in a photographer's use of visual elements to create beautiful images.
                        </p>
                        <a href="#!" className="btn btn-primary">MORE</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                        className="card-img-top"
                        alt="Sunset over the Sea"
                      />
                      <div className="card-body">
                        <h5 className="card-title">PORTRAIT</h5>
                        <p className="card-text">
                          Portrait photography, or portraiture, is a type of photography aimed toward capturing the personality of a person or group of people by using effective lighting, backdrops, and poses.
                        </p>
                        <a href="#!" className="btn btn-primary">MORE</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                        className="card-img-top"
                        alt="Fissure in Sandstone"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Lorem Ipsum</h5>
                        <p className="card-text">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odio autem deleniti dolores corporis at magnam eveniet consequatur excepturi sit. Nemo rem quae eos excepturi necessitatibus. Eius dolorum deserunt quam.
                        </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                        className="card-img-top"
                        alt="Storm Clouds"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Lorem Ipsum</h5>
                        <p className="card-text">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odio autem deleniti dolores corporis at magnam eveniet consequatur excepturi sit. Nemo rem quae eos excepturi necessitatibus. Eius dolorum deserunt quam.
                        </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                        className="card-img-top"
                        alt="Hot Air Balloons"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Lorem Ipsum</h5>
                        <p className="card-text">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odio autem deleniti dolores corporis at magnam eveniet consequatur excepturi sit. Nemo rem quae eos excepturi necessitatibus. Eius dolorum deserunt quam.
                        </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                        className="card-img-top"
                        alt="Peaks Against the Starry Sky"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Lorem Ipsum</h5>
                        <p className="card-text">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odio autem deleniti dolores corporis at magnam eveniet consequatur excepturi sit. Nemo rem quae eos excepturi necessitatibus. Eius dolorum deserunt quam.
                        </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                        className="card-img-top"
                        alt="Bridge Over Water"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Lorem Ipsum</h5>
                        <p className="card-text">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odio autem deleniti dolores corporis at magnam eveniet consequatur excepturi sit. Nemo rem quae eos excepturi necessitatibus. Eius dolorum deserunt quam.
                        </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                        className="card-img-top"
                        alt="Purbeck Heritage Coast"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Lorem Ipsum</h5>
                        <p className="card-text">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odio autem deleniti dolores corporis at magnam eveniet consequatur excepturi sit. Nemo rem quae eos excepturi necessitatibus. Eius dolorum deserunt quam.
                        </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button
              className="carousel-control-prev position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample"
              data-mdb-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample"
              data-mdb-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* <!-- Inner --> */}
        </div>
        {/* <!-- Carousel wrapper --> */}
      </section>

    )
}
    export default Ourcollections;