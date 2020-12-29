<template id="Registration-form">
  <div class="Registration-wrapper">
    <div class="Registration-left">
      <img height="100%" class="logo" v-bind:src="img" />
    </div>
    <form class="Registration-right" @submit.prevent>
      <div class="h2">Registration</div>
      <div class="form-group">
        <input type="text" id="email" placeholder="email" v-model="email" />
        <label for="email">email</label>
      </div>
      <div class="form-group">
        <input type="text" id="firstname" placeholder="first name" v-model="firstname" />
        <label for="firstname">First name</label>
      </div>
      <div class="form-group">
        <input type="text" id="lastname" placeholder="last namn" v-model="lastname" />
        <label for="lastname">Last name</label>
      </div>
      <div class="form-group">
        <input type="text" id="Password" placeholder="Password" v-model="password" />
        <label for="Password">Password</label>
      </div>
      <div class="button-area">
        <button class="btn btn-primary pull-right" @click="singUp()">Skapa konto</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import logo from '@/assets/bigLogo.png'

export default {
  name: 'RegistrationForm',
  template: '#Registration-form',
  data() {
    return {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      img: logo,
    }
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  beforeMount() {
    let init = 1000
    setTimeout(() => {
      document.querySelector('.Registration-wrapper').classList.toggle('open')
      init = 300
    }, init)
  },
  methods: {
    singUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            const user = firebase.auth().currentUser
            user
              .updateProfile({
                displayName: `${this.firstname} ${this.lastname}`,
                photoURL: 'none',
              })
              .then(
                () => {
                  // eslint-disable-next-line no-console
                  this.$router.push({ path: '/user' })
                },
                (error) => {
                  // eslint-disable-next-line no-alert
                  alert(error.message)
                }
              )
          },
          (error) => {
            // Handle Errors here.
            const errorCode = error.code
            const errorMessage = error.message
            // [START_EXCLUDE]
            if (errorCode === 'auth/weak-password') {
              // eslint-disable-next-line no-alert
              alert('The password is too weak.')
            } else {
              // eslint-disable-next-line no-alert
              alert(errorMessage)
            }
            // [END_EXCLUDE]
          }
        )
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-image: url(https://www.inext.se/wp-content/uploads/2020/10/background_4.jpg);
}

#sandbox {
  font-family: 'Lato', sans-serif;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row-reverse;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background: linear-gradient(243.87deg, #22bf64 30.6%, #371933 130.6%);
  overflow: hidden;
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
.logo {
  height: 100%;
  display: block;
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
  align-items: center;
}

::-webkit-input-placeholder {
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.00933333em;
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

input:placeholder-shown + label {
  opacity: 0;
  -webkit-transform: translateY(15px);
  transform: translateY(15px);
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

.Registration-wrapper {
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

.Registration-left {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  overflow: hidden;
}

.Registration-left img {
  display: block;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  object-position: left;
}

.open .Registration-left img {
  -webkit-transform: translateX(210px) translateZ(0);
  transform: translateX(230px) translateZ(0) scale(0.5);
}

.open .Registration-left {
  -webkit-transform: translateX(-400px) translateZ(0);
  transform: translateX(-400px) translateZ(0);
}

.Registration-right {
  padding: 40px;
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  -webkit-transform: translateX(400px) translateZ(0);
  transform: translateX(400px) translateZ(0);
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
}

.open .Registration-right {
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

.btn-secondary {
  color: #22bf64;
}
.btn-secondary:focus,
.btn-secondary:hover {
  color: #1b984f;
}
</style>
