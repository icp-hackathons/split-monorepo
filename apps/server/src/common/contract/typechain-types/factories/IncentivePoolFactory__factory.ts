/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";
import type { IncentivePoolFactory, IncentivePoolFactoryInterface } from "../IncentivePoolFactory";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialAmount",
        type: "uint256",
      },
    ],
    name: "CreateIncentivePool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "incentiveToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "incentiveAmountPerTransaction",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "affiliateAmountPerTransaction",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "userAmountPerTransaction",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "leftTransactionNum",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxTransactionNumPerWallet",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTimeStamp",
                type: "uint256",
              },
            ],
            internalType: "struct CommonDtos.IncentiveInfo",
            name: "incentiveInfo",
            type: "tuple",
          },
        ],
        internalType: "struct CommonDtos.CreateIncentivePoolReq",
        name: "req",
        type: "tuple",
      },
    ],
    name: "createIncentivePool",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "deployerToIncentivePool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "deployers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeployers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getIncentivePoolAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
    ],
    name: "getUserDashboardData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "totalEarned",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalClaimed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "productNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalTransactionNum",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "incentivePoolAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "affiliateEarned",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "affiliateClaimed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "userEarned",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "userClaimed",
                type: "uint256",
              },
            ],
            internalType: "struct CommonDtos.ProductInfo[]",
            name: "productInfos",
            type: "tuple[]",
          },
        ],
        internalType: "struct CommonDtos.GetUserDashboardDataRes",
        name: "res",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "incentivePools",
    outputs: [
      {
        internalType: "contract IncentivePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "masterAdmin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "poolCreationFee_",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isValidPool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "masterAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolCreationFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "incentivePoolAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "affiliate",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "user",
                    type: "address",
                  },
                ],
                internalType: "struct CommonDtos.Referral[]",
                name: "referrals",
                type: "tuple[]",
              },
            ],
            internalType: "struct CommonDtos.PoolUpdateInfo[]",
            name: "info",
            type: "tuple[]",
          },
        ],
        internalType: "struct CommonDtos.UpdateIncentivePoolsReq",
        name: "req",
        type: "tuple",
      },
    ],
    name: "updateIncentivePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100dd565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116146100db576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b612c93806100ec6000396000f3fe608060405260043610620000b55760003560e01c80636764cdc0116200006c5780636764cdc014620001d05780638ba97b9b14620001f55780638faa77b2146200021a578063be74615f146200023f578063cd6dc6871462000266578063d9803fad146200028b57600080fd5b806325bd84a214620000ba5780632a68f64e1462000111578063581ff0c814620001335780635ab78ee1146200014c578063607c12b51462000191578063660a69cb14620001b8575b600080fd5b348015620000c757600080fd5b50620000f4620000d9366004620012fd565b6003602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156200011e57600080fd5b50600554620000f4906001600160a01b031681565b6200014a62000144366004620013e6565b620002bf565b005b3480156200015957600080fd5b50620001806200016b366004620012fd565b60026020526000908152604090205460ff1681565b604051901515815260200162000108565b3480156200019e57600080fd5b50620001a962000735565b60405162000108919062001487565b348015620001c557600080fd5b50620001a962000815565b348015620001dd57600080fd5b506200014a620001ef366004620014fd565b620008ee565b3480156200020257600080fd5b50620000f462000214366004620016fd565b62000ad9565b3480156200022757600080fd5b50620000f462000239366004620016fd565b62000b04565b3480156200024c57600080fd5b506200025760045481565b60405190815260200162000108565b3480156200027357600080fd5b506200014a6200028536600462001717565b62000b15565b3480156200029857600080fd5b50620002b0620002aa366004620012fd565b62000c54565b60405162000108919062001746565b60075460ff16620003095760405162461bcd60e51b815260206004820152600f60248201526e1053149150511657d1539511549151608a1b60448201526064015b60405180910390fd5b6007805460ff1916905580516004543410156200035d5760405162461bcd60e51b81526020600482015260116024820152704e4f545f454e4f554748545f56414c554560781b604482015260640162000300565b80516001600160a01b0316620003ae5760405162461bcd60e51b8152602060048201526015602482015274494e56414c49445f544f4b454e5f4144445245535360581b604482015260640162000300565b336000908152600360205260409020546001600160a01b031615620004065760405162461bcd60e51b815260206004820152600d60248201526c141493d11550d517d3d5d39151609a1b604482015260640162000300565b6000816020015182608001516200041e919062001810565b82516040516323b872dd60e01b8152336004820152306024820152604481018390529192506001600160a01b0316906323b872dd906064016020604051808303816000875af115801562000476573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200049c919062001832565b50620004a76200126c565b338152602081018390526040516000908290620004c490620012d6565b62000532919060006101008201905060018060a01b038084511683526020840151818151166020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e0850152505092915050565b604051809103906000f0801580156200054f573d6000803e3d6000fd5b506001805480820182557fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b03199081166001600160a01b03858116918217909355600680548086019091557ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0180543390841681179091556000828152600260209081526040808320805460ff19169098179097559181526003909152849020805490921681179091558751925163095ea7b360e01b8152600481019190915260248101879052929350169063095ea7b3906044016020604051808303816000875af11580156200064e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000674919062001832565b506080840151604051634753a7a160e11b815260048101919091526001600160a01b03821690638ea74f4290602401600060405180830381600087803b158015620006be57600080fd5b505af1158015620006d3573d6000803e3d6000fd5b5050604080513381526001600160a01b03851660208201529081018690527f1ebff2f2b8dfaf965fffb2fddfa8e705e28ca6c7f0966cfc8f8587449774b6e09250606001905060405180910390a150506007805460ff19166001179055505050565b60065460609060008167ffffffffffffffff81111562000759576200075962001324565b60405190808252806020026020018201604052801562000783578160200160208202803683370190505b50905060005b828110156200080e57600060068281548110620007aa57620007aa62001856565b9060005260206000200160009054906101000a90046001600160a01b0316905080838381518110620007e057620007e062001856565b6001600160a01b039092166020928302919091019091015250620008066001826200186c565b905062000789565b5092915050565b60015460609060008167ffffffffffffffff81111562000839576200083962001324565b60405190808252806020026020018201604052801562000863578160200160208202803683370190505b50905060005b828110156200080e576000600182815481106200088a576200088a62001856565b9060005260206000200160009054906101000a90046001600160a01b0316905080838381518110620008c057620008c062001856565b6001600160a01b039092166020928302919091019091015250620008e66001826200186c565b905062000869565b60075460ff16620009345760405162461bcd60e51b815260206004820152600f60248201526e1053149150511657d1539511549151608a1b604482015260640162000300565b6007805460ff191690556005546001600160a01b031633146200098a5760405162461bcd60e51b815260206004820152600d60248201526c1050d0d154d4d7d11153925151609a1b604482015260640162000300565b60005b81515181101562000ac857600082600001518281518110620009b357620009b362001856565b602090810291909101810151516001600160a01b0381166000908152600290925260409091205490915060ff1662000a255760405162461bcd60e51b8152602060048201526014602482015273494e56414c49445f504f4f4c5f4144445245535360601b604482015260640162000300565b6000819050806001600160a01b031663f8a8f9e78560000151858151811062000a525762000a5262001856565b6020026020010151602001516040518263ffffffff1660e01b815260040162000a7c919062001887565b600060405180830381600087803b15801562000a9757600080fd5b505af115801562000aac573d6000803e3d6000fd5b505050505050808062000abf90620018e5565b9150506200098d565b50506007805460ff19166001179055565b6001818154811062000aea57600080fd5b6000918252602090912001546001600160a01b0316905081565b6006818154811062000aea57600080fd5b600054610100900460ff161580801562000b365750600054600160ff909116105b8062000b525750303b15801562000b52575060005460ff166001145b62000bb75760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840162000300565b6000805460ff19166001179055801562000bdb576000805461ff0019166101001790555b600580546001600160a01b0319166001600160a01b03851617905560048290556007805460ff19166001179055801562000c4f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b62000c876040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b62000cf3604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006020830181905280835260408301819052606083015260015467ffffffffffffffff81111562000d295762000d2962001324565b60405190808252806020026020018201604052801562000d9857816020015b62000d846040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81526020019060019003908162000d485790505b50608083015260005b600154811015620012655760006001828154811062000dc45762000dc462001856565b60009182526020909120015460405163839e7e8960e01b81526001600160a01b0387811660048301529091169150819063839e7e8990602401602060405180830381865afa15801562000e1b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000e41919062001903565b8352604051631eb97e0f60e01b81526001600160a01b038681166004830152821690631eb97e0f90602401602060405180830381865afa15801562000e8a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000eb0919062001903565b602084015260405163a3d09c1b60e01b81526001600160a01b03868116600483015282169063a3d09c1b90602401602060405180830381865afa15801562000efc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000f22919062001903565b6040848101919091525163bdab4a2f60e01b81526001600160a01b03868116600483015282169063bdab4a2f90602401602060405180830381865afa15801562000f70573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000f96919062001903565b6060840181905260408401516020850151855162000fb591906200186c565b62000fc191906200186c565b62000fcd91906200186c565b6101808401819052156200124f576040840180519062000fed82620018e5565b905250610180830151606085018051620010099083906200186c565b91508181525050806001600160a01b031663ed9fc4ec6040518163ffffffff1660e01b815260040160e060405180830381865afa1580156200104f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200107591906200191d565b60400151836080018181525050806001600160a01b031663ed9fc4ec6040518163ffffffff1660e01b815260040160e060405180830381865afa158015620010c1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620010e791906200191d565b6060015160a08401526080830151602084015162001106919062001810565b60c084015260a0830151606084015162001121919062001810565b60e0840181905260c08401516200113991906200186c565b6101008401819052602085018051620011549083906200186c565b905250608083015183516200116a919062001810565b8360c001516200117b91906200186c565b61012084015260a0830151604084015162001197919062001810565b8360e00151620011a891906200186c565b6101408401819052610120840151620011c291906200186c565b610160840181905284518590620011db9083906200186c565b9150818152505060006040518060a00160405280836001600160a01b0316815260200185610120015181526020018560c00151815260200185610140015181526020018560e001518152509050808560800151848151811062001242576200124262001856565b6020026020010181905250505b50806200125c81620018e5565b91505062000da1565b5050919050565b604051806040016040528060006001600160a01b03168152602001620012d16040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b905290565b6112cc806200199283390190565b6001600160a01b0381168114620012fa57600080fd5b50565b6000602082840312156200131057600080fd5b81356200131d81620012e4565b9392505050565b634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171562001360576200136062001324565b60405290565b6040516020810167ffffffffffffffff8111828210171562001360576200136062001324565b6040805190810167ffffffffffffffff8111828210171562001360576200136062001324565b604051601f8201601f1916810167ffffffffffffffff81118282101715620013de57620013de62001324565b604052919050565b600060e08284031215620013f957600080fd5b6040516020810181811067ffffffffffffffff821117156200141f576200141f62001324565b6040526200142c6200133a565b83356200143981620012e4565b808252506020840135602082015260408401356040820152606084013560608201526080840135608082015260a084013560a082015260c084013560c0820152808252508091505092915050565b6020808252825182820181905260009190848201906040850190845b81811015620014ca5783516001600160a01b031683529284019291840191600101620014a3565b50909695505050505050565b600067ffffffffffffffff821115620014f357620014f362001324565b5060051b60200190565b6000602082840312156200151057600080fd5b67ffffffffffffffff80833511156200152857600080fd5b602083358401850312156200153c57600080fd5b6200154662001366565b81843585013511156200155857600080fd5b83358401803501601f810186136200156f57600080fd5b620015856200157f8235620014d6565b620013b2565b81358082526020808301929160051b840101881015620015a457600080fd5b602083015b6020843560051b850101811015620016ef578581351115620015ca57600080fd5b803584016040818b03601f19011215620015e357600080fd5b620015ed6200138c565b620015fc6020830135620012e4565b6020820135815287604083013511156200161557600080fd5b6040820135820191508a603f8301126200162e57600080fd5b620016416200157f6020840135620014d6565b602083810135808352908201919060061b84016040018d8111156200166557600080fd5b6040850194505b80851015620016cf576040858f0312156200168657600080fd5b620016906200138c565b6200169c8635620012e4565b85358152620016af6020870135620012e4565b60208601356020820152808452506020830192506040850194506200166c565b5080602084015250508085525050602083019250602081019050620015a9565b508352509095945050505050565b6000602082840312156200171057600080fd5b5035919050565b600080604083850312156200172b57600080fd5b82356200173881620012e4565b946020939093013593505050565b6000602080835260c083018451828501528185015160408181870152808701519150606082818801528088015192506080838189015280890151935060a080818a015285855180885260e08b0191508887019750600096505b80871015620017eb57875180516001600160a01b03168352898101518a84015286810151878401528581015186840152840151848301529688019660019690960195908201906200179f565b509a9950505050505050505050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156200182d576200182d620017fa565b500290565b6000602082840312156200184557600080fd5b815180151581146200131d57600080fd5b634e487b7160e01b600052603260045260246000fd5b60008219821115620018825762001882620017fa565b500190565b602080825282518282018190526000919060409081850190868401855b82811015620018d857815180516001600160a01b0390811686529087015116868501529284019290850190600101620018a4565b5091979650505050505050565b6000600019821415620018fc57620018fc620017fa565b5060010190565b6000602082840312156200191657600080fd5b5051919050565b600060e082840312156200193057600080fd5b6200193a6200133a565b82516200194781620012e4565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152809150509291505056fe60806040523480156200001157600080fd5b50604051620012cc380380620012cc83398101604081905262000034916200013f565b60208181015160008054336001600160a01b03199182161790915592516001805485166001600160a01b03928316179055815160068054909516911617909255810151600755604081015160085560608101516009556080810151600a5560a0810151600b5560c00151600c55601280546201000062ffffff19909116179055620001e7565b604080519081016001600160401b0381118282101715620000eb57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620000eb57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200013a57600080fd5b919050565b60008183036101008112156200015457600080fd5b6200015e620000ba565b620001698462000122565b815260e0601f19830112156200017e57600080fd5b62000188620000f1565b9150620001986020850162000122565b825260408401516020830152606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b6110d580620001f76000396000f3fe608060405234801561001057600080fd5b506004361061012b5760003560e01c8063a8046609116100ad578063c9a0b40611610071578063c9a0b406146102d5578063ebd238fb146102dd578063ed9fc4ec14610347578063f1b3f86f146103a9578063f8a8f9e7146103b157600080fd5b8063a804660914610264578063b610fb6414610287578063b782cc491461028f578063bdab4a2f146102a2578063c45a0155146102c257600080fd5b806350bc9995116100f457806350bc9995146101ed578063839e7e89146101fa5780638ea74f421461021d5780639361076a14610232578063a3d09c1b1461024457600080fd5b8062ce8e3e146101305780630255fa1e1461014e5780631bd78748146101815780631eb97e0f146101ac578063365b98b2146101da575b600080fd5b6101386103c4565b6040516101459190610de9565b60405180910390f35b61017161015c366004610e52565b60056020526000908152604090205460ff1681565b6040519015158152602001610145565b61019461018f366004610e74565b610496565b6040516001600160a01b039091168152602001610145565b6101cc6101ba366004610e52565b60106020526000908152604090205481565b604051908152602001610145565b6101946101e8366004610e74565b6104c0565b6012546101719060ff1681565b6101cc610208366004610e52565b600e6020526000908152604090206001015481565b61023061022b366004610e74565b6104d0565b005b60125461017190610100900460ff1681565b6101cc610252366004610e52565b600f6020526000908152604090205481565b610171610272366004610e52565b60036020526000908152604090205460ff1681565b610230610636565b600154610194906001600160a01b031681565b6101cc6102b0366004610e52565b60116020526000908152604090205481565b600054610194906001600160a01b031681565b610230610806565b600654600754600854600954600a54600b54600c54610308966001600160a01b031695949392919087565b604080516001600160a01b0390981688526020880196909652948601939093526060850191909152608084015260a083015260c082015260e001610145565b61034f6109d0565b604051610145919081516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b610138610a67565b6102306103bf366004610efd565b610b32565b60045460609060008167ffffffffffffffff8111156103e5576103e5610e8d565b60405190808252806020026020018201604052801561040e578160200160208202803683370190505b50905060005b8281101561048f5760006004828154811061043157610431610fd9565b9060005260206000200160009054906101000a90046001600160a01b031690508083838151811061046457610464610fd9565b6001600160a01b039092166020928302919091019091015250610488600182611005565b9050610414565b5092915050565b600281815481106104a657600080fd5b6000918252602090912001546001600160a01b0316905081565b600481815481106104a657600080fd5b6000546001600160a01b03163314806104f357506001546001600160a01b031633145b6105345760405162461bcd60e51b815260206004820152600d60248201526c1050d0d154d4d7d11153925151609a1b60448201526064015b60405180910390fd5b600754600090610544908361101d565b6006546040516323b872dd60e01b8152336004820152306024820152604481018390529192506001600160a01b0316906323b872dd906064016020604051808303816000875af115801561059c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c0919061103c565b506000546001600160a01b031633146105ee5781600660040160008282546105e89190611005565b90915550505b600a5460408051848152602081019290925281018290527f6213dc923ba9cebd39b57f99bbecb140a32b0af21fa6c41feee100e40b9179289060600160405180910390a15050565b60125462010000900460ff166106805760405162461bcd60e51b815260206004820152600f60248201526e1053149150511657d1539511549151608a1b604482015260640161052b565b6012805462ff000019811690915560ff16156106ae5760405162461bcd60e51b815260040161052b9061105e565b336000908152600f6020526040902054806106fc5760405162461bcd60e51b815260206004820152600e60248201526d2727afaa2920a729a0a1aa24a7a760911b604482015260640161052b565b336000908152600f60209081526040808320839055601190915281208054839290610728908490611005565b909155505060095460009061073d908361101d565b60065460405163a9059cbb60e01b8152336004820152602481018390529192506001600160a01b03169063a9059cbb906044016020604051808303816000875af115801561078f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b3919061103c565b506001604080518481526020810184905233917f59e315fd5d58892f063ba6918d15beaa1321d25d324b3388bf142e4b6e48538d910160405180910390a350506012805462ff0000191662010000179055565b60125462010000900460ff166108505760405162461bcd60e51b815260206004820152600f60248201526e1053149150511657d1539511549151608a1b604482015260640161052b565b6012805462ff000019811690915560ff161561087e5760405162461bcd60e51b815260040161052b9061105e565b336000908152600e602090815260408083206001810180549085905560109093529083208054919383926108b3908490611005565b9091555050806108f65760405162461bcd60e51b815260206004820152600e60248201526d2727afaa2920a729a0a1aa24a7a760911b604482015260640161052b565b600854600090610906908361101d565b60065460405163a9059cbb60e01b8152336004820152602481018390529192506001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610958573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097c919061103c565b506000604080518481526020810184905233917f59e315fd5d58892f063ba6918d15beaa1321d25d324b3388bf142e4b6e48538d910160405180910390a350506012805462ff000019166201000017905550565b610a196040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b506040805160e0810182526006546001600160a01b031681526007546020820152600854918101919091526009546060820152600a546080820152600b5460a0820152600c5460c082015290565b60025460609060008167ffffffffffffffff811115610a8857610a88610e8d565b604051908082528060200260200182016040528015610ab1578160200160208202803683370190505b50905060005b8281101561048f57600060028281548110610ad457610ad4610fd9565b9060005260206000200160009054906101000a90046001600160a01b0316905080838381518110610b0757610b07610fd9565b6001600160a01b039092166020928302919091019091015250610b2b600182611005565b9050610ab7565b601254610100900460ff1615610b5a5760405162461bcd60e51b815260040161052b9061105e565b6000546001600160a01b03163314610ba45760405162461bcd60e51b815260206004820152600d60248201526c1050d0d154d4d7d11153925151609a1b604482015260640161052b565b60005b8151811015610de5576000828281518110610bc457610bc4610fd9565b60200260200101516000015190506000838381518110610be657610be6610fd9565b6020908102919091018101518101516001600160a01b038085166000908152600e84526040808220600d8652818320938516835292909452929092205490925060ff1680610c82576001600160a01b038085166000908152600d602090815260408083209387168084529382528220805460ff191660019081179091558554908101865585835291200180546001600160a01b03191690911790555b600182018054906000610c9483611084565b90915550506001600160a01b0383166000908152600f60205260408120805491610cbd83611084565b90915550506001600160a01b03841660009081526003602052604090205460ff16610d48576001600160a01b0384166000818152600360205260408120805460ff191660019081179091556002805491820181559091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b03191690911790555b6001600160a01b03831660009081526005602052604090205460ff16610dce576001600160a01b0383166000818152600560205260408120805460ff191660019081179091556004805491820181559091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b03191690911790555b505050508080610ddd90611084565b915050610ba7565b5050565b6020808252825182820181905260009190848201906040850190845b81811015610e2a5783516001600160a01b031683529284019291840191600101610e05565b50909695505050505050565b80356001600160a01b0381168114610e4d57600080fd5b919050565b600060208284031215610e6457600080fd5b610e6d82610e36565b9392505050565b600060208284031215610e8657600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610ec657610ec6610e8d565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610ef557610ef5610e8d565b604052919050565b60006020808385031215610f1057600080fd5b823567ffffffffffffffff80821115610f2857600080fd5b818501915085601f830112610f3c57600080fd5b813581811115610f4e57610f4e610e8d565b610f5c848260051b01610ecc565b818152848101925060069190911b830184019087821115610f7c57600080fd5b928401925b81841015610fce5760408489031215610f9a5760008081fd5b610fa2610ea3565b610fab85610e36565b8152610fb8868601610e36565b8187015283526040939093019291840191610f81565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561101857611018610fef565b500190565b600081600019048311821515161561103757611037610fef565b500290565b60006020828403121561104e57600080fd5b81518015158114610e6d57600080fd5b6020808252600c908201526b10d310525357d4105554d15160a21b604082015260600190565b600060001982141561109857611098610fef565b506001019056fea26469706673582212206b00af9088db17ef3895e13d5c5b819f9df44130eaf5a0f524d748760926dab264736f6c634300080b0033a2646970667358221220056d340b136652e2d12d9394d3c497e0d72e6147901d5431682be239af4f3f2c64736f6c634300080b0033";

export class IncentivePoolFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<IncentivePoolFactory> {
    return super.deploy(overrides || {}) as Promise<IncentivePoolFactory>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IncentivePoolFactory {
    return super.attach(address) as IncentivePoolFactory;
  }
  connect(signer: Signer): IncentivePoolFactory__factory {
    return super.connect(signer) as IncentivePoolFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncentivePoolFactoryInterface {
    return new utils.Interface(_abi) as IncentivePoolFactoryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IncentivePoolFactory {
    return new Contract(address, _abi, signerOrProvider) as IncentivePoolFactory;
  }
}
