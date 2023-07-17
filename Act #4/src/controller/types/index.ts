/**
 * Basic JSON response for Controllers
 */
export type BasicResponse = {
    message: string
}
/**
 * Basic JSON response for Controllers
 */
export type BasicGoodbyeResponse  = {
    message: string,
    Date: Date
}

/**
 * Error JSON response for Controllers
 */
export type ErrorResponse = {
    error: string,
    message: string
}