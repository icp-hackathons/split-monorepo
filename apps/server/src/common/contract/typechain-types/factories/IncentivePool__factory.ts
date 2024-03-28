/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { BigNumberish, Contract, ContractFactory, Overrides, Signer, utils } from "ethers";
import type { IncentivePool, IncentivePoolInterface } from "../IncentivePool";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "deployer",
            type: "address",
          },
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
        internalType: "struct CommonDtos.DeployIncentivePoolReq",
        name: "req",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "addedTransactionNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalTransactionNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "addedIncentiveAmount",
        type: "uint256",
      },
    ],
    name: "AddLeftTransactionNum",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum IncentivePoolInterface.ClaimType",
        name: "claimType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimTransactionNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimedValue",
        type: "uint256",
      },
    ],
    name: "ClaimIncentive",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "addedTransactionNum",
        type: "uint256",
      },
    ],
    name: "addLeftTransactionNum",
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
    name: "affiliateToClaimedTransactionNum",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "affiliateToLeftTransactionNum",
    outputs: [
      {
        internalType: "uint256",
        name: "leftTransactionNum",
        type: "uint256",
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
    name: "affiliates",
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
    name: "claimAffiliateIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimUserIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
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
    name: "getAffiliates",
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
    name: "getIncentiveInfo",
    outputs: [
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
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUsers",
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
    name: "incentiveInfo",
    outputs: [
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
    stateMutability: "view",
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
    name: "isAffiliateExist",
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
    name: "isClaimPaused",
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
    name: "isUpdatePaused",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isUserExist",
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
    name: "poolAdmin",
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
    name: "updatePool",
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
    name: "userToClaimedTransactionNum",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userToLeftTransactionNum",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "users",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620012cc380380620012cc83398101604081905262000034916200013f565b60208181015160008054336001600160a01b03199182161790915592516001805485166001600160a01b03928316179055815160068054909516911617909255810151600755604081015160085560608101516009556080810151600a5560a0810151600b5560c00151600c55601280546201000062ffffff19909116179055620001e7565b604080519081016001600160401b0381118282101715620000eb57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620000eb57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200013a57600080fd5b919050565b60008183036101008112156200015457600080fd5b6200015e620000ba565b620001698462000122565b815260e0601f19830112156200017e57600080fd5b62000188620000f1565b9150620001986020850162000122565b825260408401516020830152606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b6110d580620001f76000396000f3fe608060405234801561001057600080fd5b506004361061012b5760003560e01c8063a8046609116100ad578063c9a0b40611610071578063c9a0b406146102d5578063ebd238fb146102dd578063ed9fc4ec14610347578063f1b3f86f146103a9578063f8a8f9e7146103b157600080fd5b8063a804660914610264578063b610fb6414610287578063b782cc491461028f578063bdab4a2f146102a2578063c45a0155146102c257600080fd5b806350bc9995116100f457806350bc9995146101ed578063839e7e89146101fa5780638ea74f421461021d5780639361076a14610232578063a3d09c1b1461024457600080fd5b8062ce8e3e146101305780630255fa1e1461014e5780631bd78748146101815780631eb97e0f146101ac578063365b98b2146101da575b600080fd5b6101386103c4565b6040516101459190610de9565b60405180910390f35b61017161015c366004610e52565b60056020526000908152604090205460ff1681565b6040519015158152602001610145565b61019461018f366004610e74565b610496565b6040516001600160a01b039091168152602001610145565b6101cc6101ba366004610e52565b60106020526000908152604090205481565b604051908152602001610145565b6101946101e8366004610e74565b6104c0565b6012546101719060ff1681565b6101cc610208366004610e52565b600e6020526000908152604090206001015481565b61023061022b366004610e74565b6104d0565b005b60125461017190610100900460ff1681565b6101cc610252366004610e52565b600f6020526000908152604090205481565b610171610272366004610e52565b60036020526000908152604090205460ff1681565b610230610636565b600154610194906001600160a01b031681565b6101cc6102b0366004610e52565b60116020526000908152604090205481565b600054610194906001600160a01b031681565b610230610806565b600654600754600854600954600a54600b54600c54610308966001600160a01b031695949392919087565b604080516001600160a01b0390981688526020880196909652948601939093526060850191909152608084015260a083015260c082015260e001610145565b61034f6109d0565b604051610145919081516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b610138610a67565b6102306103bf366004610efd565b610b32565b60045460609060008167ffffffffffffffff8111156103e5576103e5610e8d565b60405190808252806020026020018201604052801561040e578160200160208202803683370190505b50905060005b8281101561048f5760006004828154811061043157610431610fd9565b9060005260206000200160009054906101000a90046001600160a01b031690508083838151811061046457610464610fd9565b6001600160a01b039092166020928302919091019091015250610488600182611005565b9050610414565b5092915050565b600281815481106104a657600080fd5b6000918252602090912001546001600160a01b0316905081565b600481815481106104a657600080fd5b6000546001600160a01b03163314806104f357506001546001600160a01b031633145b6105345760405162461bcd60e51b815260206004820152600d60248201526c1050d0d154d4d7d11153925151609a1b60448201526064015b60405180910390fd5b600754600090610544908361101d565b6006546040516323b872dd60e01b8152336004820152306024820152604481018390529192506001600160a01b0316906323b872dd906064016020604051808303816000875af115801561059c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c0919061103c565b506000546001600160a01b031633146105ee5781600660040160008282546105e89190611005565b90915550505b600a5460408051848152602081019290925281018290527f6213dc923ba9cebd39b57f99bbecb140a32b0af21fa6c41feee100e40b9179289060600160405180910390a15050565b60125462010000900460ff166106805760405162461bcd60e51b815260206004820152600f60248201526e1053149150511657d1539511549151608a1b604482015260640161052b565b6012805462ff000019811690915560ff16156106ae5760405162461bcd60e51b815260040161052b9061105e565b336000908152600f6020526040902054806106fc5760405162461bcd60e51b815260206004820152600e60248201526d2727afaa2920a729a0a1aa24a7a760911b604482015260640161052b565b336000908152600f60209081526040808320839055601190915281208054839290610728908490611005565b909155505060095460009061073d908361101d565b60065460405163a9059cbb60e01b8152336004820152602481018390529192506001600160a01b03169063a9059cbb906044016020604051808303816000875af115801561078f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b3919061103c565b506001604080518481526020810184905233917f59e315fd5d58892f063ba6918d15beaa1321d25d324b3388bf142e4b6e48538d910160405180910390a350506012805462ff0000191662010000179055565b60125462010000900460ff166108505760405162461bcd60e51b815260206004820152600f60248201526e1053149150511657d1539511549151608a1b604482015260640161052b565b6012805462ff000019811690915560ff161561087e5760405162461bcd60e51b815260040161052b9061105e565b336000908152600e602090815260408083206001810180549085905560109093529083208054919383926108b3908490611005565b9091555050806108f65760405162461bcd60e51b815260206004820152600e60248201526d2727afaa2920a729a0a1aa24a7a760911b604482015260640161052b565b600854600090610906908361101d565b60065460405163a9059cbb60e01b8152336004820152602481018390529192506001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610958573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097c919061103c565b506000604080518481526020810184905233917f59e315fd5d58892f063ba6918d15beaa1321d25d324b3388bf142e4b6e48538d910160405180910390a350506012805462ff000019166201000017905550565b610a196040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b506040805160e0810182526006546001600160a01b031681526007546020820152600854918101919091526009546060820152600a546080820152600b5460a0820152600c5460c082015290565b60025460609060008167ffffffffffffffff811115610a8857610a88610e8d565b604051908082528060200260200182016040528015610ab1578160200160208202803683370190505b50905060005b8281101561048f57600060028281548110610ad457610ad4610fd9565b9060005260206000200160009054906101000a90046001600160a01b0316905080838381518110610b0757610b07610fd9565b6001600160a01b039092166020928302919091019091015250610b2b600182611005565b9050610ab7565b601254610100900460ff1615610b5a5760405162461bcd60e51b815260040161052b9061105e565b6000546001600160a01b03163314610ba45760405162461bcd60e51b815260206004820152600d60248201526c1050d0d154d4d7d11153925151609a1b604482015260640161052b565b60005b8151811015610de5576000828281518110610bc457610bc4610fd9565b60200260200101516000015190506000838381518110610be657610be6610fd9565b6020908102919091018101518101516001600160a01b038085166000908152600e84526040808220600d8652818320938516835292909452929092205490925060ff1680610c82576001600160a01b038085166000908152600d602090815260408083209387168084529382528220805460ff191660019081179091558554908101865585835291200180546001600160a01b03191690911790555b600182018054906000610c9483611084565b90915550506001600160a01b0383166000908152600f60205260408120805491610cbd83611084565b90915550506001600160a01b03841660009081526003602052604090205460ff16610d48576001600160a01b0384166000818152600360205260408120805460ff191660019081179091556002805491820181559091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b03191690911790555b6001600160a01b03831660009081526005602052604090205460ff16610dce576001600160a01b0383166000818152600560205260408120805460ff191660019081179091556004805491820181559091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b03191690911790555b505050508080610ddd90611084565b915050610ba7565b5050565b6020808252825182820181905260009190848201906040850190845b81811015610e2a5783516001600160a01b031683529284019291840191600101610e05565b50909695505050505050565b80356001600160a01b0381168114610e4d57600080fd5b919050565b600060208284031215610e6457600080fd5b610e6d82610e36565b9392505050565b600060208284031215610e8657600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610ec657610ec6610e8d565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610ef557610ef5610e8d565b604052919050565b60006020808385031215610f1057600080fd5b823567ffffffffffffffff80821115610f2857600080fd5b818501915085601f830112610f3c57600080fd5b813581811115610f4e57610f4e610e8d565b610f5c848260051b01610ecc565b818152848101925060069190911b830184019087821115610f7c57600080fd5b928401925b81841015610fce5760408489031215610f9a5760008081fd5b610fa2610ea3565b610fab85610e36565b8152610fb8868601610e36565b8187015283526040939093019291840191610f81565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561101857611018610fef565b500190565b600081600019048311821515161561103757611037610fef565b500290565b60006020828403121561104e57600080fd5b81518015158114610e6d57600080fd5b6020808252600c908201526b10d310525357d4105554d15160a21b604082015260600190565b600060001982141561109857611098610fef565b506001019056fea26469706673582212206b00af9088db17ef3895e13d5c5b819f9df44130eaf5a0f524d748760926dab264736f6c634300080b0033";

export class IncentivePool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    req: {
      deployer: string;
      incentiveInfo: {
        incentiveToken: string;
        incentiveAmountPerTransaction: BigNumberish;
        affiliateAmountPerTransaction: BigNumberish;
        userAmountPerTransaction: BigNumberish;
        leftTransactionNum: BigNumberish;
        maxTransactionNumPerWallet: BigNumberish;
        endTimeStamp: BigNumberish;
      };
    },
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<IncentivePool> {
    return super.deploy(req, overrides || {}) as Promise<IncentivePool>;
  }
  getDeployTransaction(
    req: {
      deployer: string;
      incentiveInfo: {
        incentiveToken: string;
        incentiveAmountPerTransaction: BigNumberish;
        affiliateAmountPerTransaction: BigNumberish;
        userAmountPerTransaction: BigNumberish;
        leftTransactionNum: BigNumberish;
        maxTransactionNumPerWallet: BigNumberish;
        endTimeStamp: BigNumberish;
      };
    },
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(req, overrides || {});
  }
  attach(address: string): IncentivePool {
    return super.attach(address) as IncentivePool;
  }
  connect(signer: Signer): IncentivePool__factory {
    return super.connect(signer) as IncentivePool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncentivePoolInterface {
    return new utils.Interface(_abi) as IncentivePoolInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IncentivePool {
    return new Contract(address, _abi, signerOrProvider) as IncentivePool;
  }
}
