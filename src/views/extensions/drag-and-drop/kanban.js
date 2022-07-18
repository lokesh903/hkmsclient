import { useEffect, useState } from 'react'
import img1 from '@src/assets/images/portrait/small/avatar-s-12.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import img3 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import img4 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import img5 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import img6 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import img7 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import img8 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import img9 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
import img10 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import axios from "axios"
import { getData } from './store/action'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSortable, Sortable, MultiDrag } from 'react-sortablejs'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, ListGroupItem, Media } from 'reactstrap'

const array = {
  list1: [
    {
      id: '1',
      img: img1,
      name: 'demo',
      content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
    }
  ],
  list2: [
    {
      id: '6',
      img: img6,
      name: 'demo',
      content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
    },
    {
      id: '7',
      img: img7,
      name: 'Oscar N. Pool',
      content: 'Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupsake.'
    },
    {
      id: '8',
      img: img8,
      name: 'Kathy A. Alvarado',
      content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
    },
    {
      id: '9',
      img: img9,
      name: 'James E. White',
      content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
    },
    {
      id: '10',
      img: img10,
      name: 'Roberta R. Babin',
      content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
    }
  ]
}

// Sortable.mount(new MultiDrag())
const DndMultiDrag = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.board)
  const [listArr1, setListArr1] = useState([])
  const [listArr2, setListArr2] = useState([])
  const [f1, setF1] = useState(false)
  const [new1, setNew1] = useState(array.list1)
  const [data, setData] = useState({})
  
//   const onUpdate1 = async () => {
//     const details = {
//     id :   1,
//     array:listArr1
//     }
//   const response = await fetch("http://localhost:9000/boards/updateboards", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json;charset=utf-8"
//   },
//   body: JSON.stringify(details)
// })
//   }
//   const onUpdate2 = async () => {
    // const details = {
    // id :   2,
    // array:listArr2
    // }
//   const response = await fetch("http://localhost:9000/boards/updateboards", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json;charset=utf-8"
//   },
//   body: JSON.stringify(details)
// })
//   }

//   useEffect(() => {
//     setListArr1(store.data.length ? store.data[0].array : [])
//     setListArr2(store.data.length ? store.data[1].array : [])
//     console.log("Store data")
//     console.log(store.data)
//   }, [listArr1])
//   useEffect(() => {
//       dispatch(
//         getData({
//           pid:1
//         })
//       )
//   }, [])

//   useEffect(() => {
//     if (listArr1.length && listArr1[0].name !== "demo") {
//       onUpdate1()
//     }
    
//   }, [listArr1])
//   useEffect(() => {
//     if (listArr2.length && listArr2[0].name !== "demo") {
//       onUpdate2()
//     }
//   }, [listArr2])

console.log("render")
// const fetch = async (details) => {
//   const response = await fetch("http://localhost:9000/boards/updateboards", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json;charset=utf-8"
//   },
//   body: JSON.stringify(details)
// })
// }

useEffect(async () => {
  const params = {pid:1}
  axios.get('http://localhost:9000/boards/getboards', {params}).then(response => {
    
    setData(response.data)
    setListArr1(response.data[0].array) 
    setListArr2(response.data[1].array)
    console.log("arr1 ,2 has set according to db", response.data)
    setF1(true)
    console.log("now f1 is true")
  }).catch(err => { console.log(err) })
}, [])

// save arr2 in sql

// useEffect(async () => {
//   if (f1) {
//     const details = {
//       id :   2,
//       array:listArr2
//       }
//     console.log("arr2 sent", listArr2)
//     const response = await fetch("http://localhost:9000/boards/updateboards", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json;charset=utf-8"
//   },
//   body: JSON.stringify(details)
// })
//   }
// }, [listArr2])

// // save arr1 in sql
// useEffect(async () => {
//   if (f1) {
//     const details = {
//       id :   1,
//       array:listArr1
//       }
//     console.log("arr1 sent", listArr1)
//     const response = await fetch("http://localhost:9000/boards/updateboards", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json;charset=utf-8"
//   },
//   body: JSON.stringify(details)
// })
//   }
// }, [listArr1])

const handlchange = async(id) => {
    // setTimeout(() => {}, 1000)
    const array = listArr1
    const details = {
      id:1,
      array
      }
    console.log("arr1 sent", listArr1)
    const response = await fetch("http://localhost:9000/boards/updateboards", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  body: JSON.stringify(details)
  })
}

// useEffect(() => {
//   console.log("state of 1 changed", listArr1)
// }, [listArr1])

const ond = async(id) => {
  console.log("on drop ", id)
  const array = listArr1
    const details1 = {
      id:1,
      array
      }
    const response = await fetch("http://localhost:9000/boards/updateboards", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  body: JSON.stringify(details1)
  }).then(console.log("arr1 sent", listArr1))

}
const ond2 = async (id) => {
  
  console.log("on drop ", id)
  const array = listArr2 
    const details2 = {
      id:2,
      array
      }
    const response2 = await fetch("http://localhost:9000/boards/updateboards", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  body: JSON.stringify(details2)
  }).then(console.log("arr2 sent", listArr2))
}
  return (
    <Card >
      <CardHeader>
        <CardTitle tag='h4'>Multiple Drag</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Use <code>MultiDrag</code> prop to create a multiple drag list.
        </CardText>
        <CardText>
          Use <code>CTRL</code> key to select multiple items.
        </CardText>
        <Row >
          <Col md='4' sm='4' lg="4" >
            <h4 className='my-1'>People Group 1</h4>
            <ReactSortable
              tag='ul'
              onSort={() => { ond(1) }}
              className='list-group list-group-flush sortable mx-2'
              group='shared-multi-drag-group'
              list={listArr1}
              setList={setListArr1}  
            >
              {listArr1.map(item => {
                
                return (
                  <ListGroupItem className='draggable' key={item.id}  >
                      <div >
                    <Media>
                      {/* <Media left tag='div'>
                        <Media
                          object
                          src={item.img}
                          className='rounded-circle mr-2 mt-2'
                          alt='Generic placeholder image'
                          height='50'
                          width='50'
                        />
                      </Media> */}
                      <Media body>

                        <h5 className='mt-2'>{item.name} </h5>
                        {item.content}
                      </Media>
                        
                    </Media>
                        </div>
                  </ListGroupItem>
                )
              })}
            </ReactSortable>
          </Col>
          <Col md='6' sm='12'>
            <h4 className='my-1' >People Group 2</h4>
            <ReactSortable
              tag='ul'
              onSort={() => { ond2(2) }}
              className='list-group list-group-flush sortable mx-2'
              group='shared-multi-drag-group'
              list={listArr2}
              setList={setListArr2}
            >
              {listArr2.map(item => {
                return (
                  <ListGroupItem className='draggable' key={item.id}  >
                    <div  >
                    <Media>
                      {/* <Media left tag='div'>
                        <Media
                          object
                          src={item.img}
                          className='rounded-circle mr-2'
                          alt='Generic placeholder image'
                          height='50'
                          width='50'
                        />
                      </Media> */}
                      <Media body>

                        <h5 className='mt-0' >{item.name}</h5>
                         {item.content} 
                        
                      </Media>
                    </Media>
                       </div>
                  </ListGroupItem>
                )
              })}
            </ReactSortable>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default DndMultiDrag
