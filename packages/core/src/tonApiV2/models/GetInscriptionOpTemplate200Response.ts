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
 * @interface GetInscriptionOpTemplate200Response
 */
export interface GetInscriptionOpTemplate200Response {
    /**
     * 
     * @type {string}
     * @memberof GetInscriptionOpTemplate200Response
     */
    comment: string;
    /**
     * 
     * @type {string}
     * @memberof GetInscriptionOpTemplate200Response
     */
    destination: string;
}

/**
 * Check if a given object implements the GetInscriptionOpTemplate200Response interface.
 */
export function instanceOfGetInscriptionOpTemplate200Response(value: object): value is GetInscriptionOpTemplate200Response {
    if (!('comment' in value) || value['comment'] === undefined) return false;
    if (!('destination' in value) || value['destination'] === undefined) return false;
    return true;
}

export function GetInscriptionOpTemplate200ResponseFromJSON(json: any): GetInscriptionOpTemplate200Response {
    return GetInscriptionOpTemplate200ResponseFromJSONTyped(json, false);
}

export function GetInscriptionOpTemplate200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetInscriptionOpTemplate200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'comment': json['comment'],
        'destination': json['destination'],
    };
}

  export function GetInscriptionOpTemplate200ResponseToJSON(json: any): GetInscriptionOpTemplate200Response {
      return GetInscriptionOpTemplate200ResponseToJSONTyped(json, false);
  }

  export function GetInscriptionOpTemplate200ResponseToJSONTyped(value?: GetInscriptionOpTemplate200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'comment': value['comment'],
        'destination': value['destination'],
    };
}

