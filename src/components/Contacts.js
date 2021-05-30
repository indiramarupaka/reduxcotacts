import React, { useEffect } from 'react';
import {connect } from 'react-redux';
import { getAllContacts } from '../redux/actions/contactAction';


 function Contacts({getAllContacts,contacts}){

  useEffect(()=>{
    getAllContacts()
  })
    return(
      <div className="container d-flex flex-row justify-content-between mt-4">
<div>
<h3>All contacts</h3>

</div>
<div className="container mt-4">


<table class="table table-light">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">FullName</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {contacts.length> 0 && contacts.map((contact,index)=>(
    <tr>
      <th >{index+1}</th>
      <th >{contact.name}</th>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td><button className="btn btn-primary">Add</button> &nbsp;
<button className="btn btn-danger">Delete</button></td>
    </tr>
    ))}
    
    
  </tbody>

</table>
</div>


</div>

    )
}
const mapStateToProps = (state) =>{
  return{
    contacts:state.contacts,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getAllContacts: ()=> dispatch(getAllContacts())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Contacts)