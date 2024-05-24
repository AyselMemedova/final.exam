import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import axios from "axios"
import { Helmet } from 'react-helmet'



const Products = () => {
  const { data, setdata } = useContext(MainContext)
  function DeleteItem(_id) {
    axios.delete(`http://localhost:8080/api/final/${_id}`)
    const target = data.find((item) => item._id == _id);
    const targetOfIndex = data.indexOf(target);
    data.splice(targetOfIndex, 1)
    setdata([...data])
  }
  return (
    <div>
      <Helmet>
                <title>Product</title>
            </Helmet>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col ">Delete</th>


          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td><img src={item.image} alt="" width={"60px"} height={"60px"} /></td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td><button onClick={() => {
                  DeleteItem(item._id);
                }} className='btn btn-danger'>Delete</button></td>

              </tr>
            ))}

        </tbody>
      </table>
    </div>
  )
}

export default Products