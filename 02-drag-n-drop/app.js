const items = document.querySelectorAll('.item')

const placeholders = document.querySelectorAll('.placeholder')

for(const item of items) {
    item.addEventListener('dragstart', dragstart)
    item.addEventListener('dragend', dragend)
}

for(const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    event.target.classList.add('active')
    setTimeout(() => event.target.classList.add('hide'), 0)
    
}

function dragend(event) {
    event.target.className = 'item'

}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    
    for(const item of items) {
        if (item.classList.contains('active'))
            event.target.append(item)
    }

    event.target.classList.remove('active')
}