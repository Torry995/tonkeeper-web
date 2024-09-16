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
import type { GaslessConfigGasJettonsInner } from './GaslessConfigGasJettonsInner';
import {
    GaslessConfigGasJettonsInnerFromJSON,
    GaslessConfigGasJettonsInnerFromJSONTyped,
    GaslessConfigGasJettonsInnerToJSON,
    GaslessConfigGasJettonsInnerToJSONTyped,
} from './GaslessConfigGasJettonsInner';

/**
 * 
 * @export
 * @interface GaslessConfig
 */
export interface GaslessConfig {
    /**
     * sending excess to this address decreases the commission of a gasless transfer
     * @type {string}
     * @memberof GaslessConfig
     */
    relayAddress: string;
    /**
     * list of jettons, any of them can be used to pay for gas
     * @type {Array<GaslessConfigGasJettonsInner>}
     * @memberof GaslessConfig
     */
    gasJettons: Array<GaslessConfigGasJettonsInner>;
}

/**
 * Check if a given object implements the GaslessConfig interface.
 */
export function instanceOfGaslessConfig(value: object): value is GaslessConfig {
    if (!('relayAddress' in value) || value['relayAddress'] === undefined) return false;
    if (!('gasJettons' in value) || value['gasJettons'] === undefined) return false;
    return true;
}

export function GaslessConfigFromJSON(json: any): GaslessConfig {
    return GaslessConfigFromJSONTyped(json, false);
}

export function GaslessConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): GaslessConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'relayAddress': json['relay_address'],
        'gasJettons': ((json['gas_jettons'] as Array<any>).map(GaslessConfigGasJettonsInnerFromJSON)),
    };
}

  export function GaslessConfigToJSON(json: any): GaslessConfig {
      return GaslessConfigToJSONTyped(json, false);
  }

  export function GaslessConfigToJSONTyped(value?: GaslessConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'relay_address': value['relayAddress'],
        'gas_jettons': ((value['gasJettons'] as Array<any>).map(GaslessConfigGasJettonsInnerToJSON)),
    };
}

