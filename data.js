/* @id 题目唯一 ID
 ** @title 题目
 ** @options 选项
 ** @correct 正确答案在选项中的索引
 */

const questions = [{
    "id": 1,
    "title": "4%2 的值为",
    "options": [0, 1, 2, 4],
    "correct": 0,
},
{
    "id": 2,
    "title": "\"0\" == false 的值为",
    "options": ["true", "false"],
    "correct": 0,
},
{
    "id": 3,
    "title": "不设置cookie设置过期时间，cookie的默认时间长度为",
    "options": ["立刻过期", "永不过期", "cookie 无法设置", "在浏览器会话结束时过期"],
    "correct": 3,
},
{
    "id": 4,
    "title": "+new Array(042) 的值为",
    "options": ["43", "NaN", "42", "Error"],
    "correct": 1,
},
{
    "id": 5,
    "title": "数组的方法中，哪些方法不能改变自身数组？",
    "options": ["pop", "splice", "sort", "concat"],
    "correct": 3,
},
{
    "id": 6,
    "title": "Number(null); 的值为：",
    "options": ["null", 0, "undefined", 1],
    "correct": 1,
},
{
    "id": 7,
    "title": "如何把字符串转化为数字",
    "options": ["Number()", "toString()", "undefined", 1],
    "correct": 1,
},
{
    "id": 8,
    "title": "如何截取数组的内容",
    "options": ["pop", "splice", "sort", "concat"],
    "correct": 3,
},
{
    "id": 9,
    "title": "CSS 指的是？",
    "options": ["A、Computer Style Sheets", "B、Cascading Style Sheets", "C、Creative Style Sheets", "D、Colorful Style Sheets"],
    "correct": 2,
},
{
    "id": 10,
    "title": "在以下的 HTML 中，哪个是正确引用外部样式表的方法？",
    "options": ["A、<style src=\"mystyle.css\">", "b、<stylesheet>mystyle.css</stylesheet>", "c、<link rel=\"stylesheet\" type=\"text / css\"  href=\"mystyle.css\" >"],
    "correct": 2,
},
{
    "id": 11,
    "title": "在 HTML 文档中，引用外部样式表的正确位置是？",
    "options": ["A、文档的末尾", "B、文档的顶部", "C、<body>部分", "D、<head>部分"],
    "correct": 3,
},
{
    "id": 12,
    "title": "哪个 HTML 标签用于定义内部样式表？",
    "options": ["A、<style>", "B、<script>", "C、<css>"],
    "correct": 0,
},
{
    "id": 13,
    "title": "哪个 HTML 属性可用来定义内联样式？",
    "options": ["A、font", "B、class", "C、styles", "D、style"],
    "correct": 3,
},
{
    "id": 14,
    "title": "下列哪个选项的 CSS 语法是正确的？",
    "options": ["A、body:color=black", "B、{body:color=black(body}", "C、body {color: black}", "D、{body;color:black}"],
    "correct": 2,
},
{
    "id": 15,
    "title": "如何在 CSS 文件中插入注释？",
    "options": ["A、// this is a comment", "B、// this is a comment //", "C、/* this is a comment */", "D、this is a comment"],
    "correct": 2,
},
{
    "id": 16,
    "title": "哪个属性可用于改变背景颜色？",
    "options": ["A、A、bgcolor", "B、background-color", "C、color"],
    "correct": 1,
},
{
    "id": 17,
    "title": "如何为所有的h1元素添加背景颜色？",
    "options": ["A、h1.all {background-color:#FFFFFF}", "B、h1 {background-color:#FFFFFF}", "C、all.h1 {background-color:#FFFFFF}"],
    "correct": 1,
},
{
    "id": 18,
    "title": "如何改变某个元素的文本颜色？",
    "options": ["A、text-color", "B、fgcolor", "C、color", "D、text-color="],
    "correct": 2,
},
{
    "id": 19,
    "title": "哪个 CSS 属性可控制文本的尺寸？",
    "options": ["A、font-size", "B、text-style", "C、font-style", "D、text-size"],
    "correct": 0,
},
{
    "id": 20,
    "title": "text-size",
    "options": ["A、<p style=\"font - size: bold\">", "B、<p style=\"text - size: bold\">", "C、p {font-weight:bold}", "D、p {text-size:bold}"],
    "correct": 2,
},
{
    "id": 21,
    "title": "如何显示没有下划线的超链接？",
    "options": ["A、a {text-decoration:none}", "B、a {text-decoration:no underline}", "C、a {underline:none}", "D、a {decoration:no underline}"],
    "correct": 0,
},
{
    "id": 22,
    "title": "如何使文本以大写字母开头？",
    "options": ["A、text-transform:capitalize", "B、无法通过 CSS 来实现", "C、text-transform:uppercase"],
    "correct": 0,
},
{
    "id": 23,
    "title": "如何改变元素的字体？",
    "options": ["A、font=", "B、font-family:"],
    "correct": 1,
},
{
    "id": 24,
    "title": "如何使文本变为粗体？",
    "options": ["A、font:b", "B、font-weight:bold", "C、style:bold"],
    "correct": 1,
},
{
    "id": 25,
    "title": "如何显示这样一个边框：上边框 10 像素、下边框 5 像素、左边框 20 像素、右边框 1 像素？",
    "options": ["A、、border-width:10px 5px 20px 1px", "B、border-width:10px 20px 5px 1px", "C、border-width:5px 20px 10px 1px", "D、border-width:10px 1px 5px 20px"],
    "correct": 3,
},
{
    "id": 26,
    "title": "如何改变元素的左边距？",
    "options": ["A、text-indent:s", "B、indent:", "C、margin:", "D、margin-left:"],
    "correct": 3,
},
{
    "id": 27,
    "title": "如何产生带有正方形项目的列表？",
    "options": ["A、list-type: square", "B、type: 2", "C、type: square", "D、list-style-type: square"],
    "correct": 3,
},
{
    "id": 28,
    "title": "请判断以下说法是否正确：如需定义元素内容与边框间的空间，可使用 padding 属性，并可使用负值？",
    "options": ["A、正确", "B、错误"],
    "correct": 1,
}

]