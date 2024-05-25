import { useState } from 'react'
import './Add.css'
import { assets} from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Addform = () => {
    const url = "http://localhost:3000/api/events/"
    const [data, setData] = useState({
        title: "",
        description: "",
        img: "",
        category: "Sports",
        email:""
    });

    const [image, setImage] = useState(false);

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const imageBase64 = await convertToBase64(image)

        const formData = {
            title: data.title,
            description:data.description,
            img:imageBase64,
            category:data.category,
            email:data.email
          }
        console.log(formData)
        await axios.post(url,formData).then(()=>{
            toast.success('Event Created Successfully')
        }).catch((err)=>{
            toast.error('Failed to create event: ' + err.message)
            console.error(err)
        })
        
    }

    const convertToBase64 = (file) =>{
        return new Promise((resolve,reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () =>{
                resolve(fileReader.result);
            };
            fileReader.onerror =(error) =>{
                reject(error)
            }
        })
    }


    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={(e) =>{onSubmitHandler(e)}}>
                <div className='add-img-upload flex-col'>
                    <p>Upload image</p>
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                    </label>
                    <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" id="image" name='img' hidden required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Event name</p>
                    <input name='title' onChange={(e) =>{onChangeHandler(e)}} value={data.name} type="text" placeholder='Type here' required />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Event description</p>
                    <textarea name='description' onChange={(e) =>{onChangeHandler(e)}} value={data.description} type="text" rows={6} placeholder='Write content here' required />
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p className='event-category'>Event category</p>
                        <select name='category' onChange={(e) =>{onChangeHandler(e)}} >
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

export default Addform
