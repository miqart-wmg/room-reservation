(this.webpackJsonproomreservation=this.webpackJsonproomreservation||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n(18),o=n.n(c),s=n(21),i=(n(54),n(15)),l=(n(55),function(){return Object(r.jsx)("div",{className:"header",children:Object(r.jsxs)("ul",{className:"nav-links",children:[Object(r.jsx)(i.b,{activeClassName:"activeRoute",className:"nav-link",to:"/rooms",children:Object(r.jsx)("li",{children:"Rooms"})}),Object(r.jsx)(i.b,{activeClassName:"activeRoute",className:"nav-link",to:"/bookings",children:Object(r.jsx)("li",{children:"Bookings"})}),Object(r.jsx)(i.b,{activeClassName:"activeRoute",className:"nav-link",to:"/visitors",children:Object(r.jsx)("li",{children:"Visitors"})})]})})}),u=n(14),b=n(8),d=n.n(b),j=n(16),O=n(20),m=n.n(O),h=n(42),f=m.a.create({baseURL:"https://it-blog-posts.herokuapp.com/api/",responseType:"json"}),p=Object(h.a)(f),v={rooms:new p((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.id;return"rooms/".concat(t||"")})),bookings:new p((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.id;return"roomBookings/".concat(t)})),visitors:new p((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.id;return"visitors/".concat(t)})),roomsStatus:new p("rooms/status")},x=function(e){return{type:"CREATE_ROOM_SUCCESS",payload:e}},g=function(e){return{type:"EDIT_ROOM_SUCCESS",payload:e}},E=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_STATUS_REQUEST"}),e.next=4,v.roomsStatus.get();case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error("Can not get status");case 7:t({type:"GET_STATUS_SUCCESS",payload:n.data.status}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"GET_STATUS_FAILURE"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},S=(n(76),n.p+"static/media/loading.f2322b35.svg"),R=n(13),y=n(2),_={floor:"",beds:"",balcony:!1,roomId:"",bookedAt:""},w=function(e){var t=e.create,n=e.edit,c=e.data,o=e.cancelEdit,s=Object(a.useState)(_),i=Object(u.a)(s,2),l=i[0],b=i[1];Object(a.useEffect)((function(){b(c.initialState)}),[c]);var d=function(e){var t=e.target,n=t.name,r=t.value;b(Object(y.a)(Object(y.a)({},l),{},Object(R.a)({},n,r)))};return Object(r.jsxs)("div",{className:"room-form",children:[Object(r.jsx)("h2",{children:"Add New Room"}),Object(r.jsx)("label",{htmlFor:"floor",children:"Floor"}),Object(r.jsx)("input",{type:"number",id:"floor",onChange:d,value:l.floor,name:"floor"}),Object(r.jsx)("label",{htmlFor:"beds",children:"Beds"}),Object(r.jsx)("input",{type:"number",id:"beds",onChange:d,value:l.beds,name:"beds"}),Object(r.jsxs)("div",{className:"checkboxDiv",children:[Object(r.jsx)("label",{htmlFor:"balcony",children:"Balcony"}),Object(r.jsx)("input",{onChange:function(e){b(Object(y.a)(Object(y.a)({},l),{},{balcony:e.target.checked}))},type:"checkbox"})]}),Object(r.jsx)("label",{htmlFor:"roomId",children:"Room Number"}),Object(r.jsx)("input",{type:"number",id:"roomId",onChange:d,value:l.roomId,name:"roomId"}),c.editing?Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)("button",{className:"create-b",onClick:o,children:"Cancel"}),Object(r.jsx)("button",{className:"create-b",onClick:function(){n(l),o()},children:"Save"})]}):Object(r.jsx)("button",{className:"create-b",onClick:function(){return function(e){var n=e.floor,r=e.beds,a=e.roomId;n&&r&&a&&(t(Object(y.a)(Object(y.a)({},e),{},{bookedAt:(new Date).toLocaleDateString("en-GB")})),b(_))}(l)},children:"Create"})]})},k=function(e){var t=e.gettingStatus,n=e.status,a=n.rooms,c=n.booking,o=n.visitors;return Object(r.jsx)("div",{className:"status-bar",children:t?Object(r.jsx)("img",{src:S,width:"40px",alt:"loading"}):[Object(r.jsx)("div",{children:"Rooms: ".concat(a)},"r-status"),Object(r.jsx)("div",{children:"Booking: ".concat(c)},"b-status"),Object(r.jsx)("div",{children:"Visitors: ".concat(o)},"v-status")]})};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N=a.createElement("path",{fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"});function I(e,t){var n=e.title,r=e.titleId,c=T(e,["title","titleId"]);return a.createElement("svg",C({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,N)}var U=a.forwardRef(I);n.p;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var F=a.createElement("path",{fill:"currentColor",d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"});function L(e,t){var n=e.title,r=e.titleId,c=A(e,["title","titleId"]);return a.createElement("svg",M({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"trash-alt",className:"svg-inline--fa fa-trash-alt fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,F)}var V=a.forwardRef(L),B=(n.p,function(e){var t=e.rooms,n=e.remove,a=e.update;return Object(r.jsxs)("table",{id:"customers",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#ID"}),Object(r.jsx)("th",{children:"Booked"}),Object(r.jsx)("th",{children:"Floor"}),Object(r.jsx)("th",{children:"Beds"}),Object(r.jsx)("th",{children:"Balcony"}),Object(r.jsx)("th",{children:"Number"}),Object(r.jsx)("th",{children:"Edit"}),Object(r.jsx)("th",{children:"Delete"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t+1}),Object(r.jsx)("td",{children:e.bookedAt}),Object(r.jsx)("td",{children:e.floor}),Object(r.jsx)("td",{children:e.beds}),Object(r.jsx)("td",{children:e.balcony?"Yes":"No"}),Object(r.jsx)("td",{children:e.roomId}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{className:"deledit-b edit-b",onClick:function(){return a(e)},children:Object(r.jsx)(U,{className:"svg-edit"})})}),Object(r.jsx)("td",{children:Object(r.jsxs)("button",{className:"deledit-b del-b",onClick:function(){return n(e.id)},children:[Object(r.jsx)("img",{src:"",alt:""}),Object(r.jsx)(V,{className:"svg-remove"})]})})]},e.id)}))})]})}),G={floor:"",beds:"",balcony:!1,roomId:""},D=Object(s.b)((function(e){var t=e.rooms;return{status:t.status,gettingStatus:t.gettingStatus,rooms:t.rooms,gettingRooms:t.gettingRooms}}),(function(e){return{getStatus:function(){e(E())},getRooms:function(){e(function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_ROOMS_REQUEST"}),e.next=4,v.rooms.get({id:void 0});case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error("Can not get Rooms");case 7:t({type:"GET_ROOMS_SUCCESS",payload:n.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"GET_ROOMS_FAILURE"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())},createRoom:function(t){e(function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"CREATE_ROOM_REQUEST"}),t.next=4,v.rooms.post(e);case 4:if(200===(r=t.sent).status){t.next=7;break}throw new Error("Can not create Room");case 7:n(x(r.data)),n(E()),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"CREATE_ROOM_FAILURE"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))},removeRoom:function(t){e(function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"REMOVE_ROOM_REQUEST"}),t.next=4,v.rooms.delete({uriParams:{id:e}});case 4:if(200===t.sent.status){t.next=7;break}throw new Error("This item was already deleted");case 7:n({type:"REMOVE_ROOM_SUCCESS",payload:e}),n(E()),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"REMOVE_ROOM_FAILURE"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))},editRoom:function(t){e(function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"EDIT_ROOM_REQUEST"}),t.next=4,v.rooms.put(e);case 4:if(200===(r=t.sent).status){t.next=7;break}throw new Error("Can not create Room");case 7:n(g(r.data)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"EDIT_ROOM_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(a.useState)({initialState:G,editing:!1}),n=Object(u.a)(t,2),c=n[0],o=n[1],s=e.getStatus,i=e.getRooms,l=e.gettingStatus,b=e.gettingRooms,d=e.createRoom,j=e.removeRoom,O=e.editRoom;return Object(a.useEffect)((function(){i(),s()}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"leftSide",children:[Object(r.jsx)(k,{status:e.status,gettingStatus:l}),Object(r.jsx)(w,{data:c,create:d,edit:O,cancelEdit:function(){o({initialState:G,editing:!1})}})]}),Object(r.jsx)("div",{className:"list",children:b?Object(r.jsx)("img",{src:S,alt:"loading",style:{marginTop:"31vh"}}):Object(r.jsx)(B,{remove:j,update:function(e){o({initialState:e,editing:!0})},rooms:e.rooms})})]})})),Q=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:S,alt:"loading"})})},z={personName:"",roomNumber:0,roomId:"",personId:"",bookedAt:"",id:""},P=function(e){var t=e.create,n=Object(a.useState)(z),c=Object(u.a)(n,2),o=c[0],s=c[1],i=function(e){var t=e.target,n=t.name,r=t.value;s(Object(y.a)(Object(y.a)({},o),{},Object(R.a)({},n,r)))};return Object(r.jsxs)("div",{className:"room-form",children:[Object(r.jsx)("h2",{children:"Add New Room"}),Object(r.jsx)("label",{htmlFor:"floor",children:"Floor"}),Object(r.jsx)("input",{type:"number",id:"floor",onChange:i,value:o.personName,name:"floor"}),Object(r.jsx)("label",{htmlFor:"beds",children:"Beds"}),Object(r.jsx)("input",{type:"number",id:"beds",onChange:i,value:o.roomNumber,name:"beds"}),Object(r.jsxs)("label",{className:"checkbox-container",children:["Balcony",Object(r.jsx)("input",{type:"checkbox"}),Object(r.jsx)("span",{className:"checkmark"})]}),Object(r.jsx)("label",{htmlFor:"roomId",children:"Room Number"}),Object(r.jsx)("input",{type:"number",id:"roomId",onChange:i,value:o.roomId,name:"roomId"}),Object(r.jsx)("button",{className:"create-b",onClick:function(){return function(e){var n=e.personName,r=e.roomNumber,a=e.roomId;n&&r&&a&&(t(Object(y.a)(Object(y.a)({},e),{},{bookedAt:(new Date).toLocaleDateString("en-GB")})),s(z))}(o)},children:"Create"})]})},H=function(e){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"leftSide",children:Object(r.jsx)(P,{})}),Object(r.jsx)("div",{className:"list"})]})},J=n(3);var Y=function(){return Object(r.jsx)(i.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsxs)(J.c,{children:[Object(r.jsx)(J.a,{path:"/",exact:!0,component:D}),Object(r.jsx)(J.a,{path:"/rooms",component:D}),Object(r.jsx)(J.a,{path:"/visitors",component:Q}),Object(r.jsx)(J.a,{path:"/bookings",component:H})]})]})})},q=n(10),K=n(44),W={gettingStatus:!1,status:{rooms:0,booking:0,visitors:0},gettingRooms:!1,rooms:[],bookings:[],visitors:[]};var X=Object(q.c)({rooms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_STATUS_REQUEST":return Object(y.a)(Object(y.a)({},e),{},{gettingStatus:!0});case"GET_STATUS_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{gettingStatus:!1,status:t.payload});case"GET_STATUS_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{gettingStatus:!1});case"GET_ROOMS_REQUEST":return Object(y.a)(Object(y.a)({},e),{},{gettingRooms:!0});case"GET_ROOMS_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{gettingRooms:!1,rooms:t.payload});case"GET_ROOMS_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{gettingRooms:!1});case"CREATE_ROOM_REQUEST":return e;case"CREATE_ROOM_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{rooms:[].concat(Object(K.a)(e.rooms),[t.payload])});case"CREATE_ROOM_FAILURE":case"REMOVE_ROOM_REQUEST":return e;case"REMOVE_ROOM_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{rooms:e.rooms.filter((function(e){return e.id!==t.payload}))});case"REMOVE_ROOM_FAILURE":case"EDIT_ROOM_REQUEST":return e;case"EDIT_ROOM_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{rooms:e.rooms.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"EDIT_ROOM_FAILURE":default:return e}}}),Z=[n(43).a],$=Object(q.e)(X,Object(q.d)(q.a.apply(void 0,Z)));o.a.render(Object(r.jsx)(s.a,{store:$,children:Object(r.jsx)(Y,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.23cf6b91.chunk.js.map