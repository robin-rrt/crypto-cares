// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title CryptoCares
 */
 
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract CryptoCares is ERC721, Ownable {
    
    
    address[] donationFunds;
    
    struct serviceProvider{
        string serviceProviderName;
        address donationAddress;
        uint256 threshold;
        string contact;
    }
    
    constructor() ERC721('CryptoCares', 'CC') {
        
    }

    function addCharity(address donationAddress) public onlyOwner returns(address[] memory) {
        _addCharity(donationAddress);
    }
    function _addCharity(address donationAddress) private {
        donationFunds.push(donationAddress);
    }
    
    function getCharity() public view returns(address[] memory) {
        address[] memory Funds = new address[](donationFunds.length);
        for (uint256 i = 0; i < donationFunds.length; i++) {
            Funds[i] = donationFunds[i];
        }
        return Funds;
    }
    

}    