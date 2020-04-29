'use strict';

const Router = require('koa-router');
const miscController = require('./database/controller/misc');
// const employeeController=require('./controllers/employee');


const router = new Router();

router.post('/add',miscController.createEmployee);
router.put('/delete',miscController.deleteEmployee);
router.put('/edit',miscController.getemployeebyID);
router.get('/get', miscController.getEmployee);



module.exports = router;
