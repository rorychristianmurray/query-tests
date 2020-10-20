require('dotenv').config()
const Web3 = require('web3')
const client = require('node-rest-client-promise').Client()
const WETHABI = require('./assets/WETHAbi').WETHABI
const INFURA_KEY = process.env.INFURA_KEY
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY
const web3 = new Web3(`wss://mainnet.infura.io/ws/v3/${INFURA_KEY}`)
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
const etherscan_url = `http://api.etherscan.io/api?module=contract&action=getabi&address=${CONTRACT_ADDRESS}&apikey=${ETHERSCAN_KEY}`

async function getContractAbi() {
  const etherscan_response = await client.getPromise(etherscan_url)
  const CONTRACT_ABI = JSON.parse(etherscan_response.data.result)
  return CONTRACT_ABI
}

async function eventQuery() {
  const CONTRACT_ABI = await getContractAbi()
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)

  // query 
  console.log("querying your wildest dreams")


}

eventQuery()
