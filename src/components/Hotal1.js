function Hotal1() {
    return (
        <div class="card-body">





            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfpdATK0fU0By1Xxfsj2GS2tIUWQPRhh4FoOD0EdMlahpwYu8kMI05D7DGlPWHn8d0G_I&usqp=CAU" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://assets.architecturaldigest.in/photos/65b2aecb4376bfbcb38f93ce/master/w_1600%2Cc_limit/atr.royalmansion-majlis-mr.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div><br />
            <button type="button" class="btn btn-primary w-100 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                Book Now.
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Booking</h1>

                        </div>
                        <div class="modal-body">
                            Booking Successful✅
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div><hr />











        </div>


    );
}

export default Hotal1;