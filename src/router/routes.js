// import React from 'react';
import Login from '../components/login';
// import Layouts from '../components/Layouts';
import Home from '../components/Home/home'
import Currency from '../components/Currency/Currency'
import Information from '../components/Information/Information'
import MentionMoney from '../components/MentionMoney/MentionMoney'
import SuperUser from '../components/SuperUser/SuperUser'
import TopUp from '../components/TopUp/TopUp'
import UserInfo from '../components/UserInfo/UserInfo'
import ChangePwd from '../components/ChangePwd/ChangePwd'

export default [
   {
      'path': '/login',
      'component': Login
   },{
      'path': '/home',
      'component': Home
   },{
      'path': '/currency',
      'component': Currency
   },{
      'path': '/mentionmoney',
      'component': MentionMoney
   },{
      'path': '/superuser',
      'component': SuperUser
   },{
      'path': '/topup',
      'component': TopUp
   },{
      'path': '/userinfo',
      'component': UserInfo
   },{
      'path': '/information',
      'component': Information
   },{
      'path': '/changepassword',
      'component': ChangePwd
   }
]