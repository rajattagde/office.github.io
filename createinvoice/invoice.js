
//-------------------------------------------Modal Start--------------------------------------------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it  It`s  also gmail Modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if(event.target == gmodal) {
    gmodal.style.display = "none";
  }
}

//-------------------------------------------Calculation-----------------------------------------------

//      + GST Button
let btn1 = document.getElementById('btn1');
btn1.addEventListener("click", function(){

	var Qty = document.getElementById('qty').value
	var Amount = document.getElementById('amount').value
	var gst = document.getElementById('gst').value

	var x = Math.round(Qty * Amount);
	var y = Math.round(Qty * Amount * gst);
	var z = Math.round(x + y);
	var g = (document.getElementById('gst').value*100);

	let QTY = document.getElementById('Qty').value = document.getElementById('qty').value

	let Gst = document.getElementById('Gst').value = g.toFixed(1) ;

	let Taxable_Amount = document.getElementById('TaxableAmount').value = x.toFixed(2);

	let GST_Amount = document.getElementById('GSTAmount').value = y.toFixed(2);

	let Grand_Total = document.getElementById('GrandTotal').value = z.toFixed(2);

});
//      - GST Button
let btn2 = document.getElementById('btn2');
btn2.addEventListener("click", function(){

	var Qty = document.getElementById('qty').value
	var Amount = document.getElementById('amount').value
	var gst = document.getElementById('gst').value

	var x = Math.round((Qty*Amount)/(++gst));
	var y = Math.round(document.getElementById('gst').value*x);
	var z = Math.round(x + y);
	var g = document.getElementById('gst').value*100;

	let QTY = document.getElementById('Qty').value = document.getElementById('qty').value;

	let Gst = document.getElementById('Gst').value = g.toFixed(1) ;

	let Taxable_Amount = document.getElementById('TaxableAmount').value =x.toFixed(2);

	let GST_Amount = document.getElementById('GSTAmount').value = y.toFixed(2);

	let Grand_Total = document.getElementById('GrandTotal').value = z.toFixed(2);
});

//     Add Button

var arrTax = [];
var arrGst = [];

let add = document.getElementById('add');
add.addEventListener("click", function(){

	// Total Tax Amount
	let Taxable_Amount = document.getElementById('TaxableAmount').value

	arrTax.push(Math.round(Taxable_Amount));

	var toTax = arrTax.reduce(function(a, b){
		return a + b;
	},);

	let bltax = document.getElementById('bltax').innerHTML = toTax.toFixed(1);

	// Total GST Amount
	let GST_Amount = document.getElementById('GSTAmount').value

	arrGst.push(Math.round(GST_Amount));

	var toGst = arrGst.reduce(function(a, b){
		return a + b;
	},);

	let blgst = document.getElementById('blgst').innerHTML = toGst.toFixed(1);

	// Total CGST SGST IGST
	let stateName = document.getElementById('stateName').value;

	var halfgst = Math.round(blgst/2)

	if(stateName == 'Maharashtra'){
		let blcgst = document.getElementById('blcgst').innerHTML = halfgst.toFixed(1);
		let blsgst = document.getElementById('blsgst').innerHTML = halfgst.toFixed(1);
	}
	else{
		let bligst = document.getElementById('bligst').innerHTML = blgst;
	}

	// Grand Total
	var
		x = document.getElementById('bltax').innerHTML
		y = document.getElementById('blgst').innerHTML

	gToatl = Math.round(x)+Math.round(y);

	let bltotal = document.getElementById('bltotal').innerHTML = gToatl.toFixed(1);

	word.innerHTML=convertNumberToWords(bltotal);

});

// Spell Number into Word

