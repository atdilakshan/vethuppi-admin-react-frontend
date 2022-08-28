import React from 'react'
// import { userNavigate, Link } from 'react-router-dom'

// components here
import Header from '../../layouts/admin/Header'
import Aside from '../../layouts/admin/Aside'
import Footer from '../../layouts/admin/Footer'

export default function Dashboard() {
    return (
        <>
            <Header />
            <Aside />

            {/* <!-- start main section --> */}
            <main id="main" className="main">

                {/* <!-- start pagetitle --> */}
                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                    </nav>
                </div>
                {/* <!-- end pagetitle --> */}

                {/* <!-- start dashboard section --> */}
                <section className="section dashboard">
        
                    {/* <!-- start card section --> */}
                    <div className="row">
          
                        {/* <!-- start product card --> */}
                        <div className="col-xxl-4 col-md-6">
                            <div className="card info-card product-card">

                                <div className="card-body">
                                    <h5 className="card-title">Products</h5>
                                    <div className="d-flex align-items-center">
                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i className="bi bi-cart"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h6>145</h6>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        {/* <!-- end product card --> */}
          
                        {/* <!-- start revenue Card --> */}
                        <div className="col-xxl-4 col-md-6">
                            <div className="card info-card revenue-card">
                            
                                {/* <!-- start filter --> */}
                                <div className="filter">
                                    <a className="icon" href="/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    
                                        <li className="dropdown-header text-start">
                                            <h6>Filter</h6>
                                        </li>
                                        
                                        <li><a className="dropdown-item" href="../">Today</a></li>
                                        <li><a className="dropdown-item" href="../">This Month</a></li>
                                        <li><a className="dropdown-item" href="../">This Year</a></li>
                                    </ul>
                                </div>
                                {/* <!-- end filer --> */}
                                

                                <div className="card-body">
                                    <h5 className="card-title">Revenue <span>| This Month</span></h5>
                                    
                                    <div className="d-flex align-items-center">
                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i className="bi bi-currency-dollar"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h6>$3,264</h6>
                                            <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                                        </div>
                                    </div>

                                </div>
                            
                            </div>
                        </div>
                        {/* <!-- end revenue card --> */}
          
                        {/* <!-- start customer card --> */}
                        <div className="col-xxl-4 col-md-6">
                            <div className="card info-card customer-card">
                            
                                {/* <!-- start filter --> */}
                                <div className="filter">
                                    <a className="icon" href="/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    
                                        <li className="dropdown-header text-start">
                                            <h6>Filter</h6>
                                        </li>

                                        <li><a className="dropdown-item" href="../">Today</a></li>
                                        <li><a className="dropdown-item" href="../">This Month</a></li>
                                        <li><a className="dropdown-item" href="../">This Year</a></li>
                                    
                                    </ul>
                                </div>
                                {/* <!-- end filter --> */}
                                
                                <div className="card-body">
                                    <h5 className="card-title">Customers <span>| This Year</span></h5>
                                    
                                    <div className="d-flex align-items-center">
                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i className="bi bi-people"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h6>1244</h6>
                                            <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>

                        </div>
                        {/* <!-- end customer card --> */}
        
                    </div>
                    {/* <!-- end card section --> */}
        
                    {/* <!-- start report section --> */}
                    <div className="row">

                        {/* <!-- start left side panel --> */}
                        <div className="col-lg-8">

                            {/* <!-- start recent sales --> */}
                            <div className="col-lg-12">
                                <div className="card recent-sales overflow-auto">

                                    <div className="card-body">
                                        <h5 className="card-title">Recent Sales</h5>

                                        <table className="table table-borderless datatable">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row"><a href="../">#2457</a></th>
                                                    <td>Brandon Jacob</td>
                                                    <td><a href="../" className="text-primary">At praesentium minu</a></td>
                                                    <td>$64</td>
                                                    <td><span className="badge bg-success">Approved</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="../">#2147</a></th>
                                                    <td>Bridie Kessler</td>
                                                    <td><a href="../" className="text-primary">Blanditiis dolor omnis similique</a></td>
                                                    <td>$47</td>
                                                    <td><span className="badge bg-warning">Pending</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="../">#2049</a></th>
                                                    <td>Ashleigh Langosh</td>
                                                    <td><a href="../" className="text-primary">At recusandae consectetur</a></td>
                                                    <td>$147</td>
                                                    <td><span className="badge bg-success">Approved</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="../">#2644</a></th>
                                                    <td>Angus Grady</td>
                                                    <td><a href="../" className="text-primary">Ut voluptatem id earum et</a></td>
                                                    <td>$67</td>
                                                    <td><span className="badge bg-danger">Rejected</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="../">#2644</a></th>
                                                    <td>Raheem Lehner</td>
                                                    <td><a href="../" className="text-primary">Sunt similique distinctio</a></td>
                                                    <td>$165</td>
                                                    <td><span className="badge bg-success">Approved</span></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>
                            {/* <!-- end recent sales --> */}

                            {/* <!-- start top selling --> */}
                            <div className="col-lg-12">
                                <div className="card top-selling overflow-auto">

                                    <div className="card-body pb-0">
                                        <h5 className="card-title">Top Selling</h5>

                                        <table className="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Preview</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Sold</th>
                                                    <th scope="col">Revenue</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row"><a href="../"><img src="assets/img/product-1.jpg" alt="" /></a></th>
                                                    <td><a href="../" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                                                    <td>$64</td>
                                                    <td className="fw-bold">124</td>
                                                    <td>$5,828</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="../"><img src="assets/img/product-1.jpg" alt="" /></a></th>
                                                    <td><a href="../" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                                                    <td>$64</td>
                                                    <td className="fw-bold">124</td>
                                                    <td>$5,828</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="../"><img src="assets/img/product-1.jpg" alt="" /></a></th>
                                                    <td><a href="../" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                                                    <td>$64</td>
                                                    <td className="fw-bold">124</td>
                                                    <td>$5,828</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="../"><img src="assets/img/product-1.jpg" alt="" /></a></th>
                                                    <td><a href="../" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                                                    <td>$64</td>
                                                    <td className="fw-bold">124</td>
                                                    <td>$5,828</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="../"><img src="assets/img/product-1.jpg" alt="" /></a></th>
                                                    <td><a href="../" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                                                    <td>$64</td>
                                                    <td className="fw-bold">124</td>
                                                    <td>$5,828</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>
                            {/* <!-- end top selling --> */}

                        </div>
                        {/* <!-- end left side panel --> */}
        
                        {/* <!-- start right side panel --> */}
                        <div className="col-lg-4">

                            {/* <!-- start recent activity --> */}
                            <div className="card">

                                <div className="card-body">
                                    <h5 className="card-title">Recent Activity</h5>

                                    <div className="activity">

                                        <div className="activity-item d-flex">
                                            <div className="activite-label">32 min</div>
                                            <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                            <div className="activity-content">
                                                Quia quae rerum <a href="../" className="fw-bold text-dark">explicabo officiis</a> beatae
                                            </div>
                                        </div>
                                        
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">32 min</div>
                                            <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                            <div className="activity-content">
                                                Quia quae rerum <a href="../" className="fw-bold text-dark">explicabo officiis</a> beatae
                                            </div>
                                        </div>
                                        
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">32 min</div>
                                            <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                            <div className="activity-content">
                                                Quia quae rerum <a href="../" className="fw-bold text-dark">explicabo officiis</a> beatae
                                            </div>
                                        </div>
                                        
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">32 min</div>
                                            <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                            <div className="activity-content">
                                                Quia quae rerum <a href="../" className="fw-bold text-dark">explicabo officiis</a> beatae
                                            </div>
                                        </div>
                                        
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">32 min</div>
                                            <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                            <div className="activity-content">
                                                Quia quae rerum <a href="../" className="fw-bold text-dark">explicabo officiis</a> beatae
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            {/* <!-- end recent activiy --> */}
        
                        </div>
                        {/* <!-- end right side panel --> */}
      
                    </div>
                    {/* <!-- end report section --> */}
    
                </section>
                {/* <!-- end dashboard section --> */}
  
            </main>
            {/* <!-- end main section --> */}

            <Footer />
        </>
    )
}
