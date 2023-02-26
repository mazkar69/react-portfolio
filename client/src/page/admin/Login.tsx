import styled from "styled-components"
import {useState,useEffect} from 'react'
import { FetchData } from "../../config/fetchData"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [formData,setFormData] = useState<{email:string,password:string}>({email:"",password:""})

    const navigate = useNavigate();

    useEffect(()=>{
        const token = sessionStorage.getItem('token')
        if(token){
            navigate('/admin/dashboard')
        }
    })
    const handleForm = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData,[name]:value})

    }
    const handleLogin = async(e:any)=>{

        e.preventDefault();
        // console.log(formData)
        const url = '/api/admin/login'
        const {response} = await FetchData(url,'POST',JSON.stringify(formData))
        // console.log(response)
        if(response.status === 'success'){

            //Setting the token 
            sessionStorage.setItem("token",response.token)
            navigate("/admin/dashboard")
            

        }
        else{
            alert("Something went wroung, Try Again")
        }


    }
    return (
        <Section>
            <div className="container">
                <h2>Admin Login</h2>
                <form className="formcontainer" onSubmit={handleLogin}>
                    <input type="email" name="email" placeholder="UserId" value={formData.email} onChange={handleForm} />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleForm}/>
                    <input type="submit" value="Submit"   onClick={handleLogin}/>
                </form>
            </div>

        </Section>

    )
}
const Section = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .container{
        border: 1px solid silver;
        padding: 2rem;
        width: 40rem;

        h2{
            text-align: center;
            padding: 1rem 0rem ;
        }
    }
    .formcontainer{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        input{
            padding: 1rem;
            font-size: 2rem;
            outline: none;
        }
        input[type="submit"]{
            cursor: pointer;
        }
    }

`
export default Login