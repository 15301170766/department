var dizhi = "http://localhost:3000/";
var lujin='http://www.hemap.cn:8181/Crm/';
	//左侧导航栏
	$(".popup_list1").append(
							`<li class="active">
								<a href="../../index.html">
       								<span class="icon fa fa-tachometer"></span>
       								<span class="title">搜索页</span>
                                </a>
                            </li>
                            <li class="panel panel-default dropdown">
                                <a data-toggle="collapse" href="#dropdown-element">
                                    <span class="icon fa fa-desktop"></span><span class="title">单位管理功能</span>
                                </a>
                                <!-- Dropdown level 1 -->
                                <div id="dropdown-element" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <ul class="nav navbar-nav">
                                        	<li><a href="../company/company_list.html">单位信息列表</a>
                                            </li>
                                            <li><a href="../company/company_search.html">单位信息搜索</a>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="panel panel-default dropdown">
                                <a data-toggle="collapse" href="#dropdown-table">
                                    <span class="icon fa fa-table"></span><span class="title">客户管理功能</span>
                                </a>
                                <!-- Dropdown level 1 -->
                                <div id="dropdown-table" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <ul class="nav navbar-nav">
                                        	<li><a href="../client/client_list.html">客户信息列表</a>
                                            </li>
                                            
                                            
                                            <li><a href="../client/client_search.html">客户信息搜索</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="panel panel-default dropdown">
                                <a data-toggle="collapse" href="#dropdown-form">
                                    <span class="icon fa fa-file-text-o"></span><span class="title">学校管理功能</span>
                                </a>
                                <!-- Dropdown level 1 -->
                                <div id="dropdown-form" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <ul class="nav navbar-nav">
                                            <li><a href="../school/school_list.html">学校信息列表</a>
                                            </li>
                                            <li><a href="../school/school_search.html">学校信息搜索</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            
                            <!-- Dropdown-->
                            <li class="panel panel-default dropdown">
                                <a data-toggle="collapse" href="#component-example">
                                    <span class="icon fa fa-cubes"></span><span class="title">系统管理功能</span>
                                </a>
                                <!-- Dropdown level 1 -->
                                <div id="component-example" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <ul class="nav navbar-nav">
                                            <li><a href="#">数据备份</a>
                                            </li>
                                            <li><a href="#">数据恢复</a>
                                            </li>
                                            <li><a href="#">密码管理</a>
                                            </li>
                                            <li><a href="#">系统搜索</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>`
	);
	
		//左侧导航栏
	$(".popup_list12").append(
							`<li class="active">
								<a href="#">
       								<span class="icon fa fa-tachometer"></span>
       								<span class="title">搜索页</span>
                                </a>
                            </li>
                            <li class="panel panel-default dropdown">
                                <a data-toggle="collapse" href="#dropdown-element">
                                    <span class="icon fa fa-desktop"></span><span class="title">单位管理功能</span>
                                </a>
                                <!-- Dropdown level 1 -->
                                <div id="dropdown-element" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <ul class="nav navbar-nav">
                                        	<li><a href="html/company/company_list.html">单位信息列表</a>
                                            </li>
                                           
                                            <li><a href="html/company/company_search.html">单位信息搜索</a>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="panel panel-default dropdown">
                                <a data-toggle="collapse" href="#dropdown-table">
                                    <span class="icon fa fa-table"></span><span class="title">客户管理功能</span>
                                </a>
                                <!-- Dropdown level 1 -->
                                <div id="dropdown-table" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <ul class="nav navbar-nav">
                                        	<li><a href="html/client/client_list.html">客户信息列表</a>
                                            </li>
                                            
                                            
                                            <li><a href="html/client/client_search.html">客户信息搜索</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="panel panel-default dropdown">
                                <a data-toggle="collapse" href="#dropdown-form">
                                    <span class="icon fa fa-file-text-o"></span><span class="title">学校管理功能</span>
                                </a>
                                <!-- Dropdown level 1 -->
                                <div id="dropdown-form" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <ul class="nav navbar-nav">
                                            <li><a href="html/school/school_list.html">学校信息列表</a>
                                            </li>
                                            <li><a href="html/school/school_search.html">学校信息搜索</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            
                            <!-- Dropdown-->
                            <li class="panel panel-default dropdown">
                                <a data-toggle="collapse" href="#component-example">
                                    <span class="icon fa fa-cubes"></span><span class="title">系统管理功能</span>
                                </a>
                                <!-- Dropdown level 1 -->
                                <div id="component-example" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <ul class="nav navbar-nav">
                                            <li><a href="#">数据备份</a>
                                            </li>
                                            <li><a href="#">数据恢复</a>
                                            </li>
                                            <li><a href="#">密码管理</a>
                                            </li>
                                            <li><a href="#">系统搜索</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>`
	);
	
//<script type="text/javascript">
//	$(function() {
//		//全选，全不选
//		$("#quanxuan1").on("click",function(){
//			if(this.checked){
//				$("#revampInfo_company :checkbox").prop("checked",true)
//			}else{
//				$("#revampInfo_company :checkbox").prop("checked",false)
//				
//			}
//		});
//		$("#quanxuan2").on("click",function(){
//				$("#revampInfo_company :checkbox").prop("checked",true);
//				$("#quanxuan1").prop("checked",true);		
//		});
//	});
//	
//</script>
										      
