# msg-switch [![Build Status](https://travis-ci.org/PlanitarInc/msg-switch.svg?branch=master)](https://travis-ci.org/PlanitarInc/msg-switch) [![npm version](https://badge.fury.io/js/msg-switch.svg)](https://badge.fury.io/js/msg-switch) [![](https://img.shields.io/github/license/PlanitarInc/msg-switch.svg)](https://www.npmjs.com/package/msg-switch)

An easy way to display error messages for a predefined set of error codes.

## Motivation

During our transition from AngularJS (v1.6.x) to VueJS, we encountered a
problem. We struggled to find an easy way to migrate an AngularJS component
relying on
[ngMessages directive](https://code.angularjs.org/1.6.10/docs/api/ngMessages/directive/ngMessages).

The requirements are as follows:
- Define lists of messages.
- Re-use these lists.
- Override message in these lists on a per-case basis.
- Extend these lists.

## Examples

### Basic Example

In this basic example the components are used to display an error message based
on an error code. Basically, it behaves as a huge switch statement: chooses the
right message to be displayed. But unlike a switch statement it should be able 

```html
// StdError.vue
<MsgSwitch :value="code">
  <!--
    User-defined custom messages comes first,
    such that they overwrite the default messages.
  -->
  <slot :value="value" />

  <!-- Here the standard error messages come -->
  <MsgCase when="unautheticated">Please log in!</MsgCase>
  <MsgCase when="not_found">Not found.</MsgCase>
  <MsgCase when="forbidden">You do not enough permissions.</MsgCase>
  <!-- A standrard wildcard case. -->
  <MsgCase when="*">
    <template slot-scope="{ value }">
      Unknown error: <pre>{{value}}</pre>.
    </template>
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

### Access Parent Scope Example

In this example an additional context is passed to `MsgSwitch`. This context is
treated as an opaque value and is passed as is to `MsgCase` components.
It can be used inside `MsgCase` components using
[scoped slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) as
show below.

```html
// StdErrorParentScope.vue
<MsgSwitch :value="error.code">
  <!--
    User-defined custom messages comes first,
    such that they overwrite the default messages.
  -->
  <slot :value="error.code" />

  <!-- Here the standard error messages come -->
  <MsgCase when="unautheticated">Please log in!</MsgCase>
  <MsgCase when="not_found" #default>
    Resource {{ error.id }} was not found.
  </MsgCase>
  <MsgCase when="forbidden" #default>
    You do not enough permissions to {{ error.method }} {{ error.resourceName }}.
  </MsgCase>
  <!-- A standrard wildcard case. -->
  <MsgCase when="*" #default="{ value }">
    Unknown error (<code>{{value}}</code>): <pre>{{ error }}</pre>.
  </MsgCase>
</MsgSwitch>
```

Than this component is used as follows:

```html
// App.vue
<StdErrorParentScope :error="error">
  <MsgCase when="not_found" #default>
    User {{ error.id }} was not found.
  </MsgCase>
  <MsgCase when="dynamic" #default>
    Message for error code missing in StdError:
    <pre>{{ error.someDebugInfo }}</pre>.
  </MsgCase>
</StdErrorWithContext>
```


### Context Example

**Update 2019-02-08**: Vue 2.6 added support for the new `v-slot` syntax.
This made the `ctx` prop redundant.
Checkout [Access Parent Scope Example](#access-parent-scope-example).
For more details about `v-slot` please refer to
[Vue 2.6 release blog post](https://medium.com/the-vue-point/vue-2-6-released-66aa6c8e785e)
and [updated Vue slot docs](https://vuejs.org/v2/guide/components-slots.html).

In this example an additional context is passed to `MsgSwitch`. This context is
treated as an opaque value and is passed as is to `MsgCase` components.
It can be used inside `MsgCase` components using
[scoped slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) as
show below.

```html
// StdErrorWithContext.vue
<MsgSwitch :value="code" :ctx="someObject">
  <!--
    User-defined custom messages comes first,
    such that they overwrite the default messages.
  -->
  <slot :value="value" />

  <!-- Here the standard error messages come -->
  <MsgCase when="unautheticated">Please log in!</MsgCase>
  <MsgCase when="not_found">
    <template slot-scope="{ ctx }">
      Resource {{ ctx.id }} was not found.
    </template>
  </MsgCase>
  <MsgCase when="forbidden">
    <template slot-scope="{ ctx }">
      You do not enough permissions to {{ ctx.method }} {{ ctx.resourceName }}.
    </template>
  </MsgCase>
  <!-- A standrard wildcard case. -->
  <MsgCase when="*">
    <template slot-scope="{ ctx, value }">
      Unknown error (<code>{{value}}</code>): <pre>{{ ctx }}</pre>.
    </template>
  </MsgCase>
</MsgSwitch>
```

Than this component is used as follows:

```html
// App.vue
<StdErrorWithContext :value="error.code">
  <MsgCase when="not_found">
    <template slot-scope="{ ctx }">
      User {{ ctx.id }} was not found.
    </template>
  </MsgCase>
  <MsgCase when="dynamic">
    <template slot-scope="{ ctx }">
      Message for error code missing in StdError:
      <pre>{{ ctx.someDebugInfo }}</pre>.
    </template>
  </MsgCase>
</StdErrorWithContext>
```


## TODO

- ~~Do not add hidden cases to DOM.~~
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
