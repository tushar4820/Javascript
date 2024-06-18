// Initialize an empty array to store the NFTs
const NFTs = [];

// Function to mint new NFTs
// Takes multiple parameters to define the properties of the NFT
function mintNFTs(_name, _state, _country, _language, _age, _occupation, _favoriteColor) {
    // Create an NFT object 
    const NFT = {
        "name": _name,
        "state": _state,
        "country": _country,
        "language": _language,
        "age": _age,
        "occupation": _occupation,
        "favoriteColor": _favoriteColor
    }
    // Add the newly created NFT object to the NFTs array
    NFTs.push(NFT);
    // Log a message to indicate that the NFT has been minted
    console.log("Minted: " + _name);
}

// Function to list all the NFTs
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log(NFTs[i]);
    }
}

// Function to get the total supply of NFTs
function getTotalSupply() {
    // Log the length of the NFTs array which represents the total number of NFTs
    console.log(NFTs.length);
}

// Mint multiple NFTs with different properties
mintNFTs("Tushar", "Chandigarh", "India", "English", 25, "Software engineer", "Blue");
mintNFTs("Aman", "Haridwar", "India", "English", 30, "Doctor", "Green");
mintNFTs("Anmol", "Dehradun", "India", "English", 28, "Teacher", "Red");
mintNFTs("Mohit", "Jaipur", "India", "English", 35, "Lawyer", "Yellow");
mintNFTs("Rohan", "Amritsar", "India", "English", 22, "Student", "Purple");

// List all minted NFTs
listNFTs();

// Get the total number of NFTs minted
getTotalSupply();
