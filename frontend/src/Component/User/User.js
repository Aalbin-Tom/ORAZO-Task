import React, { useState } from 'react'
import './User.css';
import { Button, Card, CardContent, DialogContentText, Grid, TextField, Typography } from '@mui/material'
import Swal from 'sweetalert2'
import axios from 'axios'


function User() {


    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [lastname, setLastname] = useState('')
    const [requirement, setRequirement] = useState('')
    const [error, setError] = useState('')
    const [message, setMessages] = useState('')



    const handleSubmit = async (e) => {
        e.preventDefault();
        reset()
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (regEx.test(email)) {
            setMessages("")
        
        }
        // else if (!regEx.test(email)) {
        //  setMessages("Email is not valid");
        // }
        else {
            setMessages("")
        }
        if (firstname.length === 0 && !regEx.test(email) && email.length === 0 && lastname.length === 0 && phone.length === 0 && requirement.length === 0) {
            setError("true")
        }
 

        if (regEx.test(email) && firstname.length !== 0 && email.length !== 0 && phone.length !== 0 && requirement.length !== 0 && lastname.length !== 0) {

            try {
                Swal.fire({
                    title: 'Are you sure',
                    text: "You won't be able to Edit this!",
                    showCancelButton: true,
                    confirmButtonText: 'ADD'
                }).then((result) => {
                    if (result.isConfirmed) {
                        const { data } = axios.post('/add-details', { firstname, email, phone, lastname, requirement })
                        console.log(data);
                        Swal.fire(
                            'Sucessfully Added',
                            'Your data has been Added.',
                            'success'
                        )

                    } 
                    // reset()
                })

            } catch (error) {

            }

        }
    }

const reset =()=>{
 setFirstname('')
}


    return (
        <div style={{ height: '89.5vh', paddingTop: "3rem" }}>
            <Typography gutterBottom variant="h3" align="center">
                {/* MANUFACTURING */}
            </Typography>
            <Grid >
                <Card
                    
                    style={{ borderRadius: "15px", backgroundColor: "#ffffff69", backdropFilter: 'blur(17px)', maxWidth: 620, margin: "72px auto" }}>
                    <div style={{ background: "linear-gradient(to right, #dae2f8, #d6a4a4)", height: "20px" }}></div>
                    <CardContent>

                        <Typography gutterBottom variant="h5">
                            ADD DETAILS
                        </Typography>
                       
                        <form>
                            <Grid container spacing={2}>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter first name" label="First Name" name='firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} variant="outlined" fullWidth  />
                                    <span style={{ marginLeft: "1rem" }}>{error && firstname.length <= 0 ? <label style={{ color: "red" }} >FirstName cannot be Empty </label> : ""}</span>

                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter last name" label="Last Name" name='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} variant="outlined" fullWidth  />
                                    <span style={{ marginLeft: "1rem" }}>{error && lastname.length <= 0 ? <label style={{ color: "red" }} >LastName cannot be Empty </label> : ""}</span>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="email" placeholder="Enter email" label="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" fullWidth  />
                                    <span>{error && email.length <= 0 ? <label style={{ color: "red" }} >Email cannot be empty </label> : ""}</span><br />
                                    <span style={{ marginLeft: "1rem" }}> {message ? <label style={{ color: "red" }}>{message}</label> : ""}</span>
                                    <Grid item xs={12}>
                                    </Grid>
                                    <TextField type="number" placeholder="Enter phone number" label="Phone" name='phone'  onChange={(e) => setPhone(e.target.value)} variant="outlined" fullWidth  />
                                    <span style={{ marginLeft: "1rem" }}>   {error && phone.length !== 10  ? <label style={{ color: "red" }} >Enter Valid Phone Number </label> : ""} 
                                    {/* : { phone.length !== 10 ? <label style={{ color: "red" }} > Enter valid Number </label> : ""} } */}
                                     </span>

                                </Grid>


                                <Grid item xs={12}>
                                    <DialogContentText align='center'> Select your Requirement </DialogContentText>
                                    <select className='option' onChange={(e) => { setRequirement(e.target.value) }} required >
                                        <option value=''>CHOOSE </option>
                                        <option value='Design'>Design </option>
                                        <option value='Website'>Website </option>
                                        <option value='Social media promotion'>Social media promotion </option>
                                        <option value='Digital Marketing'>Digital Marketing </option>
                                    </select><br />
                                    <span style={{ marginLeft: "1rem" }}>{error && requirement.length <= 0 ? <label style={{ color: "red" }} >Select Requirement </label> : ""}</span>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button style={{ background: "#F27475" }} type="submit" onClick={handleSubmit} variant="contained" fullWidth >Submit</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                    
                </Card>
            </Grid >
        </div >
    )
}

export default User
