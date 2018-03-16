


// 异步加载函数

function ajax (url,fun) {
	$.ajax({
		type: "get",
		url,
		dataType: "json",
		
		success: function(result) {
			fun(result)
		}
	});
};

function iframeAjax (url,fun,foundID,companyID) {
	$.ajax({
		type: "get",
		url:dizhi+url,
		dataType: "json",
		data:{
			id:companyID
		},
		success: function(result) {
		//	console.log(result)
			fun(result,foundID)
		}
	});
};


function iframeAjaxnew (url,fun,foundID,companyID) {
	$.ajax({
		type: "post",
		url:lujin+url,
		contentType:"application/x-www-form-urlencoded",
		dataType: "json",
		data:companyID,
		success: function(result) {
			fun(result,foundID)
		}
	});
};
// 点击按钮input为空报错函数
	function isNull(judgeID){
		$(judgeID).children(".btn_save").on("click",function(){
			$(judgeID).find(".needs").each(function () {
			                    if ($(this).val() == "") {
			$(this).parent("div").addClass("has-error");
			                    }else{
			$(this).parent("div").removeClass("has-error");
			                    	
			                    }
			                });
			$(judgeID).children(".has-error:first").find(".needs").focus();
		});
		
	};	
function isNull2(judgeID){
		$(judgeID).siblings(".btn_save").on("click",function(){
			$(judgeID).find(".needs").each(function () {
			                    if ($(this).val() == "") {
			$(this).parent("div").addClass("has-error");
			                    }else{
			$(this).parent("div").removeClass("has-error");
			                    	
			                    }
			                });
			$(judgeID).children(".has-error:first").find(".needs").focus();
		});
		
	};

//单位编号排序函数 此时tabID是tbody的id而不是table

function rankCompanyID(rankID,tabID){
			$(document).on("click",rankID,function(){
			//let tb=document.getElementById('listInfo_school_1');
			//console.log(tb.tBodies[0].rows[0].cells[1].innerHTML)
			let tBles=document.getElementById(tabID);
			//console.log(tb1.rows[0].cells[1].innerHTML);
			
	        let arr=[];
	        let arr1=[];
	        for(i=0;i<tBles.rows.length;i++){
	          arr[i]=tBles.rows[i];
	          
	        }
	       // console.log(arr)
	       // 把id获取过来，补全数字
	        for(let i=0;i<arr.length;i++){
	            arr[i].cells[1].innerHTML=padding5(arr[i].cells[1].innerHTML,7);
	        }
	        // 此时数字是不全后的数字，现在进行排序
	        arr.sort(function(tr1,tr2){
	        var n1=parseInt(tr1.cells[1].innerHTML);  
	        var n2=parseInt(tr2.cells[1].innerHTML);
	        return n1-n2;
	        });
	        //表格排序完成，开始添加
	        for(i=0;i<arr.length;i++){
	         arr[i].cells[1].innerHTML=arr[i].cells[1].innerHTML.replace(/00/g, "");
	          tBles.appendChild(arr[i]);
	        	
	
	        }
	        //添加完成
	        
	        //数字补全函数
	      function padding5(num, length) {
	        let len = (num + "").length;
	        let diff = length - len;
	        if(diff > 0) {
	            num= num +Array(diff).join("0") ;
	        }
	        return num;
	    };
	    
	
		})
	}


//上级单位搜索添加函数

	// 当在搜索框输入内容时，根据关键字匹配，显示弹出层 
function searchSuggestTopCompany(obj){ 
	 var searchKey=$(obj).val(); 
	 var reg = new RegExp(searchKey,"i"); //忽略大小写匹配搜索框中输入的内容 
	 $.ajax({ 
		 type:"get", 
		 url:dizhi+"companys/getCompany", 
		 dataType:"json", 
		 success:function(res){ 
		 	//console.log(res.data[0])
		 	let shuju = res.data;
			  var arr=[]; 
			  for(let i=0;i<10;i++){ 
				  if(searchKey!="" && (shuju[i].companyID.search(reg)!=-1 || shuju[i].companyName.search(reg)!=-1)) { 
				   		arr.push("<li  onclick='changeSearchKeyTopCompany(this);'><h4>"+shuju[i].companyName+"</h4></li>"); 
				  } 
			  };  
			  
			  // 当填写信息没有从后台搜索匹配项时，提示信息
			   if(arr==""){
			   		arr.push("<li>没有相关上级单位,默认该单位为一级单位</li>"); 
			  }
			  $(".topCompany .searchUL").html(arr).show(); 
		 } 
	 }); 
}; 
//单击匹配列表中的关键字选项时，将该关键字显示在搜索框中 
function changeSearchKeyTopCompany(obj){ 
	 var value=$(obj).text(); 
	 $(".topCompany .searchKey").val(value); 
	 $('.topCompany .searchUL').hide(); 
}


