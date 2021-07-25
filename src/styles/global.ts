import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 62.5%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 56.25%;
    }
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  body {
    line-height: 1.75;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  main {
    display: block;
  }

  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  small {
    font-size: 0.8rem;
  }

  a {
    background-color: transparent;
    text-decoration: none;
  }

  p {
    margin-bottom: 1rem;
  }

  abbr[title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    line-height: inherit;
    border: 1px solid currentColor;
  }

  button {
    overflow: visible;
    text-transform: none;
    cursor: pointer;
  }

  [type="button"],
  [type="reset"],
  [type="submit"],
  button {
    -webkit-appearance: button;
    padding: 1px 6px;
  }

  input {
    overflow: visible;
  }

  input,
  textarea {
    padding: 1px;
  }

  fieldset {
    border: 1px solid currentColor;
    margin: 0 2px;
  }

  legend {
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
  }

  progress {
    display: inline-block;
    vertical-align: baseline;
  }

  select {
    text-transform: none;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="color"] {
    background: inherit;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.5;
  }

  ::-webkit-file-upload-button,
  ::-webkit-search-decoration {
    -webkit-appearance: button;
    font: inherit;
  }

  ::-moz-focus-inner {
    border: 0;
  }

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    color: inherit;
    overflow: visible;
  }

  dl,
  ol,
  ul {
    margin: 1em 0;
  }

  dl dl,
  dl ol,
  dl ul,
  ol dl,
  ol ol,
  ol ul,
  ul dl,
  ul ol,
  ul ul {
    margin: 0;
  }

  b,
  strong {
    font-weight: bolder;
  }

  audio,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  img {
    border: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  table {
    text-indent: 0;
    border-color: inherit;
  }

  details {
    display: block;
  }

  dialog {
    background-color: inherit;
    border: solid;
    color: inherit;
    display: block;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1em;
    position: absolute;
    right: 0;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }

  dialog:not([open]) {
    display: none;
  }

  summary {
    display: list-item;
  }

  canvas {
    display: inline-block;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`

export default GlobalStyles
