!macro customInstall
  CreateShortcut "$DESKTOP\星伴.lnk" "$INSTDIR\星伴.exe" "" "$INSTDIR\星伴.exe" 0 "" "" "星伴" "$INSTDIR"
  CreateShortcut "$SMPROGRAMS\星伴.lnk" "$INSTDIR\星伴.exe" "" "$INSTDIR\星伴.exe" 0 "" "" "星伴" "$INSTDIR"
!macroend

!macro customUnInstall
  Delete "$DESKTOP\星伴.lnk"
  Delete "$SMPROGRAMS\星伴.lnk"
!macroend
