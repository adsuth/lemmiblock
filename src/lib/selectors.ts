import { YT_POPUP_SELECTOR } from "./definitions"

export function yt_getDismissButton(): HTMLElement | null
{
  return ( 
    document.querySelector( "#dismiss-button.style-scope.ytd-enforcement-message-view-model" )
  ) ?? null
} 

export function yt_getAdBlockPopup(): HTMLElement | null
{
  return ( 
    document.querySelector( YT_POPUP_SELECTOR )
  ) ?? null
} 

export function yt_getPlayButton(): HTMLElement | null
{
  return ( 
    document.querySelector( ".ytp-play-button.ytp-button" )
  ) ?? null
} 