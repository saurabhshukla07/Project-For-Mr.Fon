"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import pic from '../public/images/dp.jpg'
import Customers from './components/Customers'
import Link from 'next/link'

import { RiMenu2Fill } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

import { IonIcon } from '@ionic/react';
import { logoIonic, peopleOutline, chatbubbleOutline, homeOutline, helpOutline, lockClosedOutline, settingsOutline, logOutOutline, searchOutline, eyeOutline, cartOutline, cashOutline, notificationsOutline } from 'ionicons/icons';




const page = () => {
    const [handleDashboard,setHandleDashboar]=useState(false);
    
  return (
    <div>
    


   
    <div className="container"> 
        <div className={handleDashboard?("navigation active"):"navigation"}>
            <ul>
                <li>
                    <a href="#">
                        <span className="icon">
                          
                            {/* <IonIcon icon={logoIonic}></IonIcon> */}
                        </span>
                        <span className='title'><b>Worklin</b> </span>
                    </a>
                </li>

                <li>
                
                    <a href="#">
                        <span className="icon">
                        <IonIcon icon={homeOutline}></IonIcon>
                        
                        </span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>

                <li>
                     <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="people-outline"></ion-icon> */}
                            <IonIcon icon={peopleOutline}></IonIcon>
                        </span>
                        <span className="title">Employees</span>
                       
                    </a> 
                  
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="chatbubble-outline"></ion-icon> */}
                            <IonIcon icon={chatbubbleOutline}></IonIcon>
                        </span>
                        <span className="title">Messages</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="help-outline"></ion-icon> */}
                            <IonIcon icon={helpOutline}></IonIcon>
                        </span>
                        <span className="title">Help</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="settings-outline"></ion-icon> */}
                            <IonIcon icon={settingsOutline}></IonIcon>
                        </span>
                        <span className="title">Settings</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <IonIcon icon={lockClosedOutline}></IonIcon>
                        </span>
                        <span className="title">Password</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="log-out-outline"></ion-icon> */}
                            <IonIcon icon={logOutOutline}></IonIcon>
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>

      
        <div className={handleDashboard?("main active"):"main"}>
            <div className="topbar">
            <div className="toggle" onClick={(e)=>setHandleDashboar(!handleDashboard)}>
            <RiMenu2Fill />
                </div>
                <div className="search">
                    <label>
                    <IonIcon icon={searchOutline}></IonIcon> 
                        <input
                        
                        
                        type="text" placeholder="Search here"/>
                        
                    </label>
                </div>
  <div><IonIcon icon={notificationsOutline}></IonIcon> </div>
                <div className="user">
                
                    <img src={pic.src} alt="dpp"/>
                </div>
            </div>

        
            <div className="cardBox">
                <div className="card">
                    <div>
                        <div className="numbers">1,504</div>
                        <div className="cardName">Daily Views</div>
                    </div>

                    <div className="iconBx">
                        {/* <ion-icon name="eye-outline"></ion-icon> */}
                        <IonIcon icon={eyeOutline}></IonIcon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="cardName">Sales</div>
                    </div>

                    <div className="iconBx">
                        {/* <ion-icon name="cart-outline"></ion-icon> */}
                        <IonIcon icon={cartOutline}></IonIcon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">284</div>
                        <div className="cardName">Comments</div>
                    </div>

                    <div className="iconBx">
                        {/* <ion-icon name="chatbubbles-outline"></ion-icon> */}
                        <IonIcon icon={chatbubbleOutline}></IonIcon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">$7,842</div>
                        <div className="cardName">Earning</div>
                    </div>

                    <div className="iconBx">
                        {/* <ion-icon name="cash-outline"></ion-icon> */}
                        <IonIcon icon={cashOutline}></IonIcon>
                    </div>
                </div>
            </div>

    
            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Salary Payment</h2>
                        <a href="#" className="btn">View All</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Salary</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Employee </td>
                                    <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Employee</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Employee</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Employee</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Employee</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Employee</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Employee</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Employee</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

              
                <div className="recentCustomers">
                    <div className="cardHeader">
                        <h2>Recent Login Employee</h2>
                    </div>

                    <table>
                      <tbody>
                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt="pic1"/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt="pic2"/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt=""/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt=""/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt=""/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt=""/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt=""/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt=""/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>India</span></h4>
                            </td>
                      
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

 
   

    </div>
  )
}

export default page
