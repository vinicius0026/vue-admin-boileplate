<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="column in columns">{{ column.label }}</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in list">
        <td v-for="column in columns"> {{ entry[column.field] }}</td>
        <td>
          <Tooltip :label="detailsText" placement="top">
            <button class="button is-small" @click="view(entry[idField])">
              <span class="icon is-small"><i class="fa fa-search"></i></span>
            </button>
          </Tooltip>
          <Tooltip :label="removeText" placement="top">
            <button class="button is-small is-danger" @click="_remove(entry[idField])">
              <span class="icon is-small"><i class="fa fa-remove"></i></span>
            </button>
          </Tooltip>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Tooltip from 'vue-bulma-tooltip'
import Toastr from './Toastr'

export default {
  name: 'DataTable',
  props: {
    columns: {
      validator: function (cols) {
        return Array.isArray(cols) && cols.every(col => col.label && col.field)
      }
    },
    idField: {
      type: String,
      default: 'id'
    },
    fetch: {
      type: Function,
      required: true
    },
    view: {
      type: Function,
      required: true
    },
    remove: {
      type: Function,
      required: true
    },
    detailsText: {
      type: String,
      default: 'Details'
    },
    removeText: {
      type: String,
      default: 'Remove'
    }
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    _fetch () {
      this.fetch()
        .then(res => {
          this.list = res.data.data
        })
        .catch(err => {
          Toastr.error('Unable to load table data', 'Error')
          console.error(err)
        })
    },
    _remove (id) {
      this.remove(id)
        .then(() => {
          Toastr.success('Data removed successfully', 'Success')
          this._fetch()
        })
        .catch(err => {
          Toastr.error('Unable to remove entry', 'Error')
          console.error(err)
        })
    }
  },
  created () {
    this._fetch()
  },
  components: {
    Tooltip
  }
}
</script>
