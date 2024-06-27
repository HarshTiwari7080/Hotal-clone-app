function Sales() {
    return (
        <>
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
        </>

    );

}


export default Sales;