import fromPairs from "lodash/fromPairs"
import toPairs from "lodash/toPairs"
export interface ErrorMessage {
  message: string
  index: number
}

export class ErrorHandler {
  errorMap: Map<string, ErrorMessage[]>
  isError: boolean = false
  constructor() {
    this.errorMap = new Map()
  }

  set(key: string, value: ErrorMessage[]) {
    this.errorMap.set(key, value)
  }

  get(key?: string): ErrorMessage[] | { [key: string]: ErrorMessage[] } {
    if (key) {
      return this.errorMap.get(key)
    }
    return fromPairs(toPairs(this.errorMap))
  }

  hasError() {
    for (let [, value] of this.errorMap) {
      if (value.length > 0) {
        this.isError = true
        break
      }
    }
    return this.isError
  }
}
