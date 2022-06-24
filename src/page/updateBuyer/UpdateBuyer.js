import React from 'react';
import './UpdateBuyer.css';

function UpdateBuyer() {
    return (
        <>
            <div className="addproductpage">
                <div className="addproduct">
                    <h3 className='fw-bold mb-4'>Update Buyer</h3>
                    <form class="row g-3">
                        <div class="col-12">
                            <label for="inputEmail4" class="form-label">Name</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder='Alok Kumar' />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Mobile Number</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="374837483" />
                        </div>
                        <div class="col-12">
                            <label for="inputPassword4" class="form-label">Address</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder='Chapra Bihar, 841417' />
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateBuyer