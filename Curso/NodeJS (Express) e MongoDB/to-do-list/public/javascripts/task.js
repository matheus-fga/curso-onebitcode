const setTagAsDone = async (element, taskId) => {
  window.addEventListener("onchange", event => {
    event.preventDefault()
  });
  try {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let body = JSON.stringify({ task: {done: element.checked }});
    let response = await fetch(`/tasks/${taskId}?_method=put`, {headers: headers, body: body, method: 'PUT' });
    let data = await response.json();
    let task = data.task;

    if(task.done) {
      element.checked = true;
      element.parentNode.classList.add('has-text-success');
      element.parentNode.classList.add('is-italic');
    } else {
      element.checked = false;
      element.parentNode.classList.remove('has-text-success');
      element.parentNode.classList.remove('is-italic');
    }
  } catch (error) {
    alert('Erro ao atualizar a tarefa');
  }
}