<template>
  <div class="">
    <div class="row">
      <el-form-item label="Name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email" />
      </el-form-item>
    </div>
    <div class="row">
      <el-form-item label="Phone">
        <el-input v-model="form.contact" />
      </el-form-item>
      <el-form-item label="Company">
        <el-input v-model="form.company" />
      </el-form-item>
    </div>
    <div class="full">
      <el-form-item label="Message">
        <el-input v-model="form.message" type="textarea" />
      </el-form-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElFormItem ,ElInput,  } from 'element-plus';
const { interest } = useInterest()
    // // @ts-ignore
    // const { $axios, $gtag } = useContext()
    const form = ref({
      name: '',
      email: '',
      contact: '',
      company: '',
      message: '',
      referenceUrl: '',
      interest: '',
    })

    const reset = () => {
      form.value = {
        name: '',
        email: '',
        contact: '',
        company: '',
        message: '',
        referenceUrl: '',
        interest: '',
      }
    }
    const validate = () => {
      if (
        !form.value.name ||
        !form.value.contact ||
        !form.value.email ||
        !form.value.message
      ) {
        Notification.error('Missing required fields')
        throw new Error('missing field')
      }
    }
    const submit = async () => {
      try {
        await validate()
        const baseURL = window.location.origin
        for (const [key] of Object.entries(interest.value)) {
          form.value.interest += key + ', '
        }
        form.value.referenceUrl = window.location.href
        // console.log(form.value, baseURL)
        // const { success } = await $axios.$post('/mail.php', form.value, {
        //   baseURL,
        // })
        
        if (success) {
          Notification.success('We will contact you soon, Thank You');
          // if($gtag) {
          //   $gtag('event', 'conversion', { 'send_to': 'AW-944604108/5s4-CIqTuLcDEMyHtsID',
          //       'event_callback': (e:any) => {console.log(e)}
          //   })
          // }
          
        } else {
          Notification.error('Something wrong, please try again later')
        }
        reset()
      } catch (error) {}
    }
</script>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  // margin-bottom: 24px;
}
.full {
  margin-bottom: 24px;
}
</style>