function convertNumberToWords(amount) {
	var words = new Array();
	words[0] = '';
	words[1] = 'One';
	words[2] = 'Two';
	words[3] = 'Three';
	words[4] = 'Four';
	words[5] = 'Five';
	words[6] = 'Six';
	words[7] = 'Seven';
	words[8] = 'Eight';
	words[9] = 'Nine';
	words[10] = 'Ten';
	words[11] = 'Eleven';
	words[12] = 'Twelve';
	words[13] = 'Thirteen';
	words[14] = 'Fourteen';
	words[15] = 'Fifteen';
	words[16] = 'Sixteen';
	words[17] = 'Seventeen';
	words[18] = 'Eighteen';
	words[19] = 'Nineteen';
	words[20] = 'Twenty';
	words[30] = 'Thirty';
	words[40] = 'Forty';
	words[50] = 'Fifty';
	words[60] = 'Sixty';
	words[70] = 'Seventy';
	words[80] = 'Eighty';
	words[90] = 'Ninety';
	amount = amount.toString();
	var atemp = amount.split(".");
	var number = atemp[0].split(",").join("");
	var n_length = number.length;
	var words_string = "";
	if (n_length <= 9) {
		var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
		var received_n_array = new Array();
		for (var i = 0; i < n_length; i++) {
			received_n_array[i] = number.substr(i, 1);
		}
		for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
			n_array[i] = received_n_array[j];
		}
		for (var i = 0, j = 1; i < 9; i++, j++) {
			if (i == 0 || i == 2 || i == 4 || i == 7) {
				if (n_array[i] == 1) {
					n_array[j] = 10 + parseInt(n_array[j]);
					n_array[i] = 0;
				}
			}
		}
		value = "";
		for (var i = 0; i < 9; i++) {
			if (i == 0 || i == 2 || i == 4 || i == 7) {
				value = n_array[i] * 10;
			} else {
				value = n_array[i];
			}
			if (value != 0) {
				words_string += words[value] + " ";
			}
			if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
				words_string += "Crores ";
			}
			if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
				words_string += "Lakhs ";
			}
			if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
				words_string += "Thousand ";
			}
			if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
				words_string += "Hundred and ";
			} else if (i == 6 && value != 0) {
				words_string += "Hundred ";
			}
		}
		words_string = words_string.split("  ").join(" ");
	}
	return words_string;
}


//--------------------------------------Table  Start----------------------------------------------------

var rIndex,
table = document.getElementById("table");
// check the empty input
function checkEmptyInput()
{
	var isEmpty = false,
		itemname = document.getElementById("itemname").value,
		hsn = document.getElementById("hsn").value;
		Qty = document.getElementById('qty').value
		Amount = document.getElementById('amount').value
		Gst = document.getElementById('Gst').value

   if (itemname === ""){
	   alert("Enter the Item Description");
	   isEmpty = true;
	}
	else if(hsn === ""){
		alert("Enter the HSN Code");
		isEmpty = true;
	}
    else if(Qty  === ""){
        alert("Enter the Quantity");
        isEmpty = true;
    }
	else if(Amount === ""){
        alert("Enter the Amount");
        isEmpty = true;
    }
	else if(Gst === ""){
        alert("Enter the GST Percent");
        isEmpty = true;
    }
    return isEmpty;
}
function addHtmlTableRow()
{
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  if(!checkEmptyInput()){
 		var newRow = table.insertRow(table.length,),
	  	cell1 = newRow.insertCell(0),
	  	cell2 = newRow.insertCell(1),
	  	cell3 = newRow.insertCell(2),
	  	cell4 = newRow.insertCell(3),
	  	cell5 = newRow.insertCell(4),
	  	cell6 = newRow.insertCell(5),
	  	cell7 = newRow.insertCell(6),

	  	itemname = document.getElementById("itemname").value,
		hsn = document.getElementById("hsn").value,
		Qty = document.getElementById('qty').value,
		Gst = document.getElementById('Gst').value,
		Taxable_Amount = document.getElementById('TaxableAmount').value,
		GST_Amount = document.getElementById('GSTAmount').value,
		Grand_Total = document.getElementById('GrandTotal').value;

		cell1.innerHTML = itemname;
		cell2.innerHTML = hsn;
    	cell3.innerHTML = Qty;
    	cell4.innerHTML = Gst;
		cell5.innerHTML = Taxable_Amount;
		cell6.innerHTML = GST_Amount;
    	cell7.innerHTML = Grand_Total;
      	// call the function to set the event to the new row
      	selectedRowToInput();
    }
}

