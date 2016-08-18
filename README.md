# wtable
一个让web表格内各行间差异显示的组件。  
注意：本项目依赖于jquery的1.6.1以上版本。    

###Usage：  
  1、在web页面的</head>标签前引用table.js文件，如：  
  `<script type="text/javascript" src="table.js"></script>`  
  2、在页面中的table标签上增加class名称为"altrowstable"的样式引用，如：
  `
<table class="altrowstable">
	<tr>
		<th>id</th>
		<th>name</th>
		<th>age</th>
		<th>from</th>
    </tr>
   	<tr>
		<td>1</td>
		<td>Wilson</td>
		<td>28</td>
		<td>China</td>
    </tr>
    <tr>
		<td>2</td>
		<td>Chris</td>
		<td>30</td>
		<td>USA</td>
    </tr>
    <tr>
		<td>3</td>
		<td>Steven</td>
		<td>29</td>
		<td>England</td>
    </tr>
 </table>
  `

 ###Example:  
   请看项目中的exaple.html文件，效果如下：  
   ![alt](https://github.com/iwilsonlee/wtable/blob/master/example.png?raw=true)
  