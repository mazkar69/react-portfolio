import styled from "styled-components"
import { useEffect, useState } from 'react'
import { FetchData } from "../../config/fetchData";
import { toast } from "react-toastify";


const Customization = () => {
    const [formData, setFormData] = useState<any>({
        profile: "",
        resume: "",
        shortBio: "",
        about: ""
    })

    const [projectFrom, setProjectForm] = useState<any>({
        name: "",
        thumbnail: "",
        liveURL: ""

    })

    const [flag, setFlag] = useState(false);
    const [flag2, setFlag2] = useState(false);

    const [projects, setProjects] = useState<any>([]);

    //This will fetch the general news
    useEffect(() => {
        //Fetching the general details
        FetchData('/api/general').then((data) => {
            // console.log(data.response);
            setFormData(data.response);

        }).catch((err) => {
            console.log(err)
        })

    }, [flag])


    //This will fetch the Projects 
    useEffect(() => {
        //Fetching the general details
        FetchData('/api/project').then((data) => {
            // console.log(data.response);
            setProjects(data.response);

        }).catch((err) => {
            console.log(err)
        })

    }, [flag2])


    //Form handler
    const handlerForm = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }
    const handlerProjectForm = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setProjectForm({ ...projectFrom, [name]: value })
    }



    const handleUpdate = () => {
        //setting the data.
        const url = '/api/general';
        FetchData(url, 'POST', JSON.stringify(formData)).then((data) => {
            if (data.status === 200) {
                // console.log(data)
                // console.log("Data saved successfull")
                setFlag(!flag);
                toast.success("Updated Successfully :)")

            }
        }).catch((err) => {
            console.log(err);
        })
    }
    const handleProjectUpdate = () => {
        //setting the data.
        const url = '/api/project';
        FetchData(url, 'POST', JSON.stringify(projectFrom)).then((data) => {
            if (data.status === 200) {
                // console.log("Data saved successfull")
                setFlag2(!flag2);
                toast.success("Project Added")
                setProjectForm({
                    name: "",
                    thumbnail: "",
                    liveURL: ""
                })

            }
        }).catch((err) => {
            console.log(err);
        })
    }


    //WORKING HERE.................
    //Delete project
    const deleteProject = (_id: string) => {
        const url = "/api/project"
        FetchData(url,"DELETE",JSON.stringify({_id})).then((data)=>{
            toast.success("Deleted project")
            setFlag2(!flag2)
        }).catch((err)=>{
            console.log(err)
        })

    }


    return (
        <Section className="section">
            <div className="container">
                <div className="heading">
                    <h2>Customize Page Content</h2>
                </div>
                <div className="update-btn-container">
                    <button className="update-btn" onClick={handleUpdate}>Update</button>
                </div>
                <div className="content-container">
                    <div className="box box-1">
                        <label htmlFor="profileImg">ProfileImg:</label>
                        <input type="text" id="profileImg" name="profile" value={formData.profile} onChange={handlerForm} />

                    </div>
                    <div className="box box-2">
                        <label htmlFor="resume">Resume:</label>
                        <input type="text" id="resume" name="resume" value={formData.resume} onChange={handlerForm} />

                    </div>
                    <div className="box box-3">
                        <label htmlFor="bio">Short Bio:</label>
                        <textarea name="shortBio" id="bio" value={formData.shortBio} onChange={handlerForm}></textarea>

                    </div>
                    <div className="box box-4">
                        <label htmlFor="about">About:</label>
                        <textarea name="about" id="about" value={formData.about} onChange={handlerForm}></textarea>

                    </div>

                    <div className="box box-5">
                        <label htmlFor="">Projects:</label>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Thumbnail</th>
                                    <th>LiveURL</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    projects.map((project: any) => {
                                        return (
                                            <tr key={project._id}>
                                                <td>{project.name}</td>
                                                <td>{project.thumbnail}</td>
                                                <td>{project.liveURL}</td>
                                                <td className="delete-btn" onClick={()=>deleteProject(project._id)}>Delete</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        <div className="add-project">
                            <input type="text" placeholder="Name" name="name" value={projectFrom.name} onChange={handlerProjectForm} />
                            <input type="text" placeholder="Thumbnail" name="thumbnail" value={projectFrom.thumbnail} onChange={handlerProjectForm} />
                            <input type="text" placeholder="LiveUrl" name="liveURL" value={projectFrom.liveURL} onChange={handlerProjectForm} />
                            <button onClick={handleProjectUpdate}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.section`
    
/* border: 1px solid black; */
padding:2rem;

label{
    font-size: 2rem;
}
input,textarea{
    color: var(--para);
    resize: none;
    font-size: 2rem;
    padding: 1rem 2rem;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
}
textarea{
    min-height: 100px;
}

.container{
    
    .heading{
        text-align: center;
        font-size: 2.5rem;
        padding: 1rem;
        /* border-bottom: 1px solid silver; */
    }
    .update-btn-container{
        text-align: right;
        .update-btn{
            padding: .5rem 1.5rem;
            cursor: pointer;
            /* border-radius: 12px; */
            border: none;
            border: 1px solid gray;
        }
    }
}


.content-container{
    padding: 5rem 1rem;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(4, 1fr);

    .box{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .edit-btn{
            text-align: right;
            cursor: pointer;
            color: #7d7d7d;
            font-size: 2rem;
            padding-right: 1rem;
        }
    }
    .box-1,.box-3{
        grid-column: 1/3;
    }
    .box-2,.box-4{
        grid-column: 3/-1;
    }
    .box-5{
        grid-column: 1/-1;
        overflow-x: scroll;
        max-width: 130rem;
        padding: 5rem 0rem;
    }
}

table{
    text-align: left;
    padding: 2rem;
    font-size: 2rem;
    td,th{
        border-bottom:1px solid silver;
        padding: 2rem;
        overflow: hidden;

    }
    .delete-btn{
        color: red;
        cursor: pointer;
    }
}
.add-project{
    padding: 1rem 3rem;
    display: flex;
    gap: 1rem;
    justify-content: space-around;

    input{
        border: 1px solid silver;
        /* pointer-events: none; */
    }
    button{
        padding:1rem 3rem ;
    }

}

`
export default Customization