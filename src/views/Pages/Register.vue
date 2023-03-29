<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <!--            <b-col xl="5" lg="6" md="8" class="px-5">-->
            <!--              <h1 class="text-white">Create an account</h1>-->
            <!--              <p class="text-lead text-white">Use these awesome forms to login or create new account in your project for-->
            <!--                free.</p>-->
            <!--            </b-col>-->
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8">
          <b-card no-body class="bg-secondary border-0">
            <!--            <b-card-header class="bg-transparent pb-5">-->
            <!--              <div class="text-muted text-center mt-2 mb-4"><small>Sign up with</small></div>-->
            <!--              <div class="text-center">-->
            <!--                <a href="#" class="btn btn-neutral btn-icon mr-4">-->
            <!--                  <span class="btn-inner&#45;&#45;icon"><img src="img/icons/common/github.svg"></span>-->
            <!--                  <span class="btn-inner&#45;&#45;text">Github</span>-->
            <!--                </a>-->
            <!--                <a href="#" class="btn btn-neutral btn-icon">-->
            <!--                  <span class="btn-inner&#45;&#45;icon"><img src="img/icons/common/google.svg"></span>-->
            <!--                  <span class="btn-inner&#45;&#45;text">Google</span>-->
            <!--                </a>-->
            <!--              </div>-->
            <!--            </b-card-header>-->
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <h1 class="text-black">engine导航报名表单</h1>
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-single-02"
                              placeholder="你的姓名"
                              name="name"
                              :rules="{required: true}"
                              v-model="userRegisterApplyForm.name">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-email-83"
                              placeholder="你的邮箱"
                              name="email"
                              :rules="{required: true, email: true}"
                              v-model="userRegisterApplyForm.email">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="你的学号"
                              name="card id"
                              :rules="{required: true}"
                              v-model="userRegisterApplyForm.sid">
                  </base-input>
<!--                  <base-radio inline-->
<!--                              name=""-->
<!--                              value=""-->
<!--                              v-model="userRegisterApplyForm.gender"-->
<!--                              :options="genderOptions">-->
<!--                  </base-radio>-->

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-mobile-button"
                              placeholder="你的号码"
                              name="phone"
                              :rules="{required: true}"
                              v-model="userRegisterApplyForm.phone">
                  </base-input>

                  <b-form-group inline label="你是：">
                    <b-form-radio class="custom-control-inline" v-model="userRegisterApplyForm.gender" name="gender-radios" value=0>男生</b-form-radio>
                    <b-form-radio class="custom-control-inline" v-model="userRegisterApplyForm.gender" name="gender-radios" value=1>女生</b-form-radio>
                  </b-form-group>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-mobile-button"
                              placeholder="你的学生卡/学生证链接"
                              name="cardLink"
                              :rules="{required: true}"
                              v-model="userRegisterApplyForm.cardLink">
                  </base-input>

                  <!--                  <b-form-group label="Inline">-->
                  <!--                    <b-form-radio class="custom-control-inline" v-model="selected" name="some-radios" value="A">Toggle this custom radio</b-form-radio>-->
                  <!--                    <b-form-radio class="custom-control-inline" v-model="selected" name="some-radios" value="B">Or toggle this other custom radio</b-form-radio>-->
                  <!--                  </b-form-group>-->

                  <!--                  <base-input alternative-->
                  <!--                              class="mb-3"-->
                  <!--                              prepend-icon="ni ni-lock-circle-open"-->
                  <!--                              placeholder="password"-->
                  <!--                              type="password"-->
                  <!--                              name="Password"-->
                  <!--                              :rules="{required: true, min: 6}"-->
                  <!--                              v-model="model.password">-->
                  <!--                  </base-input>-->
                  <!--                  <div class="text-muted font-italic"><small>password strength: <span-->
                  <!--                    class="text-success font-weight-700">strong</span></small></div>-->
                  <!--                  <b-row class=" my-4">-->
                  <!--                    <b-col cols="12">-->
                  <!--                      <base-input :rules="{ required: { allowFalse: false } }" name=Privacy Policy>-->
                  <!--                        <b-form-checkbox v-model="model.agree">-->
                  <!--                          <span class="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>-->
                  <!--                        </b-form-checkbox>-->
                  <!--                      </base-input>-->
                  <!--                    </b-col>-->
                  <!--                  </b-row>-->
                  <div class="text-center">
                    <b-button type="submit" variant="primary" class="mt-4">报名申请</b-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

export default {
  name: 'register',
  data() {
    return {
      userRegisterApplyForm: {
        email: '',
        name: '',
        sid: '',
        gender: 0,
        phone: '',
        cardLink: '',
      },
      genderOptions: [
        {text: '男生', value: 0},
        {text: '女生', value: 1},
      ]
    }
  },
  methods: {
    onSubmit() {
      // this will be called only after form is valid. You can do an api call here to register users
      // console.log(this.userRegisterApplyForm);
    },
    printForm() {
      // console.log(this.userRegisterApplyForm);
    }
  }

};
</script>
<style></style>
