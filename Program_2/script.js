function addItem() {
    let name = document.getElementById('name').value;
    let qty = document.getElementById('qty').value;
    let price = document.getElementById('price').value;
    let table = document.getElementById('table');

    if (!name || !qty || !price) {
        alert('Fill all fields');
        return;
    }

    let row = table.insertRow();

    row.innerHTML = `
        <td>${name}</td>
        <td>${qty}</td>
        <td>${price}</td>
        <td>
            <button class="btn btn-danger" onclick="this.closest('tr').remove()">Remove</button>
        </td>
    `;

    // Clear inputs after adding
    document.getElementById('name').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('price').value = '';
}