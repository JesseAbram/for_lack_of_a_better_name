const ADDRESS = '0xB77C2D0C471FA60929794CA3Ae9972656777aa73'
const ABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "getBHash",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAHash",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCHash",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_aHash",
				"type": "bytes32"
			},
			{
				"name": "_bHash",
				"type": "bytes32"
			},
			{
				"name": "_cHash",
				"type": "bytes32"
			}
		],
		"name": "setHashes",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

module.exports = {
    ADDRESS,
    ABI
}