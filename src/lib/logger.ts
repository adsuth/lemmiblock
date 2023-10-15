import { LogMessageType, logFormatPrefix } from "./definitions";

export function logToUser( type: LogMessageType = LogMessageType.NEUTRAL, ...data: any[] )
{
  console.info(
    logFormatPrefix( type ), ...data
  )
}