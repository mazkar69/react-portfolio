import styled from "styled-components"
import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormDataType } from "../../type/Type";
import { ThreeDots } from 'react-loader-spinner'
import { toast } from 'react-toastify';

const initalData: FormDataType = {
    title: "",
    slug: "",
    description: "",
    content: "",
    tags: "",
    sortBy: "",
    category: "",
    featuredImage: "",
}

const AddPost = () => {

    const [formData, setFormData] = useState<FormDataType>(initalData);
    const [error, setError] = useState('')
    const [isloading, setIsLoading] = useState(false);


    //This function will handle the form input element.
    const handlerForm = (e: any) => {
        const name = e.target.name;
        const data = e.target.value;

        setFormData({ ...formData, [name]: data });
    }

    //This habdlefunction is only for content field.
    const handleEditorChange = (value: string) => {
        setFormData({ ...formData, content: value });
    };


    //This function will take a string as a argument and return the generated slug
    function createSlug(title: string) {
        const cleanedTitle = title
            .replace(/[^a-zA-Z0-9- ]/g, '')
            .toLowerCase()
            .trim()
            .replace(/ /g, '-');

        return `${cleanedTitle}-${Date.now()}`;
    }

    //   This Function will save the title and slug in the state. 2in1 function
    const generateSlug = (e: React.ChangeEvent<HTMLInputElement>) => {
        const slug = createSlug(e.target.value);

        //This will save the slug as well as title in the state. 
        setFormData({ ...formData, title: e.target.value, slug: slug })
    }


    //Handling img upload
    const handleFileInput = async (event: any) => {
        const selectedFile = event.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png','image/webp'];

        if (selectedFile) {

            // console.log(selectedFile)
            if (!allowedTypes.includes(selectedFile.type)) {
               
                setError('Invalid file type. Please select a jpeg, jpg, or png file.');
                event.target.value = "";
                return;
            }
            else {

                if (selectedFile.size > 5 * 1024 * 1024) {
                
                    setError('File is too large. Maximum file size is 5MB.');
                    event.target.value = "";
                    return;
                }
                else {
                    setError("");
                    //Uploading the file to the cloudnary.
                    const formDataa = new FormData();
                    formDataa.append('file', selectedFile);
                    formDataa.append('upload_preset', 'mdazkar');

                    try {
                        setIsLoading(true)
                        const response = await fetch(
                            'https://api.cloudinary.com/v1_1/daqzr4bpv/image/upload',
                            {
                                method: 'POST',
                                body: formDataa,
                            }
                        );

                        const data = await response.json();

                        if (!data.secure_url) {
                            setError("Image not selected");
                            event.target.value = "";

                        }
                        else {

                            setIsLoading(false)
                            //   setUploadedUrl(data.secure_url);
                            setFormData({ ...formData, featuredImage: data.secure_url })
                        }

                    } catch (error) {
                        setIsLoading(false)
                        // console.log("In error block")
                        console.error(error);
                    }

                }
            }

            // setFile(selectedFile);
            // //   setError(null);
        }
        else {
            setError('File Not selected!');
            event.target.value = "";

        }
        setIsLoading(false);
    };


    //Handle submit
    const handlerSubmit = async () => {
        // console.log(formData)
        const token = sessionStorage.getItem('token');
        if(!token)
        {
            toast("Authantication Failed")
            return;
        }
        try {
            setIsLoading(true);
            const response = await fetch('/api/blogpost/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            })

            if (response.status === 200) {
                setIsLoading(false);
                toast.success("Published Successful")

            }
            else {
                setIsLoading(false);

                toast.warning("Something went wroung!")
            }
        } catch (error) {
            setIsLoading(false);

            console.log(error)

        }


    }

    return (
        <Div>
            <h2 className="common-heading">Add Post</h2>
            <div className="form-container">

                <div className="item item-1">
                    <label htmlFor="title">*Title:</label>
                    <input type="text" name='title' value={formData.title} onChange={(e) => {
                        generateSlug(e);
                    }} />
                    <span className='slug'>SLUG :{formData.slug} </span>
                </div>

                <div className="item item-2">
                    <label htmlFor="description">*Description:</label>
                    <input type="text" id="description" name="description" value={formData.description} onChange={handlerForm} />
                </div>

                <div className="item item-3">
                    <label htmlFor="content">*Content:</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={formData.content}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            handleEditorChange(data);
                            // console.log({ event, editor, data });
                        }}

                    />

                </div>

                <div className="item item-4">
                    <label htmlFor="category">*Category:</label>
                    <select id="category" required name="category" value={formData.category} onChange={handlerForm} >
                        <option value="">select</option>
                        <option value="tech">Tech</option>
                        <option value="programming">Programming</option>
                        <option value="trends">Trends</option>
                    </select>
                </div>
                <div className="item item-5">
                    <label htmlFor="sortBy">*SortBy:</label>
                    <input type="text" id="sortBy" name="sortBy" value={formData.sortBy} onChange={handlerForm} />
                </div>
                <div className="item item-6">
                    <label htmlFor="tags">*Tags:</label>
                    <input type="text" id="tags" name="tags" value={formData.tags} onChange={handlerForm} />
                </div>
                <div className="item item-7">
                    <label htmlFor="description">CoverImg:</label>
                    <input type="file" id="description" name="description" onChange={handleFileInput} />
                    <span className="error">{error} </span>
                </div>
                <div className="item item-8">
                    {/* <input type="text" id="description" name="description" value="" /> */}
                    <button className="btn-upload" onClick={handlerSubmit}>
                        {isloading ?
                            <ThreeDots
                                height="30"
                                width="30"
                                radius="9"
                                color="#ffffff"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                // wrapperClassName="ThreeDots"
                                visible={true}
                            /> : "Publish"
                        }
                    </button>
                </div>
            </div>
        </Div>
    )
}

const Div = styled.div`

max-width: 100%;
/* border: 1px solid green; */
.form-container{
    max-width: 120rem;
    padding: 1rem;
    /* border: 1px solid red; */
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;


} 
.item{
    /* padding: 1rem; */
    display: flex;
    /* border: 2px solid chocolate; */
    flex-direction: column;
    min-width: 20rem;
    max-width: 120rem;
}
    .item-1,.item-2,.item-3{
        grid-column: 1/-1;
        /* grid-row: 1/-1; */
    } 
    .item-7{
        grid-column: 1/3;
    }


.ck-editor__editable_inline {
    min-height: 200px;




}
.slug{
        color: silver;
        padding: 0 10px;
        font-size: 1.5rem;

    }
.error{
        color: red;
        padding: 0 10px;
        font-style: italic;
        font-size: 1.5rem;

 }

 input,select{
    width: 100%;
    font-size: 2rem;
    outline: none;
    padding: 1rem 2rem;
    border: 2px solid gray;
}
label{
    font-size: 2rem;
}


.btn-upload{
    padding: 1rem 2rem ;
    font-size: 2rem;
    margin-top:3rem;
    background-color: #1b7ace;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    text-align: center;
    
    transition: all .3s linear;
    border: none;
    /* border-radius: 2rem; */
    cursor: pointer;
    &:hover{
        background-color: #1a609d;

    }
}

@media (max-width:500px) {
    .form-container{
         grid-template-columns: 1fr;
    } 
    .item-7{
        grid-column: 1/-1;
    }
    
    
}
`

export default AddPost