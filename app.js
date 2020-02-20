//获取节点
const form = document.querySelector('#task-form')
    // 获取输入框
const taskInput = document.querySelector('#task')
    //获取filter输入框
const filter = document.querySelector('#filter')
    // 获取列表
const taskList = document.querySelector('.collection')
    // 获取clear task
const clearBtn = document.querySelector('.clear-tasks')

//加载所有事件监听
loadEventListeners();

//定义所有事件监听函数
function loadEventListeners() {

    // 添加任务事件
    form.addEventListener('submit', addTask);

}

//addTask
function addTask(e) {
    // 判断任务输入框是否为空，为空则弹出提醒
    if (taskInput.value == "") {
        alert("Please Add a task");
    } else {
        // 若任务不为空则说明有这个值，需要把这个值插入到列表中
        // 创建节点li
        const li = document.createElement('li');
        //添加li类名
        li.className = "collection-item";
        // 创建文本节点，插入li中
        li.appendChild(document.createTextNode(taskInput.value));
        //创建a标签来添加删除的图标
        const link = document.createElement('a');
        //添加类名，这样才有对应的样式
        link.className = 'secondary-content';
        //添加字体图标
        link.innerHTML = '<i class="fa fa-times"></i>';
        // 将a标签插入li中
        li.appendChild(link);
        // 将li插入ul当中
        taskList.appendChild(li);
        // 添加完成后清空输入框
        taskInput.value = "";
    }
    // 移除form表单的默认事件
    e.preventDefault();
}