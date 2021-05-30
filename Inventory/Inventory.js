
window.onload = function() {

    itemform = document.getElementById('itemform')

    itemName = document.getElementById('itemName')

    hsncode = document.getElementById('hsncode')

    srno = document.getElementById('srno')

    dynamicHere = document.getElementById('dynamicHere')

    cardBody = document.getElementsByClassName('card-body')[0]

    itemform.addEventListener('submit', function(e) {
        e.preventDefault();

        srnoTxtValue = document.getElementById('srno').value
        itemNameTxtValue = document.getElementById('itemName').value
        hsncodeTxtValue = document.getElementById('hsncode').value


        if (itemNameTxtValue == '' || hsncodeTxtValue == '' || srnoTxtValue == '') {
            UI.messages('Insert All Text Fields', 'danger');
            return
        } else {
            var item_Inventory = new Inventory(itemNameTxtValue, hsncodeTxtValue, srnoTxtValue);

            UI.clearFields();
            UI.displayData(item_Inventory)
            Store.setStored(item_Inventory)
            // UI.messages('Data Inserted', 'success')
        }
        window.location.reload()
    })

    dynamicHere.addEventListener('click', function(e) {
        if (e.target.classList.contains('RemoveIt')) {
            UI.removeRow(e.target)
            window.location.reload()
        }
    })

    class Inventory {
        constructor(itemNameTxtValue, hsncodeTxtValue, srnoTxtValue) {
            this.itemname = itemNameTxtValue;
            this.hsncode = hsncodeTxtValue;
            this.srno = srnoTxtValue;
        }
    }

    class UI {
        static clearFields() {
            document.getElementById('itemName').value = ''
            document.getElementById('hsncode').value = ''
            document.getElementById('srno').value = ''
        }

        static displayData(obj) {
            let InventoryFromLocalStorage = Store.getStored()
            InventoryFromLocalStorage.push(obj)
            UI.populateTR(InventoryFromLocalStorage)
        }

        static populateTR(InventoryFromLocalStorage) {
            InventoryFromLocalStorage.forEach(function(onebyone) {
                dynamicHere.innerHTML += 
                ` <tr>
                    <td style="padding: 4px; text-align: center;" Id='inc' value="${onebyone.srno}">${onebyone.srno}</td>
                    <td style="padding: 4px;">${onebyone.itemname} </td>
                    <td style="padding: 4px; text-align: center;">${onebyone.hsncode}</td>
                    <td style="padding: 4px; text-align: center; cursor: pointer;">
                        <img src="/png/delete.png" class='RemoveIt' style="cursor: pointer;">
                    </td>
                </tr>`
            })
        }

        static messages(txt, className) {
            let divs = '';
            divs = document.createElement('div')
            divs.classList = `class='alert' alert alert-${className}`
            divs.innerText = txt;
            cardBody.insertBefore(divs, itemform)
            setTimeout(function() {
                divs.remove()
            }, 1000)
        }

        static removeRow(element) {

            srno = element.parentElement.parentElement.firstElementChild.innerText

            element.parentElement.parentElement.remove()
            Store.removeStored(srno)
        }
    }

    class Store {
        static getStored() {
            let item_Inventory = ''
            if (localStorage.getItem('Inventory') == null) {
                item_Inventory = []
            } else {
                item_Inventory = JSON.parse(localStorage.getItem('Inventory'))
            }
            return item_Inventory
        }

        static setStored(x) {

            let item_Inventory = Store.getStored()
            console.log(item_Inventory)
            item_Inventory.push(x)
            localStorage.setItem('Inventory', JSON.stringify(item_Inventory))
        }

        static removeStored(srno) {
            let Allvalues = Store.getStored()
            Allvalues.forEach((onebyone, index) => {
                if (onebyone.srno == srno) {
                    Allvalues.splice(index, 1);
                }
            })
            localStorage.setItem('Inventory', JSON.stringify(Allvalues))
        }
    }

    UI.populateTR(Store.getStored())
    
    // Auto Increment Number
    
    var table = document.getElementById('dynamicHere').rows.length;

        autoInc = ++table ;

    let srnoInc = document.getElementById('srno').value = autoInc;


}


