import React from 'react';
import './Billing.css';

function Billing() {
    return (
        <>
            <div className="billingpage">
                <div className="billing">
                    <form className="row g-2">
                        <div className="billdiv1 row g-2">
                            <h4 className='m-0 mt-3 fw-bold'>Buyer Details</h4>
                            <div className="col-md-4">
                                <label for="inputEmail4" className="form-label">Name</label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder='Alok Kumar Rai' />
                            </div>
                            <div className="col-md-4">
                                <label for="inputEmail4" className="form-label">Contact No</label>
                                <input type="tel" className="form-control" id="inputEmail4" placeholder='3438478883' />
                            </div>
                            <div className="col-md-4">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder='buyer@gmail.com' />
                            </div>
                            <div className="col-12 mb-3">
                                <label for="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                        </div>
                        <div className="billdiv1 row g-2">
                            <h4 className='m-0 fw-bold'>Product Details</h4>
                            <div className="col-md-3">
                                <label for="inputEmail4" className="form-label">Product Id</label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder='2332' />
                            </div>
                            <div className="col-md-3">
                                <label for="inputEmail4" className="form-label">Product Name</label>
                                <input type="tel" className="form-control" id="inputEmail4" placeholder='Milk' />
                            </div>
                            <div className="col-md-2">
                                <label for="inputEmail4" className="form-label">Rate</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder='23.00' />
                            </div>
                            <div className="col-md-2">
                                <label for="inputAddress" className="form-label">Quantity</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="2" />
                            </div>
                            <div className="col-md-2">
                                <label for="inputAddress" className="form-label">Total</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="46.00" />
                            </div>
                            <div className="col-12 mb-2 mt-3">
                                <button type="submit" className="btn btn-success">Add Item</button>
                            </div>
                        </div>

                        <div className="billdiv1 row g-2 mt-2">
                            <h4 className='m-0 fw-bold'>Bill</h4>
                            <div className="col-md-8">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Rate</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">Milk Biskit</td>
                                            <td>5.00</td>
                                            <td>2</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Milk Biskit</td>
                                            <td>5.00</td>
                                            <td>2</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Milk Biskit</td>
                                            <td>5.00</td>
                                            <td>2</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Milk Biskit</td>
                                            <td>5.00</td>
                                            <td>2</td>
                                            <td>10</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-4">
                                <h4 className='m-0 fw-bold mb-2'>Calculation</h4>
                                <div className="row g-3 align-items-center">
                                    <div className="col-6">
                                        <label for="inputPassword6" className="col-form-label">Total</label>
                                    </div>
                                    <div className="col-6">
                                        <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" placeholder='234.00' />
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center mb-2">
                                    <div className="col-6">
                                        <label for="inputPassword6" className="col-form-label">Paid Amount</label>
                                    </div>
                                    <div className="col-6">
                                        <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" placeholder='234.00' />
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center">
                                    <div className="col-6">
                                        <label for="inputPassword6" className="col-form-label">Return Amount</label>
                                    </div>
                                    <div className="col-6">
                                        <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" placeholder='234.00' />
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center mb-2 mt-1 text-center">
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-success">Save</button>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-danger">Reset</button>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-info">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Billing