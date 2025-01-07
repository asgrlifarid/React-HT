import { useDeleteCategoryByIdMutation, useGetAllCategoriesQuery } from "../../../redux/services/categoriesApi";
import { FaTrashAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'; 
import styles from './index.module.scss';
import { toggleFavorites } from "../../../redux/features/wishlistSlice";


const Categories = () => {

    const { data: categories, isLoading, isError, refetch } = useGetAllCategoriesQuery();

    const wishlist = useSelector((state) => state.wishlist)

    const [deleteCategoryById, deleteResponse] = useDeleteCategoryByIdMutation()

    const dispatch = useDispatch();

    const handleDelete = async (categoryId) => {
        try {
           
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });

            
            if (result.isConfirmed) {
                await deleteCategoryById(categoryId);
                
                Swal.fire(
                    'Deleted!',
                    'Your category has been deleted.',
                    'success'
                );
                refetch();  
            }

        } catch (error) {
     
            Swal.fire(
                'Error!',
                'There was an issue deleting the category.',
                'error'
            );
            console.log(error);
        }
    }

    return (
        <div className={styles.container}>
            {isLoading && <h1 className={styles.loading}>Loading...</h1>}
            {isError && <h1 className={styles.error}>Some error occurred!</h1>}

            {categories &&

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((c) => {
                            return (
                                <tr key={c.id}>
                                    <td>{c.id}</td>
                                    <td>{c.name}</td>
                                    <td>{c.description}</td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button onClick={() => { handleDelete(c.id) }}><FaTrashAlt /></button>
                                            <button onClick={() => { dispatch(toggleFavorites(c)) }}>
                                        {
                                            !wishlist?.items.find((q) => q.id === c.id) ? <FaRegHeart /> : <FaHeart />
                                        }
                                    </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            }
        </div>
    )
}

export default Categories;
