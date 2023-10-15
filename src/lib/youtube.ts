import { LogMessageType, YT_INJECTED_STYLE_SELECTOR, YT_POPUP_SELECTOR } from "./definitions";
import { logToUser } from "./logger";
import { yt_getAdBlockPopup, yt_getPlayButton } from "./selectors";

export function yt_playVideo()
{
  const playButton = yt_getPlayButton()

  if ( playButton === null ) return

  const isPaused = playButton.getAttribute( "data-title-no-tooltip" ) === "Play"
  
  if ( !isPaused ) return

  playButton.click()

}

export function yt_checkToBypass()
{
  const adBlockPopup = yt_getAdBlockPopup()

  yt_injectCss()

  if ( adBlockPopup )
  {
    logToUser( LogMessageType.SUCCESS, "Bypassed YouTube ad-block deterrent!" )
    adBlockPopup.remove()
    yt_playVideo()
  }
}

export function yt_injectCss()
{
  // check if tag is already there, if so do nothing
  if ( document.getElementById( YT_INJECTED_STYLE_SELECTOR ) !== null ) return
  
  const styleTag = document.createElement( "style" )
  styleTag.innerHTML = `${YT_POPUP_SELECTOR} { display: none !important; }`
  styleTag.id = YT_INJECTED_STYLE_SELECTOR

  logToUser( LogMessageType.NEUTRAL, "Injected style to hide popup" )
  
  document.head.appendChild( styleTag )
}