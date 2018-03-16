

//上一步异步加载，下一步异步加载
function ajaxPageone (url,fun,min,max) {
	$.ajax({
		type: "get",
		url:dizhi+url,
		dataType: "json",
		success: function(result) {
			fun(result.data,min,max)
		}
	});
};

function ajaxPagetwo (url,fun,p1,code,Size) {
	$.ajax({
		type: "get",
		url:dizhi+url,
		dataType: "json",
		success: function(result) {
			fun(result.data,p1,code,Size)
		}
	});
};


layui.use('laypage', function(){
var laypage = layui.laypage;
// id  总数， 每页几条，
function setPage(pageID,addFun,code,Size){
	//执行一个laypage实例
  	laypage.render({
	    elem: pageID //注意，这里的 test1 是 ID，不用加 # 号
	    ,count: code //数据总数，从服务端得到
	    ,theme: '#1E9FFF'
	    ,limit:Size//每页显示几条数据
	    ,jump: function(obj, first){
	    	//obj包含了当前分页的所有参数，比如：
	    	//console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
	   		// console.log(obj.limit); //得到每页显示的条数
				addFun(obj.curr,Size,code)
	   		//首次不执行
		    if(!first){
		      //do something
		    }
	  }
	 });
}

    // 列表添加当前页面的条数id
  	function addPageCompany(res,Size,code){
  		let min=(res-1)*Size+1;
		let max=res*Size;
		let p1=parseInt(code/Size);
		if(res<=p1){
			ajaxPageone("companys/getCompany",listInfo_company,min,max);
		
		}else{
			ajaxPagetwo("companys/getCompany",listInfo_company_p,p1,code,Size);
		}		
	}
  
  
	
	function listInfo_company(obj,min,max){
		$("#listInfo_company").empty();
		for(let i = min; i<=max;i++){
			$("#listInfo_company").append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td class="bianma">${obj[i].companyID}</td>
					<td>${obj[i].companyName}</td>
					 <td>${obj[i].companyAddress}</td>
					 <td><a href="#">${obj[i].companyCoreCustomer[0]}</a>/<a href="#">${obj[i].companyCoreCustomer[1]}</a></td>
					 <td class="look">
					 	<button class=" btn btn-info ViewDetails">查看详情</button>
						 <button class="replaceDetails btn btn-warning">修改</button>
						 <button class="btn-danger btn btn_delete">删除</button>
					 </td>
					 
				</tr>`
			);
		};
	}
	function listInfo_company_p(obj,p1,code,Size){
		$("#listInfo_company").empty();
		for(let i = p1*Size+1; i<=code;i++){
			$("#listInfo_company").append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td class="bianma">${obj[i].companyID}</td>
					<td>${obj[i].companyName}</td>
		 			<td>${obj[i].companyAddress}</td>
		 			<td><a href="#">${obj[i].companyCoreCustomer[0]}</a>/<a href="#">${obj[i].companyCoreCustomer[1]}</a></td>
		 			<td class="look">
					 	<button class=" btn btn-info ViewDetails">查看详情</button>
						 <button class="replaceDetails btn btn-warning">修改</button>
						 <button class="btn-danger btn btn_delete">删除</button>
					 </td>
				</tr>` 
			);	
		}
	};
	// 翻页
	$.ajax({
		type:"get",
		url:dizhi+"companys/getCompany",
		async:true,
		data:{},
		dataType:"json",
		success:function(res){
			//console.log(res.data.length);
			let code = res.status;
			setPage("listPage_company",addPageCompany,code,3);
			
		}
	});

//学校翻页


    // 列表添加当前页面的条数id
  	function addPageSchool(res,Size,code){
  		let min=(res-1)*Size+1;
		let max=res*Size;
		let p1=parseInt(code/Size);
		if(res<=p1){
			ajaxPageone("schools/listInfo",listInfo_school,min,max);
		
		}else{
			ajaxPagetwo("schools/listInfo",listInfo_school_p,p1,code,Size);
		}		
	}


	function listInfo_school(obj,min,max){
		$("#listInfo_school").empty();
		for(let i = min; i<=max;i++){
			$("#listInfo_school").append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td class="bianma">${obj[i].schoolID}</td>
					<td>${obj[i].schoolName}</td>
					 <td>${obj[i].schoolAddress}</td>
					 <td><a href="#">${obj[i].schoolType}</td>
					 <td class="look">
					 <button class=" btn btn-info ViewDetails">查看详情</button>
					 <button class="replaceDetails btn btn-warning">修改</button>
					 <button class="btn-danger btn btn_delete">删除</button>
					 </td>
					 
				 </tr>`
			);
		};
	}
	function listInfo_school_p(obj,p1,code,Size){
		$("#listInfo_school").empty();
		for(let i = p1*Size+1; i<=code;i++){
			$("#listInfo_school").append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td class="bianma">${obj[i].schoolID}</td>
					<td>${obj[i].schoolName}</td>
					 <td>${obj[i].schoolAddress}</td>
					 <td><a href="#">${obj[i].schoolType}</td>
					 <td class="look">
					 <button class=" btn btn-info ViewDetails">查看详情</button>
					 <button class="replaceDetails btn btn-warning">修改</button>
					 <button class="btn-danger btn btn_delete">删除</button>
					 </td>
					 
				 </tr>` 
			);	
		}
	};
	// 翻页
	$.ajax({
		type:"get",
		url:dizhi+"schools/listInfo",
		async:true,
		data:{},
		dataType:"json",
		success:function(res){
			//console.log(res.data.length);
			let code = res.status;
			setPage("listPage_school",addPageSchool,code,5);
			
		}
	});




//客户翻页


    // 列表添加当前页面的条数id
  	function addPageClient(res,Size,code){
  		let min=(res-1)*Size+1;
		let max=res*Size;
		let p1=parseInt(code/Size);
		if(res<=p1){
			ajaxPageone("clients/listInfo",listInfo_client,min,max);
		
		}else{
			ajaxPagetwo("clients/listInfo",listInfo_client_p,p1,code,Size);
		}		
	}


	function listInfo_client(obj,min,max){
		$("#listInfo_client").empty();
		for(let i = min; i<=max;i++){
			$("#listInfo_client").append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td class="bianma">${obj[i].clientID}</td>
					<td>${obj[i].name}</td>
					 <td>${obj[i].duty}</td>
					 <td>${obj[i].age}</td>
					 <td class="look">
					 <button class=" btn btn-info ViewDetails">查看详情</button>
					 <button class="replaceDetails btn btn-warning">修改</button>
					 <button class="btn-danger btn btn_delete">删除</button>
					 </td>
				</tr>`
			);
		};
	}
	function listInfo_client_p(obj,p1,code,Size){
		$("#listInfo_client").empty();
		for(let i = p1*Size+1; i<=code;i++){
			$("#listInfo_client").append(
				`<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td class="bianma">${obj[i].clientID}</td>
					<td>${obj[i].name}</td>
					 <td>${obj[i].duty}</td>
					 <td>${obj[i].age}</td>
					 <td class="look">
					 <button class=" btn btn-info ViewDetails">查看详情</button>
					 <button class="replaceDetails btn btn-warning">修改</button>
					 <button class="btn-danger btn btn_delete">删除</button>
					 </td>
				</tr>` 
			);	
		}
	};
	// 翻页
	$.ajax({
		type:"get",
		url:dizhi+"clients/listInfo",
		async:true,
		data:{},
		dataType:"json",
		success:function(res){
			//console.log(res.data.length);
			let code = res.status;
			setPage("listPage_client",addPageClient,code,5);
			
		}
	});














	
	
});

