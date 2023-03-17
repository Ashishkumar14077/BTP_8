const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const ID = 1
const SOLD = 1
const BED = 2
const BATH = 2
const ACRELOT = 2
const HOUSESIZE = 1 
const STREET = "R.K.Puram"
const CITY = "South West"
const STATE = "Delhi"
const IMAGE = "image of plot"
const PRICE = tokens(1)


describe("Realestate", () => {
  let realestate
  let deployer, seller, buyer

  beforeEach(async () => {
    // setup account
    [deployer, buyer] = await ethers.getSigners()
    // console.log(deployer.address, buyer.address)

    //deploy contract
    const Realestate = await ethers.getContractFactory("Realestate")
    realestate = await Realestate.deploy()
  })

  describe("Deployment", ()=>{
    it("Sets the Owner", async() =>{
      // console.log(buyer.address, deployer.address)
      expect(await realestate.owner()).to.equal(deployer.address)
      // console.log(realestate.owner(), buyer.address, deployer.address)

    })
  })

  describe("Listing", ()=>{
    let transaction 

    beforeEach(async () => {

      //list
      transaction = await realestate.connect(deployer).list(
        ID,
        SOLD,
        BED,
        BATH,
        ACRELOT,
        HOUSESIZE,
        STREET,
        CITY,
        STATE,
        IMAGE,
        PRICE
      )

      await transaction.wait()
    })

    it("Returns plot attributes", async() =>{
      const plot = await realestate.plots(ID)
      expect(plot.id).to.equal(ID)
      expect(plot.sold).to.equal(SOLD)
      expect(plot.bed).to.equal(BED)
      expect(plot.bath).to.equal(BATH)
      expect(plot.acreLot).to.equal(ACRELOT)
      expect(plot.housesize).to.equal(HOUSESIZE)
      expect(plot.street).to.equal(STREET)
      expect(plot.city).to.equal(CITY)
      expect(plot.state).to.equal(STATE)
      expect(plot.image).to.equal(IMAGE)
      expect(plot.price).to.equal(PRICE)
    })
    it("Emits List events", ()=>{
      expect(transaction).to.emit(realestate,"List")
    })

  })

  describe("Creating", ()=>{
    let transaction 

    beforeEach(async () => {

      //list
      transaction = await realestate.connect(deployer).list(
        ID,
        SOLD,
        BED,
        BATH,
        ACRELOT,
        HOUSESIZE,
        STREET,
        CITY,
        STATE,
        IMAGE,
        PRICE
      )

      await transaction.wait()
    })

    it("Returns plot attributes", async() =>{
      const plot = await realestate.plots(ID)
      expect(plot.id).to.equal(ID)
      expect(plot.sold).to.equal(SOLD)
      expect(plot.bed).to.equal(BED)
      expect(plot.bath).to.equal(BATH)
      expect(plot.acreLot).to.equal(ACRELOT)
      expect(plot.housesize).to.equal(HOUSESIZE)
      expect(plot.street).to.equal(STREET)
      expect(plot.city).to.equal(CITY)
      expect(plot.state).to.equal(STATE)
      expect(plot.image).to.equal(IMAGE)
      expect(plot.price).to.equal(PRICE)
    })
    it("Emits List events", ()=>{
      expect(transaction).to.emit(realestate,"List")
    })

  })

  describe("Buying",()=>{
    
    let transaction
    
    beforeEach(async()=>{
      // List an Item 
     transaction=await realestate.connect(deployer).list(ID, SOLD, BED, BATH, ACRELOT, HOUSESIZE, STREET, CITY, STATE, IMAGE, PRICE);
      await transaction.wait()
      //buy an item 
      transaction =await realestate.connect(buyer).buy(ID,{value : PRICE});

    })
    
    it("Updates the contract Balance", async()=>{
    
      const result= await ethers.provider.getBalance(realestate.address);
      expect(result).to.equal(PRICE);
      // console.log(result);
      // console.log(deployer.address==realestate.address);
    
    })
    it("Updates the Buyer's Order Count", async()=>{
    
      const result= await realestate.orderCount(buyer.address);
      expect(result).to.equal(1);
    
    })

    it("Adds the order", async()=>{
    
      const order= await realestate.orders(buyer.address,1);
      expect(order.time).to.be.greaterThan(0);
      // expect(order.item.name).to.equal(NAME);
    
    })

    it("Emits Buy event", async()=>{
      //Used emit keyword to emit List named event 
      expect(transaction).to.emit(realestate,"Buy");
    })

  })

  describe("Withdrawing",()=>{
    
    let balanceBefore
    
    beforeEach(async()=>{
      // List an Item 
      let transaction=await realestate.connect(deployer).list(ID, SOLD, BED, BATH, ACRELOT, HOUSESIZE, STREET, CITY, STATE, IMAGE, PRICE);
      await transaction.wait()
      
      //buy an item 
      transaction =await realestate.connect(buyer).buy(ID,{value : PRICE});
      await transaction.wait()

      // Get Deployer balance before
      balanceBefore = await ethers.provider.getBalance(deployer.address)

      // Withdraw
      transaction = await realestate.connect(deployer).withdraw()
      await transaction.wait()
    })

    it('Updates the owner balance', async () => {
      const balanceAfter = await ethers.provider.getBalance(deployer.address)
      expect(balanceAfter).to.be.greaterThan(balanceBefore)
    })

    it('Updates the contract balance', async () => {
      const result = await ethers.provider.getBalance(realestate.address)
      expect(result).to.equal(0)
    })

  })

})
