pragma solidity ^0.5.0;

contract Marketplace {
    string public name;
    uint public productCount = 0;
    mapping(uint => Product) public products;

    struct Product {
        uint id;
        // string name;
        uint bed;
        uint bath;
        string acreLot;
        string housesize;
        string houseAddress;
        string image;
        uint price;
        uint predict;
        address payable owner;
        bool purchased;
    }

    event ProductCreated(
        uint id,
        // string name,
        uint bed,
        uint bath,
        string acreLot,
        string housesize,
        string houseAddress,
        string image,
        uint price,
        uint predict,
        address payable owner,
        bool purchased
    );

    event ProductPurchased(
        uint id,
        // string name,
        uint bed,
        uint bath,
        string acreLot,
        string housesize,
        string houseAddress,
        string image,
        uint price,
        uint predict,
        address payable owner,
        bool purchased
    );

    constructor() public {
        name = "Realestate app";
    }

    function createProduct(
        // string memory _name,
        uint _bed,
        uint _bath,
        string memory _acreLot,
        string memory _housesize,        
        string memory _houseAddress,
        string memory _image, 
        uint _price,
        uint _predict
        ) public {
        // Require a valid name
        // require(bytes(_name).length > 0);
        // Require a valid price
        require(_price > 0);
        // Increment product count
        productCount ++;
        // Create the product
        products[productCount] = Product(
            productCount,
            // _name,
            _bed,
            _bath,
            _acreLot,
            _housesize,
            _houseAddress,
            _image,
            _price,
            _predict,
            msg.sender,
            false);
        // Trigger an event
        emit ProductCreated(
            productCount, 
            // _name,
            _bed,
            _bath,
            _acreLot,
            _housesize,
            _houseAddress,
            _image, 
            _price, 
            _predict,
            msg.sender, 
            false);
    }

    function purchaseProduct(uint _id) public payable {
        // Fetch the product
        Product memory _product = products[_id];
        // Fetch the owner
        address payable _seller = _product.owner;
        // Make sure the product has a valid id
        require(_product.id > 0 && _product.id <= productCount);
        // Require that there is enough Ether in the transaction
        require(msg.value >= _product.price);
        // Require that the product has not been purchased already
        require(!_product.purchased);
        // Require that the buyer is not the seller
        require(_seller != msg.sender);
        // Transfer ownership to the buyer
        _product.owner = msg.sender;
        // Mark as purchased
        _product.purchased = true;
        // Update the product
        products[_id] = _product;
        // Pay the seller by sending them Ether
        address(_seller).transfer(msg.value);
        // Trigger an event
        emit ProductPurchased(
            productCount,
            // _product.name,
            _product.bed,
            _product.bath,
            _product.acreLot,
            _product.housesize,
            _product.houseAddress,
            _product.image,
            _product.price,
            _product.predict,
            msg.sender,
             true
        );
    }
}
