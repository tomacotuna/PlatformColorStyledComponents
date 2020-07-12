# PlatformColorStyledComponents
Reproduction of issues around using the new PlatformColor with StyledComponents (or other CSS-In-JS solutions)

Terminal Error Log:
```
Invariant Violation: Invalid prop `backgroundColor` supplied to `StyleSheet generated`: semantic:
Valid color formats are
  - '#f0f' (#rgb)
  - '#f0fc' (#rgba)
  - '#ff00ff' (#rrggbb)
  - '#ff00ff00' (#rrggbbaa)
  - 'rgb(255, 255, 255)'
  - 'rgba(255, 255, 255, 1.0)'
  - 'hsl(360, 100%, 100%)'
  - 'hsla(360, 100%, 100%, 1.0)'
  - 'transparent'
  - 'red'
  - 0xff00ff00 (0xrrggbbaa)

StyleSheet generated: {
  "backgroundColor": "semantic:",
  "systemBackground": ""
}

This error is located at:
    in StyledNativeComponent (created by Styled(View))
    in Styled(View) (at App.js:39)
    in RCTSafeAreaView (at SafeAreaView.js:51)
    in ForwardRef(SafeAreaView) (at App.js:38)
    in App (at renderApplication.js:45)
    in RCTView (at View.js:34)
    in View (at AppContainer.js:106)
    in RCTView (at View.js:34)
    in View (at AppContainer.js:132)
    in AppContainer (at renderApplication.js:39)
✨  Done in 428.20s.```
