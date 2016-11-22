'use strict';

const qs = require('qs')
const Mock = require('mockjs')
const Watch = require("watchjs")
const Cookie = require("js-cookie")
//
// let adminUsersData = {}
// if (!global.adminUsersData) {
//   const data = !!localStorage.getItem("antdAdminUsersData")
//     ? JSON.parse(localStorage.getItem("antdAdminUsersData"))
//     : [
//     {
//       username: 'guest',
//       password: 'guest'
//     },
//     {
//       username: '吴彦祖',
//       password: '123456'
//     }
//   ]
//   adminUsersData = data
//   global.adminUsersData = adminUsersData
//   if (!localStorage.getItem("antdAdminUsersData")) {
//     localStorage.setItem("antdAdminUsersData", JSON.stringify(adminUsersData))
//   }
// } else {
//   adminUsersData = global.adminUsersData
// }
//
// Watch.watch(adminUsersData, function () {
//   localStorage.setItem("antdAdminUsersData", JSON.stringify(adminUsersData))
// })

module.exports = {
  'POST /api/login' (req, res) {
    const userItem = JSON.parse(req.body)
    const response = {
      sid: "123",
      success: false,
      message: ""
    }

    if (userItem.username == "admin" && userItem.password == "admin") {
      const now = new Date()
      now.setDate(now.getDate() + 1)
      response.success = true
      response.message = "登录成功"
    } else {
      response.message = "登录失败"
    }

    res.json(response)
  },

}
