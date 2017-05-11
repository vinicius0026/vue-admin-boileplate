<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <p class="control">
      <input class="input"
             :type="type"
             :placeholder="placeholder"
             ref="input"
             v-bind:value="value"
             v-on:input="updateValue($event.target.value)">
    </p>
  </div>
</template>

<script>
export default {
  name: 'LabelledInput',
  props: {
    value: {},
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>
