(self.webpackChunktelecovid=self.webpackChunktelecovid||[]).push([[905],{36862:(e,n,o)=>{"use strict";o.d(n,{_:()=>s});var i=o(27100),t=o(88690),r=o(60862),a=o(17144);class s{constructor(e){this._enabled=!1,"Notification"in window?"granted"===Notification.permission?this._enabled=!0:"denied"!==Notification.permission&&(e.warn("User has not allowed desktop notification yet"),Notification.requestPermission().then((e=>{"granted"===e&&(this._enabled=!0)}))):e.warn("This browser does not support desktop notification")}showMessage(e){this._enabled&&new Notification(t.jz,{body:e})}}s.ɵfac=function(e){return new(e||s)(r.LF(i.bZ))},s.ɵprov=a.Yz({token:s,factory:s.ɵfac,providedIn:"root"})},55905:(e,n,o)=>{"use strict";o.r(n),o.d(n,{appStableFactory:()=>d,settingsStorageFactory:()=>c,titleBarFactory:()=>g,providers:()=>u});var i=o(20244),t=o(54236),r=o(70343),a=o(88690),s=o(59741),l=o(36862);function d(){return{isStable:()=>{electronGlobal.ipcRenderer.send(a.fF)}}}function c(){return{get:()=>(0,i.extend)(!0,{},{theme:r.v.general.theme,language:r.v.general.language},electronGlobal.ipcRenderer.sendSync(a.rq)),set:e=>electronGlobal.ipcRenderer.send(a.Du,e),getDebugging:()=>(0,i.extend)(!0,{},{consoleEnabled:r.v.debug.consoleEnabled,debugData:r.v.debug.debugData},electronGlobal.ipcRenderer.sendSync(a.Ak)),setDebugging:e=>electronGlobal.ipcRenderer.send(a.wJ,e),getLogging:()=>(0,i.extend)(!0,{},{consoleLogLevel:r.v.logging.consoleLogLevel,fileLogLevel:r.v.logging.fileLogLevel},electronGlobal.ipcRenderer.sendSync(a.Xq)),setLogging:e=>electronGlobal.ipcRenderer.send(a.CG,e)}}function g(){const e=electronGlobal.remote.getCurrentWindow(),n=new t.xQ;e.on("maximize",(()=>{o.maximized=!0,n.next()})),e.on("unmaximize",(()=>{o.maximized=!1,n.next()}));const o={close:()=>{e.close()},minimize:()=>{e.minimize()},restoreMaximize:()=>{e.isMaximized()?e.unmaximize():e.maximize()},maximizedChange:n.asObservable(),maximized:e.isMaximized()};return o}const u=[{provide:s.fP,useFactory:d,deps:[]},{provide:s.i0,useFactory:g,deps:[]},{provide:s.LJ,useFactory:c,deps:[]},{provide:s.YX,useValue:rendererLogger},{provide:l._,useFactory:()=>({showMessage:e=>{electronGlobal.ipcRenderer.send(a.e2,e)}})}]}}]);
//# sourceMappingURL=905.client.es2015.chunk.0a03818fbd5be7cd8579.js.map