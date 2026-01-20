import React, { Component } from 'react';

class ClipboardDemo extends Component {
  handleCopy() { console.log("Copied!"); }
  handleCut() { console.log("Cut!"); }
  handlePaste() { console.log("Pasted!"); }

  render() {
    return (
      <div>
        <h3>Clipboard Demo</h3>

        <input
          defaultValue="Copy or cut this"
          onCopy={this.handleCopy}
          onCut={this.handleCut}
          onPaste={this.handlePaste}
        />

        <br /><br />

        <input
          placeholder="Paste here"
          onCopy={this.handleCopy}
          onCut={this.handleCut}
          onPaste={this.handlePaste}
        />
      </div>
    );
  }
}

export default ClipboardDemo;