// 单位模板目录下

	// 新增页面 部门信息添加
	var addDepartmentInfo=`
				<div class="alert">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                	<div class="form-group ">
				      	<label >部门名称</label>
				      	<select class="departmentName">
				      		<option value="人事部">人事部</option>
				      		<option value="外交部">外交部</option>
				      		<option value="财务部">财务部</option>
				      		<option value="保洁部">保洁部</option>
				      	</select>
				    </div>
				    <div></div>
				    <div class="form-group">
				      	<label >核心成员</label>
				      	<input type="text" class="form-control departmentCoreCustomer"   placeholder="输入相关部门成员">
				    </div>
				    
				    <div class="form-group">
				      	<label >部门成员</label>
				      	<input type="text" class="form-control departmentMember"   placeholder="输入相关部门成员">
				    </div>
				    <div class="form-group">
				      	<label >部门地址</label>
				      	<input type="text" class="form-control departmentAddress" disabled  placeholder="输入相关部门地址">
				    </div>
				    <div class="form-group">
				      	<label >单位名称</label>
				      	<input type="text" class="form-control companyName" disabled  placeholder="输入相关单位名称">
				    </div>
				    <div class="form-group" style="width:60%">
				      	<label >部门职责</label>
					<textarea class="form-control depatrmentDuty"    rows="3" placeholder="输入相关部门信息"></textarea>
				      	
				    </div>
				</div>`;
				
	// 信息展示页面 单位列表函数
	function listInfo_company(result) {
		$.each(result, function(index, obj) {
			$("#listInfo_company").append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td class="bianma">${obj.编码}</td>
					<td>${obj.单位名称}</td>
					 <td>${obj.单位地址}</td>
					 <td><a href="#">${obj.单位核心客户[0]}</a>/<a href="#">${obj.单位核心客户[1]}</a></td>
					 <td><button class=" btn btn-info ViewDetails">查看详情</button><button class="replaceDetails btn btn-warning">修改</button></td>
				 </tr>`
			);
		})
	};	

	

	 //信息展示页面 单位详细添加函数
	function listDetails_company(result,foundID) {
		let obj = result.data[0];
		//console.log(obj[0])
			foundID.append(
				` <tr>
			        <td>单位名称</td>
			        <td colspan="2">${obj.companyName}</td>
			      </tr>
			     <tr>
			        <td>单位曾用名</td>
			        <td colspan="2">${obj.companyUsedName}</td>
			      </tr>
			      <tr>
			        <td>单位地址</td>
			        <td colspan="2">${obj.companyAddress}</td>
			      </tr>
			      <tr>
			        <td>单位职责</td>
			        <td colspan="2">${obj.companyProfile}</td>
			      </tr>
			      <tr>
			        <td>单位税号</td>
			        <td colspan="2">${obj.paragraph}</td>
			      </tr>
			      <tr>
			        <td>单位电话</td>
			        <td colspan="2">${obj.companyTEL}</td>
			      </tr>
			      <tr>
			        <td>核心客户</td>
			        <td colspan="2">${obj.companyCoreCustomer}</td>
			      </tr>
			      <tr>
			        <td>开户银行</td>
			        <td colspan="2">${obj.depositBank}</td>
			      </tr>
			      <tr>
			        <td>银行账户</td>
			        <td colspan="2">${obj.bankAccount}</td>
			      </tr>
			      <tr>
			        <td colspan="3">
			        	公司简介：<br />
			        	&nbsp;${obj.information}
			        </td>
			    </tr>`
			);
	};
			
	// 信息展示页面 内部架构列表添加函数
	function listFramework_company(result,foundID) {
		//let obj = result.data;
		$.each(result.data, function(index, obj) {
			//var chengyuan = obj.departmentMember;
			foundID.append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td class="bianma">${obj.departmentID}</td>
					<td class="departmentName">${obj.departmentName}</td>
					 <td>${obj.departmentAddress}</td>
					 <td><a href="#">${obj.departmentCoreCustomer}</a></td>
					 <td class="look">
					 <button class="btn btn-info ViewDetails">查看详情</button>
					 <button class="replaceDetails btn btn-warning">修改</button>
					 <button class="btn btn_delete btn-danger">删除</button>
					 </td>
				</tr>`
			);
		});
	};
	
	// 信息展示页面 部门详细添加函数
	function listDepartment_company(result,foundID) {
		let obj = result.data[0];
			foundID.append(
				`<tr>
			        <td>部门名称</td>
			        <td colspan="2">${obj.departmentName}</td>
			      </tr>
			      <tr>
			        <td>部门地址</td>
			        <td colspan="2">${obj.departmentAddress}</td>
			      </tr>
			      <tr>
			      	<td>核心成员</td>
			        <td colspan="2">${obj.departmentCoreCustomer}</td>
			      </tr>
			       <tr>
			        <td colspan="3">
			        	部门成员：
			        	&nbsp;${obj.departmentMember}
			        </td>
			      </tr>
			      <tr>
			        <td colspan="3">
						部门职责： 
					&nbsp;${obj.depatrmentDuty}
					</td>
					</tr>
			`);
	};
	// 单位修改删除页面 单位详细添加函数
	function revampDetails_company(result,foundID) {
	//	$.each(result, function(index, obj) {
		let obj  = result.data[0];
			foundID.append( 
				`<div class="form-group topCompany">
					<label >上级单位</label>
				  	 <input  type="text"  class="form-control companyHight searchKey" placeholder=" 输入相关上级单位全称" onkeyup="searchSuggestTopCompany(this);">
					<ul class=" searchUL clearfix">
				</div>
				<div class="form-group">
				  <label >单位编号</label>
				  <input type="text" class="form-control companyID needs"    value="${obj.companyID}">
				</div>
				<div class="form-group">
				  <label >单位名称</label>
				  <input type="text" class="form-control companyName needs"    value="${obj.companyName}">
				</div>
				 <div class="form-group">
				  <label >曾用名</label>
				  <input type="text" class="form-control companyUsedName"    value="${obj.companyUsedName}">
				</div>
				<div class="form-group">
				  <label >单位地址</label>
				  <input type="text" class="form-control companyAddress"   value="${obj.companyAddress}">
				</div><div class="form-group">
				  <label >单位职责</label>
				  <input type="text" class="form-control companyProfile"   value="${obj.companyProfile}">
				</div>
				<div class="form-group">
				  <label >单位税号</label>
				  <input type="text" class="form-control paragraph"   value="${obj.paragraph}">
				</div>
				<div class="form-group">
				  <label >单位电话</label>
				  <input type="text" class="form-control companyTEL"   value="${obj.companyTEL}">
				</div>
				<div class="form-group">
				  <label >核心客户</label>
				  <input type="text" class="form-control companyCoreCustomer"   value="${obj.companyCoreCustomer}">
				</div>
				<div class="form-group">
				  <label >开户银行</label>
				  <input type="text" class="form-control depositBank"  value="${obj.depositBank}">
				</div>
				<div class="form-group">
				  <label >银行账户</label>
				  <input type="text" class="form-control bankAccount"   value="${obj.bankAccount}">
				</div>
				<div class="form-group">
				  <label >公司简介</label>
					<textarea class="form-control information"    rows="3">${obj.information}</textarea>
				  
				</div>`
			);
		//});
	};	
	// 单位修改删除页面 部门详细修改添加函数
	function revampDepartment_company(result,foundID) {
		//$.each(result, function(index, obj) {
		let obj = result.data[0];
			
			var chengyuan = obj.部门成员;
			foundID.append(
				`<div>
					<div class="form-group">
	     				<label >部门名称:</label>
	     				<span class="departmentName">${obj.departmentName}</span>
	    			</div>
	    			<div class="form-group">
	     				<label >单位编码:</label>
	     				<span class="companyID">${obj.companyID}</span>
	    			</div>
	    			<div class="form-group">
					      <label >部门地址</label>
					      <input type="text" class="form-control departmentAddress" value="${obj.departmentAddress}"   placeholder="输入工作地点">
					</div>
					<div class="form-group">
					      <label >核心成员</label>
					      <input type="text" class="form-control departmentCoreCustomer" value="${obj.departmentCoreCustomer}"   placeholder="输入工作地点">
					</div>
	    			<div></div>
	    			<div class="form-group">
			      		<label for="text">部门成员:</label>
						<textarea class="form-control departmentMember"    rows="3">${obj.departmentMember}</textarea>
	    			</div>
			    	<div class="form-group">
			      		<label for="text">部门职责:</label>
						<textarea class="form-control depatrmentDuty"    rows="3">${obj.depatrmentDuty}</textarea>
			    	</div>
				</div>
			`);
		//});
	};

