import React, { useEffect, useState , useContext} from 'react'
import { FavoritesContext } from "../../context/WishlistProvider/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import controller from '../../services/index'
import { endpoints } from '../../services/contsnts'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
const Catalog = () => {
  const { toggleFavorites, favorites } = useContext(FavoritesContext);
  const [catalog, setCatalog] = useState([])

  useEffect(() => {

    getData()

  }, [])


  const getData = async () => {
    const data = await controller.getAllData(endpoints.products)
    console.log(data);
    setCatalog(data)

  }

  return (
    <div className='container'>
      <div className="row " >
      {
        catalog && catalog.map((c) => {
          return (


            
              
                <div className="col-12 col-md-6 col-lg-4 " key={c.id} >
                  <div className="card" style={{ marginTop: "5rem" }}>
                    <img src={c.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{c.title}</h5>
                      <p className="card-text">{c.description}</p>
                      <p style={{ color: "red" }}>${c.price}</p>
                      <button onClick={() => toggleFavorites(c)} className="btn btn-danger">{favorites.find((q) => q.id === c.id) ? <FaHeart /> : <FaRegHeart />}</button>
                    </div>
                  </div>
                </div>
              

            

          )
        })
      }
      </div>
    </div>
  )
}

export default Catalog
