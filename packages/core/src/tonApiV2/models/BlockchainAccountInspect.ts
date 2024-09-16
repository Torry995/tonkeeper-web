/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { BlockchainAccountInspectMethodsInner } from './BlockchainAccountInspectMethodsInner';
import {
    BlockchainAccountInspectMethodsInnerFromJSON,
    BlockchainAccountInspectMethodsInnerFromJSONTyped,
    BlockchainAccountInspectMethodsInnerToJSON,
    BlockchainAccountInspectMethodsInnerToJSONTyped,
} from './BlockchainAccountInspectMethodsInner';

/**
 * 
 * @export
 * @interface BlockchainAccountInspect
 */
export interface BlockchainAccountInspect {
    /**
     * 
     * @type {string}
     * @memberof BlockchainAccountInspect
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof BlockchainAccountInspect
     */
    codeHash: string;
    /**
     * 
     * @type {Array<BlockchainAccountInspectMethodsInner>}
     * @memberof BlockchainAccountInspect
     */
    methods: Array<BlockchainAccountInspectMethodsInner>;
    /**
     * 
     * @type {string}
     * @memberof BlockchainAccountInspect
     */
    compiler?: BlockchainAccountInspectCompilerEnum;
}


/**
 * @export
 */
export const BlockchainAccountInspectCompilerEnum = {
    Func: 'func'
} as const;
export type BlockchainAccountInspectCompilerEnum = typeof BlockchainAccountInspectCompilerEnum[keyof typeof BlockchainAccountInspectCompilerEnum];


/**
 * Check if a given object implements the BlockchainAccountInspect interface.
 */
export function instanceOfBlockchainAccountInspect(value: object): value is BlockchainAccountInspect {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('codeHash' in value) || value['codeHash'] === undefined) return false;
    if (!('methods' in value) || value['methods'] === undefined) return false;
    return true;
}

export function BlockchainAccountInspectFromJSON(json: any): BlockchainAccountInspect {
    return BlockchainAccountInspectFromJSONTyped(json, false);
}

export function BlockchainAccountInspectFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainAccountInspect {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'codeHash': json['code_hash'],
        'methods': ((json['methods'] as Array<any>).map(BlockchainAccountInspectMethodsInnerFromJSON)),
        'compiler': json['compiler'] == null ? undefined : json['compiler'],
    };
}

  export function BlockchainAccountInspectToJSON(json: any): BlockchainAccountInspect {
      return BlockchainAccountInspectToJSONTyped(json, false);
  }

  export function BlockchainAccountInspectToJSONTyped(value?: BlockchainAccountInspect | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'code_hash': value['codeHash'],
        'methods': ((value['methods'] as Array<any>).map(BlockchainAccountInspectMethodsInnerToJSON)),
        'compiler': value['compiler'],
    };
}

