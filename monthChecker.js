var month = document.getElementById("photoMonth").innerText
console.log(month)

const photoDescription = []

if (month == Months[0] || month == Months[2] || month == Months[4] || month == Months[6] || month == Months[7] || month == Months[9] || month == Months[11]) {
    numNFTs = 31
} else if (month == Months[3] || month == Months[5] || month == Months[8] || month == Months[10]) {
    numNFTs = 30
} else {
    numNFTs = 28
}
//Creates the length of array depending on given month
for (i = 0; i < numNFTs; i++) {
    photoDescription.push("Description")
}

//This function allows you to add description to specific photo
function replaceItem(description, positon) {
    console.log(photoDescription)
    photoDescription.splice(positon, 1, description);
}

//Function should be called within each of the individual html files 
/*replaceItem("Breakfast", 0)
console.log(photoDescription)*/

function setPhoto(M) {
    for (i = 1; i <= numNFTs; i++) {
        NFTs.push('./Photos/' + M + '/' + i + '.jpg')
    }
    console.log(NFTs.length)
}

setPhoto(month)
console.log(NFTs)
