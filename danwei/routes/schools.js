var URL = require('url');
var School = require('./school');
var Major = require('./major');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
	res.send("school api");
});

// 定义一个学校信息集合
let arrSchools = [];

//new多个学校实例对象
let school1= new School();
let school2= new School();
let school3= new School();
let school4= new School();
let school5= new School();
let school6= new School();
let school7= new School();
let school8= new School();
let school9= new School();
let school10= new School();

// 创建学校实例
	school1.schoolID = '00';
	school1.schoolName = '黄河科技学院1';
	school1.schoolAddress = '郑州南三环紫荆山路';
	school1.schoolLevel = '三本院校';
	school1.schoolEstablish = '1990年';
	school1.principal = '杨雪梅';
	school1.majorID = '无';
	school1.schoolTEL = '010-8632520';
	school1.schoolType = '理工科';
	school1.schoolAbout = '全国第一所三本院校';
	
	school2.schoolID = '01';
	school2.schoolName = '黄河科技学院2';
	school2.schoolAddress = '郑州南三环紫荆山路';
	school2.schoolLevel = '三本院校';
	school2.schoolEstablish = '1990年';
	school2.principal = '杨雪梅';
	school2.majorID = '无';
	school2.schoolTEL = '010-8632520';
	school2.schoolType = '理工科';
	school2.schoolAbout = '全国第一所三本院校';
	
	school3.schoolID = '09';
	school3.schoolName = '黄河科技学院10';
	school3.schoolAddress = '郑州南三环紫荆山路';
	school3.schoolLevel = '三本院校';
	school3.schoolEstablish = '1990年';
	school3.principal = '杨雪梅';
	school3.majorID = '无';
	school3.schoolTEL = '010-8632520';
	school3.schoolType = '理工科';
	school3.schoolAbout = '全国第一所三本院校';
	
	school4.schoolID = '08';
	school4.schoolName = '黄河科技学院9';
	school4.schoolAddress = '郑州南三环紫荆山路';
	school4.schoolLevel = '三本院校';
	school4.schoolEstablish = '1990年';
	school4.principal = '杨雪梅';
	school4.majorID = '无';
	school4.schoolTEL = '010-8632520';
	school4.schoolType = '理工科';
	school4.schoolAbout = '全国第一所三本院校';
	
	school5.schoolID = '07';
	school5.schoolName = '黄河科技学院8';
	school5.schoolAddress = '郑州南三环紫荆山路';
	school5.schoolLevel = '三本院校';
	school5.schoolEstablish = '1990年';
	school5.principal = '杨雪梅';
	school5.majorID = '无';
	school5.schoolTEL = '010-8632520';
	school5.schoolType = '理工科';
	school5.schoolAbout = '全国第一所三本院校';
	
	school6.schoolID = '06';
	school6.schoolName = '黄河科技学院7';
	school6.schoolAddress = '郑州南三环紫荆山路';
	school6.schoolLevel = '三本院校';
	school6.schoolEstablish = '1990年';
	school6.principal = '杨雪梅';
	school6.majorID = '无';
	school6.schoolTEL = '010-8632520';
	school6.schoolType = '理工科';
	school6.schoolAbout = '全国第一所三本院校';
	
	school7.schoolID = '05';
	school7.schoolName = '黄河科技学院6';
	school7.schoolAddress = '郑州南三环紫荆山路';
	school7.schoolLevel = '三本院校';
	school7.schoolEstablish = '1990年';
	school7.principal = '杨雪梅';
	school7.majorID = '无';
	school7.schoolTEL = '010-8632520';
	school7.schoolType = '理工科';
	school7.schoolAbout = '全国第一所三本院校';
	
	school8.schoolID = '04';
	school8.schoolName = '黄河科技学院5';
	school8.schoolAddress = '郑州南三环紫荆山路';
	school8.schoolLevel = '三本院校';
	school8.schoolEstablish = '1990年';
	school8.principal = '杨雪梅';
	school8.majorID = '无';
	school8.schoolTEL = '010-8632520';
	school8.schoolType = '理工科';
	school8.schoolAbout = '全国第一所三本院校';
	
	school9.schoolID = '03';
	school9.schoolName = '黄河科技学院4';
	school9.schoolAddress = '郑州南三环紫荆山路';
	school9.schoolLevel = '三本院校';
	school9.schoolEstablish = '1990年';
	school9.principal = '杨雪梅';
	school9.majorID = '无';
	school9.schoolTEL = '010-8632520';
	school9.schoolType = '理工科';
	school9.schoolAbout = '全国第一所三本院校';
	
	school10.schoolID = '02';
	school10.schoolName = '黄河科技学院3';
	school10.schoolAddress = '郑州南三环紫荆山路';
	school10.schoolLevel = '三本院校';
	school10.schoolEstablish = '1990年';
	school10.principal = '杨雪梅';
	school10.majorID = '无';
	school10.schoolTEL = '010-8632520';
	school10.schoolType = '理工科';
	school10.schoolAbout = '全国第一所三本院校';
	
	// 将学校信息实例添加到学校数组中
	arrSchools = [school1,school2,school3,school4,school5,school6,school7,school8,school9,school10];
	
	//定义一个专业数组集合
	let arrMajors = [];
	//new出多个专业实例化对象
	let major1 = new Major();
	let major2 = new Major();
	let major3 = new Major();
	let major4 = new Major();
	//创建多个专业实力
	
	major1.majorID = '0121';
	major1.schoolID = '01';
	major1.majorName = '外语专业';
	major1.majorTutor = '杨集美';
	major1.majorMember = ["刘圆圆1","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx"];
	major1.majorDate = '1999年';
	major1.majorDuty = '外语学习，口语对接，两国友谊增强';
	
	major2.majorID = '0131';
	major2.schoolID = '01';
	major2.majorName = '计算机专业';
	major2.majorTutor = '杨集美';
	major2.majorMember = ["刘圆圆1","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx"];
	major2.majorDate = '1999年';
	major2.majorDuty = '计算机新技术研发';
	
	major3.majorID = '0141';
	major3.schoolID = '06';
	major3.majorName = '外语专业';
	major3.majorTutor = '杨集美';
	major3.majorMember = ["刘圆圆1","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx"];
	major3.majorDate = '1999年';
	major3.majorDuty = '外语学习，口语对接，两国友谊增强';
	
	major4.majorID = '0151';
	major4.schoolID = '06';
	major4.majorName = '计算机专业';
	major4.majorTutor = '杨集美';
	major4.majorMember = ["刘圆圆1","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx"];
	major4.majorDate = '1999年';
	major4.majorDuty = '计算机新技术研发';
	
	//将专业实例添加到专业集合中
	arrMajors = [major1,major2,major3,major4];
	
	//学校基本信息列表请求
