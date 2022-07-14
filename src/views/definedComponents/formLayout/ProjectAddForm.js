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
import { User, Mail, Smartphone, Lock, Key, Flag, DollarSign } from 'react-feather'
 







const HorizontalFormIcons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Project Initialization Form</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
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
                <Input type='text' name='project_title' id='nameIcons' placeholder='Project Title' />
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
                <Input type='text' name='key' id='nameIcons' placeholder='Project Key' />
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
                <Input type='number' name='client_key' id='mobileIcons' placeholder='Client ID' />
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
                <Input type='number' name='phase' id='mobileIcons' placeholder='Phase' />
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
                    <Flag size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='number' name='status' id='mobileIcons' placeholder='Status' />
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
                <Input type='email' name='document_file' id='EmailIcons' placeholder='Email' />
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
                <Flatpickr className='form-control'  id='default-picker' />
  
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
                <Flatpickr className='form-control'  id='default-picker-end' />
  
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
                <Flatpickr className='form-control'  id='default-picker-submit' />
  
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
          <Input type='textarea' name='text' id='exampleText'rows='3' value={value}placeholder='Counter' onChange={e => setValue(e.target.value)} />
          <Label>Counter</Label>
        </div>
        <span
          className={classnames('textarea-counter-value float-right', {
            'bg-danger': value.length > 20
          })}
          >
          {`${value.length}/200`}
        </span>
      </CardBody>
          </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='mobileIcons'>
              Buget 
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <DollarSign size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="" name='Buget' id='mobileIcons' placeholder='Buget' />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
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
export default ProjectAddForm
