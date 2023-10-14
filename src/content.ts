import { LogMessageType } from "./lib/definitions"
import { logToUser } from "./lib/logger"
import { yt_getDismissButton } from "./lib/selectors"

let INTERVAL_LOW_PRIORITY = null 
let INTERVAL_MID_PRIORITY = null 
let INTERVAL_BIG_PRIORITY = null 

const lowIntervalAmount   = 1000
const midIntervalAmount   = 500
const bigIntervalAmount   = 10

function intervalCallbackMid()
{
  logToUser( LogMessageType.SUCCESS, "This was a triumph!" )
  logToUser( LogMessageType.NEUTRAL, "This was a neutral action" )

  const btn_dismiss = yt_getDismissButton() 
  if ( btn_dismiss )
  {
    btn_dismiss.click()
  }

}

function recreateIntervals()
{
  // INTERVAL_LOW_PRIORITY = setInterval( intervalCallbackMid, lowIntervalAmount )
  INTERVAL_MID_PRIORITY = setInterval( intervalCallbackMid, midIntervalAmount )
  // INTERVAL_BIG_PRIORITY = setInterval( intervalCallbackMid, bigIntervalAmount )
}

/**
 * Main entrypoint
 */
function main()
{
  recreateIntervals()
}

main()

