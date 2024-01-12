// Be sure to thank Lorman_Lau for his help with setting up the API request


function GrowTrees()
{
  var gardenRowCols = GetUserInput();

  GenerateCards(gardenRowCols);

}


// Take in user values from form
function GetUserInput()
{

  var gardenRowCols = {};

  let colNumber = document.getElementById("colNumber").value;
  let rowNumber = document.getElementById("rowNumber").value;

  gardenRowCols.colNumber = colNumber;
  gardenRowCols.rowNumber = rowNumber;

  return gardenRowCols;

}

var treeArray = ["https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?cs=srgb&dl=pexels-johannes-plenio-1632790.jpg&fm=jpg", 
"https://media.istockphoto.com/id/1399340544/photo/arboles-y-cielo.jpg?s=612x612&w=0&k=20&c=__yHXv3SRRZXCTz-deFRuV_-QouFfd5gfi6FimqZx5c=", 
"https://media.istockphoto.com/id/476116580/photo/sycamore-tree-in-summer-field-at-sunset-england-uk.jpg?s=2048x2048&w=is&k=20&c=co7qivS58-PbkvfmwfYS9Zt8f3Qma2LiiNTv292f_KU=",
"https://media.istockphoto.com/id/1423098235/photo/beautiful-leafy-tree-canopy-on-a-sunny-summers-day.jpg?s=2048x2048&w=is&k=20&c=zufLM2b85vC64WQ1Bh1vuTJJcRC-ai8PYVU9kHvMxec=",
"https://media.istockphoto.com/id/844226534/photo/leaf-background.jpg?s=2048x2048&w=is&k=20&c=SuFwCpxv6ALde15whmnrtQ42SpuC09aLLwUI2pE5uMM="]

function GenerateCards(gardenRowCols)
{
  let tableBody = document.getElementById("tableDisplay");

  let displayTemplate = document.getElementById("displayTemplate");

  let firstCard = document.getElementById("firstCard");

  for (let i = 0; i < gardenRowCols.colNumber; i++)
  {
    let tableRow = document.importNode(displayTemplate.content, true);
    let rowCols = tableRow.querySelectorAll("td");

    for (let j = 0; j < gardenRowCols.rowNumber; j++)
    {
      // clone the original div element
      let clonedCard = firstCard.cloneNode(true);
      
      // select img src in cloned card
      let treeImg = clonedCard.querySelector("#plantImg");
      let treeNumber = clonedCard.querySelector("#plantNumber");
      // assign src to img in tree array index j
      treeImg.src = treeArray[j];
      treeNumber.innerHTML = "Tree # " + (j + 1);

      // Insert the cloned div into the table cell
      rowCols[j].appendChild(clonedCard);
      
    }

    tableBody.appendChild(tableRow);
  }

}


function ReturnTemplate()
{

}

