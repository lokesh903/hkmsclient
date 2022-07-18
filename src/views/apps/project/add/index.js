import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    FormGroup,
    Col,
    Input,
    Form,
    Button,
    Label,
    CustomInput,
    InputGroup,
    InputGroupAddon,
    InputGroupText
  } from 'reactstrap'
  import { User, Mail, Smartphone, Lock, Key, File, Flag, DollarSign, Tag, Layers, Calendar } from 'react-feather'
  import Flatpickr from 'react-flatpickr'
import { useRef, useState } from 'react'
import classnames from 'classnames'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { ToastContainer, toast } from "react-toastify"
import {useHistory} from "react-router-dom"
  const AddProject = () => {

    const history = useHistory()

    const [description, setDescription] = useState('')
    const [start, setStart] = useState(new Date())
    const [status, setStatus] = useState("Submit")
    const [error, setError] = useState("")
    // const [end, setEnd] = useState(new Date())
    // const [submit, setSubmit] = useState(new Date())

    const titleRef = useRef()
    const clientRef = useRef()
    const keyRef = useRef()
    const phaseRef = useRef()
    const flagRef = useRef()
    const fileRef = useRef()
    const endRef = useRef()
    const submitRef = useRef()
    const startRef = useRef()
    const bugetRef = useRef()
    
    const handelSubmit = async (e) => {
      e.preventDefault()
      
      setStatus("Sending...")
      console.log(e.target.elements)
      const {description,  start_date, status,  project_title, client_id, key, phase,  document_file, end_date, submit_date, budget } = e.target.elements
      
      
        try {
          const p = parseFloat(phase.value, 10)
          const c = parseFloat(client_id.value, 10)
         
          const b = parseFloat(budget.value, 10)
          console.log(p, c, b)
          phase.value = p
          client_id.value = c
          budget.value = b
          
        } catch {
          return toast.warning("client_id,phase,status,budget all should be numbers")
        }
        if (phase.value >= 255) {
          return toast.warning("Project Phase should be less then 255")

        // } else if (status.value >= 255) {
        // return toast.warning("Project status should be less then 255")

      } else if (project_title.value.length >= 6500) {
        return toast.warning("Project title length  should be less then 65000 charecters")
      } else if (key.value.length >= 6500) {
        return toast.warning("Key's length  should be less then 65000 charecters")
      } else if (client_id >= (2 ^ 63) - 1) {
        return toast.warning("Client_Id should be less then 24 digit number and should be a number")
      } else if (document_file.value.length >= 6500) {
        return toast.warning("Document Path length  should be less then 65000 charecters")
      } else if (budget.value >= Math.pow(2, 63) - 1) {
        return toast.warning("Budget should be less then 24 digit number and should be a number")
      }
          const details = {
            description:description.value,  
            start_date: start_date.value, 
            status:     status.value,  
            project_title:project_title.value, 
            client_id:  client_id.value, 
            key:        key.value, 
            phase:      phase.value,  
            document_file:document_file.value, 
            end_date:   end_date.value, 
            submit_date:submit_date.value, 
            budget:      budget.value }
      const response = await fetch("http://localhost:9000/project/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(details)
      })
      setStatus("Submit")
      
      
      toast.success("Project has been added successfully")
      history.push("/dashboard/project")
    }

    return (
      
      <Card>
        <ToastContainer />
        <CardHeader>
          <CardTitle tag='h4'> Project Initialization Form </CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handelSubmit} >
            <FormGroup row>
              <Label sm='3' >
              Project Titile
              </Label>
              <Col sm='9'>
                <InputGroup className='input-group-merge'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <Tag size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type='text' name='project_title' id='project_title' placeholder='Project Title' ref={titleRef} required={true} />
                </InputGroup>
              </Col>
            </FormGroup>
             <FormGroup row>
              <Label sm='3' >
              Project Key
              </Label>
              <Col sm='9'>
                <InputGroup className='input-group-merge'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <Key size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type='text' name='key' id='key' placeholder='Project Key' ref={keyRef}  required={true} />
                </InputGroup>
              </Col>
            </FormGroup>
          
            <FormGroup row>
              <Label sm='3' for='mobileIcons'>
                Client Id
              </Label>
              <Col sm='9'>
                <InputGroup className='input-group-merge'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <User size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type='number' name='client_id' id='client_id' placeholder='Client ID' ref={clientRef}  required={true} />
                </InputGroup>
              </Col>
            </FormGroup>
  
            <FormGroup row>
              <Label sm='3' for='mobileIcons'>
                Phase
              </Label>
              <Col sm='9'>
                <InputGroup className='input-group-merge'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <Layers size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type='number' name='phase' id='phase' placeholder='Phase' ref={phaseRef} required={true} />
                </InputGroup>
              </Col>
            </FormGroup>
  
            <FormGroup row>
              <Label sm='3' for='mobileIcons'>
                Status
              </Label>
              <Col sm='9'>
                <InputGroup className='input-group-merge'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <Flag size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type='text' name='status' id='status' placeholder='Status' ref={flagRef} required={true}  />
                </InputGroup>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm='3' for='EmailIcons'>
                Document File
              </Label>
              <Col sm='9'>
                <InputGroup className='input-group-merge'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <File size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type='text' name='document_file' id='document_file' placeholder='Path of File' ref={fileRef} required={true}  />
                </InputGroup>
              </Col>
            </FormGroup>
  
            <FormGroup row>
              <Label sm='3' for='default-picker'>
                Start Date
              </Label>
              <Col sm='9'>
                <InputGroup className='input-group-merge'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <Calendar size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Flatpickr className='form-control'  id='start_date' ref={startRef} required={true}/>
                  
                </InputGroup>
              </Col>
            </FormGroup>
  
            <FormGroup row>
              <Label sm='3' for='default-picker-end'>
                End Date
              </Label>
              <Col sm='9'>
                <InputGroup className='input-group-merge'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <Calendar size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Flatpickr className='form-control'  id='end_date' ref={endRef} required={true} />
    
                </InputGroup>
              </Col>
            </FormGroup>
  
            <FormGroup row>
              <Label sm='3' for='default-picker-submit'>
                Submit Date
              </Label>
              <Col sm='9'>
                <InputGroup className='input-group-merge'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <Calendar size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Flatpickr className='form-control'  id='submit_date' ref={submitRef} required={true}/>

                </InputGroup>
              </Col>
            </FormGroup>

            <FormGroup row>
            <Label sm='3' for='passwordIcons'>
            Project Description
              </Label>
              <Col sm='9'>
        <CardBody>
          <div className='form-label-group mb-0'>
            <Input type='textarea' name='description' id='description' rows='3' value={description} placeholder='Counter'  onChange={e => setDescription(e.target.value)} required={true} />
            <Label>Counter</Label>
          </div>
           <span
            className={classnames('textarea-counter-value float-right', {
              'bg-danger': description.length > 200
            })}
            >
            {`${description.length}/200`}
          </span> 
        </CardBody>
            </Col>
            </FormGroup>
  
            <FormGroup row>
              <Label sm='3' for='mobileIcons'>
                Budget 
              </Label>
              <Col sm='9'>
                <InputGroup className='input-group-merge'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <DollarSign size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type="" name='budget' id='budget' placeholder='Budget' ref={bugetRef} required={false} />
                </InputGroup>
              </Col>
            </FormGroup>
  
            <FormGroup className='mb-0' row>
              <Col className='d-flex' md={{ size: 9, offset: 3 }}>
                <Button.Ripple  className='mr-1' color='primary' type='submit' >
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset'>
                  Reset
                </Button.Ripple>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
  export default AddProject
  