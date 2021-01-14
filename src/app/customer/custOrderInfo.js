import React, { Component } from 'react'
import API from '../shared/customerOrderInfo';
class CustOrdersTable extends Component {
    state = {
        custOrdersData: []
    }
    componentDidMount() {
        API.get('/').then(res => {
            console.log(res.data.records);
            this.setState({ custOrdersData: res.data.records })
        });
    }
  render() {

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Customer Info </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Customer</a></li>
              <li className="breadcrumb-item active" aria-current="page">Basic Information</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Customer info table</h4>
               <p className="card-description"> Basic information of customers  {/* <code>.table-hover</code> */}
                </p>
                <div className="table-responsive">
                  <table className="table table-hover table-bordered table-filter">
                    <thead>
                      <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Order Number</th>
                            <th>Issue</th>
                            <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                        {this.state.custOrdersData.map(custOrder =>
                            <tr key={custOrder.id}>
                                <td>{custOrder.customerFirstName}</td>
                                <td>{custOrder.customerLastName}</td>
                                <td>{custOrder.customerEmail}</td>
                                <td>{custOrder.customerPhone}</td>
                                <th scope="row"> {custOrder.custOrderNumber}</th>
                                <td>{custOrder.custOrderConcern}</td>
                                <td><label className="badge badge-warning">Pending</label><label className="badge badge-info"><i className="mdi mdi-table-edit"></i></label><label className="badge badge-danger"><i className="mdi mdi-eraser"></i></label></td>
                            </tr>
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
         </div>
          </div>
      </div>
    )
  }
}

export default CustOrdersTable
