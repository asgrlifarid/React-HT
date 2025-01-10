import React, {useContext} from 'react'
import { FavoritesContext } from "../../context/WishlistProvider/index";
import { FaRegHeart } from "react-icons/fa";
const Wishlist = () => {
  const { favorites, toggleFavorites, clearFavorites } = useContext(FavoritesContext);

  return (
    <div className='container'>
          <div className="row " >
          {
            favorites && favorites.map((c) => {
              return (
    
    
                
                  
                    <div className="col-12 col-md-6 col-lg-4 " key={c.id}>
                      <div className="card" style={{ marginTop: "5rem" }}>
                        <img src={c.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{c.title}</h5>
                          <p className="card-text">{c.description}</p>
                          <p style={{ color: "red" }}>${c.price}</p>
                          <button onClick={()=>{toggleFavorites(c)}} className="btn btn-danger"><FaRegHeart /></button>
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

export default Wishlist
