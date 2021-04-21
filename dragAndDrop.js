//#region Drag And Drop
var list = document.getElementById('list')
var resultList = document.getElementById('resultList');
var dragging, draggedOver;
var daniText = ["", "", "", "", "", "", "","a", "szöveg", "sorba", "Ez", "most", "állítva!", "van",];
var listIndex = 0;

function RenderItems(data)
{
    listIndex = 0;
    for(let i = 0; i < daniText.length; i++)
    {
        var node = document.createElement("li");
        node.draggable = true;
        node.style.backgroundColor = '#999999';
        node.addEventListener('drag', SetDragging);
        node.addEventListener('dragover', SetDraggedOver);
        node.addEventListener('drop', Compare);
        node.innerText = daniText[i];
        node.tabIndex = i;

        if (i < 7)
        {
            node.id = i;
            resultList.appendChild(node);        
        }
        else
        {
            node.id = listIndex;
            list.appendChild(node);
            listIndex++;
        }
    }
}

function  Compare(index)
{
    if (dragging.innerText != "" && dragging.tabIndex != draggedOver.tabIndex)
    {
        var temp = draggedOver.innerText;

        if (dragging.tabIndex >= 7 && draggedOver.innerText != "")
        {

        }
        else if(draggedOver.tabIndex < 7)
        {
            resultList.children[draggedOver.tabIndex].innerText = dragging.innerText;

            if (dragging.tabIndex < 7)
            {
                resultList.children[dragging.tabIndex].innerText = temp;
            }
            else
            {              
                list.removeChild(list.childNodes[dragging.id]);
                for (let z = 0; z < list.childElementCount; z++)
                {
                    list.children[z].id = z;
                }
            }
        }
    }
}

function SetDraggedOver(e){
  e.preventDefault();
  draggedOver = e.target;
}

function SetDragging(e){
    dragging = e.target;
}

RenderItems()
//#endregion

