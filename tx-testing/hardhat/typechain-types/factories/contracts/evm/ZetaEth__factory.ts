/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ZetaEth, ZetaEthInterface } from "../../../contracts/evm/ZetaEth";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001b0d38038062001b0d833981810160405281019062000037919062000370565b6040518060400160405280600481526020017f5a657461000000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f5a455441000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb929190620002a9565b508060049080519060200190620000d4929190620002a9565b5050506200011633620000ec6200011d60201b60201c565b60ff16600a620000fd9190620004dc565b836200010a919062000619565b6200012660201b60201c565b5062000768565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000199576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019090620003d4565b60405180910390fd5b620001ad600083836200029f60201b60201c565b8060026000828254620001c1919062000424565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825462000218919062000424565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200027f9190620003f6565b60405180910390a36200029b60008383620002a460201b60201c565b5050565b505050565b505050565b828054620002b79062000684565b90600052602060002090601f016020900481019282620002db576000855562000327565b82601f10620002f657805160ff191683800117855562000327565b8280016001018555821562000327579182015b828111156200032657825182559160200191906001019062000309565b5b5090506200033691906200033a565b5090565b5b80821115620003555760008160009055506001016200033b565b5090565b6000815190506200036a816200074e565b92915050565b6000602082840312156200038357600080fd5b6000620003938482850162000359565b91505092915050565b6000620003ab601f8362000413565b9150620003b88262000725565b602082019050919050565b620003ce816200067a565b82525050565b60006020820190508181036000830152620003ef816200039c565b9050919050565b60006020820190506200040d6000830184620003c3565b92915050565b600082825260208201905092915050565b600062000431826200067a565b91506200043e836200067a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620004765762000475620006ba565b5b828201905092915050565b6000808291508390505b6001851115620004d357808604811115620004ab57620004aa620006ba565b5b6001851615620004bb5780820291505b8081029050620004cb8562000718565b94506200048b565b94509492505050565b6000620004e9826200067a565b9150620004f6836200067a565b9250620005257fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200052d565b905092915050565b6000826200053f576001905062000612565b816200054f576000905062000612565b81600181146200056857600281146200057357620005a9565b600191505062000612565b60ff841115620005885762000587620006ba565b5b8360020a915084821115620005a257620005a1620006ba565b5b5062000612565b5060208310610133831016604e8410600b8410161715620005e35782820a905083811115620005dd57620005dc620006ba565b5b62000612565b620005f2848484600162000481565b925090508184048111156200060c576200060b620006ba565b5b81810290505b9392505050565b600062000626826200067a565b915062000633836200067a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156200066f576200066e620006ba565b5b828202905092915050565b6000819050919050565b600060028204905060018216806200069d57607f821691505b60208210811415620006b457620006b3620006e9565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60008160011c9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b62000759816200067a565b81146200076557600080fd5b50565b61139580620007786000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610e35565b60405180910390f35b6100e660048036038101906100e19190610c83565b610308565b6040516100f39190610e1a565b60405180910390f35b610104610326565b6040516101119190610f37565b60405180910390f35b610134600480360381019061012f9190610c34565b610330565b6040516101419190610e1a565b60405180910390f35b610152610428565b60405161015f9190610f52565b60405180910390f35b610182600480360381019061017d9190610c83565b610431565b60405161018f9190610e1a565b60405180910390f35b6101b260048036038101906101ad9190610bcf565b6104dd565b6040516101bf9190610f37565b60405180910390f35b6101d0610525565b6040516101dd9190610e35565b60405180910390f35b61020060048036038101906101fb9190610c83565b6105b7565b60405161020d9190610e1a565b60405180910390f35b610230600480360381019061022b9190610c83565b6106a2565b60405161023d9190610e1a565b60405180910390f35b610260600480360381019061025b9190610bf8565b6106c0565b60405161026d9190610f37565b60405180910390f35b60606003805461028590611067565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190611067565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600061031c610315610747565b848461074f565b6001905092915050565b6000600254905090565b600061033d84848461091a565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610388610747565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610408576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ff90610eb7565b60405180910390fd5b61041c85610414610747565b85840361074f565b60019150509392505050565b60006012905090565b60006104d361043e610747565b84846001600061044c610747565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104ce9190610f89565b61074f565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461053490611067565b80601f016020809104026020016040519081016040528092919081815260200182805461056090611067565b80156105ad5780601f10610582576101008083540402835291602001916105ad565b820191906000526020600020905b81548152906001019060200180831161059057829003601f168201915b5050505050905090565b600080600160006105c6610747565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610683576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a90610f17565b60405180910390fd5b61069761068e610747565b8585840361074f565b600191505092915050565b60006106b66106af610747565b848461091a565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b690610ef7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561082f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082690610e77565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161090d9190610f37565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561098a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098190610ed7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f190610e57565b60405180910390fd5b610a05838383610b9b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8290610e97565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b1e9190610f89565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b829190610f37565b60405180910390a3610b95848484610ba0565b50505050565b505050565b505050565b600081359050610bb481611331565b92915050565b600081359050610bc981611348565b92915050565b600060208284031215610be157600080fd5b6000610bef84828501610ba5565b91505092915050565b60008060408385031215610c0b57600080fd5b6000610c1985828601610ba5565b9250506020610c2a85828601610ba5565b9150509250929050565b600080600060608486031215610c4957600080fd5b6000610c5786828701610ba5565b9350506020610c6886828701610ba5565b9250506040610c7986828701610bba565b9150509250925092565b60008060408385031215610c9657600080fd5b6000610ca485828601610ba5565b9250506020610cb585828601610bba565b9150509250929050565b610cc881610ff1565b82525050565b6000610cd982610f6d565b610ce38185610f78565b9350610cf3818560208601611034565b610cfc816110f7565b840191505092915050565b6000610d14602383610f78565b9150610d1f82611108565b604082019050919050565b6000610d37602283610f78565b9150610d4282611157565b604082019050919050565b6000610d5a602683610f78565b9150610d65826111a6565b604082019050919050565b6000610d7d602883610f78565b9150610d88826111f5565b604082019050919050565b6000610da0602583610f78565b9150610dab82611244565b604082019050919050565b6000610dc3602483610f78565b9150610dce82611293565b604082019050919050565b6000610de6602583610f78565b9150610df1826112e2565b604082019050919050565b610e058161101d565b82525050565b610e1481611027565b82525050565b6000602082019050610e2f6000830184610cbf565b92915050565b60006020820190508181036000830152610e4f8184610cce565b905092915050565b60006020820190508181036000830152610e7081610d07565b9050919050565b60006020820190508181036000830152610e9081610d2a565b9050919050565b60006020820190508181036000830152610eb081610d4d565b9050919050565b60006020820190508181036000830152610ed081610d70565b9050919050565b60006020820190508181036000830152610ef081610d93565b9050919050565b60006020820190508181036000830152610f1081610db6565b9050919050565b60006020820190508181036000830152610f3081610dd9565b9050919050565b6000602082019050610f4c6000830184610dfc565b92915050565b6000602082019050610f676000830184610e0b565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610f948261101d565b9150610f9f8361101d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fd457610fd3611099565b5b828201905092915050565b6000610fea82610ffd565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611052578082015181840152602081019050611037565b83811115611061576000848401525b50505050565b6000600282049050600182168061107f57607f821691505b60208210811415611093576110926110c8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61133a81610fdf565b811461134557600080fd5b50565b6113518161101d565b811461135c57600080fd5b5056fea26469706673582212202533becea40aae4bfa39b251f19a67a292d9f48622f546c22e001bca27bfefb464736f6c63430008040033";

type ZetaEthConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZetaEthConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZetaEth__factory extends ContractFactory {
  constructor(...args: ZetaEthConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZetaEth> {
    return super.deploy(initialSupply, overrides || {}) as Promise<ZetaEth>;
  }
  override getDeployTransaction(
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  override attach(address: string): ZetaEth {
    return super.attach(address) as ZetaEth;
  }
  override connect(signer: Signer): ZetaEth__factory {
    return super.connect(signer) as ZetaEth__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZetaEthInterface {
    return new utils.Interface(_abi) as ZetaEthInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZetaEth {
    return new Contract(address, _abi, signerOrProvider) as ZetaEth;
  }
}
