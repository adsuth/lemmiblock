import LOGO from "../../assets/128.png"
const GITHUB_REPO_LINK = "https://github.com/adsuth/lemmiblock"

function Popup() {
  return (
    <>
    <header className="header">
      <div>
        <h1>
          LEMMIBLOCK
        </h1>
        <h2>
          v{ chrome.runtime.getManifest().version }
        </h2>
      </div>

      <div className="header--logo-container">
        <img className="header--logo" src={ LOGO } alt="Lemmiblock's logo" />
      </div>
    </header>

    <div id="popup--no-content-text">
      <p>
        Hi! There are currently no settings.
      </p>
      <p>
        If you have any suggestions for improvements, or have a bug to report, please make a new issue on the <a target="_blank" href={GITHUB_REPO_LINK}>GitHub Repository</a> 
      </p>
      <p>
        Thank you!
      </p>
    </div>
    </>
  )
}

export default Popup
