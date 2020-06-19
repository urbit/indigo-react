import {
  Controlled as CodeMirror,
  IControlledCodeMirror
} from "react-codemirror2";
import styled from "styled-components";
import "codemirror/mode/markdown/markdown";

type Props = IControlledCodeMirror;

const MarkdownEditor = styled(CodeMirror)<Props>`
  .CodeMirror {
    font-family: monospace;
    height: 300px;
    color: black;
    direction: ltr;
  }

  .CodeMirror-lines {
    padding: 4px 0;
  }
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    padding: 0 4px;
  }

  .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
    background-color: white;
  }

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {}
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker { color: black; }
  .CodeMirror-guttermarker-subtle { color: #999; }


  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    z-index: 1;
  }
  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }
  @-moz-keyframes blink {
    0% {}
    50% { background-color: transparent; }
    100% {}
  }
  @-webkit-keyframes blink {
    0% {}
    50% { background-color: transparent; }
    100% {}
  }
  @keyframes blink {
    0% {}
    50% { background-color: transparent; }
    100% {}
  }

  .CodeMirror-overwrite .CodeMirror-cursor {}

  .cm-tab { display: inline-block; text-decoration: inherit; }

  .CodeMirror-rulers {
    position: absolute;
    left: 0; right: 0; top: -50px; bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0; bottom: 0;
    position: absolute;
  }

  .cm-s-default .cm-header {color: blue;}
  .cm-s-default .cm-quote {color: #090;}
  .cm-negative {color: #d44;}
  .cm-positive {color: #292;}
  .cm-header, .cm-strong {font-weight: bold;}
  .cm-em {font-style: italic;}
  .cm-link {text-decoration: underline;}
  .cm-strikethrough {text-decoration: line-through;}

  .cm-s-default .cm-keyword {color: #708;}
  .cm-s-default .cm-atom {color: #219;}
  .cm-s-default .cm-number {color: #164;}
  .cm-s-default .cm-def {color: #00f;}
  .cm-s-default .cm-variable,
  .cm-s-default .cm-punctuation,
  .cm-s-default .cm-property,
  .cm-s-default .cm-operator {}
  .cm-s-default .cm-variable-2 {color: #05a;}
  .cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}
  .cm-s-default .cm-comment {color: #a50;}
  .cm-s-default .cm-string {color: #a11;}
  .cm-s-default .cm-string-2 {color: #f50;}
  .cm-s-default .cm-meta {color: #555;}
  .cm-s-default .cm-qualifier {color: #555;}
  .cm-s-default .cm-builtin {color: #30a;}
  .cm-s-default .cm-bracket {color: #997;}
  .cm-s-default .cm-tag {color: #170;}
  .cm-s-default .cm-attribute {color: #00c;}
  .cm-s-default .cm-hr {color: #999;}
  .cm-s-default .cm-link {color: #00c;}

  .cm-s-default .cm-error {color: #f00;}
  .cm-invalidchar {color: #f00;}

  .CodeMirror-composing { border-bottom: 2px solid; }

  div.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}
  div.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}
  .CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }
  .CodeMirror-activeline-background {background: #e8f2ff;}


  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: white;
  }

  .CodeMirror-scroll {
    overflow: scroll !important;
    margin-bottom: -30px; margin-right: -30px;
    padding-bottom: 30px;
    height: 100%;
    outline: none;
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 30px solid transparent;
  }

  .CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 6;
    display: none;
  }
  .CodeMirror-vscrollbar {
    right: 0; top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0; left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0; bottom: 0;
  }
  .CodeMirror-gutter-filler {
    left: 0; bottom: 0;
  }

  .CodeMirror-gutters {
    position: absolute; left: 0; top: 0;
    min-height: 100%;
    z-index: 3;
  }
  .CodeMirror-gutter {
    white-space: normal;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    margin-bottom: -30px;
  }
  .CodeMirror-gutter-wrapper {
    position: absolute;
    z-index: 4;
    background: none !important;
    border: none !important;
  }
  .CodeMirror-gutter-background {
    position: absolute;
    top: 0; bottom: 0;
    z-index: 4;
  }
  .CodeMirror-gutter-elt {
    position: absolute;
    cursor: default;
    z-index: 4;
  }
  .CodeMirror-gutter-wrapper ::selection { background-color: transparent }
  .CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px;
  }
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: inherit;
    color: inherit;
    z-index: 2;
    position: relative;
    overflow: visible;
    -webkit-tap-blue-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }
  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    padding: 0.1px;
  }

  .CodeMirror-widget {}

  .CodeMirror-rtl pre { direction: rtl; }

  .CodeMirror-code {
    outline: none;
  }

  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
  }
  .CodeMirror-measure pre { position: static; }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    z-index: 3;
  }
  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected { background: #d9d9d9; }
  .CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }
  .CodeMirror-crosshair { cursor: crosshair; }
  .CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }
  .CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }

  .cm-searching {
    background-color: #ffa;
    background-color: rgba(255, 255, 0, .4);
  }

  .cm-force-border { padding-right: .1px; }

  @media print {
    .CodeMirror div.CodeMirror-cursors {
      visibility: hidden;
    }
  }

  .cm-tab-wrap-hack:after { content: ''; }

  span.CodeMirror-selectedtext { background: none; }

  padding: 12px;
  height: 100% !important;
  width: 100% !important;
  cursor: text;
  font-size: 12px;
  line-height: 20px;

  * {
    font-family: 'Source Code Pro';
  }

  .CodeMirror {
    background: ${p => p.theme.colors.white} !important;
    color: ${p => p.theme.colors.black} !important;
    height: 100%;
  }

  .CodeMirror-selected { background:${p => p.theme.colors.gray} !important; }

  .cm-s-u span { font-family: "Source Code Pro"}
  .cm-s-u span.cm-meta { color: ${p => p.theme.colors.gray}; }
  .cm-s-u span.cm-number { color: ${p => p.theme.colors.gray}; }
  .cm-s-u span.cm-keyword { line-height: 1em; font-weight: bold; color: ${p =>
    p.theme.colors.gray}; }
  .cm-s-u span.cm-atom { font-weight: bold; color: ${p =>
    p.theme.colors.gray}; }
  .cm-s-u span.cm-def { color: ${p => p.theme.colors.black}; }
  .cm-s-u span.cm-variable { color: ${p => p.theme.colors.black}; }
  .cm-s-u span.cm-variable-2 { color: ${p => p.theme.colors.black}; }
  .cm-s-u span.cm-variable-3, .cm-s-tlon span.cm-type { color: ${p =>
    p.theme.colors.black}; }
  .cm-s-u span.cm-property { color: ${p => p.theme.colors.black}; }
  .cm-s-u span.cm-operator { color: ${p => p.theme.colors.black}; }
  .cm-s-u span.cm-comment { color: ${p =>
    p.theme.colors.black}; background-color: ${p =>
  p.theme.colors.gray}; padding: 2px; border-radius: 2px;}
  .cm-s-u span.cm-string { color: ${p => p.theme.colors.gray} }
  .cm-s-u span.cm-string-2 { color: ${p => p.theme.colors.gray}; }
  .cm-s-u span.cm-qualifier { color: ${p => p.theme.colors.gray} }
  .cm-s-u span.cm-error { color: ${p => p.theme.colors.red} }
  .cm-s-u span.cm-attribute { color: ${p => p.theme.colors.gray}; }
  .cm-s-u span.cm-tag { color: ${p => p.theme.colors.gray}; }
  .cm-s-u span.cm-link { color: ${p =>
    p.theme.colors.gray}; text-decoration: none;}
  .cm-s-u .CodeMirror-activeline-background { background: ${p =>
    p.theme.colors.gray}; }
  .cm-s-u .CodeMirror-cursor {
    border-left: 2px solid ${p => p.theme.colors.blue1};
  }

  .cm-s-u span.cm-builtin { color: ${p => p.theme.colors.gray}; }
  .cm-s-u span.cm-bracket { color: ${p => p.theme.colors.gray}; }

  .cm-s-u .CodeMirror-matchingbracket { outline:1px solid ${p =>
    p.theme.colors.gray}; color:${p => p.theme.colors.black}; !important; }

  .CodeMirror-hints.u {
    color: ${p => p.theme.colors.gray};;
    background-color: ${p => p.theme.colors.gray}; !important;
  }

  .CodeMirror-hints.u .CodeMirror-hint-active {
    background-color: ${p => p.theme.colors.blue}; !important;
    color: ${p => p.theme.colors.gray}; !important;
  }

`;

