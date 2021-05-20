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
        string description;
        
    }
    
    struct Service_Provider{
        
        address service_provider;
        string uri;
        
        
    }
    
    mapping(uint256 => Services) public Services_list;
    mapping(address => Service_Provider) public Service_Providers;
    address public NGO = 0x68A99f89E475a078645f4BAC491360aFe255Dff1; //address of COVID CryptoRelief India Fund

    
    event ServiceAdded(uint service_id, address service_provider);
    event ServiceDisabled(uint service_id);
    event ServiceEnabled(uint service_id);
    event ServiceProviderAdded(address service_provider,string uri);
    
    function _addServiceProvider(
                                address service_provider,
                                string memory uri
                                 ) private {
                                     Service_Providers[service_provider]=Service_Provider(service_provider,uri);
                                     emit ServiceProviderAdded(service_provider,uri);
                                 }
    
    function Add_Services(
                        uint256 _service_id, 
                        address _service_provider,
                        uint256 _minimum_donation_amount,
                        uint256 _duration,
                        uint256 _amountOfServices,
                        string memory _description,
                        string memory _contactURI) public {
                            
            
                    require(_minimum_donation_amount>0, "donation is not entered");

                    
                    address payable _NGOaddress = payable(address(0x68A99f89E475a078645f4BAC491360aFe255Dff1)); //address of COVID CryptoRelief India Fund
                    
                    Services_list[_service_id] = Services( _service_id,
                                                           _service_provider,
                                                           _NGOaddress,
                                                           _minimum_donation_amount,
                                                           (_duration* 1 days),
                                                           _amountOfServices,
                                                           false,
                                                           _description);
                    
                    emit ServiceAdded(_service_id,_service_provider);
                    
                    _addServiceProvider(_service_provider, _contactURI);
                    
                    }
                    
    constructor() {
        Services_list[0] = Services(0, 
                                msg.sender, 
                                payable(address(0x68A99f89E475a078645f4BAC491360aFe255Dff1)), 
                                0, 
                                5000 weeks, 
                                99999999, 
                                false, 
                                "None");
                                
        Service_Providers[msg.sender] = Service_Provider(msg.sender, "None");
    }
                        
    function Avail_Service(uint256 id) payable public
    {
       Services storage service = Services_list[id];
       uint256 _amountOfServices = service.amountOfServices;
       require(service.service_disable != true, "Service is disabled"); // service should not be disabled
       require(_amountOfServices > 0, "All available services have been minted"); // amount of services should not be depleted
       require(msg.value >= service.minimum_donation_amount, "Donation Amount must be greater than or equal to minimum value"); // donation amount sent must be above minimum_donation_amount
       address payable _toNGO = service.NGOaddress;
       _toNGO.transfer(msg.value);
       service.amountOfServices = service.amountOfServices - 1;
       
       if(service.amountOfServices == 0){
            _disableService(service.service_id);
       }
        //mint NFT
    }
    
    function Disable_Service(uint256 id) public {
        
        Services storage service = Services_list[id];
        
        require(msg.sender == service.service_provider,"You are not Service Provider");
        require(service.service_disable!=true,"Service is already disabled");
        
        _disableService(id);
        
        
    }
    
    function _disableService(uint256 id) private {
        Services storage service = Services_list[id];
        
        service.service_disable=true;
        emit ServiceDisabled(service.service_id);
    }
    
    function Enable_Service(uint256 id) public {
        
        Services storage service = Services_list[id];
        
        require(msg.sender == service.service_provider,"You are not Service Provider");
        require(service.service_disable!=false,"Service is already enabled");
        require(service.amountOfServices > 0, "All available services have been minted");
        
        service.service_disable=false;
        
        emit ServiceEnabled(service.service_id);
        
    }
    
    function Get_Service(uint256 id) public view returns(Services memory){
        return Services_list[id];
    }
    
    function Get_ServiceProvider(address service_provider) public view returns(Service_Provider memory){
        return Service_Providers[service_provider];
    }
    
}


