<template id="Bank-form">
  <div class="Bank-wrapper">
    <div class="Bank-left">
      <img height="100%" class="logo" v-bind:src="img" />
    </div>
    <div class="Bank-right"><button>Create OCR</button></div>
  </div>
</template>

<script>
import logo from '@/assets/bigLogo.png'

export default {
  name: 'BankForm',
  template: '#Bank-form',
  data() {
    return {
      rememberMe: false,
      email: '',
      password: '',
      value: 'password',
      icon: 'eye-slash',
      error: '',
      img: logo,
    }
  },
  beforeMount() {
    let init = 1000
    setTimeout(() => {
      document.querySelector('.Bank-wrapper').classList.toggle('open')
      init = 300
    }, init)
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  box-sizing: border-box;
}
.pointer {
  cursor: pointer;
}
.logo {
  height: 120%;
  display: block;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-image: url(https://www.inext.se/wp-content/uploads/2020/10/background_4.jpg);
}
.bankID {
  border-radius: 25px;
  height: 80px;
  width: 80px;
  align-self: center;
  background-color: blue;
}
.bankID p {
  color: white;
  text-align-last: center;
  vertical-align: middle;
  line-height: 3;
}

input {
  font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  font-size: 16px;
  color: #000;
  border-radius: 0;
  border-bottom: 0;
}

.error-text {
  color: red;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #aaaaaa;
}

button,
input:focus {
  outline: 0;
}

.form-group {
  position: relative;
  padding-top: 15px;
  margin-top: 10px;
}

label {
  position: absolute;
  top: 0;
  opacity: 1;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  color: #aaa;
  font-weight: 300;
  font-size: 13px;
  letter-spacing: -0.00933333em;
  transition: all 0.2s ease-out;
}

.h1 {
  color: #fff;
  opacity: 0.8;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2405em;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  text-align: center;
  cursor: pointer;
  position: absolute;
  transform: translateY(-10px);
}

.open .h1 {
  -webkit-transform: translateX(200px) translateZ(0) translateY(-10px);
  transform: translateX(200px) translateZ(0) translateY(-10px);
}

.h2 {
  color: #000;
  font-size: 20px;
  letter-spacing: -0.00933333em;
  font-weight: 600;
  padding-bottom: 15px;
}

.Bank-wrapper {
  width: 800px;
  height: 440px;
  background-color: #fff;
  box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.Bank-left {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  overflow: hidden;
}

.Bank-left img {
  display: block;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  object-position: left;
}

.open .Bank-left img {
  width: 100%;
  height: 100%;
}

.open .Bank-left {
  -webkit-transform: translateX(-330px) translateZ(0) translateY(-180px);
  transform: translateX(-330px) translateZ(0) translateY(-180px) scale(0.1);
}

.Bank-right {
  display: flex;
  padding-top: 40px;
  position: absolute;
  top: 0;
  right: 0;
  width: 475px;
  -webkit-transform: translateX(800px) translateZ(0);
  transform: translateX(800px) translateZ(0);
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
}

.open .Bank-right {
  -webkit-transform: translateX(0px) translateZ(0);
  transform: translateX(0px) translateZ(0);
}

.checkbox-container {
  display: flex;
  margin-top: 35px;
}

.text-checkbox {
  color: #aaa;
  font-size: 16px;
  letter-spacing: -0.00933333em;
  font-weight: 300;
  margin-left: 15px;
}

input[type='checkbox'] {
  cursor: pointer;
  margin: 0;
  height: 22px;
  position: relative;
  width: 22px;
  -webkit-appearance: none;
  transition: all 180ms linear;
}

input[type='checkbox']:before {
  border: 1px solid #aaa;
  background-color: #fff;
  content: '';
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 2px;
  transition: all 180ms linear;
}

input[type='checkbox']:checked:before {
  background: linear-gradient(198.08deg, #22bf64 45.34%, #e281e7 224.21%);
  border: 1px solid #22bf64;
}

input[type='checkbox']:after {
  content: '';
  border: 2px solid #fff;
  border-right: 0;
  border-top: 0;
  display: block;
  height: 4px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 6px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  width: 12px;
  transition: all 180ms linear;
}

input[type='checkbox']:checked:after {
  opacity: 1;
}

.button-area {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.btn {
  font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 2px;
  height: 40px;
  display: flex;
  padding: 0 35px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: -0.00933333em;
}

.btn-primary {
  align-items: center;
  color: #fff;
  background: linear-gradient(198.08deg, #22bf64 45.34%, #e281e7 224.21%);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: right;
}

.btn-primary:hover,
.btn-primary:focus {
  color: #fff;
  background: linear-gradient(198.08deg, #1b984f 45.34%, #e281e7 224.21%);
}
</style>
