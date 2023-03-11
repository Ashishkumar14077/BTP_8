// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Realestate {
    address public owner;

    struct Plot{
        uint256 id;
        uint256 sold;
        uint256 bed;
        uint256 bath;
        uint256 acreLot;
        uint256 housesize;
        // string fulladdress;
        string street;
        string city;
        string state;
        string image;
        uint256 price;
    }


 // Structure for the order
    struct Order{
        uint256 time;
        Plot plot;
    }

    //Plot details 
    mapping(uint256 => Plot) public plots;
   //Person who created order has created how many orders
   mapping(address=>uint256) public orderCount;
   //Person who created orders each order of his with product id and product map
   mapping(address=>mapping(uint256=>Order)) public orders;

//Create an event for listing an item 
    event List(uint256 price,uint256 sold);
   //    Create an event for buying an item 
   event Buy(address buyer,uint256 orderCount,uint256 plotID);

    modifier onlyOwner(){
        require(msg.sender == owner); //owner can oly add houses on list
        _;
    }

    constructor() {
        owner = msg.sender;
    } 

    //List house
    function list(
        uint256 _id,
        uint256 _sold,
        uint256 _bed,
        uint256 _bath,
        uint256 _acreLot,
        uint256 _housesize,
        // string memory _fulladdress,
        string memory _street,
        string memory _city,
        string memory _state,
        string memory _image,
        uint256 _price
        ) public onlyOwner{
            
        
        
        //create plot struct
        Plot memory plot = Plot(
            _id,
            _sold,
            _bed,
            _bath,
            _acreLot,
            _housesize,
            // _fulladdress,
            _street,
            _city,
            _state,
            _image,
            _price
        );

        //save plot struct to blockchain
        plots[_id] = plot;

        //emit an event
        //we can see every time a product was listed

        emit List(_price, _sold);
        

    }

    //buy house
     //buy Products
    function buy(uint256 _id) public payable{
         
    
        //Receive Crypto  ==>done by payable
        //Create an order,fetch plot from blockchain
        Plot memory plot= plots[_id];

          // Requires enough ether to place an order

        require(msg.value>=plot.price);

          //Require enough stock to be bought

        require(plot.sold>0);

        Order memory order= Order(block.timestamp,plot);

        // Save order to the chain
        orderCount[msg.sender]++;

        orders[msg.sender][orderCount[msg.sender]]=order;  //chain of orders of given person

        //Subtract stock
        plots[_id].sold=plots[_id].sold-1;

        //Emit event
        emit Buy(msg.sender,orderCount[msg.sender],plot.id);
    }
  

    //withdraw funds
}
