var URL = require('url');
var Client = require('./client');
var Hobbies = require('./clientHobbies');
var Relation = require('./relation');
var Workexpress = require('./workexpress');
var Studyexpress = require('./studyexpress');
var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next){
	res.send("client api");
});
// 定义一个客户基本信息集合
let arrClients = [];

//new出多个client对象
 let client1 = new Client();
 let client2 = new Client();
 let client3 = new Client();
 let client4 = new Client();
 let client5 = new Client();
 let client6 = new Client();
 let client7 = new Client();
 let client8 = new Client();
 let client9 = new Client();
 let client10 = new Client();
 
 //创建客户信息实例
 
	client1.clientID = '01';
	client1.name = '刘圆圆';
	client1.age = '26';
	client1.companyID = '0201';
	client1.telphone = '15301170766';
	client1.email = '15301170766@163.com';
	client1.nation = '汉族';
	client1.nativePlace = '河南';
	client1.wechat = 'liu964166664';
	client1.qq = '964166664';
	client1.IDcard = '411521199210083033';
	client1.health = '良好';
	client1.personHobit = '听歌、';
	client1.resumeID = '无';
	client1.companyName = '和舆图';
	client1.duty = '前端工程师';
	client1.officeTEL = '010-8632520';
	client1.clientEvaluation = '为人踏实，团结热情';
	client1.birthPlace = '河南省信阳市';
	client1.sex = '男';
	
	client2.clientID = '12';
	client2.name = '刘圆圆';
	client2.age = '26';
	client2.companyID = '0201';
	client2.telphone = '15301170766';
	client2.email = '15301170766@163.com';
	client2.nation = '汉族';
	client2.nativePlace = '河南';
	client2.wechat = 'liu964166664';
	client2.qq = '964166664';
	client2.IDcard = '411521199210083033';
	client2.health = '良好';
	client2.personHobit = '听歌、';
	client2.resumeID = '无';
	client2.companyName = '和舆图';
	client2.duty = '前端工程师';
	client2.officeTEL = '010-8632520';
	client2.clientEvaluation = '为人踏实，团结热情';
	client2.birthPlace = '河南省信阳市';
	client2.sex = '男';

	client3.clientID = '34';
	client3.name = '刘圆圆';
	client3.age = '26';
	client3.companyID = '0201';
	client3.telphone = '15301170766';
	client3.email = '15301170766@163.com';
	client3.nation = '汉族';
	client3.nativePlace = '河南';
	client3.wechat = 'liu964166664';
	client3.qq = '964166664';
	client3.IDcard = '411521199210083033';
	client3.health = '良好';
	client3.personHobit = '听歌、';
	client3.resumeID = '无';
	client3.companyName = '和舆图';
	client3.duty = '前端工程师';
	client3.officeTEL = '010-8632520';
	client3.clientEvaluation = '为人踏实，团结热情';
	client3.birthPlace = '河南省信阳市';
	client3.sex = '男';
	
	client4.clientID = '22';
	client4.name = '刘圆圆';
	client4.age = '26';
	client4.companyID = '0201';
	client4.telphone = '15301170766';
	client4.email = '15301170766@163.com';
	client4.nation = '汉族';
	client4.nativePlace = '河南';
	client4.wechat = 'liu964166664';
	client4.qq = '964166664';
	client4.IDcard = '411521199210083033';
	client4.health = '良好';
	client4.personHobit = '听歌、';
	client4.resumeID = '无';
	client4.companyName = '和舆图';
	client4.duty = '前端工程师';
	client4.officeTEL = '010-8632520';
	client4.clientEvaluation = '为人踏实，团结热情';
	client4.birthPlace = '河南省信阳市';
	client4.sex = '男';
	
	client5.clientID = '43';
	client5.name = '刘圆圆';
	client5.age = '26';
	client5.companyID = '0201';
	client5.telphone = '15301170766';
	client5.email = '15301170766@163.com';
	client5.nation = '汉族';
	client5.nativePlace = '河南';
	client5.wechat = 'liu964166664';
	client5.qq = '964166664';
	client5.IDcard = '411521199210083033';
	client5.health = '良好';
	client5.personHobit = '听歌、';
	client5.resumeID = '无';
	client5.companyName = '和舆图';
	client5.duty = '前端工程师';
	client5.officeTEL = '010-8632520';
	client5.clientEvaluation = '为人踏实，团结热情';
	client5.birthPlace = '河南省信阳市';
	client5.sex = '男';
	
	client6.clientID = '54';
	client6.name = '刘圆圆';
	client6.age = '26';
	client6.companyID = '0201';
	client6.telphone = '15301170766';
	client6.email = '15301170766@163.com';
	client6.nation = '汉族';
	client6.nativePlace = '河南';
	client6.wechat = 'liu964166664';
	client6.qq = '964166664';
	client6.IDcard = '411521199210083033';
	client6.health = '良好';
	client6.personHobit = '听歌、';
	client6.resumeID = '无';
	client6.companyName = '和舆图';
	client6.duty = '前端工程师';
	client6.officeTEL = '010-8632520';
	client6.clientEvaluation = '为人踏实，团结热情';
	client6.birthPlace = '河南省信阳市';
	client6.sex = '男';
	
	client7.clientID = '34';
	client7.name = '刘圆圆';
	client7.age = '26';
	client7.companyID = '0201';
	client7.telphone = '15301170766';
	client7.email = '15301170766@163.com';
	client7.nation = '汉族';
	client7.nativePlace = '河南';
	client7.wechat = 'liu964166664';
	client7.qq = '964166664';
	client7.IDcard = '411521199210083033';
	client7.health = '良好';
	client7.personHobit = '听歌、';
	client7.resumeID = '无';
	client7.companyName = '和舆图';
	client7.duty = '前端工程师';
	client7.officeTEL = '010-8632520';
	client7.clientEvaluation = '为人踏实，团结热情';
	client7.birthPlace = '河南省信阳市';
	client7.sex = '男';
	
	client8.clientID = '87';
	client8.name = '刘圆圆';
	client8.age = '26';
	client8.companyID = '0201';
	client8.telphone = '15301170766';
	client8.email = '15301170766@163.com';
	client8.nation = '汉族';
	client8.nativePlace = '河南';
	client8.wechat = 'liu964166664';
	client8.qq = '964166664';
	client8.IDcard = '411521199210083033';
	client8.health = '良好';
	client8.personHobit = '听歌、';
	client8.resumeID = '无';
	client8.companyName = '和舆图';
	client8.duty = '前端工程师';
	client8.officeTEL = '010-8632520';
	client8.clientEvaluation = '为人踏实，团结热情';
	client8.birthPlace = '河南省信阳市';
	client8.sex = '男';
	
	client9.clientID = '10';
	client9.name = '刘圆圆';
	client9.age = '26';
	client9.companyID = '0201';
	client9.telphone = '15301170766';
	client9.email = '15301170766@163.com';
	client9.nation = '汉族';
	client9.nativePlace = '河南';
	client9.wechat = 'liu964166664';
	client9.qq = '964166664';
	client9.IDcard = '411521199210083033';
	client9.health = '良好';
	client9.personHobit = '听歌、';
	client9.resumeID = '无';
	client9.companyName = '和舆图';
	client9.duty = '前端工程师';
	client9.officeTEL = '010-8632520';
	client9.clientEvaluation = '为人踏实，团结热情';
	client9.birthPlace = '河南省信阳市';
	client9.sex = '男';
	
	client10.clientID = '13';
	client10.name = '刘圆圆';
	client10.age = '26';
	client10.companyID = '0201';
	client10.telphone = '15301170766';
	client10.email = '15301170766@163.com';
	client10.nation = '汉族';
	client10.nativePlace = '河南';
	client10.wechat = 'liu964166664';
	client10.qq = '964166664';
	client10.IDcard = '411521199210083033';
	client10.health = '良好';
	client10.personHobit = '听歌、';
	client10.resumeID = '无';
	client10.companyName = '和舆图';
	client10.duty = '前端工程师';
	client10.officeTEL = '010-8632520';
	client10.clientEvaluation = '为人踏实，团结热情';
	client10.birthPlace = '河南省信阳市';
	client10.sex = '男';
	
