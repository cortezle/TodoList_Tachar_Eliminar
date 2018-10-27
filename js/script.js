window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            element.innerText = task;
            let sumitbt = document.createElement("button");
            let contentbt = document.createTextNode("Eliminar");
            let sumitbt2 = document.createElement("button");
            let contentbt2 = document.createTextNode("Hecho");
            sumitbt.appendChild(contentbt);
            element.appendChild(sumitbt);
            sumitbt2.appendChild(contentbt2);
            element.appendChild(sumitbt2);

            /*element.addEventListener("click", () => {
               let parent = element.parentNode;
               if(parent){
                   parent.removeChild(element);
               }
            });*/
            sumitbt.addEventListener("click", function () {
                console.log(this.parentNode);
                let parent = element.parentNode;
                if (parent) {
                    parent.removeChild(element);
                }
            });
            sumitbt2.addEventListener("click", function () {
                console.log(this.parentNode);
                let parent = element.parentNode;
                if (parent) {
                    element.style.textDecoration="line-through";
                }
            });
    if (priority) {
        this.listTask.unshift({
            element,
            task
        });
        this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
    } else {
        this.listTask.push({
            element,
            task
        });
        this.listHTML.appendChild(element);
    }
}
     }

let form = document.managerTask;
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let task = form.task.value;

    let validTask = /.{2,}/;
    if (!validTask.test(task)) {
        console.log("Ingrese una descripcion clara");
        return false;
    }

    todoList.add(task, form.important.checked);

});
 }