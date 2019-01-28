# msg-switch [![Build Status](https://travis-ci.org/PlanitarInc/msg-switch.svg?branch=master)](https://travis-ci.org/PlanitarInc/msg-switch)

An easy way to display error messages for a predefined set of error codes.

## Motivation

During our transition from AngularJS (v1.6.x) to VueJS, we encountered a
problem. We struggled to find an easy way to migrate an AngularJS component
relying on
[ngMessages directive](https://code.angularjs.org/1.6.10/docs/api/ngMessages/directive/ngMessages).

The component is used to display an error message based on an error code.
Basically, it behaves as a huge switch statement: chooses the right message to
be displayed. But unlike a switch statement it should be able 

```html
// StdError.vue
<MsgSwitch :value="code">
  <!--
    User-defined custom messages comes first,
    such that they overwrite the default messages.
  -->
  <slot :value="value" />

  <!-- Here the standard error messages come -->
  <MsgCase when="not_found">Not found.</MsgCase>
  <MsgCase when="unautheticated">Please log in!</MsgCase>
  <MsgCase when="forbidden">You do not enough permissions.</MsgCase>
  <!-- A standrard wildcard case. -->
  <MsgCase when="*" :slot-scope="{ value }">
    Unknown error: <pre>{{value}}</pre>.
  </MsgCase>
</MsgSwitch>
```

Than this component is used as follows:

```html
// App.vue
<StdError :value="error.code">
  <MsgCase when="not_found">The document was not found.</MsgCase>
  <MsgCase when="forbidden">You are not allowed to edit the document.</MsgCase>
  <MsgCase when="dynamic">Message for error code missing in StdError.</MsgCase>
</StdError>
```

In the example above the following scenarios are possible:
- If the error code is `unautheticated`, the standard error message listed in
    StdError would be displayed: `Please log in!`.
- If the error code is `not_found`, the custom error message would be displayed:
    `The document was not found.`.
- If the error code is `dynamic`, the custom error message would be displayed:
    `Message for error code missing in StdError.`.

The requirements are as follows:
- Define lists of messages.
- Re-use these lists.
- Override message in these lists on a per-case basis.
- Extend these lists.

## TODO

- Do not add hidden cases to DOM.
- Support displaying multiple messages similar to [AngularJS' ngMessages](https://code.angularjs.org/1.6.10/docs/api/ngMessages/directive/ngMessages).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
