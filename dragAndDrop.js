var list = document.getElementById('sortable')
var dragging, draggedOver;
var daniText = ["a","szöveg","sorba","Ez","most","állítva!","van",];

function renderItems(data)
{
    for(let i = 0; i < daniText.length; i++)
    {
        var node = document.createElement("li");  
        node.className = "ui-state-default";
        //node.draggable = true
        node.style.backgroundColor = '#b3ecff';
        //node.addEventListener('drag', setDragging);
        //node.addEventListener('dragover', setDraggedOver);
        //node.addEventListener('drop', compare);
        node.innerText = daniText[i];
        node.tabIndex = i;
        list.appendChild(node);
    }
}

/* $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } ); */



/* function  compare()
{
    if(dragging.tabIndex != draggedOver.tabIndex)
    {
        var temp = draggedOver.innerText;
        list.children[draggedOver.tabIndex].innerText = dragging.innerText;
        list.children[dragging.tabIndex].innerText = temp;
    }
} */

/* function setDraggedOver(e){
  e.preventDefault();
  draggedOver = e.target;
}

function setDragging(e){
    dragging = e.target;
}
 */
renderItems();

