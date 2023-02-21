import {Modal,Button,Form} from 'react-bootstrap'
import React,{useState} from "react";
const AddMovie=({handleMovie})=>{
    const [show, setShow] = useState(false);
    
    const [title,setName]=useState("");
    const [Description,setDescription]=useState("");
    const [posterURL,setImage]=useState("");
    const [rating,setRating]=useState("");
    
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>AddMovie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            
      <Form.Group className="mb-3" >
        <Form.Label>Enter Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
       </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Enter Description</Form.Label>
        <Form.Control type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
      </Form.Group>
         
      <Form.Group className="mb-3" >
        <Form.Label>Enter image</Form.Label>
        <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setImage(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Enter rating</Form.Label>
        <Form.Control type="number" placeholder="Enter rating" onChange={(e)=>setRating(e.target.value)} />
        </Form.Group>

        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleMovie({id:Math.random(),title,posterURL,Description,rating});handleClose()}}>
            save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}
export default AddMovie