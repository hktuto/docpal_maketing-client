<template>
  <div class="floatingContaier" @click="opened = true">
    <div :class="{ tipContainer: true, opened: opened || contactOpened }">
      <div class="tipContent">Tell us what can i help?</div>
    </div>
    <Logo />
    <el-dialog
      v-model="opened"
      custom-class="chatDialog"
      width="90%"
      append-to-body
    >
      <ChatSolutionForm
        @goContact="goContact"
        @submit="
          () => {
            opened = false
          }
        "
      />
    </el-dialog>
    <el-dialog
      v-model="contactOpened"
      custom-class="chatDialog"
      width="80%"
      append-to-body
    >
      <ChatContactForm @goSolution="goSolution" />
    </el-dialog>
  </div>
</template>


<script setup lang="ts">
const opened = ref(false)
    const contactOpened = ref(false)
    const goContact = () => {
      opened.value = false
      contactOpened.value = true
    }
    const goSolution = () => {
      opened.value = true
      contactOpened.value = false
    }

    const evHandler = () => {
      opened.value = true;
    }

    onMounted(() => window.addEventListener('open-qa', evHandler))
    onUnmounted(() => window.removeEventListener('open-qa', evHandler))
</script>

<style lang="scss" >
.el-tag {
  border-radius: 20px;
  padding: 0px 20px;
}
.chatDialog {
  border-radius: 12px;
  background-image: url('/home_bottom_bg.jpg');
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

<style lang="scss" scoped>
.tipContainer {
  position: fixed;
  right: 20px;
  bottom: 60px;
  width: 120px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.8);
  color: var(--primary-color);
  backdrop-filter: blur(20px);
  border-radius: 10px 10px 0 10px;
  opacity: 1;
  &.opened {
    opacity: 0;
  }
}
.floatingContaier {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 50%;
  border: 1px solid #fff;
  padding: 12px;
  color: #fff;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
  z-index: 9;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(65, 118, 203, 0.44);
  }
}

.dialog-footer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  width: 100%;
}
.actionButton {
  width: 80%;
  min-width: 280px;
}
</style>