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
  let deployer, buyer

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

  describe("Buying", ()=>{
    let transaction 

    beforeEach(async () => {

      //list
      transaction = await realestate.connect(deployer).list(ID, SOLD, BED, BATH, ACRELOT, HOUSESIZE, STREET, CITY, STATE, IMAGE, PRICE)
      await transaction.wait()

      //buy
      transaction = await realestate.connect(buyer).buy(ID, { value: PRICE })

    })

    
    it("updates the contract balance",async()=>{
      const result = await ethers.provider.getBalance(realestate.address) // address of smart contract
      // console.log(result)
      expect(result).to.equal(PRICE)
    })

  })

})
