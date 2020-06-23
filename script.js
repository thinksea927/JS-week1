window.onload = function(){
    var inputData = document.querySelector('#inputData');
    var taskAdd = document.querySelector('#addItem');
    var itemList = document.querySelector('#itemList');
    var taskLeft = document.querySelector('#taskLeft');
    taskAdd.addEventListener('click', updateData)
    
    
    
    var data = [
        {
            itemText: 'test1',
        },
        {
            itemText: 'test1',
        },
        {
            itemText: 'test2',
        }
    ];
    
    render();
    
    function updateData(){
        data.push({
            itemText: inputData.value
        });
        inputData.value = "";
        render();
    }
    
    function removeData(e){
        data.splice(e.target.dataset.id, 1);
        render();
    }
    
    function removeDataAll(){
        data = [];
        render();
        
    }
    
    // 我拿不到 item.id QQ 這哪來的
    function completedData(e){
        data.forEach(function(item){
            // if(e.target.dataset.id == item.id){
            //     if(item.completed){
            //         item.completed = false;
            //     } else {
            //         item.completed = true;
            //     }
            // }
            if(item.completed){
                item.completed = false;
            } else {
                item.completed = true;
            }

        })
        render();

    }
    
    function render(){
        
        var string = "";
        data.forEach(function(item, i){
            string = string + 
            `<li>
            <input class="taskCheck" type="checkbox" data-id="${i}" ${item.completed ? 'checked' : ''}/>
            <label class="text ${item.completed ? 'completed' : ''}" data-id="${i}" >${ item.itemText }</label>
            <div class="taskDel material-icons" data-id="${i}">remove_circle</div>
            </li>`
        })
        
        itemList.innerHTML = string;
        
        // 在每個刪除按鈕上加上監聽 (重要阿 自己忘記加了 弄很久 幸好有想到)
        var taskDel = document.querySelectorAll('.taskDel');
        taskDel.forEach(function(del){
            del.addEventListener('click', removeData)
        })
        
        // 在每個完成按鈕上加上監聽
        var taskCheck = document.querySelectorAll('.taskCheck');
        taskCheck.forEach(function(check){
            check.addEventListener('click', completedData)
        })
        
        
        
        
        var taskNumString = "";
        var i = data.length;
        taskNumString = `
        <span>${i} Tasks To Go</span><span id="taskDelAll">Delete All</span>`
        taskLeft.innerHTML = taskNumString 
        
        var taskDelAll = document.querySelector('#taskDelAll');
        taskDelAll.addEventListener('click', removeDataAll)
        
        
        
    }
    
    
    
    
    
    
    
    
    
}