router.get('/listInfo',function(req,res,next){

	let response = {status:10,data:arrSchools};
	res.send(JSON.stringify(response));

});

//通过 schoolID查询对应的实例对象
router.get('/listDetails', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arr;	
	for(let i = 0;i<arrSchools.length;i++){
		
		//遍历对比数组内school对象的每个id值，温和就开始返回对应的结果
		if(params.id==arrSchools[i].schoolID){
			
			arr = arrSchools[i];
			console.log("companyID匹配成功，学校基本信息查询成功");
			
			let response = {status:15,data:arr};
			res.send(JSON.stringify(response));
			 
		}
	}

});
//通过 schoolID查询对应的专业信息



router.get('/listMajor', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arr = [];
		
	for(let i = 0;i<arrMajors.length;i++){
		
		// 通过companyID值来查询对应数据，并返回
		if(params.id==arrMajors[i].schoolID){
				arr[i]= arrMajors[i];
				console.log(`companyID匹配成功,第${i}条部门信息匹配成功`);
			}else{
				console.log(`companyID匹配成功,第${i}条部门信息匹配失败`);
			}
	}
		// 判断arr是否为空 来返回成功或者失败
		let statusVal;
		if(arr.length>=0){
			statusVal="查询成功";
		}else{
			statusVal="查询失败";
			
		}
		let response = {status:statusVal,data:arr};
		res.send(JSON.stringify(response));
			 
	
});


// 专业详情信息展示
router.get('/listMajorDetails', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arr = [];
	
	for(let i = 0;i<arrMajors.length;i++){
		
		// 通过companyID值来查询对应数据，并返回
		if(params.id==arrMajors[i].majorID){
				arr= arrMajors[i];
				//console.log(`companyID匹配成功,第${i}条部门信息匹配成功`);
		}
	}
		// 判断arr是否为空 来返回成功或者失败
		let statusVal;
		if(arr.length<0){
			statusVal="查询失败";
		}else{
			statusVal="查询成功";
			
		}
		let response = {status:statusVal,data:arr};
		res.send(JSON.stringify(response));
			 
	
});

// 学校详情信息修改
router.get('/revampDetails', function(req, res, next) {


let params = URL.parse(req.url, true).query;

	let arr;	
	for(let i = 0;i<arrSchools.length;i++){
		
		//遍历对比数组内company对象的每个id值，温和就开始返回对应的结果
		if(params.id==arrSchools[i].schoolID){
			
			arr = arrSchools[i];
			console.log("arrSchools匹配成功，单位信息查询成功");
			
			 
		}
	}
		// 判断arr是否为空 来返回成功或者失败
		let statusVal;
		if(arr.length<0){
			statusVal="查询失败";
		}else{
			statusVal="查询成功";
			
		}
		let response = {status:statusVal,data:arr};
		res.send(JSON.stringify(response));
			 
	
});

// 部门详情信息修改
router.get('/revampMajorDetails', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arr = [];
	
	for(let i = 0;i<arrMajors.length;i++){
		
		// 通过companyID值来查询对应数据，并返回
		if(params.id==arrMajors[i].majorID){
				arr= arrMajors[i];
				//console.log(`companyID匹配成功,第${i}条部门信息匹配成功`);
		}
	}
		// 判断arr是否为空 来返回成功或者失败
		let statusVal;
		if(arr.length<0){
			statusVal="查询失败";
		}else{
			statusVal="查询成功";
			
		}
		let response = {status:statusVal,data:arr};
		res.send(JSON.stringify(response));
			 
	
});
module.exports = router;











