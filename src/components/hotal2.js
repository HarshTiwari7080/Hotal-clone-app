function Hotal2() {
    return (
        <div class="card-body">





            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuNYSEpgCduCoxAuDvd6eGOZp5k0C8KfQXPrWMET4RIJR3IQLxo6Lm9dabnfFGxR5OWw&usqp=CAU" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtfa6uzPW4K3htwYncZ-cVgVfuvnRcmv2tpBTaqZzNt1HVYqUF-mZ9nV6PhSAnil_C2Q&usqp=CAU" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.pinimg.com/736x/08/0a/64/080a6440a165f5dea5ce6f0311b1567e.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://hotelimg.lowestfare.com.hk/c/1180/1180115/Image/069626a_hb_ro_132.jpg" class="d-block w-100" alt="..." />
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

export default Hotal2;