const Input = document.getElementsByClassName('Input')[0];
const AddButton = document.getElementsByClassName('AddButton')[0];

AddButton.addEventListener('click', () => {
    const x = +Input.value;
    Input.value = `${x + 3}`;
});