//把客户实例添加到数组集合中

arrClients = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];

//定义一个兴趣爱好数据集合arrHobbies
let arrHobbies = [];
//new出多个爱好实例化对象
let hobbies1 = new Hobbies();
let hobbies2 = new Hobbies();
let hobbies3 = new Hobbies();
let hobbies4 = new Hobbies();
let hobbies5 = new Hobbies();

//添加多个爱好实例

	hobbies1.clientID = '22';
	hobbies1.hobbiesID = '02';
	hobbies1.name = '刘圆圆1';
	hobbies1.smoke = '红塔';
	hobbies1.beauty = '0';
	hobbies1.property = '黄金';
	hobbies1.sing = '0';
	hobbies1.bathe = '是';
	hobbies1.travel = '张家界';
	hobbies1.photography = '0';
	hobbies1.sports = '跑步，爬山';
	hobbies1.sportsTime = '一周一次';
	hobbies1.climbMountains = '泰山';
	hobbies1.car = '奥迪';
	hobbies1.tea = '普洱茶';
	hobbies1.health = '一般';
	hobbies1.heredopathia = '0';
	hobbies1.discomfort = '0';
	hobbies1.eat = '偏爱面食';
	hobbies1.avoid = '不吃辣';
	hobbies1.drinkBeer = '6两';
	hobbies1.fishing = '爱钓鱼';
	hobbies1.book = '0';
	hobbies1.golf = '爱打高尔夫';
	hobbies1.watch = '得利斯';
	hobbies1.shoes = '戴尔';
	hobbies1.belt = '老人头';
	hobbies1.computer = '工作使用';
	hobbies1.computerType = '戴尔';
	hobbies1.hobbyremark = '为人开朗，乐观';
	hobbies1.toporulian = '是';
	
	hobbies2.clientID = '12';
	hobbies2.hobbiesID = '03';
	hobbies2.name = '刘圆圆2';
	hobbies2.smoke = '红塔';
	hobbies2.beauty = '0';
	hobbies2.property = '黄金';
	hobbies2.sing = '0';
	hobbies2.bathe = '是';
	hobbies2.travel = '张家界';
	hobbies2.photography = '0';
	hobbies2.sports = '跑步，爬山';
	hobbies2.sportsTime = '一周一次';
	hobbies2.climbMountains = '泰山';
	hobbies2.car = '奥迪';
	hobbies2.tea = '普洱茶';
	hobbies2.health = '一般';
	hobbies2.heredopathia = '0';
	hobbies2.discomfort = '0';
	hobbies2.eat = '偏爱面食';
	hobbies2.avoid = '不吃辣';
	hobbies2.drinkBeer = '6两';
	hobbies2.fishing = '爱钓鱼';
	hobbies2.book = '0';
	hobbies2.golf = '爱打高尔夫';
	hobbies2.watch = '得利斯';
	hobbies2.shoes = '戴尔';
	hobbies2.belt = '老人头';
	hobbies2.computer = '工作使用';
	hobbies2.computerType = '戴尔';
	hobbies2.hobbyremark = '为人开朗，乐观';
	hobbies2.toporulian = '是';

