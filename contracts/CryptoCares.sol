//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Cryptocares {
    
    struct Services{
        
        uint256 service_id;
        address service_provider;
        address payable NGOaddress;
        uint256 minimum_donation_amount;
        uint256 duration;
        uint256 amountOfServices;
        bool service_disable;
        
    }
    
    struct Service_Provider{
        
        uint256 id;
        string uri;
        uint256 services_offered;
        
        
    }
    
    mapping(uint256 => Services) public Services_list;
    mapping(uint256 => Service_Provider) public Service_Providers;
    address public NGO = 0x68A99f89E475a078645f4BAC491360aFe255Dff1; //address of COVID CryptoRelief India Fund

    
    event ServiceAdded(uint service_id, address service_provider);
    event ServiceDisabled(uint service_id);
    event ServiceEnabled(uint service_id);
    event ServiceProviderAdded(uint id,string uri);
    
    function Add_Service_Provider(
        
                                    uint256 id,
                                    string memory uri
                                 )  public
                                 
                                 {
                                     
                                     Service_Providers[id]=Service_Provider(id,uri,0);
                                     emit ServiceProviderAdded(id,uri);
                                     
                                     
                                    
                                 }
    
    function Add_Services(
                        uint256 _service_id, 
                        address _service_provider,
                        uint256 _minimum_donation_amount,
                        uint256 _duration,
                        uint256 _amountOfServices) public {
                            
            
                    require(_minimum_donation_amount>0, "donation is not entered");
                    
                    address payable _NGOaddress = payable(address(0x68A99f89E475a078645f4BAC491360aFe255Dff1)); //address of COVID CryptoRelief India Fund
                    
                    Services_list[_service_id] = Services(_service_id,_service_provider, _NGOaddress, _minimum_donation_amount,_duration, _amountOfServices,true);
                    
                    emit ServiceAdded(_service_id,_service_provider);
                                                    
                    
                    
                    
                    }
                        
    function Avail_Service(uint256 id) payable public
    {
       Services storage service = Services_list[id];
       uint256 _amountOfServices = service.amountOfServices;
       require(_amountOfServices > 0, "All available services have been minted");
       service.amountOfServices = service.amountOfServices - 1;
       address payable _toNGO = service.NGOaddress;
       
       _toNGO.transfer(msg.value);
       
       
        //mint NFT
    }
    
    function Disable_Service(uint256 id) public {
        
        Services storage service = Services_list[id];
        
        require(msg.sender == service.service_provider,"You are not Service Provider");
        require(service.service_disable!=false,"Service is already disabled");
        
        service.service_disable=false;
        
        emit ServiceDisabled(service.service_id);
        
        
        
    }
    
    function Enable_Service(uint256 id) public {
        
        Services storage service = Services_list[id];
        
        require(msg.sender == service.service_provider,"You are not Service Provider");
        require(service.service_disable!=true,"Service is already enabled");
        
        service.service_disable=true;
        
        emit ServiceEnabled(service.service_id);
        
    }
    
    function Get_Service(uint256 id) public returns(Services memory){
        return Services_list[id];
    }
    
}