// 客户模板目录下 

	// 新增页面 工作经历添加
	var addWorkExperience=`<div class="alert">                                       		
							    <button type="button" class="close" data-dismiss="alert">&times;</button>		                	
							    <div class="form-group">
							      <label >工作地点</label>
							      <input type="text" class="form-control companyAddress"   placeholder="输入工作地点">
							    </div>
							     <div class="form-group">
							      <label >工作时间</label>
							      <input type="text" class="form-control workTime"   placeholder="输入工作时间">
							    </div>
							    <div class="form-group">
							      <label >单位名称</label>
							      <input type="text" class="form-control companyName"   placeholder="输入单位名称">
							    </div>
							    <div class="form-group">
							      <label >担任职务</label>
							      <input type="text" class="form-control duty"   placeholder="输入担任职务">
							    </div>
							    <div class="form-group">
							      <label >负责项目</label>
							      <input type="text" class="form-control workremark"   placeholder="输入担任职务">
							    </div>
							    <div class="form-group" style="width:61%" >
							      <label >备注</label>
							      <textarea class="form-control expressAbout" rows="3"></textarea>
							    </div>
							</div>`;
							
	// 新增页面 学校经历添加
	 var addStudyExperience=`<div class="alert">                                       		
						    <button type="button" class="close" data-dismiss="alert">&times;</button>		                	
						    <div class="form-group">
						      <label >学习时间</label>
						      <input type="text" class="form-control studyTime"   placeholder="输入学习时间">
						    </div>
						     <div class="form-group">
						      <label >学校名称</label>
						      <input type="text" class="form-control schoolName"   placeholder="输入学校名称">
						    </div>
						    <div class="form-group">
						      <label >学习专业</label>
						      <input type="text" class="form-control major"   placeholder="输入学习专业">
						    </div>
						    <div class="form-group">
						      <label >学习地址</label>
						      <input type="text" class="form-control studyAddress"   placeholder="输入学习专业">
						    </div>
						    <div class="form-group">
						      <label >专业导师</label>
						      <input type="text" class="form-control teacher"   placeholder="输入专业导师">
						    </div>
						    <div class="form-group" >
						      <label >备注</label>
						      <textarea class="form-control studyremark" rows="2"></textarea>
						    </div>
						</div>`;
						
	// 新增页面 关系信息添加
	var addRelation=`<div class="alert">	                                        		
						    <button type="button" class="close" data-dismiss="alert">&times;</button>		                	
						    <div class="form-group">
						      <label >关系人</label>
						      <input type="text" class="form-control"   placeholder="输入关系人">
						    </div>
						     <div class="form-group">
						      <label >关系</label>
						      <input type="text" class="form-control"   placeholder="输入关系">
						    </div>
						    <div class="form-group">
								<label >备注</label>
						      <textarea class="form-control" rows="3"></textarea>								
						    </div>					    
					    </div>`;

		
	// 信息展示页面 客户信息详细添加函数	
	function listDetails_client(result,foundID) {
		let obj=result.data;
		foundID.append(
			` <tr>
		        <td>姓名</td>
		        <td colspan="2">${obj.name}</td>
		      </tr>
		     <tr>
		        <td>年龄</td>
		        <td colspan="2">${obj.age}</td>
		      </tr>
		      <tr>
		        <td>民族</td>
		        <td colspan="2">${obj.nation}</td>
		      </tr>
		      <tr>
		        <td>出生地</td>
		        <td colspan="2">${obj.birthPlace}</td>
		      </tr>
		      <tr>
		        <td>籍贯</td>
		        <td colspan="2">${obj.nativePlace}</td>
		      </tr>
		      <tr>
		        <td>手机号码</td>
		        <td colspan="2">${obj.telphone}</td>
		      </tr>
		      <tr>
		        <td>个人邮箱</td>
		        <td colspan="2">${obj.email}</td>
		      </tr>
		      <tr>
		        <td>微信</td>
		        <td colspan="2">${obj.wechat}</td>
		      </tr>
		      <tr>
		        <td>qq</td>
		        <td colspan="2">${obj.qq}</td>
		      </tr>
		      <tr>
		        <td>身份证号</td>
		        <td colspan="2">${obj.IDcard}</td>
		      </tr>
		      <tr>
		        <td>健康状况</td>
		        <td colspan="2">${obj.health}</td>
		      </tr>
		      <tr>
		        <td>个人习惯</td>
		        <td colspan="2">${obj.personHobit}</td>
		      </tr>
		      <tr>
		        <td>性别</td>
		        <td colspan="2">${obj.sex}</td>
		      </tr>
		      <tr>
		        <td>现任公司</td>
		        <td colspan="2">${obj.companyName}</td>
		      </tr>
		      <tr>
		        <td>担任职务</td>
		        <td colspan="2">${obj.duty}</td>
		      </tr>
		      <tr>
		        <td>办公电话</td>
		        <td colspan="2">${obj.officeTEL}</td>
		      </tr>
		      <tr>
		        <td colspan="3">
		        	客户评价：<br />
		        	&nbsp;${obj.clientEvaluation}
		        </td>
		    </tr>
		`);	
	};
	
	// 信息展示页面 个人履历添加函数	
	function listResume_client(result,foundID) {
		let work_hostory=result.data.workExpress;
		var study_hostory=result.data.studyExpress;
		$.each(work_hostory, function(index, obj) {
			foundID.append(
				`
				<tr>
			        <td colspan="3">工作经历<h3>${index}</h3></td>
	        	</tr>
				<tr>
			        <td style="width:20%">工作时间</td>
			        <td colspan="2">${obj.workTime}</td>
			      </tr>
			      <tr>
			        <td>单位名称</td>
			        <td colspan="2">${obj.companyName}</td>
			      </tr>
			      <tr>
			        <td>工作地点</td>
			        <td colspan="2">${obj.companyAddress}</td>
			      </tr>
			      <tr>
			        <td>负责项目</td>
			        <td colspan="2">${obj.workremark}</td>
			      </tr>
			      <tr>
			        <td>担任职务</td>
			        <td colspan="2">${obj.duty}</td>
			      </tr>
			      <tr>
			      <td colspan="3">
			        	备注：<br />
			        	&nbsp;${obj.expressAbout}
			        </td>
      			<tr>
      		`);
		});
		$.each(study_hostory, function(index, obj) {
			foundID.append(
				`<tr>
			        <td colspan="3">学习经历<h3>${index}</h3></td>
	        	</tr>
				<tr>
			        <td>学习时间</td>
			        <td colspan="2">${obj.studyTime}</td>
			      </tr>
			      <tr>
			        <td>学习专业</td>
			        <td colspan="2">${obj.major}</td>
			      </tr>
			      <tr>
			        <td>学校名称</td>
			        <td colspan="2">${obj.schoolName}</td>
			      </tr>
			      <tr>
			        <td>专业导师</td>
			        <td colspan="2">${obj.teacher}</td>
			      </tr>
			      <tr>
			      <td colspan="3">
			        	备注：<br />
			        	&nbsp;${obj.studyremark}
			        </td>
	      		<tr>
	      	`);
		});
	};
	
	// 信息展示页面 关系人添加函数
	function listRelation_client(result,foundID) {
		var friends=result.data;
		$.each(friends, function(index, obj) {
			foundID.append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td>${obj.relationName}</td>
					 <td>${obj.relationreType}</td>
					 <td>${obj.secondRelation}</td>
				</tr>
			`);
		});
	};
	
	
	//信息展示页面 兴趣爱好添加函数
	function listHobbies_client(result,foundID) {
			let obj = result.data;
			foundID.append(
				`<tr>
			        <td>姓名</td>
			        <td colspan="2">${obj.name}</td>
			      </tr>
			     <tr>
			        <td>香烟</td>
			        <td colspan="2">${obj.smoke}</td>
			      </tr>
			      <tr>
			        <td>美女</td>
			        <td colspan="2">${obj.beauty}</td>
			      </tr>
			      <tr>
			        <td>财物</td>
			        <td colspan="2">${obj.property}</td>
			      </tr>
			      <tr>
			        <td>唱歌</td>
			        <td colspan="2">${obj.sing}</td>
			      </tr>
			      <tr>
			        <td>洗澡</td>
			        <td colspan="2">${obj.bathe}</td>
			      </tr>
			      <tr>
			        <td>旅游</td>
			        <td colspan="2">${obj.travel}</td>
			      </tr>
			      <tr>
			        <td>摄影</td>
			        <td colspan="2">${obj.photography}</td>
			      </tr>
			      <tr>
			        <td>运动</td>
			        <td colspan="2">${obj.sports}</td>
			      </tr>
			      <tr>
			        <td>运动周期</td>
			        <td colspan="2">${obj.sportsTime}</td>
			      </tr>
			      <tr>
			        <td>爬山</td>
			        <td colspan="2">${obj.climbMountains}</td>
			      </tr>
			      <tr>
			        <td>汽车</td>
			        <td colspan="2">${obj.car}</td>
			      </tr>
			      <tr>
			        <td>喝茶</td>
			        <td colspan="2">${obj.tea}</td>
			      </tr>
			      <tr>
			        <td>身体状况</td>
			        <td colspan="2">${obj.health}</td>
			      </tr>
			      <tr>
			        <td>遗传病</td>
			        <td colspan="2">${obj.heredopathia}</td>
			      </tr>
			      <tr>
			        <td>不适地方</td>
			        <td colspan="2">${obj.discomfort}</td>
			      </tr>
			     
			      <tr>
			        <td>饮食</td>
			        <td colspan="2">${obj.eat}</td>
			      </tr>
			      <tr>
			        <td>忌口</td>
			        <td colspan="2">${obj.avoid}</td>
			      </tr>
			      <tr>
			        <td>酒量</td>
			        <td colspan="2">${obj.drinkBeer}</td>
			      </tr>
			      <tr>
			        <td>钓鱼</td>
			        <td colspan="2">${obj.fishing}</td>
			      </tr>
			      <tr>
			        <td>高尔夫</td>
			        <td colspan="2">${obj.golf}</td>
			      </tr>
			      <tr>
			        <td>看书</td>
			        <td colspan="2">${obj.book}</td>
			      </tr>
			      <tr>
			        <td>手表</td>
			        <td colspan="2">${obj.watch}</td>
			      </tr>
			      <tr>
			        <td>小资情调</td>
			        <td colspan="2">${obj.toporulian}</td>
			      </tr>
			      <tr>
			        <td>皮鞋</td>
			        <td colspan="2">${obj.shoes}</td>
			      </tr>
			      <tr>
			        <td>腰带</td>
			        <td colspan="2">${obj.belt}</td>
			      </tr>
			      <tr>
			        <td>电脑</td>
			        <td colspan="2">${obj.computer}</td>
			      </tr>
			      <tr>
			        <td>电脑类型</td>
			        <td colspan="2">${obj.computerType}</td>
			      </tr>
			      <tr>
			      <tr>
			        <td colspan="3">
			        	备注：<br />
			        	&nbsp;${obj.hobbyremark}
			        </td>
			    </tr>
			`);
	};

	// 客户修改删除页面 客户信息修改添加函数
	function revampDetails_client(result,founfID) {
		var obj=result.data;
		founfID.append(
			`
		    <div class="form-group">
		      <label for="company_name">姓名</label>
		      <input type="text" class="form-control name needs"  placeholder="输入相关客户姓名"   value="${obj.name}">
		    </div>
		     <div class="form-group">
		      <label for="company_name">年龄</label>
		      <input type="text" class="form-control age"   placeholder="输入相关年龄"   value="${obj.age}">
		    </div>
		    <div class="form-group">
		      <label >性别</label> 
		      <input type="text" class="form-control sex"  placeholder=" 输入相关现任公司"   value="${obj.sex}">
		    </div>
		    <div class="form-group">
		      <label >出生地</label> 
		      <input type="text" class="form-control birthPlace"  placeholder=" 输入相关现任公司"   value="${obj.birthPlace}">
		    </div>
		    <div class="form-group">
		      <label for="company_name">籍贯</label>
		      <input type="text" class="form-control  nativePlace"  placeholder="输入相关客户姓名"   value="${obj.nativePlace}">
		    </div>
		    <div class="form-group">
		      <label  >民族</label> 
		      <input type="text" class="form-control nation" placeholder=" 输入相关民族"   value="${obj.nativePlace}">
		      </div>
		    <div class="form-group">
		      <label  >手机号码</label>
		      <input type="text" class="form-control telphone" placeholder=" 输入相关手机号码"   value="${obj.telphone}">
		    </div>
		    <div class="form-group">
		      <label  >个人邮箱</label>
		      <input type="text" class="form-control email"  placeholder=" 输入相关个人邮箱"   value="${obj.email}">
		    </div>
		    <div class="form-group">
		      <label  >微信</label>
		      <input type="text" class="form-control wechat"  placeholder=" 输入相关微信"   value="${obj.wechat}">
		    </div>
		    <div class="form-group">
		      <label >qq</label>
		      <input type="text" class="form-control qq"  placeholder=" 输入相关qq"   value="${obj.qq}">
		    </div>
		    <div class="form-group">
		      <label >身份证号</label>
		      <input type="text" class="form-control IDcard"  placeholder=" 输入相关身份证号"   value="${obj.IDcard}">
		    </div>
		    <div class="form-group">
		      <label >健康状况</label>
		      <input type="text" class="form-control health"  placeholder=" 输入相关健康状况"   value="${obj.health}">
		    </div>
		    <div class="form-group">
		      <label >个人习惯</label> 
		      <input type="text" class="form-control personHobit"  placeholder=" 输入相关个人习惯"   value="${obj.personHobit}">
		    </div>
		    <div class="form-group">
		      <label >单位名称</label>
		      <input type="text" class="form-control companyName"  placeholder=" 输入相关重要程度"   value="${obj.companyName}">
		    </div>		    
		    <div class="form-group">
		      <label >担任职务</label>
		      <input type="text" class="form-control duty"  placeholder=" 输入相关担任职务"   value="${obj.duty}">
		    </div>
		    <div class="form-group">
		      <label >办公电话</label>
		      <input type="text" class="form-control officeTEL"  placeholder=" 输入办公电话"   value="${obj.officeTEL}">
		    </div>
		    <div class="form-group">
		      <label >客户评价</label>
		      <input type="text" class="form-control clientEvalu"  placeholder=" 输入相关客户评价"   value="${obj.clientEvaluation}">
		    </div>
		`);
	};
	
	
	// 客户修改删除页面 客户兴趣爱好修改添加函数
	function revampHobbies_client(result,founfID) {
		var obj=result.data;
		founfID.append(
			` <div class="form-group">
		      <label  >客户编号</label>
		      <input id="haha" type="text" class="form-control " placeholder=" 输入相关单位编号"   value="${obj.clientID}">
		    </div>
		    <div class="form-group">
		      <label for="company_name">姓名</label>
		      <input type="text" class="form-control name needs"  placeholder="输入相关客户姓名"   value="${obj.name}">
		    </div>
		     <div class="form-group">
		      <label for="company_name">香烟</label>
		      <input type="text" class="form-control smoke"   placeholder="输入相关年龄"   value="${obj.smoke}">
		    </div>
		    <div class="form-group">
		      <label>美女</label> 
		      <input type="text" class="form-control beauty" placeholder=" 输入相关民族"   value="${obj.beauty}">
		    </div>
		    <div class="form-group">
		      <label>财物</label>
		      <input type="text" class="form-control property"  placeholder=" 输入相关洗澡"   value="${obj.property}">
		    </div>
		    <div class="form-group">
		      <label>唱歌</label>
		      <input type="text" class="form-control sing"  placeholder=" 输入相关旅游"   value="${obj.sing}">
		    </div>
		    <div class="form-group">
		      <label>旅游</label>
		      <input type="text" class="form-control travel" placeholder=" 输入相关手机号码"   value="${obj.travel}">
		    </div>
		    <div class="form-group">
		      <label>洗澡</label>
		      <input type="text" class="form-control bathe"  placeholder=" 输入相关个人邮箱"   value="${obj.bathe}">
		    </div>
		    <div class="form-group">
		      <label>摄影</label>
		      <input type="text" class="form-control photography"  placeholder=" 输入相关微信"   value="${obj.photography}">
		    </div>
		    <div class="form-group">
		      <label >运动</label>
		      <input type="text" class="form-control sports"  placeholder=" 输入相关qq"   value="${obj.sports}">
		    </div>
		    <div class="form-group">
		      <label >运动周期</label>
		      <input type="text" class="form-control sportsTime"  placeholder=" 输入相关身份证号"   value="${obj.sportsTime}">
		    </div>
		    <div class="form-group">
		      <label >爬山</label>
		      <input type="text" class="form-control climbMountains"  placeholder=" 输入相关健康状况"   value="${obj.climbMountains}">
		    </div>
		    <div class="form-group">
		      <label >汽车</label>
		      <input type="text" class="form-control car"  placeholder=" 输入相关个人习惯"   value="${obj.car}">
		    </div>
		    <div class="form-group">
		      <label >喝茶</label> 
		      <input type="text" class="form-control tea"  placeholder=" 输入相关重要程度"   value="${obj.tea}">
		    </div>
		    <div class="form-group">
		      <label >身体状况</label> 
		      <input type="text" class="form-control health"  placeholder=" 输入相关现任公司"   value="${obj.health}">
		    </div>
		    <div class="form-group">
		      <label >遗传病</label>
		      <input type="text" class="form-control heredopathia"  placeholder=" 输入相关担任职务"   value="${obj.heredopathia}">
		    </div>
		    <div class="form-group">
		      <label >不适地方</label>
		      <input type="text" class="form-control discomfort"  placeholder=" 输入办公电话"   value="${obj.discomfort}">
		    </div>
		    <div class="form-group">
		      <label >饮食</label>
		      <input type="text" class="form-control eat"  placeholder=" 输入相关客户评价"   value="${obj.eat}">
		    </div><div class="form-group">
		      <label >忌口</label>
		      <input type="text" class="form-control avoid"  placeholder=" 输入相关客户评价"   value="${obj.avoid}">
		    </div><div class="form-group">
		      <label >酒量</label>
		      <input type="text" class="form-control drinkBeer"  placeholder=" 输入相关客户评价"   value="${obj.drinkBeer}">
		    </div><div class="form-group">
		      <label >钓鱼</label>
		      <input type="text" class="form-control fishing"  placeholder=" 输入相关客户评价"   value="${obj.fishing}">
		    </div><div class="form-group">
		      <label >看书</label>
		      <input type="text" class="form-control book"  placeholder=" 输入相关客户评价"   value="${obj.book}">
		    </div><div class="form-group">
		      <label >高尔夫</label>
		      <input type="text" class="form-control golf"  placeholder=" 输入相关客户评价"   value="${obj.golf}">
		    </div><div class="form-group">
		      <label >手表</label>
		      <input type="text" class="form-control watch"  placeholder=" 输入相关客户评价"   value="${obj.watch}">
		    </div><div class="form-group">
		      <label >小资情调</label>
		      <input type="text" class="form-control toporulian"  placeholder=" 输入相关客户评价"   value="${obj.toporulian}">
		    </div><div class="form-group">
		      <label >皮鞋</label>
		      <input type="text" class="form-control shoes"  placeholder=" 输入相关客户评价"   value="${obj.shoes}">
		    </div><div class="form-group">
		      <label >腰带</label>
		      <input type="text" class="form-control belt"  placeholder=" 输入相关客户评价"   value="${obj.belt}">
		    </div><div class="form-group">
		      <label >电脑</label>
		      <input type="text" class="form-control computer"  placeholder=" 输入相关客户评价"   value="${obj.computer}">
		    </div><div class="form-group">
		      <label >电脑类型</label>
		      <input type="text" class="form-control computerType"  placeholder=" 输入相关客户评价"   value="${obj.computerType}">
		    </div><div class="form-group">
		      <label >备注</label>
		      <input type="text" class="form-control hobbyremark"  placeholder=" 输入相关客户评价"   value="${obj.hobbyremark}">
		    </div>
		`);
	};
	
	// 客户修改删除页面 客户关系修改添加函数
	function revampRelation_client(result,founfID) {
		let friends=result.data;
		$.each(friends, function(index, obj) {
			founfID.append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td>${obj.relationID}</td>
					<td>
						<div class="form-group">
					      <input type="text" class="form-control needs"  placeholder=" 输入相关客户评价"   value="${obj.relationName}">
					    </div>
					</td>
					<td>
						<div class="form-group">
							<select id="yijiselect" name="">
	                    		<option value="">${obj.relationreType}</option>
	                    		<option value="">同事</option>
	                    		<option value="">校友</option>
	                    		<option value="">战友</option>
	                    		<option value="">其他</option>
	                    	</select>
					    </div>
					</td>
					<td>
						<div class="form-group">
							<select  name="">
	                    		<option value="">${obj.secondRelation}</option>
	                    		<option value="">同事</option>
	                    		<option value="">校友</option>
	                    		<option value="">战友</option>
	                    		<option value="">其他</option>
	                    	</select>
					    </div>
				    </td>
				    <td class="look">
					 <button class=" btn btn-info btn_save">保存</button>
					 <button class="btn-danger btn btn_delete">删除</button>
					 </td>
				</tr>
			`);
		});
	};
	
	// 客户信息修改页面 个人履历添加函数	
	function revampResume_client(result,founfID) {
		var work_hostory=result.data.workExpress;
		var study_hostory=result.data.studyExpress;
		$.each(work_hostory, function(index, obj) {
			founfID.append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td class="bianma">${obj.workExperienceID}</td>
					
					<td class="gongzuoType">工作经历</td>
					<td>
						<div class="form-group">${obj.companyName}</div>
					</td>
					<td>
						<div class="form-group">${obj.workTime}</div>
					</td>
				    <td class="look">
					 <button class="replaceDetails btn btn-warning">修改</button>
					 <button class="btn-danger btn btn_delete">删除</button>
					 </td>
				</tr>
			`);
		});
		$.each(study_hostory, function(index, obj) {
			founfID.append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td class="bianma">${obj.studyExperienceID}</td>
					
					<td class="gongzuoType">学习经历</td>
					<td>
						<div class="form-group">${obj.schoolName}</div>
					</td>
					<td>
						<div class="form-group">${obj.studyTime}</div>
					</td>
				    <td class="look">
					 <button class="replaceDetails btn btn-warning">修改</button>
					 <button class="btn-danger btn btn_delete">删除</button>
					 </td>
				</tr>
			`);
		});
	};
	
	function revampWork_client(result,founfID) {
		var obj=result.data.workExpress;
			founfID.append(
				`<div class="form-group">
					<label >工作经历编码</label>
					<input type="text" class="form-control workExperienceID"  placeholder=" 输入相关客户评价"  disabled value="${obj.workExperienceID}">
				</div>
				<div class="form-group">
					<label >工作时间</label>
					<input type="text" class="form-control workTime"  placeholder=" 输入相关客户评价"   value="${obj.workTime}">
				</div>
				<div class="form-group">
					<label >工作地点</label>
					<input type="text" class="form-control companyAddress"  placeholder=" 输入相关客户评价"   value="${obj.companyAddress}">
				</div>
				<div class="form-group">
					<label >单位名称</label>
					<input type="text" class="form-control companyName"  placeholder=" 输入相关客户评价"   value="${obj.companyName}">
				</div>
				<div class="form-group">
					<label >担任职务</label>
					<input type="text" class="form-control duty"  placeholder=" 输入相关客户评价"   value="${obj.duty}">
				</div>
				<div class="form-group">
					<label >负责项目</label>
					<input type="text" class="form-control workremark"  placeholder=" 输入相关项目内容"   value="${obj.workremark}">
				</div>
				<div class="form-group expressAbout" style="width:61%">
					<label >备注</label>
					<textarea class="form-control" rows="3">${obj.expressAbout}</textarea>
				</div>
      		`);
	};
	
	// 客户信息修改页面 个人履历添加函数	
	function revampStudy_client(result,founfID) {
		
		var obj=result.data.studyExpress;
		console.log(obj)
			founfID.append(
				`<div class="form-group">
					<label >学习经历</label>
					<input type="text" class="form-control studyExperienceID"  placeholder=" 输入相关客户评价"   value="${obj.studyExperienceID}">
				</div>
				<div class="form-group">
					<label >学习时间</label>
					<input type="text" class="form-control studyTime"  placeholder=" 输入相关客户评价"   value="${obj.studyTime}">
				</div>
				<div class="form-group">
					<label >学习专业</label>
					<input type="text" class="form-control major"  placeholder=" 输入相关客户评价"   value="${obj.major}">
				</div>
				<div class="form-group">
					<label >学校名称</label>
					<input type="text" class="form-control schoolName"  placeholder=" 输入相关客户评价"   value="${obj.schoolName}">
				</div>
				<div class="form-group">
					<label >学校地址</label>
					<input type="text" class="form-control studyAddress"  placeholder=" 输入相关客户评价"   value="${obj.studyAddress}">
				</div>
				<div class="form-group">
					<label >专业导师</label>
					<input type="text" class="form-control teacher"  placeholder=" 输入相关客户评价"   value="${obj.teacher}">
				</div>
				<div class="form-group" style="width:61%">
					<label >备注</label>
					<textarea class="form-control studyremark" rows="3">${obj.studyremark}</textarea>
				</div>
	      	`);
	};

