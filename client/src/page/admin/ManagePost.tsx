import styled from "styled-components"
import { useState, useEffect } from 'react'
import { TrandingBlogPost } from "../../type/Type";
import { FetchData } from "../../config/fetchData";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
const ManagePost = () => {
    const [allPost, setAllPost] = useState<TrandingBlogPost>();
    const [page, setPage] = useState(1);
    const [flag, setFlag] = useState(false);

    const handlerPre = () => {
        if (page === 1) {
            setPage(1);
        }
        else {
            setPage(page - 1);
        }
    }
    const handlerNext = () => {
        setPage(page + 1)
    }
    const handleDelete = (_id: string) => {
        if (window.confirm("Are you sure?")) {
            const token = sessionStorage.getItem('token');
            if (token) {
                // console.log(token)

                const url = `/api/blogpost/delete`

                FetchData(url, 'DELETE', JSON.stringify({ _id }), token).then((data) => {

                    if (data.status === 200) {
                        toast.success("Deleted Successfully")
                        setFlag(!flag)
                    }
                }).catch((err) => {
                    toast.success("Something wrong, Try again")
                    console.log(err)
                })
            }
            else {
                alert("Authanticaton Failed!, May be invalid Token")
            }
        }

    }

    useEffect(() => {
        const url = `/api/blogpost?pg=${page}&lim=10`
        FetchData(url).then((data) => {
            setAllPost(data.response)

        }).catch((err) => {
            console.log(err)
        })
    }, [page, flag])

    // console.log(page);

    return (
        <Section>
            <div className="container">
                <div className="btns">
                    <button className="btn-sm">Add Post</button>
                    <button className="btn-sm">Manage Post</button>
                </div>
                <div className="BlogPost-container">
                    <div className="heading">
                        <h2>Manage Posts</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>N</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Action</th>
                                <th> </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>

                            {allPost?.map((post, i) => {
                                return (
                                    <tr key={post._id}>
                                        <td>{i + 1}</td>
                                        <td>{post.title}</td>
                                        <td>AzKaaR</td>
                                        <td className="edit"> <Link to="/admin/dashboard/update" state={post} >Edit</Link></td>
                                        <td className="delete" onClick={() => handleDelete(post._id)}>Delete</td>
                                        <td className="publish">Publish</td>
                                    </tr>
                                )
                            })}



                        </tbody>
                    </table>
                    <div className="pagination-btn">
                        <button className="btn-sm" onClick={handlerPre}>Previous</button>
                        <span>{page}</span>
                        <button className="btn-sm" onClick={handlerNext}>Next</button>
                    </div>
                </div>
            </div>

        </Section>
    )
}


const Section = styled.section`
        .btn-sm{
            color: white;
            border-radius: 1rem;
            border: none;
            padding: 1rem 2rem;
            cursor: pointer;
            font-size: 2rem;
            background-color: #0e4449 !important;
        }
    
    .btns{
        display: flex;
        gap: 3rem;
        padding: 1rem 0rem;
        border-bottom: 1px solid silver;




    }

    .heading{
        text-align: center;
        padding: 2rem 0rem;
        /* border-bottom: 1px solid silver; */
        h2{
            font-size: 2.5rem;

        }
    }
    .BlogPost-container{
        /* border: 3px solid blue; */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: auto;
           
        
        table{
            min-width: 100rem;
            min-width: 120rem;
            font-size: 2rem;
            text-align: left;
            /* border: 5px solid red; */
            margin: 1rem;
            overflow: auto;
            table-layout: fixed;


            tr{
                padding: 3rem;
                border-bottom: 1px solid silver;
            }
            th,td{
                padding: 2rem;
                border-bottom: 1px solid silver;
            }
            .delete{
                color:red;
                cursor: pointer;

            }
            .edit{
                color:blue;
                cursor: pointer;

            }
            .publish{
                color:green;
                cursor: pointer;

            }
        }
    }

    .pagination-btn{
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        width: 100%;
        margin-top: 1rem;

    }

`
export default ManagePost