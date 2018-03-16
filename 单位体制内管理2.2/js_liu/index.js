$(function(){
	
// 单位目录下 添加页面	
	
	// 添加部门表单
	$("#addDepartment_company .btn_AddDepartment").before(addDepartmentInfo);
	
	$("#addDepartment_company .btn_AddDepartment").on("click",function(){
		$(this).before(addDepartmentInfo);
	});
	
	/*
	 * 输入框内容为空时，输入框添加error样式
	 * 聚焦到第一个内容为空的输入框
	 * */
	isNull("#addInfo_company");	
	isNull("#addDepartment_company");
	isNull2("#revampDetails_company");
	
	isNull("#addInfo_client");
	isNull("#addWorkExperience_client");
	isNull("#addStudyExperience_client");
	isNull("#addHobbies_client");
	isNull("#addRelation_client");
	
	isNull2("#revampDetails_client");
	isNull2("#revampHobbies_client");
	//isNull("#revampRelation_client");
	//客户亲朋好友修改页面，非空判断	
	$(document).on("click","#revampRelation_client .btn_save",function(){
		let zhi=$(this).parent().siblings().find(".needs");
		if (zhi.val() == "") {
			zhi.parent("div").addClass("has-error");
			                    }else{
			zhi.parent("div").removeClass("has-error");
			                    }
			zhi.focus();
			                    
		});
	isNull("#addInfo_school");
	isNull("#addMajorDetails_school");
	isNull("#addInfo_client");
	
	
		// 工作经历默认添加
		$("#addWorkExperience_client .btn_AddWorkExperience").before(addWorkExperience);
		
		// 学习经历默认添加
		$("#addStudyExperience_client .btn_AddStudyExperience").before(addStudyExperience);		
		
		// 工作经历点击添加
		$("#addWorkExperience_client .btn_AddWorkExperience").on("click",function(){
			$(this).before(addWorkExperience);
		});
		
		// 学习经历点击添加
		$("#addStudyExperience_client .btn_AddStudyExperience").on("click",function(){
			$(this).before(addStudyExperience);
		});
			
	
	// 数值为0的爱好隐藏
	$(document).on("click",".Hobby_display",function() {
		$("#listHobbies_client").find("td[colspan='2']").each(function () {
            if ($(this).html() == "0") {
				$(this).parent("tr").addClass("hide");
            }else{
				$(this).parent("tr").removeClass("show");
               	 }
    	});
	});
	
// 学校目录下

	// 学校新增页面 学校基本详细添加
	$("#addInfo_school").prepend(listInfo_school_data);
	$("#addMajorDetails_school .btn_AddMajor").before(addMajorDetails);
	
	$("#addMajorDetails_school .btn_AddMajor").on("click",function(){
		$(this).before(addMajorDetails);
	});

	// 单位详细列表，点击修改按钮弹出修改页面
		layui.use('layer',function () {
	
	  // 单位基本信息修改
		  $(document).on("click","#listInfo_company .replaceDetails",function(){
			let companyID = $(this).parent().siblings(".bianma").text();	
			let company ={
				companyID:companyID
			}
			    layer.open({
			      type: 2,
			      title: '单位信息修改',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'revamp_company.html',
			      success:function(layero, index){
						var body = layer.getChildFrame('body',index);//建立父子联系
						var iframeWin = window[layero.find('iframe')[0]['name']];
						let revampDetails_companyB = body.find("#revampDetails_company");
						let listFramework_companyB = body.find("#listFramework_company");
						iframeAjaxnew("GetCompanyInfoByID", revampDetails_company,revampDetails_companyB,company);			
						iframeAjax("companys/listFramework", listFramework_company,listFramework_companyB,companyID);
			      }
			    });
			});
			// 部门架构信息修改
		 $(document).on("click","#listFramework_company .replaceDetails",function(){
		let companyID = $('#revampDetails_company').find(".companyID").val();
		let departmentName = $(this).parent().siblings(".departmentName").text();
		let department = {
			companyID:companyID,
			departmentName:departmentName
		};
			    layer.open({
			      type: 2,
			      title: '架构信息修改',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'revamp_company2.html',
			      success:function(layero, index){
						var body = layer.getChildFrame('body',index);//建立父子联系
						var iframeWin = window[layero.find('iframe')[0]['name']];
						let revampDepartment_companyB = body.find("#revampDepartment_company");
						iframeAjaxnew("GetDepartment", revampDepartment_company,revampDepartment_companyB,department);
			      }
			    });
			});
			
			// 单位基本信息新增
		 $(document).on("click",".btn_xinzeng_company",function(){
		var mm = $(this).parent().siblings(".bianma").text();
			    layer.open({
			      type: 2,
			      title: '架构信息修改',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'add_company.html',

			   });
			});
			
			// 单位基本信息查看
		 $(document).on("click","#listInfo_company .ViewDetails",function(){
		 	// 获取当前单位的编码id
			let companyID = $(this).parent().siblings(".bianma").text();
//			alert(companyID)
			    layer.open({
			      type: 2,
			      title: '单位基本信息',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'viewDetails_company.html',
					success:function(layero, index){
							var body = layer.getChildFrame('body',index);//建立父子联系
							var iframeWin = window[layero.find('iframe')[0]['name']];
							let listDetails_companyB = body.find("#listDetails_company");
							let listFramework_companyB = body.find("#listFramework_company");
							iframeAjaxnew("GetCompanyInfoByID", listDetails_company,listDetails_companyB,companyID);
							iframeAjax("companys/listFramework", listFramework_company,listFramework_companyB,companyID);						
				      }
			   });
			});
			


			
				// 部门基本信息查看
		 $(document).on("click","#listFramework_company .ViewDetails",function(){
		let companyID = $('#revampDetails_company').find(".companyID").val();
		let departmentName = $(this).parent().siblings(".departmentName").text();
		let department = {
			companyID:companyID,
			departmentName:departmentName
		};
			    layer.open({
			      type: 2,
			      title: '架构基本信息',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'viewDetails_company2.html', 
			      success:function(layero, index){
						var body = layer.getChildFrame('body',index);//建立父子联系
						var iframeWin = window[layero.find('iframe')[0]['name']];
						let listDepartment_companyB = body.find("#listDepartment_company");
						iframeAjaxnew("GetDepartment",listDepartment_company,listDepartment_companyB,department);
			      }
			   });
			});
		// 学校专业信息修改
		 $(document).on("click","#listMajor_school .replaceDetails",function(){
		var majorID = $(this).parent().siblings(".bianma").text();
			    layer.open({
			      type: 2,
			      title: '架构信息修改',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'revamp_school2.html',
			      success:function(layero, index){
						var body = layer.getChildFrame('body',index);//建立父子联系
						var iframeWin = window[layero.find('iframe')[0]['name']];
						let revampMajorDetails_schoolB = body.find("#revampMajorDetails_school");
						iframeAjax("schools/revampMajorDetails", revampMajorDetails_school,revampMajorDetails_schoolB,majorID);
						
			      }
			    });
			});		
		
		// 学校基本信息修改
		$(document).on("click","#listInfo_school .replaceDetails",function(){
			var schoolID = $(this).parent().siblings(".bianma").text();
			    layer.open({
			      type: 2,
			      title: '学校信息修改',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'revamp_school.html',
			      success:function(layero, index){
						var body = layer.getChildFrame('body',index);//建立父子联系
						var iframeWin = window[layero.find('iframe')[0]['name']];
						var revampDetails_schoolB = body.find("#revampDetails_school");
						var listMajor_schoolB = body.find("#listMajor_school");
						iframeAjax("schools/revampDetails", revampDetails_school,revampDetails_schoolB,schoolID);
						iframeAjax("schools/listMajor",listMajor_school,listMajor_schoolB,schoolID);						
			      }
			    });
		});
		
			// 学校基本信息新增
		 $(document).on("click",".btn_xinzeng_school",function(){
		var mm = $(this).parent().siblings(".bianma").text();
			    layer.open({
			      type: 2,
			      title: '学校信息新增',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'add_school.html',
			   });
			});
			
				// 学校基本信息查看
		 $(document).on("click","#listInfo_school .ViewDetails",function(){
			let schoolID = $(this).parent().siblings(".bianma").text();
			    layer.open({
			      type: 2,
			      title: '学校信息新增',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'viewDetails_school.html',
  				  success:function(layero, index){
						var body = layer.getChildFrame('body',index);//建立父子联系
						var iframeWin = window[layero.find('iframe')[0]['name']];
						var listDetails_schoolB = body.find("#listDetails_school");
						var listMajor_schoolB = body.find("#listMajor_school");
						iframeAjax("schools/listDetails",listDetails_school,listDetails_schoolB,schoolID);
						iframeAjax("schools/listMajor",listMajor_school,listMajor_schoolB,schoolID);
						
			      }
			   });
			});
			
				// 学校专业基本信息查看
		 $(document).on("click","#listMajor_school .ViewDetails",function(){
		var majorID = $(this).parent().siblings(".bianma").text();
			    layer.open({
			      type: 2,
			      title: '学校信息新增',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'viewDetails_school2.html',
		  		  success:function(layero, index){
						var body = layer.getChildFrame('body',index);//建立父子联系
						var iframeWin = window[layero.find('iframe')[0]['name']];
						var listMajorDetails_schoolB = body.find("#listMajorDetails_school");
						iframeAjax("schools/listMajorDetails",listMajorDetails_school,listMajorDetails_schoolB,majorID);						
			      }
			   });
			});
			
		// 客户基本信息修改
		$(document).on("click","#listInfo_client .replaceDetails",function(){
			var clientID = $(this).parent().siblings(".bianma").text();
			    layer.open({
			      type: 2,
			      title: '客户信息修改',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'revamp_client.html',
			      success:function(layero, index){
						var body = layer.getChildFrame('body',index);//建立父子联系
						var iframeWin = window[layero.find('iframe')[0]['name']];
						var revampDetails_clientB = body.find("#revampDetails_client");
						var revampResume_clientB = body.find("#revampResume_client");
						var revampHobbies_clientB = body.find("#revampHobbies_client");
						var revampRelation_clientB = body.find("#revampRelation_client");
						iframeAjax("clients/listDetails",revampDetails_client,revampDetails_clientB,clientID);
						iframeAjax("clients/listResumes",revampResume_client,revampResume_clientB,clientID);
						iframeAjax("clients/listRelations",revampRelation_client,revampRelation_clientB,clientID);
						iframeAjax("clients/listHobbies",revampHobbies_client,revampHobbies_clientB,clientID);
						
			      }
			    });
			});
		// 客户工作履历查看
		 $(document).on("click","#revampResume_client .replaceDetails ",function(){
		var resumeID = $(this).parent().siblings(".bianma").text();
		let type= $(this).parent().siblings(".gongzuoType").text();
		if(type=="工作经历"){
			//alert(123)
			layer.open({
			      type: 2,
			      title: '工作经历修改',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'revamp_client2.html',
			      success:function(layero, index){
						var body = layer.getChildFrame('body',index);//建立父子联系
						var iframeWin = window[layero.find('iframe')[0]['name']];
						let revampWork_clientB = body.find("#revampWork_client");
						iframeAjax("clients/revampResumes", revampWork_client,revampWork_clientB,resumeID);
			      }
			    });
		}else{
			//alert(456)
			layer.open({
			      type: 2,
			      title: '学习经历修改',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'revamp_client3.html',
			      success:function(layero, index){
						var body = layer.getChildFrame('body',index);//建立父子联系
						var iframeWin = window[layero.find('iframe')[0]['name']];
						let revampStudy_clientB = body.find("#revampStudy_client");
						iframeAjax("clients/revampResumes", revampStudy_client,revampStudy_clientB,resumeID);
						
			      }
			    });
		}
			    
			});	
			// 客户基本信息新增
		 $(document).on("click",".btn_xinzeng_client",function(){
		var mm = $(this).parent().siblings(".bianma").text();
			    layer.open({
			      type: 2,
			      title: '客户信息修改',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'add_client.html',
			   });
			});
		
			// 客户基本信息查看
		 $(document).on("click","#listInfo_client .ViewDetails",function(){
		var clientID = $(this).parent().siblings(".bianma").text();
			    layer.open({
			      type: 2,
			      title: '客户基本信息',
			      maxmin: true,
			      shadeClose: true, //点击遮罩关闭层
			      area : ['90%' , '90%'],
			      content: 'viewDetails_client.html',
				   success:function(layero, index){
						var body = layer.getChildFrame('body',index);//建立父子联系
						var iframeWin = window[layero.find('iframe')[0]['name']];
						let listDetails_clientB = body.find("#listDetails_client");
						let listResume_clientB = body.find("#listResume_client");
						let listHobbies_clientB = body.find("#listHobbies_client");
						let listRelation_clientB = body.find("#listRelation_client");
						iframeAjax("clients/listDetails",listDetails_client,listDetails_clientB,clientID);
						iframeAjax("clients/listHobbies",listHobbies_client,listHobbies_clientB,clientID);
						iframeAjax("clients/listRelations",listRelation_client,listRelation_clientB,clientID);
						iframeAjax("clients/listResumes",listResume_client,listResume_clientB,clientID);
			      }
			   });
			});			
		//客户信息新增兴趣爱好按钮
			add_hobbies();
		
		$(document).on("click","#addHobbies_client .btn_add",function(){
			add_hobbies();
			
		})
		//客户信息新增客户关系按钮
			add_relations();
		
		$(document).on("click","#addRelation_client .btn_AddRelation",function(){
			add_relations();
			
		})	
		// 单位信息列表删除
		$(document).on("click","#listInfo_company .btn_delete",function(){
			del(this)
			
		});
		// 单位架构列表删除
		$(document).on("click","#listFramework_company .btn_delete",function(){
			del(this)
			
		});
		// 学校信息列表删除
		$(document).on("click","#listInfo_school .btn_delete",function(){
			del(this)
			
		});
		// 学校专业列表删除
		$(document).on("click","#listMajor_school .btn_delete",function(){
			del(this)
			
		});
		// 客户信息列表删除
		$(document).on("click","#listInfo_client .btn_delete",function(){
			del(this)
			
		});
		// 客户履历信息列表删除
		$(document).on("click","#revampResume_client .btn_delete",function(){
			del(this)
		});
		// 客户关系信息列表删除
		$(document).on("click","#revampRelation_client .btn_delete",function(){
			del(this)
		});
		 // 创建删除函数
     function del(x){       //此处不能写成remove(x),js中remove()方法用于从下拉列表删除选项。
         var tr = x.parentNode.parentNode;
         tr.parentNode.removeChild(tr);
     }	
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		
	});
	
	
	
	
	


  
  

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
