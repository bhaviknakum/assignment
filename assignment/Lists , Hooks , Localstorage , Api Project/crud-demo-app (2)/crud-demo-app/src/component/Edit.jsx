import React,{useState} from "react";
import { Container,Row,Button,Form} from "react-bootstrap";
import Data from "./Data";
const Edit=()=>{
    return (
        <>
      <Container className="p-5 mt-5 w-75 mx-auto shadow">
      <Row>
        <div className="col-md-5">
        <img src="https://th.bing.com/th/id/OIP.zxvbAilXBmmuoU-15JmHIwHaFj?rs=1&pid=ImgDetMain" alt="create" className="img-fluid" />   
        </div>
     
        <div className="col-md-7">
        <h3>Edit Data here *</h3>
        <hr className="w-50 border border-1 border-dark" />
        <Form>
            <div className="form-group mt-3">
            <label className="text-success">Edit your Name *</label>
                <input type="text" name="name" placeholder="Name *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
            
            <label className="text-success">Edit your Email *</label>
                <input type="text" name="name" placeholder="Email *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
            
            <label className="text-success">Edit your Phone *</label>
                <input type="text" name="name" placeholder="Phone *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
            
            <label className="text-success">Edit your Address *</label>
                <input type="text" name="name" placeholder="Address *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
            
            <label className="text-success">Edit your PinCode *</label>
                <input type="text" name="name" placeholder="PinCode *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
                <input type="submit" name="updatedata" value="Update Data"  className="btn bg-dark text-white btn-md" />
            </div>
        </Form>
        </div>
      </Row>
       
      </Container>
       <>
       
       </>
          
        </>
    )
}

export default Edit