//将爱好实例添加到爱好集合
arrHobbies =[hobbies1,hobbies2];

	//学校基本信息列表请求
router.get('/listInfo',function(req,res,next){

	let response = {status:10,data:arrClients};
	res.send(JSON.stringify(response));

})
//通过 clientID查询对应的实例对象，并返回客户详细信息
router.get('/listDetails', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arr;	
	for(let i = 0;i<arrClients.length;i++){
		
		//遍历对比数组内company对象的每个id值，温和就开始返回对应的结果
		if(params.id==arrClients[i].clientID){
			
			arr = arrClients[i];
			console.log("clientID匹配成功，客户信息查询成功");
			
			let response = {status:10,data:arr};
			res.send(JSON.stringify(response));
			 
		}
	}

});


//通过 clientID查询对应的实例对象，并返回爱好详细信息
router.get('/listHobbies', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arr;	
	for(let i = 0;i<arrHobbies.length;i++){
		
		//遍历对比数组内company对象的每个id值，温和就开始返回对应的结果
		if(params.id==arrHobbies[i].clientID){
			
			arr = arrHobbies[i];
			console.log("clientID匹配成功，爱好信息查询成功");
			
			let response = {status:2,data:arr};
			res.send(JSON.stringify(response));
			 
		}
	}

});

