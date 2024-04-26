import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Result = () => {
    const [state, setState] = useState([]);   

    const navigation = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/getAllCandidate`)
            .then(res => {
                setState(() => res.data)
            })
            .catch(err => console.log(err))
    }, [])

    
    
    return (
        <>
            
                
                    <>
                        <h1> Candidate Details</h1>
                        <table>
                            <thead>
                                <tr>
                                    <td><th>Name</th></td>
                                    <td><th>symbol</th></td>
                                    <td><th>Vote count</th></td>

                                </tr>
                            </thead>
                            <tbody>
                                {state.map(item => {
                                    return (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.symbol}</td>
                                            <td>{item.count}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>
                    </>
                    


            <input type="submit" value="Home" onClick={() => navigation('/home')}></input>
        </>
    )
}

export default Result