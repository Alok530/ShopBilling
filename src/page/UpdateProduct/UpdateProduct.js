import React from 'react';
import './UpdateProduct.css';

function UpdateProduct() {
    return (
        <>
            <div className="addproductpage">
                <div className="addproduct">
                    <h3 className='fw-bold mb-4' style={{'color':'navy'}}>Update Product</h3>
                    <form class="row g-3">
                        <div class="col-12">
                            <label for="inputEmail4" class="form-label">Product Id</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder='123' />
                        </div>
                        <div class="col-12">
                            <label for="inputEmail4" class="form-label">Product Name</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder='Milk Biskit' />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Product Desc</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputPassword4" class="form-label">Price</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder='499.00' />
                        </div>
                        <div class="col-md-4">
                            <label for="inputAddress2" class="form-label">Quantity</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="10" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Status</label>
                            <select id="inputState" class="form-select">
                                <option selected>In-Stock</option>
                                <option>Out of Stock</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Update Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct;