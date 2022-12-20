import './Spinner.css'

export const Spinner = ({loadingText}) => {
  return (
    <div className="spinner-box">
      <div className="three-quarter-spinner"></div>
      <p>{loadingText}</p>
    </div>
  )
}
