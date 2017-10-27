import React, { Component } from 'react';

import stylesheet from './FileHandler.scss';

export const EnhanceWithFileInput = (OriginalComponent) =>
  class extends Component {
    static defaultProps = {
      accept: '.json',
    }

    onClick = () => {
      this.fileInput.click();
    };

    onImportFile = e => {
      const { onChange, onBlur } = this.props;

      onChange(e.target.files[0]);

      // HACK! Will be fixed with password manager autofill updates.
      setTimeout(() => {
        onBlur();
      }, 10);
    };

    render() {
      const { accept, ...restProps } = this.props;
      return (
        <span>
          <OriginalComponent onClick={this.onClick} {...restProps} />
          <input
            type="file"
            className={stylesheet.fileInput}
            onChange={this.onImportFile}
            ref={node => { this.fileInput = node; }}
            accept={accept}
          />
        </span>
      );
    }
  };
