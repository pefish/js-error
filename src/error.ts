/** @module */

/**
 * 错误帮助类
 * @extends Error
 */
class ErrorHelper extends Error {
  _errorCode: number
  _errorMessage: string
  _errorStorage: {}

  constructor (errorMessage: string, errorCode: number = 0, errorStorage: {} = null, err: any = null) {
    // 抛出ErrorHelper，但catch到的是Error对象
    err && console.error('ERROR: ', err.message)
    super(JSON.stringify({
      errorMessage,
      errorCode,
      errorStorage
    }))
    this._errorCode = errorCode
    this._errorMessage = errorMessage
    errorStorage && (this._errorStorage = errorStorage)
  }
}

export default ErrorHelper
