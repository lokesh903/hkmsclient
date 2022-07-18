// ** React Imports
import { Fragment } from 'react'

import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { deleteInvoice } from '../store/actions'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledTooltip
} from 'reactstrap'
import {
  Eye,
  TrendingUp,
  Send,
  MoreVertical,
  Download,
  Edit,
  Trash,
  Copy,
  CheckCircle,
  Save,
  ArrowDownCircle,
  Info,
  PieChart,
  AlertCircle,
  Upload,
  Check
} from 'react-feather'

// ** Vars
const invoiceStatusObj = {
  Pending: { color: 'light-secondary', icon: AlertCircle },
  Done: { color: 'light-success', icon: Check },
  Review: { color: 'light-primary', icon: Eye },
  Submited: { color: 'light-info', icon: Upload },
  Due: { color: 'light-danger', icon: Info },
  NotInitiated: { color: 'light-warning', icon: PieChart }
}
// const invoiceStatusObj = {
//   0: { color: 'light-secondary', icon: Send },
//   1: { color: 'light-success', icon: CheckCircle },
//   2: { color: 'light-primary', icon: Save },
//   3: { color: 'light-info', icon: ArrowDownCircle },
//   'Past Due': { color: 'light-danger', icon: Info },
//   'Partial Payment': { color: 'light-warning', icon: PieChart }
// }

// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

    return <Avatar color={color} className='mr-50' content={row.client_id ? row.client_id.toString() : 'John Doe'} initials />
  
}

// ** Table columns
export const columns = [
  {
    name: '#',
    minWidth: '107px',
    selector: 'id',
    // cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Link>
    cell: row => row.id 
  },
  {
    name: <TrendingUp size={14} />,
    minWidth: '102px',
    selector: 'invoiceStatus',
    sortable: true,
    cell: row => {
      const color = invoiceStatusObj[row.status] ? invoiceStatusObj[row.status].color : 'primary',
        Icon = invoiceStatusObj[row.status] ? invoiceStatusObj[row.status].icon : Edit
      return (
        <Fragment>
          <Avatar color={color} icon={<Icon size={14} />} id={`av-tooltip-${row.id}`} />
          <UncontrolledTooltip placement='top' target={`av-tooltip-${row.id}`}>
            <span className='font-weight-bold'>{row.status}</span>
            <br />
            <span className='font-weight-bold'>budget:</span> {row.budget}
            <br />
            <span className='font-weight-bold'>due Date:</span> {row.end_date}
          </UncontrolledTooltip>
        </Fragment>
      )
    }
  },
  {
    name: 'Client ID',
    minWidth: '250px',
    selector: 'client',
    sortable: true,
    cell: row => {
      const name = row.client_id ? row.client_id  : 'John Doe',
        email = row.client_id  ? row.client_id  : 'johnDoe@email.com'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderClient(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{name}</h6>
            <small className='text-truncate text-muted mb-0'>{email}</small>
          </div>
        </div>
      )
    }
  },
  
  {
    name: 'Title',
    selector: 'total',
    sortable: true,
    minWidth: '250px',
    cell: row => <span>{row.project_title || 0}</span>
  },
  {
    name: 'Issued Date',
    selector: 'dueDate',
    sortable: true,
    minWidth: '200px',
    cell: row => { return row.start_date ? row.start_date.slice(0, 10) : "2022/02/01" }
  },
  {
    name: 'Balance',
    selector: 'balance',
    sortable: true,
    minWidth: '164px',
    cell: row => {
      return row.budget !== 0 ? (
        <span>{row.budget}</span>
      ) : (
        <Badge color='light-success' pill>
          Paid
        </Badge>
      )
    }
  },
  {
    name: 'Action',
    minWidth: '110px',
    selector: '',
    sortable: true,
    cell: row => (
      <div className='column-action d-flex align-items-center'>
        <Send size={17} id={`send-tooltip-${row.id}`} />
        <UncontrolledTooltip placement='top' target={`send-tooltip-${row.id}`}>
          Send Mail
        </UncontrolledTooltip>
        <Link to={`/apps/invoice/preview/${row.id}`} id={`pw-tooltip-${row.id}`}>
          <Eye size={17} className='mx-1' />
        </Link>
        <UncontrolledTooltip placement='top' target={`pw-tooltip-${row.id}`}>
          Preview Invoice
        </UncontrolledTooltip>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Download size={14} className='mr-50' />
              <span className='align-middle'>Download</span>
            </DropdownItem>
            <DropdownItem tag={Link} to={`/apps/invoice/edit/${row.id}`} className='w-100'>
              <Edit size={14} className='mr-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={e => {
                e.preventDefault()
                store.dispatch(deleteInvoice(row.id))
              }}
            >
              <Trash size={14} className='mr-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Copy size={14} className='mr-50' />
              <span className='align-middle'>Duplicate</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]
