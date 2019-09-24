/** @module */
/**
 * 错误帮助类
 * @extends Error
 */
declare class ErrorHelper extends Error {
    _errorCode: number;
    _errorMessage: string;
    _errorStorage: {};
    constructor(errorMessage: string, errorCode?: number, errorStorage?: {}, err?: any);
}
export default ErrorHelper;
declare const INTERNAL_ERROR = 1;
declare const INTERNAL_ERROR_MESSAGE = "internal error";
export { INTERNAL_ERROR, INTERNAL_ERROR_MESSAGE };
