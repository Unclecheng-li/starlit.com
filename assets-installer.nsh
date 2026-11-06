!macro customInstall
  CreateShortcut "$DESKTOP\星伴.lnk" "$INSTDIR\Starlit.exe" "" "$INSTDIR\Starlit.exe" 0 "" "" "星伴" "$INSTDIR"
  CreateShortcut "$SMPROGRAMS\星伴.lnk" "$INSTDIR\Starlit.exe" "" "$INSTDIR\Starlit.exe" 0 "" "" "星伴" "$INSTDIR"
!macroend

!macro customUnInstall
  Delete "$DESKTOP\星伴.lnk"
  Delete "$SMPROGRAMS\星伴.lnk"
!macroend
