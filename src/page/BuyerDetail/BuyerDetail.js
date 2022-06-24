import React from 'react';
import './BuyerDetail.css';

function BuyerDetail() {
    return (
        <>
            <div className="addproductpage">
                <div className="addproduct">
                    <h3 className='fw-bold mb-2' style={{'color':'navy'}}>Buyer Details</h3>
                    <form class="row g-3">
                        <div class="col-12">
                            <label for="inputEmail4" class="form-label">Name</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder='Alok Kumar' />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Mobile Number</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="374837483" />
                        </div>
                        <div class="col-12 mb-3">
                            <label for="inputPassword4" class="form-label">Address</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder='Chapra Bihar, 841417' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BuyerDetail