// 客户添加页面 兴趣爱好添加

	function add_hobbies(){
		$("#addHobbies_client .btn_save").before(`<div class="form-group col-sm-10 addXQAH" style="margin-top: 10px;">
	      <label class="col-sm-2" >兴趣爱好:</label>
	     	<div class="col-sm-12">
	     		<div class="col-sm-1 text-right" >分类1：</div>
		     	<select class="col-sm-2 relationreType" name="">
		     		<option class="form-control" value="1">阅读</option>
		     		<option value="2">运动</option>
		     		<option value="3">饮食</option>
		     		<option value="54">旅游</option>
		     		<option value="5">音乐</option>
		     		<option value="76">饮茶</option>
		     		<option value="7">影视</option>
		     		<option value="8">书籍</option>
		     		<option value="9">业余爱好</option>
		     		<option value="11">服饰</option>
		     	</select>
		     	<div class="col-sm-1 text-right">分类2：<input type="radio" class="aihao" name="aihaoPX"  checked  value="123" /></div>
		     	<select class="col-sm-2 secondRelation" name="">
		     		<option class="form-control" value="">玄幻</option>
		     		<option value="">文学</option>
		     		<option value="">哲学</option>
		     		<option value="">经济</option>
		     		<option value="">政治</option>
		     		<option value="">小说</option>
		     		<option value="">动漫</option>
		     	</select>
		     	<div class="col-sm-2 text-right">其他：<input type="radio" class="aihao" name="aihaoPX"  value="456" /></div>
		     	<div class="col-sm-2">
			      	<input type="text" class="form-control hobbiesOthers" disabled placeholder="输入相关信息">
			      </div>
			      <div class="col-sm-2 " style="color: red;">
			      	注：如果分类2中没有选项，请您选择其他，并填入正确选项
			      </div>
	   		 </div>
	   
	    </div>`);
	}
