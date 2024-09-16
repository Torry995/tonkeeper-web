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
/**
 * 
 * @export
 * @interface Refund
 */
export interface Refund {
    /**
     * 
     * @type {string}
     * @memberof Refund
     */
    type: RefundTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Refund
     */
    origin: string;
}


/**
 * @export
 */
export const RefundTypeEnum = {
    DnsTon: 'DNS.ton',
    DnsTg: 'DNS.tg',
    GetGems: 'GetGems'
} as const;
export type RefundTypeEnum = typeof RefundTypeEnum[keyof typeof RefundTypeEnum];


/**
 * Check if a given object implements the Refund interface.
 */
export function instanceOfRefund(value: object): value is Refund {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('origin' in value) || value['origin'] === undefined) return false;
    return true;
}

export function RefundFromJSON(json: any): Refund {
    return RefundFromJSONTyped(json, false);
}

export function RefundFromJSONTyped(json: any, ignoreDiscriminator: boolean): Refund {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'origin': json['origin'],
    };
}

  export function RefundToJSON(json: any): Refund {
      return RefundToJSONTyped(json, false);
  }

  export function RefundToJSONTyped(value?: Refund | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'origin': value['origin'],
    };
}

