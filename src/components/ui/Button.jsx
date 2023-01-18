import PropTypes from 'prop-types'

export function Button(props) {
  return (
    <>
      <button {...props} style={{color: 'black'}} onClick={props.click}>{props.children}</button>
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string
}