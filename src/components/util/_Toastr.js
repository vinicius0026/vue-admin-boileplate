import Vue from 'vue'
import Notification from 'vue-bulma-notification'

const Toastr = Vue.extend(Notification)

export default {
  success,
  warning,
  error
}

function openToastr (propsData = {
  title: '',
  message: '',
  type: '',
  direction: 'Down',
  duration: 4500,
  container: '.notifications'
}) {
  return new Toastr({
    el: document.createElement('div'),
    propsData
  })
}

function success (message, title) {
  return openToastr({ title, message, type: 'success' })
}

function warning (message, title) {
  return openToastr({ title, message, type: 'warning' })
}

function error (message, title) {
  return openToastr({ title, message, type: 'danger' })
}
