const addBtn = document.getElementById('addBtn')
const divContainer = document.getElementById('divContainer')

addBtn.addEventListener('click', () => {

    const card = document.createElement('div')
    card.classList.add('card')
    divContainer.appendChild(card)

    const text = document.createElement('textarea')
    text.classList.add('text')
    text.placeholder = 'write here...'
    card.appendChild(text)

    const divBtn = document.createElement('div')
    // divBtn.classList.add()
    card.appendChild(divBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'Delete'
    deleteBtn.style.marginRight = '5px'
    divBtn.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', () => {
        card.remove();
    })

    const select = document.createElement('select')
    const options = [
        {name: 'Apple', color: '#ff4d4d'},
        {name: 'Yellow', color: '#ffe135'},
        {name: 'Orange', color: '#ffa500'},
        {name: 'Grapes', color: '#8e44ad'}
    ]

    options.forEach(item=> {
        const option = document.createElement('option')
        option.text = item.name;
        option.value = item.name.toLowerCase();
        option.style.backgroundColor = item.color;
        // card.style.backgroundColor = item.color;
        option.style.color = '#fff';
        select.appendChild(option)
    })

    divBtn.appendChild(select)

    select.addEventListener('change', (e) => {
        const selectedOption = options.find(opt => opt.name.toLowerCase() === e.target.value);
        if (selectedOption) {
            card.style.backgroundColor = selectedOption.color;
            text.style.backgroundColor = selectedOption.color;
        }
    });
    

})


