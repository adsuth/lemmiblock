
export const LOG_MSG_PREFIX  = "[Lemmiblock] :: "

export enum LogMessageType
{
  SUCCESS = "👍",
  NEUTRAL = "❕",
  ERROR   = "❌",
}

export const logFormatPrefix = ( type: LogMessageType ) => LOG_MSG_PREFIX + type