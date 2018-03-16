var URL = require('url');
var Company = require('./company');
var Framework = require('./framework');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
res.send("company api");
});

// 定义一个数组，存放多个company内容
let arrCompany = [];
// new出多个company实例
let company1 = new Company();
let company2 = new Company();
let company3 = new Company();
let company4 = new Company();
let company5 = new Company();
let company6 = new Company();
let company7 = new Company();
let company8 = new Company();
let company9 = new Company();
let company10 = new Company();
let company11 = new Company();
let company12 = new Company();
let company13 = new Company();
let company14 = new Company();
let company15 = new Company();



	company1.companyID = '13';
	company1.companyName = '和舆图';
	company1.companyAddress = '北京飘亮广场';
	company1.departmentID = "7639832978";
	company1.companyProfile = '地质灾害监测';
	company1.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company1.companyTEL = '18745128455';
	company1.bankAccount = '7485216823265269521';
	company1.depositBank = '工商银行';
	company1.paragraph = '451684384355';
	company1.companyCoreCustomer = ["刘xx","张xx"];
	company1.companyUsedName = '无';
	
	company2.companyID = '18';
	company2.companyName = '淘宝';
	company2.companyAddress = '北京飘亮广场';
	company2.departmentID = "7639832978";
	company2.companyProfile = '地质灾害监测';
	company2.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company2.companyTEL = '18745128455';
	company2.bankAccount = '7485216823265269521';
	company2.depositBank = '工商银行';
	company2.paragraph = '451684384355';
	company2.companyCoreCustomer = ["刘xx","张xx"];
	company2.companyUsedName = '无';
	
	company3.companyID = '19';
	company3.companyName = '和舆图';
	company3.companyAddress = '北京飘亮广场';
	company3.departmentID = "7639832978";
	company3.companyProfile = '地质灾害监测';
	company3.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company3.companyTEL = '18745128455';
	company3.bankAccount = '7485216823265269521';
	company3.depositBank = '工商银行';
	company3.paragraph = '451684384355';
	company3.companyCoreCustomer = ["刘xx","张xx"];
	company3.companyUsedName = '无';
	
	company4.companyID = '15';
	company4.companyName = '和舆图';
	company4.companyAddress = '北京飘亮广场';
	company4.departmentID = "7639832978";
	company4.companyProfile = '地质灾害监测';
	company4.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company4.companyTEL = '18745128455';
	company4.bankAccount = '7485216823265269521';
	company4.depositBank = '工商银行';
	company4.paragraph = '451684384355';
	company4.companyCoreCustomer = ["刘xx","张xx"];
	company4.companyUsedName = '无';
	
	company5.companyID = '12';
	company5.companyName = '和舆图';
	company5.companyAddress = '北京飘亮广场';
	company5.departmentID = "7639832978";
	company5.companyProfile = '地质灾害监测';
	company5.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company5.companyTEL = '18745128455';
	company5.bankAccount = '7485216823265269521';
	company5.depositBank = '工商银行';
	company5.paragraph = '451684384355';
	company5.companyCoreCustomer = ["刘xx","张xx"];
	company5.companyUsedName = '无';
	
	company6.companyID = '10';
	company6.companyName = '和舆图';
	company6.companyAddress = '北京飘亮广场';
	company6.departmentID = "7639832978";
	company6.companyProfile = '地质灾害监测';
	company6.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company6.companyTEL = '18745128455';
	company6.bankAccount = '7485216823265269521';
	company6.depositBank = '工商银行';
	company6.paragraph = '451684384355';
	company6.companyCoreCustomer = ["刘xx","张xx"];
	company6.companyUsedName = '无';
	
	company7.companyID = '09';
	company7.companyName = '和舆图';
	company7.companyAddress = '北京飘亮广场';
	company7.departmentID = "7639832978";
	company7.companyProfile = '地质灾害监测';
	company7.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company7.companyTEL = '18745128455';
	company7.bankAccount = '7485216823265269521';
	company7.depositBank = '工商银行';
	company7.paragraph = '451684384355';
	company7.companyCoreCustomer = ["刘xx","张xx"];
	company7.companyUsedName = '无';
	
	company8.companyID = '08';
	company8.companyName = '和舆图';
	company8.companyAddress = '北京飘亮广场';
	company8.departmentID = "7639832978";
	company8.companyProfile = '地质灾害监测';
	company8.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company8.companyTEL = '18745128455';
	company8.bankAccount = '7485216823265269521';
	company8.depositBank = '工商银行';
	company8.paragraph = '451684384355';
	company8.companyCoreCustomer = ["刘xx","张xx"];
	company8.companyUsedName = '无';
	
	company9.companyID = '07';
	company9.companyName = '和舆图';
	company9.companyAddress = '北京飘亮广场';
	company9.departmentID = "7639832978";
	company9.companyProfile = '地质灾害监测';
	company9.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company9.companyTEL = '18745128455';
	company9.bankAccount = '7485216823265269521';
	company9.depositBank = '工商银行';
	company9.paragraph = '451684384355';
	company9.companyCoreCustomer = ["刘xx","张xx"];
	company9.companyUsedName = '无';
	
	company10.companyID = '06';
	company10.companyName = '和舆图';
	company10.companyAddress = '北京飘亮广场';
	company10.departmentID = "7639832978";
	company10.companyProfile = '地质灾害监测';
	company10.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company10.companyTEL = '18745128455';
	company10.bankAccount = '7485216823265269521';
	company10.depositBank = '工商银行';
	company10.paragraph = '451684384355';
	company10.companyCoreCustomer = ["刘xx","张xx"];
	company10.companyUsedName = '无';

	company11.companyID = '05';
	company11.companyName = '和舆图';
	company11.companyAddress = '北京飘亮广场';
	company11.departmentID = "7639832978";
	company11.companyProfile = '地质灾害监测';
	company11.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company11.companyTEL = '18745128455';
	company11.bankAccount = '7485216823265269521';
	company11.depositBank = '工商银行';
	company11.paragraph = '451684384355';
	company11.companyCoreCustomer = ["刘xx","张xx"];
	company11.companyUsedName = '无';
	
	company12.companyID = '04';
	company12.companyName = '和舆图';
	company12.companyAddress = '北京飘亮广场';
	company12.departmentID = "7639832978";
	company12.companyProfile = '地质灾害监测';
	company12.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company12.companyTEL = '18745128455';
	company12.bankAccount = '7485216823265269521';
	company12.depositBank = '工商银行';
	company12.paragraph = '451684384355';
	company12.companyCoreCustomer = ["刘xx","张xx"];
	company12.companyUsedName = '无';
	
	company13.companyID = '03';
	company13.companyName = '和舆图';
	company13.companyAddress = '北京飘亮广场';
	company13.departmentID = "7639832978";
	company13.companyProfile = '地质灾害监测';
	company13.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company13.companyTEL = '18745128455';
	company13.bankAccount = '7485216823265269521';
	company13.depositBank = '工商银行';
	company13.paragraph = '451684384355';
	company13.companyCoreCustomer = ["刘xx","张xx"];
	company13.companyUsedName = '无';
	
	company14.companyID = '02';
	company14.companyName = '和舆图';
	company14.companyAddress = '北京飘亮广场';
	company14.departmentID = "7639832978";
	company14.companyProfile = '地质灾害监测';
	company14.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company14.companyTEL = '18745128455';
	company14.bankAccount = '7485216823265269521';
	company14.depositBank = '工商银行';
	company14.paragraph = '451684384355';
	company14.companyCoreCustomer = ["刘xx","张xx"];
	company14.companyUsedName = '无';
	
	company15.companyID = '01';
	company15.companyName = '和舆图';
	company15.companyAddress = '北京飘亮广场';
	company15.departmentID = "7639832978";
	company15.companyProfile = '地质灾害监测';
	company15.information = '计算机技术培训;计算机系统服务;数据处理;计算机维修;基础软件服务、应用软件服务。';
	company15.companyTEL = '18745128455';
	company15.bankAccount = '7485216823265269521';
	company15.depositBank = '工商银行';
	company15.paragraph = '451684384355';
	company15.companyCoreCustomer = ["刘xx","张xx"];
	company15.companyUsedName = '无';
	
		
	//存入到arrCompany数组中
	arrCompany = [company1,company2,company3,company4,company5,company6,
	company7,company8,company9,company10,company11,company12,company13,company14,company15];
	
