// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

// ** Store & Actions
import { addUser } from '../store/action'
import { useDispatch } from 'react-redux'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState('teammember')
  const [plan, setPlan] = useState('basic')

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  // ** Function to handle form submit
  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addUser({
          name: values['full-name'],
          user_type: role,
          phone_no: values.contact,
          email: values.email,
          status:"Active"
        })
      )
    }
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New User'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='full-name'>
            Full Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='full-name'
            id='full-name'
            placeholder='John Doe'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['full-name'] })}
          />
        </FormGroup>
        
        <FormGroup>
          <Label for='email'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='john.doe@example.com'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['email'] })}
          />
          <FormText color='muted'>You can use letters, numbers & periods</FormText>
        </FormGroup>
        
        
        <FormGroup>
          <Label for='contact'>
            Contact <span className='text-danger'>*</span>
          </Label>
          <Input
            name='contact'
            id='contact'
            placeholder='(+91) 7894561238'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['contact'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='user-role'>User Role</Label>
          <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            <option value='client'>Client</option>
            <option value='projectowner'>Project Owner</option>
            <option value='teamleader'>Team Leader</option>
            <option value='teammember'>Team Member</option>
          </Input>
        </FormGroup>
        
        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
