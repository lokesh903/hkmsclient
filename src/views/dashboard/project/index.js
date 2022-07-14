import { useContext } from 'react'

import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'
import jsonImg from '@src/assets/images/icons/json.png'
import ProjectList from '@src/views/apps/project/list'
import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'

import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'


import '@styles/react/libs/charts/apex-charts.scss'

const AnalyticsDashboard = () => {
  const { colors } = useContext(ThemeColors)

  const avatarGroupArr = [
      {
        title: 'Billy Hopkins',
        img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Amy Carson',
        img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Brandon Miles',
        img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Daisy Weber',
        img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Jenny Looper',
        img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      }
    ],
    data = [
      {
        title: '12 Invoices have been paid',
        content: 'Invoices have been paid to the company.',
        meta: '',
        metaClassName: 'mr-1',
        customContent: (
          <Media>
            <img className='mr-1' src={jsonImg} alt='data.json' height='23' />
            <Media className='mb-0' body>
              data.json
            </Media>
          </Media>
        )
      },
      {
        title: 'Client Meeting',
        content: 'Project meeting with john @10:15am.',
        meta: '',
        metaClassName: 'mr-1',
        color: 'warning',
        customContent: (
          <Media className='align-items-center'>
            <Avatar img={ceo} />
            <Media className='ml-50' body>
              <h6 className='mb-0'>John Doe (Client)</h6>
              <span>CEO of Infibeam</span>
            </Media>
          </Media>
        )
      },
      {
        title: 'Create a new project for client',
        content: 'Add files to new design folder',
        color: 'info',
        meta: '',
        metaClassName: 'mr-1',
        customContent: <AvatarGroup data={avatarGroupArr} />
      },
      {
        title: 'Create a new project for client',
        content: 'Add files to new design folder',
        color: 'danger',
        meta: '',
        metaClassName: 'mr-1'
      }
    ]

  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
        <Col xs='12'>
        <ProjectList />
        </Col>
      </Row>
    </div>
  )
}

export default AnalyticsDashboard
