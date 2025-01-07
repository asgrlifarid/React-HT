import { useState } from "react";
import { usePostNewCategoryMutation } from "../../../redux/services/categoriesApi";
import { useNavigate } from "react-router-dom";
import styles from './index.module.scss';

const AddCategory = () => {

    const [category, setCategory] = useState({ name: "", description: "" });
    const [postCategory, response] = usePostNewCategoryMutation();
    const navigate = useNavigate();

    const handleAddCategory = async (e) => {
        e.preventDefault();
        try {
            await postCategory(category);
            // console.log(response);
            navigate("/products");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleAddCategory} className={styles.form}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    value={category.name}
                    onChange={(e) => {
                        setCategory({ ...category, name: e.target.value.trim() });
                    }}
                    required
                />
                <label htmlFor="desc">Description: </label>
                <input
                    type="text"
                    id="desc"
                    value={category.description}
                    onChange={(e) => {
                        setCategory({ ...category, description: e.target.value.trim() });
                    }}
                    required
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddCategory;