//创建 关系集合
let arrRelations = [];

//new出多个实例化对象
let relation1 = new Relation();
let relation2 = new Relation();
let relation3 = new Relation();
let relation4 = new Relation();
let relation5 = new Relation();
let relation6 = new Relation();
let relation7 = new Relation();
let relation8 = new Relation();
let relation10 = new Relation();
let relation9 = new Relation();

//创建relation实例
	relation1.relationID = "01";
	relation1.clientID = '12';
	relation1.name = '刘圆圆';
	relation1.relationreType = '家属';
	relation1.secondRelation = '父亲';
	relation1.relationName = '刘玉';
	
	relation2.relationID = "02";
	relation2.clientID = '12';
	relation2.name = '刘圆圆';
	relation2.relationreType = '家属';
	relation2.secondRelation = '母亲';
	relation2.relationName = '罗xx';
	
	relation3.relationID = "03";
	relation3.clientID = '12';
	relation3.name = '刘圆圆';
	relation3.relationreType = '同事';
	relation3.secondRelation = '领导';
	relation3.relationName = '刘xx';
	
	relation4.relationID = "04";
	relation4.clientID = '12';
	relation4.name = '刘圆圆';
	relation4.relationreType = '同事';
	relation4.secondRelation = '下属';
	relation4.relationName = '里信息';
	
	relation5.relationID = "05";
	relation5.clientID = '12';
	relation5.name = '刘圆圆';
	relation5.relationreType = '同事';
	relation5.secondRelation = '老板';
	relation5.relationName = '赵信息';
	
	relation6.relationID = "06";
	relation6.clientID = '12';
	relation6.name = '刘圆圆';
	relation6.relationreType = '战友';
	relation6.secondRelation = '领导';
	relation6.relationName = '陈信息';
	
	relation7.relationID = "07";
	relation7.clientID = '12';
	relation7.name = '刘圆圆';
	relation7.relationreType = '校友';
	relation7.secondRelation = '学姐';
	relation7.relationName = '刘oo';
	
	relation8.relationID = "08";
	relation8.clientID = '12';
	relation8.name = '刘圆圆';
	relation8.relationreType = '校友';
	relation8.secondRelation = '学弟';
	relation8.relationName = '曾cc';

	relation9.relationID = "09";
	relation9.clientID = '12';
	relation9.name = '刘圆圆';
	relation9.relationreType = '好友';
	relation9.secondRelation = '兄弟';
	relation9.relationName = '曾cc';
	
	relation10.relationID = "10";
	relation10.clientID = '12';
	relation10.name = '刘圆圆';
	relation10.relationreType = '其他';
	relation10.secondRelation = '老乡';
	relation10.relationName = '欧阳cc';
	
	//将relation实例添加到数组中
	arrRelations = [relation1,relation2,relation3,relation4,relation5,relation6,relation7,relation8,relation9,relation10];
	