router.get('/getCompany', function(req, res, next) {
	let response = {status:10,data:arrCompany};
	res.send(JSON.stringify(response));

});

router.get('/getCompany2', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arr;	
	for(let i = 0;i<arrCompany.length;i++){
		
		//遍历对比数组内company对象的每个id值，温和就开始返回对应的结果
		if(params.id==arrCompany[i].companyID){
			
			arr = arrCompany[i];
			console.log("companyID匹配成功，单位信息查询成功");
			
			let response = {status:15,data:arr};
			res.send(JSON.stringify(response));
			 
		}
	}

});






// 定义一个数组，存放多个company内容
let arrFramework = [];
// new出多个company实例
	let framework1 = new Framework();
	let framework2 = new Framework();
	let framework3 = new Framework();
	let framework4 = new Framework();
	
	framework1.departmentID = "01";
	framework1.companyID = "18" ;
	framework1.departmentName = "人事部";
	framework1.departmentMember = ["刘圆圆1","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx"];
	framework1.depatrmentDuty = "主要负责公司人事招聘";
	framework1.departmentCoreCustomer =["刘圆","李xx","王xx","张xx"];
	framework1.departmentAddress ='北京飘亮广场';
	
	framework2.departmentID = "02";
	framework2.companyID = "18" ;
	framework2.departmentName = "财务部";
	framework2.departmentMember = ["刘圆圆2","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx"];
	framework2.depatrmentDuty = "主要负责公司人事招聘";
	framework2.departmentCoreCustomer =["刘圆","李xx","王xx","张xx"];
	framework2.departmentAddress ='北京飘亮广场';
	
	framework3.departmentID = "03";
	framework3.companyID = "18" ;
	framework3.departmentName = "技术部";
	framework3.departmentMember = ["刘圆圆1","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx"];
	framework3.depatrmentDuty = "主要负责公司人事招聘";
	framework3.departmentCoreCustomer =["刘圆","李xx","王xx","张xx"];
	framework3.departmentAddress ='北京飘亮广场';
	
	framework4.departmentID = "04";
	framework4.companyID = "18" ;
	framework4.departmentName = "外联部";
	framework4.departmentMember = ["刘圆圆2","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx","李xx","王xx","张xx"];
	framework4.depatrmentDuty = "主要负责公司财务，工资发放";
	framework4.departmentAddress ='北京飘亮广场';
	framework4.departmentCoreCustomer =["張xx","李xx","王xx","张xx"];


	//存入到arrCompany数组中
	arrFramework = [framework1,framework2,framework3,framework4];
// 部门信息列表展示
router.get('/listFramework', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arr = [];
		
	for(let i = 0;i<arrFramework.length;i++){
		
		// 通过companyID值来查询对应数据，并返回
		if(params.id==arrFramework[i].companyID){
				arr[i]= arrFramework[i];
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

// 部门详情信息展示
router.get('/listDepartment', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arr = [];
	
	for(let i = 0;i<arrFramework.length;i++){
		
		// 通过companyID值来查询对应数据，并返回
		if(params.id==arrFramework[i].departmentID){
				arr= arrFramework[i];
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
// 单位详情信息修改
router.get('/revampDetails', function(req, res, next) {


let params = URL.parse(req.url, true).query;

	let arr;	
	for(let i = 0;i<arrCompany.length;i++){
		
		//遍历对比数组内company对象的每个id值，温和就开始返回对应的结果
		if(params.id==arrCompany[i].companyID){
			
			arr = arrCompany[i];
			console.log("companyID匹配成功，单位信息查询成功");
			
			 
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
router.get('/revampDepartment', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arr = [];
	
	for(let i = 0;i<arrFramework.length;i++){
		
		// 通过companyID值来查询对应数据，并返回
		if(params.id==arrFramework[i].departmentID){
				arr= arrFramework[i];
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