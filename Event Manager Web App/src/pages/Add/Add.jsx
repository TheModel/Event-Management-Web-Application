import React, { useState } from 'react'
import './Add.css'
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {

    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Sports"
    });

    const [image, setImage] = useState(false);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log('Add button clicked'); // Log statement added here
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            toast.success("Event Added Successfully")
            setData({
                name: "",
                description: "",
                price: "",
                category: "Sports"
            })
            setImage(false);
            window.location.href = 'http://localhost:5174/'
        } else {
            toast.error(response.data.message)
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload image</p>
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                    </label>
                    <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" id="image" hidden required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product name</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product description</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Write content here' required />
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product category</p>
                        <select name='category' onChange={onChangeHandler} >
                            <option value="Sports">Sports</option>
                            <option value="Martial Arts">Martial Arts</option>
                            <option value="Party">Party</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Religious Event">Religious</option>
                            <option value="Political Event">Political</option>
                            <option value="Wedding">Wedding/Union</option>
                            <option value="Meeting">Meeting</option>
                        </select>
                    </div>
                    <button type='submit' className='add-btn' >ADD</button>
                </div>
            </form>
        </div>
    )
}

export default Add