router.get('/listRelations', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arr = [];
		
	for(let i = 0;i<arrRelations.length;i++){
		
		// 通过companyID值来查询对应数据，并返回
		if(params.id==arrRelations[i].clientID){
				arr[i]= arrRelations[i];
				console.log(`爱海匹配成功,第${i}条部门信息匹配成功`);
			}else{
				console.log(`爱海匹配成功,第${i}条部门信息匹配失败`);
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

//创建工作经验数组和学习经历数组
let arrWorkexpress = [];
let arrStudyexpress = [];

//创建工作经验和学习经历对象
let workexpress1=new Workexpress();
let workexpress2=new Workexpress();
let workexpress3=new Workexpress();

let studyexpress1= new Studyexpress();
let studyexpress2= new Studyexpress();
let studyexpress3= new Studyexpress();

	workexpress1.workExperienceID = '01';	
	workexpress1.clientID = '12';
	workexpress1.name= '刘圆圆';
	workexpress1.companyID= '0101';
	workexpress1.companyName= '和舆图';
	workexpress1. workTime= '2017年9月';
	workexpress1.companyAddress= '飘亮广场';
	workexpress1.duty= '前端工程师';
	workexpress1.workremark= '担任前端工程师期间，曾任命外出担任前线支援工作';
	workexpress1.expressAbout= '无';
	
	workexpress2.workExperienceID = '02';	
	workexpress2.clientID = '12';
	workexpress2.name= '刘圆圆';
	workexpress2.companyID= '0101';
	workexpress2.companyName= '和舆图';
	workexpress2. workTime= '2016年9月';
	workexpress2.companyAddress= '飘亮广场';
	workexpress2.duty= '前端工程师';
	workexpress2.workremark= '担任前端工程师期间，曾任命外出担任前线支援工作';
	workexpress2.expressAbout= '无';
	
	workexpress3.workExperienceID = '03';	
	workexpress3.clientID = '12';
	workexpress3.name= '刘圆圆';
	workexpress3.companyID= '0101';
	workexpress3.companyName= '和舆图';
	workexpress3. workTime= '2015年9月';
	workexpress3.companyAddress= '飘亮广场';
	workexpress3.duty= '前端工程师';
	workexpress3.workremark= '担任前端工程师期间，曾任命外出担任前线支援工作';
	workexpress3.expressAbout= '无';
	
	studyexpress1.studyExperienceID = '04';
	studyexpress1.clientID = '12';
	studyexpress1.schoolName = '黄河科技学院';
	studyexpress1.studyAddress = '郑州南三环紫荆山路';
	studyexpress1.studyTimelID = '11';
	studyexpress1.major = '电控专业';
	studyexpress1.remark = '成绩优异';
	studyexpress1.studyremark = '在校表现优异，团支书干部';
	studyexpress1.name= '刘圆圆';
	studyexpress1.studyTime='2017年9月-2013年9月';
	studyexpress1.teacher='丁毅';
	
	
	
	studyexpress2.studyExperienceID = '05';
	studyexpress2.clientID = '12';
	studyexpress2.schoolName = '罗山高级中学';
	studyexpress2.studyAddress = '信阳市罗山县高级中学';
	studyexpress2.studyTimelID = '11';
	studyexpress2.major = '理科';
	studyexpress2.remark = '成绩优异';
	studyexpress2.studyremark = '在校表现优异，团支书干部';	
	studyexpress2.name= '刘圆圆';
	studyexpress2.studyTime='2013年9月-2010年9月';
	studyexpress2.teacher='廖玲';
	
	studyexpress3.studyExperienceID = '06';
	studyexpress3.clientID = '12';
	studyexpress3.schoolName = '罗山一中';
	studyexpress3.studyAddress = '信阳市罗山县罗山一中';
	studyexpress3.studyTimelID = '11';
	studyexpress3.major = '无';
	studyexpress3.remark = '成绩优异';
	studyexpress3.studyremark = '在校表现优异，团支书干部';
	studyexpress3.name= '刘圆圆';
	studyexpress3.studyTime='2007年9月-2001年9月';
	studyexpress3.teacher='孙乾元';
	
	//将实例添加到对应的数组中
	 arrWorkexpress = [workexpress1,workexpress2,workexpress3];
	 arrStudyexpress = [studyexpress1,studyexpress2,studyexpress3];
	
	//通过clientID查询对应的工作履历并返回
router.get('/listResumes', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arrwork = [];
	let arrstudy = [];
		
	for(let i = 0;i<arrWorkexpress.length;i++){
		
		// 通过companyID值来查询对应数据，并返回
		if(params.id==arrWorkexpress[i].clientID){
				arrwork[i]= arrWorkexpress[i];
				console.log(`爱海匹配成功,第${i}条部门信息匹配成功`);
			}else{
				console.log(`爱海匹配成功,第${i}条部门信息匹配失败`);
			};
//		if(params.id==arrStudyexpress[i].clientID){
//				arrstudy[i]= arrStudyexpress[i];
//				console.log(`爱海匹配成功,第${i}条部门信息匹配成功`);
//			}else{
//				console.log(`爱海匹配成功,第${i}条部门信息匹配失败`);
//			}  
	}
	
		for(let i = 0;i<arrStudyexpress.length;i++){
		
		// 通过companyID值来查询对应数据，并返回	
		if(params.id==arrStudyexpress[i].clientID){
				arrstudy[i]= arrStudyexpress[i];
				console.log(`爱海匹配成功,第${i}条部门信息匹配成功`);
			}else{
				console.log(`爱海匹配成功,第${i}条部门信息匹配失败`);
			}  
	}
		// 判断arr是否为空 来返回成功或者失败
		let statusVal;
		if(arrwork.length>=0||arrstudy.length>=0){
			statusVal="查询成功";
		}else{
			statusVal="查询失败";
			
		}
		let response = {status:statusVal,data:{workExpress:arrwork,studyExpress:arrstudy}};
		res.send(JSON.stringify(response));
			 
	
	});
	//通过clientID查询对应的工作履历并返回
router.get('/revampResumes', function(req, res, next) {
	let params = URL.parse(req.url, true).query;
	let arrwork = [];
	let arrstudy = [];
		
	for(let i = 0;i<arrWorkexpress.length;i++){
		
		// 通过companyID值来查询对应数据，并返回
		if(params.id==arrWorkexpress[i].workExperienceID){
				arrwork= arrWorkexpress[i];
				console.log(`爱海匹配成功,第${i}条部门信息匹配成功`);
			}else{
				console.log(`爱海匹配成功,第${i}条部门信息匹配失败`);
			};
//		if(params.id==arrStudyexpress[i].clientID){
//				arrstudy[i]= arrStudyexpress[i];
//				console.log(`爱海匹配成功,第${i}条部门信息匹配成功`);
//			}else{
//				console.log(`爱海匹配成功,第${i}条部门信息匹配失败`);
//			}  
	}
	
		for(let i = 0;i<arrStudyexpress.length;i++){
		
		// 通过companyID值来查询对应数据，并返回	
		if(params.id==arrStudyexpress[i].studyExperienceID){
				arrstudy= arrStudyexpress[i];
				console.log(`爱海匹配成功,第${i}条部门信息匹配成功`);
			}else{
				console.log(`爱海匹配成功,第${i}条部门信息匹配失败`);
			}  
	}
		// 判断arr是否为空 来返回成功或者失败
		let statusVal;
		if(arrwork.length>=0||arrstudy.length>=0){
			statusVal="查询成功";
		}else{
			statusVal="查询失败";
			
		}
		let response = {status:statusVal,data:{workExpress:arrwork,studyExpress:arrstudy}};
		res.send(JSON.stringify(response));
			 
	
	});

module.exports = router;