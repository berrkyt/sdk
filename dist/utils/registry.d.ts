import { Registry } from "@cosmjs/proto-signing";
import { Type } from "protobufjs";
export declare const TextProposal: Type;
export declare const ParameterChangeProposal: Type;
export declare const CreatePoolProposal: Type;
export declare const UpdatePoolProposal: Type;
export declare const PausePoolProposal: Type;
export declare const UnpausePoolProposal: Type;
export declare const createRegistry: () => Promise<Registry>;
