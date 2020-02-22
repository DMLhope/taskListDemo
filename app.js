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
    // 清除任务事件（单个清除）
    // 给ul这个列表元素绑定一个单击事件
    taskList.addEventListener('click', removeTask);
    // 一键清除所有
    clearBtn.addEventListener('click', clearTasks);
    //过滤任务
    filter.addEventListener('keyup', filterTasks);
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
        link.className = 'delete-item secondary-content';
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

// removeTask
function removeTask(e) {
    // 查看返回的元素
    // console.log(e.target);
    // 判断
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('是否确认完成？')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// clearTasks
function clearTasks(e) {
    // 方法1
    // taskList.innerHTML = "";
    //方法2
    // 如果ul有第一个子元素则删除第一个子元素，一直循环
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    //方法3  自己想讨巧的方法会有问题，无法再添加任务因为整个ul都被删掉了不存在了
    // if (confirm('是否确认清除？')) {
    //     taskList.remove();
    // }

}

function filterTasks(e) {
    // 获取用户输入内容 并转换小写
    const text = e.target.value.toLowerCase();;
    // 测试下打印用户输入的内容
    // console.log(text);

    // 获取数组通过过滤输入框的类名
    document.querySelectorAll(".collection-item").forEach(
        function(task) {
            // console.log(task);
            // 这个task就是通过类名获取的数组返回的是整个h5元素
            // 设置变量item来获取数组中的文本内容
            const item = task.firstChild.textContent;
            // console.log(item);
            // 将item转小写名判断是否包含text的值，如果包含则不等于-1
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = "block";
            } else {
                task.style.display = "none";
            }
        }
    );

}