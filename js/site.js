// Be sure to thank Lorman_Lau for his help with setting up the API request

// Take in user values from form
function GetUserInput()
{

}

function GenerateCards()
{
  let tableBody = document.getElementById("tableDisplay");

  let displayTemplate = document.getElementById("displayTemplate");

  let firstCard = document.getElementById("firstCard");

  for (let i = 0; i < 5; i++)
  {
    let tableRow = document.importNode(displayTemplate.content, true);
    let rowCols = tableRow.querySelectorAll("td");

    for (let j = 0; j < 5; j++)
    {
      // clone the original div element
      let clonedCard = firstCard.cloneNode(true);

      // Insert the cloned div into the table cell
      rowCols[j].appendChild(clonedCard);
      
    }

    tableBody.appendChild(tableRow);
  }

}


function ReturnTemplate()
{

}