MarkdownEditor.defaultProps = {
  value: "",
  options: {
    value: "",
    mode: "markdown",
    theme: "u",
    lineNumbers: false,
    lineSeparators: null,
    indentUnit: 2,
    smartIndent: true,
    tabSize: 4,
    indentWithTabs: false,
    electricChars: true,
    specialChars: /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/,
    direction: "ltr",
    // Host OS specific
    // rtlMoveVisually
    keyMap: "default",
    lineWrapping: true,
    firstLineNumber: 1,
    fixedGutter: true,
    scrollbarStyle: "null",
    coverGutterNextToScrollbar: false,
    // Host OS specific
    // inputStyle
    readOnly: false,
    showCursorWhenSelecting: false,
    lineWiseCopyCut: true,
    pasteLinesPerSelection: true,
    selectionsMayTouch: false,
    undoDepth: 200,
    historyEventDelay: 1250,
    autofocus: false,
    dragDrop: true,
    allowDropFileTypes: null,
    cursorBlinkRate: 530,
    cursorScrollMargin: 0,
    cursorHeight: 0.85,
    resetSelectionOnContextMenu: true,
    workTime: 200,
    workDelay: 300,
    pollInterval: 100,
    addModeClass: false,
    maxblueLength: 10000,
    viewportMargin: 10,
    spellcheck: true,
    autocorrect: false,
    autocapitalize: false
  }
};

export default MarkdownEditor;
export { Props };
