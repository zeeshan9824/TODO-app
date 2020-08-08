var list = document.getElementById('list')

function add() {
    var inp = document.getElementById('inp')
    var text = document.createTextNode(inp.value)
    var li = document.createElement('li')
    li.appendChild(text)

    var edit = document.createElement("button")
    var editext = document.createTextNode("EDIT")
    edit.setAttribute("class","btn-dark")
    edit.setAttribute("onclick","edit(this)")
    edit.appendChild(editext)
    li.appendChild(edit)

    var dlt = document.createElement("button")
    var dltext = document.createTextNode("Delete")
    dlt.setAttribute("class","btn-dark")
    dlt.setAttribute("onclick","del1(this)")
    dlt.appendChild(dltext)
    li.appendChild(dlt)
    inp.value = ""
    
    list.appendChild(li)
}

function del1(e) {
    e.parentNode.remove()
    alert("The value is deleted")
}
function edit(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var newValue = prompt("Enter edit value",val)
    e.parentNode.firstChild.nodeValue = newValue;
}

function del() {
    list.innerHTML = ""
}
