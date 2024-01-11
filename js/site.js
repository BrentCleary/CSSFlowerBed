// Be sure to thank Lorman_Lau for his help with setting up the API request

// Take in user values from form
function GetUserInput()
{

}

function GenerateCards()
{
  // card Template Assignment
  let cardTemplate = document.getElementById("cardTemplate");

  let displayTemplate = document.getElementById("displayTemplate");

  let firstCard = document.getElementById("firstCard");

  for (let i = 0; i < 5; i++) {
    
    let tableRow = document.importNode(displayTemplate.contentEditable, true);

    let rowCols = tableRow.querySelectorAll("td");

    rowCols[0] = firstCard;
    rowCols[1] = firstCard;
    rowCols[2] = firstCard;
    rowCols[3] = firstCard;
    rowCols[4] = firstCard;
  }

}


function ReturnTemplate()
{

}

