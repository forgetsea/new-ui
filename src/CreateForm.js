import React, { Component } from 'react'
import PropTypes from 'prop-types'


class OrderForm extends Component {

  constructor(props) {
    super(props)
    this.props.resetOrderFields()
    this.state = {
      captcha: generateCaptcha(),
      userCaptcha: '',
      errorText: '',
    }
  }

  componentDidMount() {
    const { match, updateOrderField } = this.props
    const productName = match.params.productName
    if (productName) {
      updateOrderField('productName', productName)
    }
  }

  changeCaptcha = () => this.setState({
    captcha: generateCaptcha(),
  })

  updateUserCaptcha = e => this.setState({
    userCaptcha: e.target.value,
  })

  handleSubmit = () => {
    const { saveOrder } = this.props
    const { captcha, userCaptcha } = this.state

    if (captcha.toUpperCase().localeCompare(userCaptcha.toUpperCase()) !== 0) {
      this.setState({
        errorText: 'Invalid verification code. Please try again.',
      })
    } else {
      this.setState({
        errorText: '',
      })
      saveOrder()
    }
  }

  renderValidate() {
    const { isValid, validMsg } = this.props
    if (!isValid) {
      return (
        <div className={style.error}>{validMsg}</div>
      )
    }
  }

  renderError() {
    const {
      isError,
      isErrorShow,
      errorText,
      hideOrderError,
      isSuccess,
      isSuccessShow,
      hideOrderSuccess,
      isValid,
      isValidShow,
      validMsg,
      hideIsValid,
    } = this.props

    let msg
    if (isError && isErrorShow) {
      msg = errorText
    }
    if (isSuccess && isSuccessShow) {
      msg = 'Product Request Success'
    }
    if (!isValid && isValidShow) {
      msg = validMsg
    }
    if ((isError && isErrorShow) || (isSuccess && isSuccessShow) || (!isValid && isValidShow)) {
      return (
        <div>
          <div
            className="modal fade show"
            style={{
              display: 'block',
            }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Product Request Result</h5>
                </div>
                <div className="modal-body">
                  <p>{msg}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      hideOrderError()
                      hideOrderSuccess()
                      hideIsValid()
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" />
        </div>
      )
    }
  }

  render() {
    const { order, updateOrderField } = this.props
    const { captcha, userCaptcha, errorText } = this.state

    return (
      <div className={style.root}>
        <div className={style.row}>
          <div className={style.fieldName}>
            <span className={style.required}>*</span>
            Product Name
          </div>
          <div className={style.valueContainer}>
            <input
              type="text"
              className="form-control"
              maxLength={32}
              value={order.productName}
              onChange={e => updateOrderField('productName', e.target.value)}
            />
          </div>
        </div>

        <div className={style.row}>
          <div className={style.fieldName}>
            <span className={style.required}>*</span>
            Email Address
          </div>
          <div className={style.valueContainer}>
            <textarea
              cols="30"
              rows="2"
              className="form-control"
              value={order.email}
              maxLength={500}
              onChange={e => updateOrderField('email', e.target.value)}
            />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.fieldName}>Quantity</div>
          <div className={style.valueContainer}>
            <input
              type="text"
              className="form-control"
              maxLength={32}
              value={order.weight}
              onChange={e => updateOrderField('weight', e.target.value)}
            />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.fieldName}>Full Name</div>
          <div className={style.valueContainer}>
            <input
              type="text"
              className="form-control"
              maxLength={32}
              value={order.fullName}
              onChange={e => updateOrderField('fullName', e.target.value)}
            />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.fieldName}>Phone</div>
          <div className={style.valueContainer}>
            <input
              type="text"
              className="form-control"
              maxLength={32}
              value={order.phone}
              onChange={e => updateOrderField('phone', e.target.value)}
            />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.fieldName}>Address</div>
          <div className={style.valueContainer}>
            <textarea
              cols="30"
              rows="5"
              className="form-control"
              value={order.address}
              maxLength={500}
              onChange={e => updateOrderField('address', e.target.value)}
            />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.fieldName}>Message</div>
          <div className={style.valueContainer}>
            <textarea
              cols="30"
              rows="5"
              className="form-control"
              value={order.message}
              maxLength={500}
              onChange={e => updateOrderField('message', e.target.value)}
            />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.fieldName}>
            <Captcha code={captcha} onClick={this.changeCaptcha} />
          </div>
          <div className={style.valueContainer}>
            <input
              type="text"
              className="form-control"
              maxLength="4"
              value={userCaptcha}
              onChange={this.updateUserCaptcha}
            />
            {errorText ? <div className={style.error}>{errorText}</div> : null}
          </div>
        </div>
        <div className={style.row}>
          <div className={style.fieldName} />
          <div className={style.valueContainer}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        {this.renderError()}
      </div>
    )
  }
}

OrderForm.defaultProps = {
  match: {
    params: {
      productName: '',
    },
  },
}

OrderForm.propTypes = {
  saveOrder: PropTypes.func.isRequired,
  updateOrderField: PropTypes.func.isRequired,
  hideOrderError: PropTypes.func.isRequired,
  hideOrderSuccess: PropTypes.func.isRequired,
  order: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  isError: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
  isErrorShow: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isSuccessShow: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  validMsg: PropTypes.string.isRequired,
  resetOrderFields: PropTypes.func.isRequired,

  isValidShow: PropTypes.bool.isRequired,
  hideIsValid: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productName: PropTypes.string,
    }),
  }),
}

export default OrderForm