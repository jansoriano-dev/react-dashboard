import React, { Component } from 'react'
import API from '../shared/customerInfo';
class CustInfoTable extends Component {
    state = {
        custInfoData: []
    }
    componentDidMount() {
        API.get('/').then(res => {
            console.log(res.data.records);
            this.setState({ custInfoData: res.data.records })
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
                            <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                        {this.state.custInfoData.map(custDetail =>
                            <tr key={custDetail.id}>
                                <th scope="row"> {custDetail.firstName}</th>
                                <td>{custDetail.lastName}</td>
                                <td>{custDetail.email}</td>
                                <td>{custDetail.phone}</td>
                                <td><label className="badge badge-success">Active</label><label className="badge badge-info"><i className="mdi mdi-table-edit"></i></label><label className="badge badge-danger"><i className="mdi mdi-eraser"></i></label></td>
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

export default CustInfoTable
