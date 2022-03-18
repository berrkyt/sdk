"use strict";
exports.__esModule = true;
exports.KYVE_WALLET_OPTIONS = exports.KYVE_KEPLR_CONFIG = exports.KYVE_ENDPOINTS = exports.KYVE_DEFAULT_FEE = exports.KYVE_DECIMALS = void 0;
var proto_signing_1 = require("@cosmjs/proto-signing");
var cosmos_1 = require("@keplr-wallet/cosmos");
exports.KYVE_DECIMALS = 9;
exports.KYVE_DEFAULT_FEE = {
    amount: (0, proto_signing_1.coins)(0, "tkyve"),
    gas: "200000"
};
exports.KYVE_ENDPOINTS = {
    alpha: {
        rpc: "https://rpc.alpha.kyve.network",
        rest: "https://api.alpha.kyve.network"
    },
    beta: {
        rpc: "https://rpc.beta.kyve.network",
        rest: "https://api.beta.kyve.network"
    },
    local: {
        rpc: "http://localhost:26657",
        rest: "http://localhost:1317"
    }
};
exports.KYVE_KEPLR_CONFIG = {
    rpc: "",
    rest: "",
    chainId: "",
    chainName: "",
    stakeCurrency: {
        coinDenom: "KYVE",
        coinMinimalDenom: "tkyve",
        coinDecimals: exports.KYVE_DECIMALS
    },
    bip44: {
        coinType: 118
    },
    bech32Config: cosmos_1.Bech32Address.defaultBech32Config("kyve"),
    currencies: [
        {
            coinDenom: "KYVE",
            coinMinimalDenom: "tkyve",
            coinDecimals: exports.KYVE_DECIMALS
        },
    ],
    feeCurrencies: [
        {
            coinDenom: "KYVE",
            coinMinimalDenom: "tkyve",
            coinDecimals: exports.KYVE_DECIMALS
        },
    ],
    coinType: 118,
    gasPriceStep: { low: 0, average: 0, high: 0 },
    features: ["stargate", "no-legacy-stdTx", "ibc-transfer", "ibc-go"]
};
exports.KYVE_WALLET_OPTIONS = {
    prefix: "kyve"
};
