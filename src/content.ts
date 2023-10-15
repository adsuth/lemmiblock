import { yt_checkToBypass } from "./lib/youtube"

let INTERVAL_LOW_PRIORITY = null 
let INTERVAL_MID_PRIORITY = null 
let INTERVAL_TOP_PRIORITY = null 

const lowIntervalAmount   = 1000
const midIntervalAmount   = 500
const topIntervalAmount   = 10

const S = {
  page_dismissed_on: null as string | null
}

function intervalCallbackMid()
{

}

function intervalCallbackTop()
{
  yt_checkToBypass()
}

function recreateIntervals()
{
  // INTERVAL_LOW_PRIORITY = setInterval( intervalCallbackLow, lowIntervalAmount )
  // INTERVAL_MID_PRIORITY = setInterval( intervalCallbackMid, midIntervalAmount )
  INTERVAL_TOP_PRIORITY = setInterval( intervalCallbackTop, topIntervalAmount )
}

/**
 * Main entrypoint
 */
function main()
{
  recreateIntervals()
}

main()

