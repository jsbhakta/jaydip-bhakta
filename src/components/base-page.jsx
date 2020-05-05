import React from "react";
import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";

// Aliased to avoid confusion with props.classNames
import buildClassName from "classnames";

const BasePage = props => {
    const buttons = props.buttons ? props.buttons.map(btn => {
      const { children, ...btnProps } = btn;

      btnProps.type = btnProps.type || "button";
      btnProps.className = buildClassName(btnProps.className);

      // ESLint rule disabled as workaround for bug in eslint-plugin-react
      // See github.com/yannickcr/eslint-plugin-react/issues/613
      // eslint-disable-next-line react/jsx-key
      return <button {...btnProps}>{children}</button>;
    }).reverse() : null;

    const _renderHelpLink = () => {
      const { key, url, align } = props.helpOptions;
      return (
        <a
          key={key}
          className={`align-${align} icon-help`}
          href={url}
          target="_blank">
          Help
        </a>);
    };

    const hasLink = !isEmpty(props.helpOptions) && !isEmpty(props.helpOptions.url);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6">
            <h1 className="page-header">{props.pageTitle}</h1>
          </div>
          <div className={`col-xs-${hasLink ? "3" : "6"} pull-right`}>{buttons}</div>
            {hasLink && <div className="col-xs-3 BasePage-help-icon">
              {_renderHelpLink()} <span className="glyphicon glyphicon-question-sign text-info"/>
            </div>}
          </div>
        <div className="row">{props.children}</div>
      </div>
    );
};

BasePage.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  buttons: PropTypes.array,
  helpOptions: PropTypes.object
};

export default BasePage;