// display selected row data into input text
function selectedRowToInput()
{

	for(var i = 1; i < table.rows.length; i++)
	{
		table.rows[i].onclick = function()
		{
		  // get the seected row index
		  rIndex = this.rowIndex;
		  document.getElementById("itemname").value = this.cells[0].innerHTML;
		  document.getElementById("hsn").value = this.cells[1].innerHTML;
		  document.getElementById('qty').value = this.cells[2].innerHTML;
		  document.getElementById('Gst').value = this.cells[3].innerHTML;
		  document.getElementById('TaxableAmount').value = this.cells[4].innerHTML;
		  document.getElementById('GSTAmount').value = this.cells[5].innerHTML;
		  document.getElementById('GrandTotal').value = this.cells[6].innerHTML;
		}
	}
}
selectedRowToInput();
function editHtmlTbleSelectedRow()
{
  var
  	itemname = document.getElementById("itemname").value,
	hsn = document.getElementById("hsn").value,
	Qty = document.getElementById('qty').value,
	Gst = document.getElementById('Gst').value,
	Taxable_Amount = document.getElementById('TaxableAmount').value,
	GST_Amount = document.getElementById('GSTAmount').value,
	Grand_Total = document.getElementById('GrandTotal').value;

	if(!checkEmptyInput())
  {
	table.rows[rIndex].cells[0].innerHTML = itemname;
    table.rows[rIndex].cells[1].innerHTML = hsn;
    table.rows[rIndex].cells[2].innerHTML = Qty;
    table.rows[rIndex].cells[3].innerHTML = Gst;
	table.rows[rIndex].cells[4].innerHTML = Taxable_Amount;
    table.rows[rIndex].cells[5].innerHTML = GST_Amount;
    table.rows[rIndex].cells[6].innerHTML = Grand_Total;
  }
}
function removeSelectedRow()
{
  table.deleteRow(rIndex);
  // clear input text
  	document.getElementById("itemname").value = "";
  	document.getElementById("hsn").value = "";
  	document.getElementById('qty').value = "";
  	document.getElementById('Gst').value = "";
	document.getElementById('TaxableAmount').value = "";
  	document.getElementById('GSTAmount').value = "";
	document.getElementById('GrandTotal').value = "";
}

//-----------------Select--From Local Storage----------

window.onload = function() {

	select = document.getElementById('itemname')

	 class Inventory {
        constructor(itemNameTxtValue, hsncodeTxtValue, srnoTxtValue) {
            this.itemname = itemNameTxtValue;
            this.hsncode = hsncodeTxtValue;
            this.srno = srnoTxtValue;
        }
    }

    class UI {

        static displayData(obj) {
            let InventoryFromLocalStorage = Store.getStored()
            InventoryFromLocalStorage.push(obj)
            UI.populateSELECT(InventoryFromLocalStorage)

        }

        static populateSELECT(InventoryFromLocalStorage) {

            InventoryFromLocalStorage.forEach(function(selectonebyone) {
                select.innerHTML +=
                `
                    <option value="${selectonebyone.itemname}">${selectonebyone.itemname}</option>
                `
            })
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
            Allvalues.forEach((selectonebyone, index) => {
                if (selectonebyone.srno == srno) {
                    Allvalues.splice(index, 1);
                }
            })

            localStorage.setItem('Inventory', JSON.stringify(Allvalues))
        }

    }

    UI.populateSELECT(Store.getStored())

}
//------------------------------- Gmail-Modal Start ------------------------------

var gmodal = document.getElementById("gmailModal");

// Get the button that opens the modal
var btn = document.getElementById("gmailBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("gclose")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
	gmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	gmodal.style.display = "none";
}

// // ------------- Mail Section

function sendEmail() {

	let To = document.getElementById('to').value
	let	Subject= document.getElementById('subject').value

	if(To==="",Subject===""){
		window.alert('Fill Email ID and Subject');
	}
	else{
		window.open(href="mailto:"+To+"?subject="+Subject+"");
	}

}


//----------------Print Section---------------

function printInvoice(){

	let Indt = document.getElementById('indt').value;

	if(Indt == 0){
		alert("Fill The Form");
	}
	else{
		window.print();
	}

}

//-------------------PDF Section---------------

function generatePdf(){

	let Inno = document.getElementById('inno').innerText;
	let Inna = document.getElementById('inna').innerText;
	let Indt = document.getElementById('indt').value;

	let fName = Inno.concat("  ",Inna,"  ",Indt);

	if(Indt == 0){
		alert("Fill The Form");
	}
	else{
		const main = document.getElementById('main'); // Invoice

		var opt = {
			margin:       [-0.5, -2],
			filename:     fName,
			image:        { type: 'jpeg', quality: 0.98 },
			html2canvas:  { scale: 2 },
			jsPDF:        { unit: 'cm', format: 'A4', orientation: 'portrait' }
		};

		// This will implicitly create the canvas and PDF objects before saving.
		var worker = html2pdf().set(opt).from(main).save();
	};

};




