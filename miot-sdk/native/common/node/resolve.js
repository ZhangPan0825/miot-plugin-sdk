"use strict";const resolveAssetSource=require("react-native/Libraries/Image/resolveAssetSource");function _std_path(e){return e&&(e.endsWith("/")||(e+="/"),e.startsWith("/")&&(e="file://"+e)),e}module.exports=((e,s,t)=>{if(console.log("resolveAssetSource",e,s,t),!e||""==e)return;if(!t||""==t)return;if(!s||""==s)return;const r=(e=_std_path(e)).startsWith("asset:/")?"file:///":null;t=_std_path(t),s=_std_path(s),resolveAssetSource.setMiotProcessor&&resolveAssetSource.setMiotProcessor(e=>{e&&"object"==typeof e&&"string"==typeof e.local&&e.local.length>0&&(e.uri=s+e.local)}),resolveAssetSource.setCustomSourceTransformer(s=>{const o=s.asset._miot_base_bundle;s.jsbundleUrl=o?r||e:t;const l=s.defaultAsset();return o&&r&&(l.uri=e+l.uri.substr(r.length)),l})});