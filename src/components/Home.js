function Home() {


    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://themewagon.github.io/keto/images/banner2.jpg"
                        className="d-block w-100" alt="Banner1" height='400' />
                    <div className="carousel-caption d-none d-md-block">

                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://themewagon.github.io/keto/images/about.png"
                        className="d-block w-100" alt="banner2" height='400' />
                    <div className="carousel-caption d-none d-md-block">

                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://themewagon.github.io/keto/images/banner1.jpg"
                        className="d-block w-100" alt="banner3" height='400' />
                    <div className="carousel-caption d-none d-md-block">

                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>


            <div>
                <h3 className="p-2 text-bg-primary text-center">Our Rooms</h3>
                <h1 className="p-2 text-color-black text-center">Explore Our Rooms</h1><hr />







                <div class="row">


                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <img src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg" className="card-img-top" alt="..." />
                                <h5 class="card-title">PAVILION SUITE</h5>
                                <p class="card-text">A Pavilion Suite is a luxurious and spacious accommodation option often found in high-end hotels and resorts. These suites are designed to provide guests with an elevated level of comfort, privacy, and elegance. Here is a detailed description of what you might expect in a Pavilion Suite.</p>
                                <span class="badge rounded-pill text-bg-warning">$ 900</span><br /><br />
                                <a href="/hotal1" class="btn btn-primary">MORE IMFORMATION</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/2c/cb/5d/caption.jpg?w=700&h=-1&s=1" className="card-img-top" alt="..." height={340} />
                                <h5 class="card-title">FAMILY HOTAL</h5>
                                <p class="card-text"> A family hotel is designed to cater specifically to the needs and preferences of families traveling with children. These hotels typically offer a range of amenities, services, and activities to ensure that both parents and children have a comfortable and enjoyable stay. Here is a detailed description of what you might find in a family hotel.</p>
                                <span class="badge rounded-pill text-bg-warning">$ 5000</span><br /><br />
                                <a href="/hotal2" class="btn btn-primary">MORE IMFORMATION</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div><hr />

            <div class="card text-bg-dark">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvlLFwpYVyh6gXhLkwZ4PMmMdhonibgZSIA&s" class="card-img" alt="..." />
                <div class="card-img-overlay">
                    <h5 class="card-title">Hotal</h5>


                </div>
            </div><hr /><br />


            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/411944209.jpg?k=b82f07a226ad6ee28d500bd7bd81ea871e403a1917a7c9a093922ee048aa89f9&o=&hp=1" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">OCEAN VIEW POOL VILLA</h5>
                            <p class="card-text">
                                An Ocean View Pool Villa is an epitome of luxury and tranquility, offering guests an exquisite stay with stunning ocean views and a private pool. These villas are typically found in high-end resorts and are designed to provide an unparalleled experience of comfort, privacy, and natural beauty. Here is a detailed description of what you might expect in an Ocean View Pool Villa.</p>

                            <span class="badge rounded-pill text-bg-warning">$ 1000</span><br /><br />
                            <a href="/hotal3" class="btn btn-primary">MORE IMFORMATION</a>




                        </div>
                    </div>
                </div>
            </div><hr />








            <div className="row text-bg-dark ">
                <div className="col d-flex flex-column justify-content-center"><br></br>

                    <button className="btn btn-link text-decoration-none"><h3>CONTACT US</h3></button>

                    <button className="btn btn-link">Adderss</button>
                    <button className="btn btn-link">+0123568368</button>
                    <button className="btn btn-link">hotal@gmail.com</button>

                </div>
                <div className="col d-flex flex-column justify-content-center"><br></br>

                    <button className="btn btn-link text-decoration-none"><h3>MENU LINK</h3></button>
                    <button className="btn btn-link">Home</button>
                    <button className="btn btn-link">ABOUT</button>
                    <button className="btn btn-link">OUR ROOM</button>

                </div>
                <div className="col d-flex flex-column justify-content-center"><br></br>

                    <button className="btn btn-link text-decoration-none"><h3>NEW LETTER</h3></button>
                    <form>
                        <div class="mb-1">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-1">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>



            </div><hr />
            <div className="container text-center"><h>Copyright&copy: 2024 Vip hotal, All Rights Reserved.</h></div><hr />

        </div>


    )
}

export default Home;