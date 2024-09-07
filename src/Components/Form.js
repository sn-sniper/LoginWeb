import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Form.css"
export default function Form({ action, input }) {
    return (
        <React.Fragment>
            <form className="form" onSubmit={action}>
                <div className="flex-column">
                    <label>Username </label></div>
                <div className="inputForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>

                    <input placeholder="Enter your username" className="input" type="text" onChange={input} required name='Name' />
                </div>
                {window.location.pathname === '/register' ? (
                    <div className="flex-column">
                        <label>Email</label>
                        <div className="inputForm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <input placeholder="Enter your email" className="input" type="text" onChange={input} required name='email' />
                        </div>
                    </div>
                ) : null}

                <div className="flex-column">
                    <label>Password </label></div>
                <div className="inputForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>
                    <input placeholder="Enter your Password" className="input" type="password" onChange={input} required name='password' />
                </div>
                {window.location.pathname === '/login' ? (
                    <div className="flex-row">
                        <div>
                            <input type="checkbox" />
                            <label>Remember me </label>
                        </div>
                        <Link className="Link">Forgot password?</Link>
                    </div>
                ) : null}

                <button className="button-submit" type='submit'>Go</button>

                {window.location.pathname === '/login' ? (
                    <p className="p">Don't have an account? <Link className="Link" to='/register'>Sign Up</Link></p>
                ) : (<p className="p">Already have an account? <Link className="Link" to='/login'>Sign In</Link></p>)}
            </form>
        </React.Fragment>
    )
}
