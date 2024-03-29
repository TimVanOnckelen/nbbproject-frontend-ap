/* tslint:disable */
/* eslint-disable */
/**
 * NBB.Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {number}
     * @memberof Address
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'box'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'city'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'countryCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'number'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'postalCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'street'?: string | null;
}
/**
 * 
 * @export
 * @interface Enterprise
 */
export interface Enterprise {
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'referenceNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'depositDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'startDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'endDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'modelType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'depositType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'language'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'currency'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'enterpriseNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'enterpriseName'?: string | null;
    /**
     * 
     * @type {Address}
     * @memberof Enterprise
     */
    'address'?: Address;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'legalForm'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'legalSituation'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Enterprise
     */
    'fullFillLegalValidation'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'activityCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'generalAssemblyDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'accountingDataURL'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'dataVersion'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'improvementDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Enterprise
     */
    'correctedData'?: string | null;
    /**
     * 
     * @type {FinancialData}
     * @memberof Enterprise
     */
    'financialData'?: FinancialData;
}
/**
 * 
 * @export
 * @interface EnterpriseArrayViewModel
 */
export interface EnterpriseArrayViewModel {
    /**
     * 
     * @type {Array<string>}
     * @memberof EnterpriseArrayViewModel
     */
    'enterpriseNumbers'?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface FinancialData
 */
export interface FinancialData {
    /**
     * 
     * @type {number}
     * @memberof FinancialData
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialData
     */
    'year'?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialData
     */
    'revenue'?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialData
     */
    'profit'?: number;
}
/**
 * 
 * @export
 * @interface ProblemDetails
 */
export interface ProblemDetails {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'type'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'title'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProblemDetails
     */
    'status'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'detail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'instance'?: string | null;
}
/**
 * 
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    'tokenId'?: string | null;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'normalizedUserName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'normalizedEmail'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'emailConfirmed'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'passwordHash'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'securityStamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'concurrencyStamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'phoneNumber'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'phoneNumberConfirmed'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'twoFactorEnabled'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'lockoutEnd'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'lockoutEnabled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'accessFailedCount'?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'firstName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'lastName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'userName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'password'?: string | null;
}
/**
 * 
 * @export
 * @interface UserCreateViewModel
 */
export interface UserCreateViewModel {
    /**
     * 
     * @type {string}
     * @memberof UserCreateViewModel
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateViewModel
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateViewModel
     */
    'userName': string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateViewModel
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface UserLoginViewModel
 */
export interface UserLoginViewModel {
    /**
     * 
     * @type {string}
     * @memberof UserLoginViewModel
     */
    'userName': string;
    /**
     * 
     * @type {string}
     * @memberof UserLoginViewModel
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface UserUpdateViewModel
 */
export interface UserUpdateViewModel {
    /**
     * 
     * @type {string}
     * @memberof UserUpdateViewModel
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateViewModel
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateViewModel
     */
    'userName': string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateViewModel
     */
    'password': string;
}

/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {UserLoginViewModel} [userLoginViewModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAuthenticationPost: async (userLoginViewModel?: UserLoginViewModel, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Authentication`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userLoginViewModel, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {UserLoginViewModel} [userLoginViewModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiAuthenticationPost(userLoginViewModel?: UserLoginViewModel, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiAuthenticationPost(userLoginViewModel, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * 
         * @param {UserLoginViewModel} [userLoginViewModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAuthenticationPost(userLoginViewModel?: UserLoginViewModel, options?: any): AxiosPromise<Token> {
            return localVarFp.apiAuthenticationPost(userLoginViewModel, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * 
     * @param {UserLoginViewModel} [userLoginViewModel] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public apiAuthenticationPost(userLoginViewModel?: UserLoginViewModel, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).apiAuthenticationPost(userLoginViewModel, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * EnterpriseApi - axios parameter creator
 * @export
 */
export const EnterpriseApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEnterpriseGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Enterprise`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEnterpriseIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiEnterpriseIdGet', 'id', id)
            const localVarPath = `/api/Enterprise/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {EnterpriseArrayViewModel} [enterpriseArrayViewModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEnterprisePost: async (enterpriseArrayViewModel?: EnterpriseArrayViewModel, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Enterprise`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(enterpriseArrayViewModel, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EnterpriseApi - functional programming interface
 * @export
 */
export const EnterpriseApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EnterpriseApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEnterpriseGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Enterprise>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEnterpriseGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEnterpriseIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Enterprise>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEnterpriseIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {EnterpriseArrayViewModel} [enterpriseArrayViewModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEnterprisePost(enterpriseArrayViewModel?: EnterpriseArrayViewModel, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Enterprise>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEnterprisePost(enterpriseArrayViewModel, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EnterpriseApi - factory interface
 * @export
 */
export const EnterpriseApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EnterpriseApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEnterpriseGet(options?: any): AxiosPromise<Array<Enterprise>> {
            return localVarFp.apiEnterpriseGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEnterpriseIdGet(id: string, options?: any): AxiosPromise<Enterprise> {
            return localVarFp.apiEnterpriseIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {EnterpriseArrayViewModel} [enterpriseArrayViewModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEnterprisePost(enterpriseArrayViewModel?: EnterpriseArrayViewModel, options?: any): AxiosPromise<Array<Enterprise>> {
            return localVarFp.apiEnterprisePost(enterpriseArrayViewModel, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EnterpriseApi - object-oriented interface
 * @export
 * @class EnterpriseApi
 * @extends {BaseAPI}
 */
export class EnterpriseApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseApi
     */
    public apiEnterpriseGet(options?: AxiosRequestConfig) {
        return EnterpriseApiFp(this.configuration).apiEnterpriseGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseApi
     */
    public apiEnterpriseIdGet(id: string, options?: AxiosRequestConfig) {
        return EnterpriseApiFp(this.configuration).apiEnterpriseIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {EnterpriseArrayViewModel} [enterpriseArrayViewModel] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseApi
     */
    public apiEnterprisePost(enterpriseArrayViewModel?: EnterpriseArrayViewModel, options?: AxiosRequestConfig) {
        return EnterpriseApiFp(this.configuration).apiEnterprisePost(enterpriseArrayViewModel, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {UserCreateViewModel} [userCreateViewModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserPost: async (userCreateViewModel?: UserCreateViewModel, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/User`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userCreateViewModel, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UserUpdateViewModel} [userUpdateViewModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserPut: async (userUpdateViewModel?: UserUpdateViewModel, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/User`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userUpdateViewModel, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} userName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserUserNameDelete: async (userName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userName' is not null or undefined
            assertParamExists('apiUserUserNameDelete', 'userName', userName)
            const localVarPath = `/api/User/{userName}`
                .replace(`{${"userName"}}`, encodeURIComponent(String(userName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} userName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserUserNameGet: async (userName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userName' is not null or undefined
            assertParamExists('apiUserUserNameGet', 'userName', userName)
            const localVarPath = `/api/User/{userName}`
                .replace(`{${"userName"}}`, encodeURIComponent(String(userName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {UserCreateViewModel} [userCreateViewModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserPost(userCreateViewModel?: UserCreateViewModel, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUserPost(userCreateViewModel, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {UserUpdateViewModel} [userUpdateViewModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserPut(userUpdateViewModel?: UserUpdateViewModel, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUserPut(userUpdateViewModel, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} userName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserUserNameDelete(userName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUserUserNameDelete(userName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} userName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserUserNameGet(userName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUserUserNameGet(userName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * 
         * @param {UserCreateViewModel} [userCreateViewModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserPost(userCreateViewModel?: UserCreateViewModel, options?: any): AxiosPromise<User> {
            return localVarFp.apiUserPost(userCreateViewModel, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UserUpdateViewModel} [userUpdateViewModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserPut(userUpdateViewModel?: UserUpdateViewModel, options?: any): AxiosPromise<User> {
            return localVarFp.apiUserPut(userUpdateViewModel, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} userName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserUserNameDelete(userName: string, options?: any): AxiosPromise<User> {
            return localVarFp.apiUserUserNameDelete(userName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} userName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserUserNameGet(userName: string, options?: any): AxiosPromise<User> {
            return localVarFp.apiUserUserNameGet(userName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * 
     * @param {UserCreateViewModel} [userCreateViewModel] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public apiUserPost(userCreateViewModel?: UserCreateViewModel, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).apiUserPost(userCreateViewModel, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {UserUpdateViewModel} [userUpdateViewModel] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public apiUserPut(userUpdateViewModel?: UserUpdateViewModel, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).apiUserPut(userUpdateViewModel, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} userName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public apiUserUserNameDelete(userName: string, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).apiUserUserNameDelete(userName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} userName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public apiUserUserNameGet(userName: string, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).apiUserUserNameGet(userName, options).then((request) => request(this.axios, this.basePath));
    }
}


