//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Cryptocares {
    
    struct Services{
        
        uint256 service_id;
        address payable service_provider;
        uint256 minimum_donation_amount;
        uint256 duration;
        bool service_disable;
        
    }
    
    struct Service_Provider{
        
        uint256 id;
        string uri;
        uint256 services_offered;
        
        
    }
    
    mapping(uint256 => Services) public Services_list;
    mapping(uint256 => Service_Provider) public Service_Providers;
    
    
    
    event ServiceAdded(uint service_id, address service_provider);
    event ServiceDisabled(uint service_id);
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
                        address payable _service_provider, 
                        uint256 _minimum_donation_amount, 
                        uint256 _duration) public {
                            
            
                    require(_minimum_donation_amount>0, "donation is not entered");
                    
                    Services_list[_service_id] = Services(_service_id,_service_provider,_minimum_donation_amount,_duration,false);
                    
                    emit ServiceAdded(_service_id,_service_provider);
                                                    
                    
                    
                    
                    }
                        
    function Avail_Service(uint id) payable public
    {
        
       Services memory service = Services_list[id];
       address payable NGO = service.service_provider;
       NGO.transfer(msg.value);
       
       
        //mint NFT
    }
    
    function Disable_Service(uint256 id) public {
        
        Services memory service = Services_list[id];
        
        require(msg.sender == service.service_provider,"You are not Service Provider");
        require(service.service_disable!=false,"Service is already disabled");
        
        service.service_disable=false;
        
        emit ServiceDisabled(service.service_id);
        
        
        
    }
    
    function Enable_Service(uint256 id) public {
        
        Services memory service = Services_list[id];
        
        require(msg.sender == service.service_provider,"You are not Service Provider");
        require(service.service_disable!=true,"Service is already enabled");
        
        service.service_disable=true;
        
        emit ServiceDisabled(service.service_id);
        
    }
    
}

