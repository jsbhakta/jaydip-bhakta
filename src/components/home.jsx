import React, { Component } from "react";
import PropTypes from "prop-types";

class Home extends Component {
  _renderHomePage() {
    const { isFetching, autoLogout } = this.props;

    return (
      <main className="background-img">
        <div className="row login-box-container">
          <h4>
            <img
              src={require("./img/logo/sumit-logo-transparent.png")}
              width="30%"
              height="30%"
              />
          </h4>
          {autoLogout && <div className="alert alert-danger">
            Same login occured from another browser.
          </div>
          }
          <div className="col-xs-3 login-box" style={{margin: "0% -12% 0% 12%"}}>
            <form
              onSubmit={this.handleOnSubmit}>
              <div className="form-group ">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                  onChange={this.handleOnChange}
                  required="required" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={this.handleOnChange}
                  required="required" />
              </div>
              <Link to={"forgot-password"} className="pull-left">Forgot Password?</Link>
              <button className="pull-right btn btn-primary" disabled={isFetching}>
                {isFetching ? "Validating..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
        <div className="register-btn col-xs-3" >
          <button
            className="btn btn-danger pull-right"
            onClick={() => this.getRegisterForm()}
          >Register</button>
        </div>
      </main>
    );
  }

  render() {
    const {
      isLoggedIn
    } = this.props;

    return (
      <div className="container Home" key="theLoginFormContainer">
        {isLoggedIn ? this._renderLoading() : this._renderLoginForm()}
      </div>
    );
  }
}

Home.displayName = "Home";

Home.propTypes = {
  isFetching: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  autoLogout: PropTypes.bool,
  onSubmit: PropTypes.func
};

Home.defaultProps = {
  isFetching: false,
  isLoggedIn: false,
  autoLogout: false
};

const mapStateToProps = state => {
  const { session } = state;

  return {
    isFetching: session.isFetching,
    isLoggedIn: session.isLoggedIn,
    autoLogout: session.autoLogout
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => {
    dispatch(requestLogin(username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
