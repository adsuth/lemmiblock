export const LOG_MSG_PREFIX  = "[Lemmiblock] :: "

export enum LogMessageType
{
  SUCCESS = "👍",
  NEUTRAL = "❕",
  ERROR   = "❌",
}

export const YT_POPUP_SELECTOR = "ytd-popup-container.style-scope.ytd-app:has( #dismiss-button.style-scope.ytd-enforcement-message-view-model )"
export const YT_INJECTED_STYLE_SELECTOR = "lemmiblock--yt--injected-style"

export const logFormatPrefix = ( type: LogMessageType ) => LOG_MSG_PREFIX + type