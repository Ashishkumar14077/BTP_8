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

    mapping(uint256 => Plot) public plots;

    event List(uint256 price,uint256 sold);

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
    function buy(uint256 _id) public payable{
        //receive crpto
        
        //create an order

        //change the availability

        //emit event
    }

    //withdraw funds
}
