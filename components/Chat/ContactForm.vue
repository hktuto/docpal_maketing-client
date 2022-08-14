<template>
  <div class="contactContainer">
    <div class="headline">Professional to Professional</div>
    <div class="sub">Embark on your business transformation</div>

    <el-form>
      <ChatForm ref="contactForm" />
    </el-form>
    <div slot="footer" class="dialog-footer">
      <div class="c">
        <el-button class="actionButton" type="primary" @click="submit">
          Submit
        </el-button>
      </div>
      <div class="c">
        <el-button class="actionButton" type="link" @click="$emit('goSolution')">
          Back
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const contactForm = ref()
    const submit = () => {
      contactForm.value.submit()
    }
</script>


<style lang="scss" scoped>
.c {
  margin-top: 12px;
  width: 100%;
  button {
    width: 100%;
  }
}
.headline {
  font-family: var(--title-family);
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1.1;
}
.sub {
  font-family: var(--title-family);
  font-size: 1rem;
  font-weight: 100;
  color: var(--primary-color);
  margin-bottom: 12px;
}

.tags {
  margin: 24px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  gap: 8px;
}
</style>