// 客户添加页面 客户关系添加

	function add_relations(){
		$("#addRelation_client .btn_save").before(`<div class="form-group col-sm-10 addKHGX" style="margin-top: 10px;">
	      <label class="col-sm-2" >兴趣爱好:</label>
	     	<div class="col-sm-12">
	     		<div class="col-sm-1 text-right" >分类1：</div>
		     	<select class="col-sm-2 relationreType" name="">
		     		<option class="form-control" value="1">阅读</option>
		     		<option value="2">运动</option>
		     		<option value="3">饮食</option>
		     		<option value="54">旅游</option>
		     		<option value="5">音乐</option>
		     		<option value="76">饮茶</option>
		     		<option value="7">影视</option>
		     		<option value="8">书籍</option>
		     		<option value="9">业余爱好</option>
		     		<option value="11">服饰</option>
		     	</select>
		     	<div class="col-sm-1 text-right">分类2：<input type="radio" class="guanxi" name="guanxiPX"  checked  value="123" /></div>
		     	<select class="col-sm-2 secondRelation" name="">
		     		<option class="form-control" value="">玄幻</option>
		     		<option value="">文学</option>
		     		<option value="">哲学</option>
		     		<option value="">经济</option>
		     		<option value="">政治</option>
		     		<option value="">小说</option>
		     		<option value="">动漫</option>
		     	</select>
		     	<div class="col-sm-2 text-right">其他：<input type="radio" class="guanxi" name="guanxiPX"  value="456" /></div>
		     	<div class="col-sm-2">
			      	<input type="text" class="form-control relationsOther" disabled placeholder="输入相关信息">
			      </div>
			      <div class="col-sm-2 " style="color: red;">
			      	注：如果分类2中没有选项，请您选择其他，并填入正确选项
			      </div>
	   		 </div>
	   
	    </div>`);
	}
	// 信息展示页面 学校信息详细添加函数	
	function listDetails_school(result,foundID){
		let obj=result.data;
			foundID.append(` <tr>
		        <td>学校名称</td>
		        <td colspan="2">${obj.schoolName}</td>
		      </tr>
		     <tr>
		        <td>成立年份</td>
		        <td colspan="2">${obj.schoolEstablish}</td>
		      </tr>
		      <tr>
		        <td>院校级别</td>
		        <td colspan="2">${obj.schoolLevel}</td>
		      </tr>
		      <tr>
		        <td>学校地址</td>
		        <td colspan="2">${obj.schoolAddress}</td>
		      </tr>
		      <tr>
		        <td>现任校长</td>
		        <td colspan="2">${obj.principal}</td>
		      </tr>
		      <tr>
		        <td>学校电话</td>
		        <td colspan="2">${obj.schoolTEL}</td>
		      </tr>
		      <tr>
		        <td>学校类型</td>
		        <td colspan="2">${obj.schoolType}</td>
		      </tr>
		      <tr>
		        <td colspan="3">
		        	学校简介：<br />
		        	&nbsp;${obj.schoolAbout}
		        </td>
		    </tr>
		`);	
	};

	// 信息展示页面下 专业列表函数
	function listMajor_school(result,foundID) {
		let shuju = result.data;
		$.each(shuju,function(index,obj){
			foundID.append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td class="bianma">${obj.majorID}</td>
					<td>${obj.majorName}</td>
					 <td>${obj.majorTutor}</td>
					 <td class="look">
					 <button class=" btn btn-info ViewDetails">查看详情</button>
					 <button class="replaceDetails btn btn-warning">修改</button>
					 <button class="btn-danger btn btn_delete">删除</button>
					 </td>
				 </tr>`
			);
		})
	};
	// 信息展示页面 专业信息详细添加函数	
	function listMajorDetails_school(result,foundID) {
		let obj = result.data;
			foundID.append(
				` <tr>
			        <td>专业名称</td>
			        <td colspan="2">${obj.majorName}</td>
			      </tr>
			     <tr>
			        <td>专业导师</td>
			        <td colspan="2">${obj.majorTutor}</td>
			      </tr>
			      <tr>
			        <td>专业成立时间</td>
			        <td colspan="2">${obj.majorDate}</td>
			      </tr>
			      <tr>
			        <td>专业成员</td>
			        <td colspan="2">${obj.majorMember}</td>
			      </tr>	 
			      <tr>
			        <td colspan="3">
			        	专业职责：<br />
			        	&nbsp;${obj.majorDuty}
			        </td>
			    </tr>
			`);	
	};
	// 信息展示页面 学校信息详细添加函数	
	var listInfo_school_data=
		`
	    <div class="form-group">
	      <label for="company_name">学校名称</label>
	      <input type="text" class="form-control schoolName needs"  placeholder="输入相关学校名称">
	    </div>
	    <br />
	     <div class="form-group">
	      <label for="company_name">成立年份</label>
	      <select class="schoolEstablish">
	      	<option value="">1994年</option>
	      	<option value="">1995年</option>
	      	<option value="">1996年</option>
	      	<option value="">1997年</option>
	      	<option value="">1998年</option>
	      	<option value="">1999年</option>
	      </select>
	    </div>
	    <div class="form-group">
	      <label  >院校级别</label>
	      <select class="schoolLevel">
	      	<option value="">一本</option>
	      	<option value="">二本</option>
	      	<option value="">三本</option>
	      	<option value="">专科</option>
	      	<option value="">技校</option>
	      	<option value="">高中</option>
	      	<option value="">初中</option>
	      	<option value="">小学</option>
	      </select>
	    </div><div class="form-group">
	      <label  >学校地址</label>
	      <input type="text" class="form-control schoolAddress"  placeholder=" 输入相关财务信息">
	    </div>
	    <div class="form-group">
	      <label  >现任校长</label>
	      <input type="text" class="form-control principal"  placeholder=" 输入相关学校税号">
	    </div>
	    <div class="form-group">
	      <label  >学校电话</label>
	      <input type="text" class="form-control schoolTEL" placeholder=" 输入相关学校电话">
	    </div>
	    <div class="form-group">
	      <label  >学校类型</label>
	      <select name="" class="schoolType">
	      	<option value="">理工科</option>
	      	<option value="">文科</option>
	      	<option value="">理工科</option>
	      </select>
	    </div>
	    <div class="form-group">
	      <label>学校简介</label>
	      <textarea name=""  rows="8" cols="60" placeholder="输入相关学校简介" class="schoolAbout"></textarea>
	    </div>
		`;
		
	// 新增页面 专业信息添加
	var addMajorDetails=`
				<div class="alert">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                	<div class="form-group ">
				      	<label >专业名称</label>
				      	<select class="majorName">
				      		<option value="">外语专业</option>
				      		<option value="">商务专业</option>
				      		<option value="">土木专业</option>
				      		<option value="">医学专业</option>
				      	</select>
				    </div>
				    <div class="form-group">
				      	<label >专业导师</label>
				      	<input type="text" class="form-control majorTutor"   placeholder="输入相关专业导师">
				    </div>
				    <div class="form-group">
				      	<label >专业毕业生</label>
				      	<input type="text" class="form-control majorMember"   placeholder="专业毕业生名称">
				    </div>
				    <div class="form-group">
				      	<label >优秀成员</label>
				      	<input type="text" class="form-control excellentLeader"   placeholder="优秀成员">
				    </div>
				    <div class="form-group">
				      	<label >专业职责</label>
	      				<textarea class="majorDuty" name=""  rows="8" cols="60" placeholder="输入专业职责"></textarea>
				    </div>
				</div>`;
	//修改页面 学校基本信息函数
	// 修改页面下 学校详情修改添加函数
	function revampDetails_school(result,foundID) {
		let obj=result.data;
		foundID.prepend(`<div class="form-group">
		      <label  >学校编号</label>
		      <input id="haha" type="text" class="form-control " placeholder=" 输入相关学校编号" value="${obj.schoolID}"  >
		    </div>
		    <div class="form-group">
		      <label for="company_name">学校名称</label>
		      <input type="text" class="form-control schoolName"  placeholder="输入相关学校名称" value="${obj.schoolName}"  >
		    </div>
		     <div class="form-group">
		      <label for="company_name">成立年份</label>
		      <select class="schoolEstablish" >
		      	<option value="">1994年</option>
		      	<option value="">1995年</option>
		      	<option value="">1996年</option>
		      	<option value="">1997年</option>
		      	<option value="">1998年</option>
		      	<option value="">1999年</option>
		      </select>
		    </div>
		    <div class="form-group">
		      <label  >院校级别</label>
		      <select class="schoolLevel" >
		      	<option value="">一本</option>
		      	<option value="">二本</option>
		      	<option value="">三本</option>
		      	<option value="">专科</option>
		      	<option value="">技校</option>
		      	<option value="">高中</option>
		      	<option value="">初中</option>
		      	<option value="">小学</option>
		      </select>
		    </div><div class="form-group">
		      <label  >学校地址</label>
		      <input type="text" class="form-control schoolAddress"  placeholder=" 输入相关财务信息" value="${obj.schoolAddress}"  >
		    </div>
		    <div class="form-group">
		      <label  >现任校长</label>
		      <input type="text" class="form-control principal"  placeholder=" 输入相关学校税号" value="${obj.principal}"  > 
		    </div>
		    <div class="form-group">
		      <label  >学校电话</label>
		      <input type="text" class="form-control schoolTEL" placeholder=" 输入相关学校电话" value="${obj.schoolTEL}"  >
		    </div>
		    <div class="form-group">
		      <label  >学校类型</label>
		      <select class="schoolType"   name="">
		      	<option value="">理工科</option>
		      	<option value="">文科</option>
		      	<option value="">理工科</option>
		      </select>
		    </div>
		    <div class="form-group">
		      <label>学校简介</label>
		      <textarea class='schoolAbout' name=""  rows="8" cols="60" placeholder="输入相关学校简介" value=""  >${obj.schoolAbout}</textarea>
		    </div>
		`);
	};
	// 修改页面 专业详细信息添加函数
	function revampMajorDetails_school(result,foundID) {
		let obj=result.data;
		foundID.prepend(
				`<div class="form-group ">
			      	<label >专业名称</label>
			      	<select class="majorName">
			      		<option value="">外语专业</option>
			      		<option value="">商务专业</option>
			      		<option value="">土木专业</option>
			      		<option value="">医学专业</option>
			      	</select>
			    </div>
			    <br />
			    <div class="form-group">
			      	<label >专业导师</label>
			      	<input type="text" class="form-control majorTutor"   placeholder="输入相关专业导师" value="${obj.majorTutor}"  >
			    </div>
			    <div class="form-group">
			      	<label >专业成立时间</label>
			      	<input type="text" class="form-control majorDate"   placeholder="优秀成员" value="${obj.majorDate}"  >
			    </div>
			    <div class="form-group">
			      	<label >专业毕业生</label>
			      	<input type="text" class="form-control majorMember"   placeholder="专业毕业生名称" value="${obj.majorMember}"  >
			    </div>
			    <div class="form-group">
			      	<label >优秀毕业生</label>
			      	<input type="text" class="form-control excellentLeader"   placeholder="优秀毕业生名称" value="${obj.excellentLeader}"  >
			    </div>
			    <div class="form-group">
			      	<label >专业职责</label>
      				<textarea class="majorDuty" name="" rows="8" cols="60" placeholder="输入专业职责" value="${obj.majorDuty}"  ></textarea>
			    </div>
		`);
	};












