// import Notifications from './Notifications.vue';

// const NotificationStore = {
//   state: [], // here the notifications will be added
//   settings: {
//     overlap: false,
//     verticalAlign: "top",
//     horizontalAlign: "right",
//     type: "info",
//     timeout: 5000,
//     closeOnClick: true,
//     showClose: true,
//   },
//   setOptions(options: any) {
//     this.settings = Object.assign(this.settings, options);
//   },
//   removeNotification(timestamp: any) {
//     const indexToDelete = this.state.findIndex(
//       (n: any) => n.timestamp === timestamp
//     );
//     if (indexToDelete !== -1) {
//       this.state.splice(indexToDelete, 1);
//     }
//   },
//   addNotification(notification: any) {
//     if (typeof notification === "string" || notification instanceof String) {
//       notification = { message: notification };
//     }
//     notification.timestamp = new Date();
//     notification.timestamp.setMilliseconds(
//       notification.timestamp.getMilliseconds() + this.state.length
//     );
//     notification = Object.assign({}, this.settings, notification);
//     this.state.push(notification);
//   },
//   notify(notification: any) {
//     if (Array.isArray(notification)) {
//       notification.forEach((notificationInstance) => {
//         this.addNotification(notificationInstance);
//       });
//     } else {
//       this.addNotification(notification);
//     }
//   },
// };

// const NotificationsPlugin = {
//   install(Vue: any, options: any) {
//     let app = new Vue({
//       data: {
//         notificationStore: NotificationStore,
//       },
//       methods: {
//         notify(notification: any) {
//           this.notificationStore.notify(notification);
//         },
//       },
//     });
//     Vue.prototype.$notify = app.notify;
//     Vue.prototype.$notifications = app.notificationStore;
//     Vue.component("Notifications", Notifications);
//     if (options) {
//       NotificationStore.setOptions(options);
//     }
//   },
// };

// export default NotificationsPlugin;
