<template>
  <div class="formContainer">
    <div class="headline">We Are Listening</div>
    <div class="sub">All solution you need</div>
    <div class="inputContainer">
      <el-input v-model="search" placeholder="Search for issue..." />
    </div>
    <div class="tags">
      <el-tag
        v-for="(tag, i) in searchAllTag"
        :key="i"
        :effect="tags.includes(tag) ? 'dark' : 'plain'"
        @click="toggleTag(tag)"
        >{{ tag.label }}</el-tag
      >
    </div>
    <hr />
    <div class="tags selectedTag">
      <el-tag
        v-for="(tag, i) in tags"
        :key="i"
        effect="dark"
        @click="toggleTag(tag)"
        >{{ tag.label }}</el-tag
      >
      <el-button
        v-if="tags.length > 0"
        class="removeIcon"
        icon="el-icon-close"
        circle
        @click="clean"
      />
    </div>

    <div class="dialog-footer">
      <div class="c">
        <el-button
          class="actionButton"
          type="primary"
          :disabled="!canSubmit"
          @click="submit"
        >
          Show the solution
        </el-button>
      </div>
      <div class="c">
        <el-button class="actionButton" type="info" @click="$emit('goContact')">
          Wanna know more? Contact our Solution Manager
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElInput, ElButton, ElTag } from 'element-plus';
     const search = ref('')
    const searchAllTag = computed(() => {
      if (search.value) {
        return allTags.value
          .filter((t) => !tags.value.includes(t))
          .filter((t) =>
            t.label.toLowerCase().includes(search.value.toLowerCase())
          )
      } else {
        return allTags.value.filter((t) => !tags.value.includes(t))
      }
    })
    const allTags = ref([
      {
        label: 'Difficult to search document',
        solution: ['Records Digitization', 'Digital Workplace'],
      },
      {
        label: 'Cannot find & share the document Immediately',
        solution: ['Digital Workplace'],
      },
      { label: 'Multiple instant messenger', solution: ['Digital Workplace'] },
      { label: 'Record the digital message', solution: ['Digital Workplace'] },
      {
        label: 'Office renovation/relocation',
        solution: ['Digital Workplace'],
      },
      { label: 'Lack of storage space', solution: ['Records Digitization'] },
      { label: 'WFH', solution: ['Digital Workplace'] },
      {
        label: 'Too many documents',
        solution: [
          'Content Services Platform',
          'B.P.O',
          'Records Digitization',
        ],
      },
      {
        label: 'Cannot meet SLA',
        solution: [
          'Information Governance',
          'Content Services Platform',
          'Records Digitization',
        ],
      },
      { label: 'Go green', solution: ['Records Digitization'] },
      { label: 'Paperless office', solution: ['Records Digitization'] },
      { label: 'Save rental cost', solution: ['Records Digitization'] },
      { label: 'Security breach', solution: ['Records Digitization'] },
      { label: 'Cannot support peak seasons', solution: ['B.P.O'] },
      { label: 'Too many human error', solution: ['B.P.O'] },
      { label: 'High admin & management costs', solution: ['B.P.O'] },
      { label: 'Difficult to hire staff', solution: ['B.P.O'] },
      { label: 'High infrastructure & maintenance cost', solution: ['B.P.O'] },
      { label: 'Many duplicate tasks', solution: ['Workflow Automation'] },
      {
        label: 'Inability to track the status',
        solution: ['Workflow Automation'],
      },
      { label: 'No performance metrics', solution: ['Workflow Automation'] },
      {
        label: 'Hard to collaborate with others',
        solution: ['Workflow Automation'],
      },
      {
        label: 'Cannot track work tasks',
        solution: ['Content Services Platform'],
      },
      {
        label: 'Difficult to monitor job status',
        solution: ['Content Services Platform'],
      },
      {
        label: 'Need auto notification & reminder',
        solution: ['Content Services Platform'],
      },
      {
        label: 'No file version control',
        solution: ['Content Services Platform'],
      },
      {
        label: 'Files save at wrong places',
        solution: ['Information Governance'],
      },
      {
        label: 'Non-complete document sets',
        solution: ['Information Governance'],
      },
      {
        label: 'Cannot execute retention policy',
        solution: ['Information Governance'],
      },
      { label: 'Accessibility control', solution: ['Information Governance'] },
    ])
    const tags = ref<any[]>([])
    const { interest } = useInterest()
    const canSubmit = ref(false)
    const router = useRouter()

    const clean = () => {
      tags.value = []
      interest.value = {}
      calCanSubmit()
    }

    const toggleTag = (tag: { label: string; solution: string[] }) => {
      const index = tags.value.findIndex((t) => t === tag)
      if (index !== -1) {
        tags.value.splice(index, 1)
        tag.solution.forEach((t: any) => {
          if (interest.value[t] > 0) {
            interest.value[t]--
            if (interest.value[t] <= 0) {
              delete interest.value[t]
            }
          }
        })
      } else {
        tags.value.push(tag)
        tag.solution.forEach((t: any) => {
          if (interest.value[t] >= 0) {
            interest.value[t]++
          } else {
            interest.value[t] = 1
          }
        })
      }
      calCanSubmit()
    }

    const calCanSubmit = () => {
      let result = false
      for (const key in interest.value) {
        if (interest.value[key] >= 2) {
          result = true
        }
      }
      canSubmit.value = result
    }

    const submit = () => {
      // router.push({
      //   path: `/solutions/result`,
      //   query: {
      //     answer: JSON.stringify(interest),
      //   },
      // })

      emit('submit')
    }
</script>


<style lang="scss" scoped>
.removeIcon {
  position: absolute;
  right: 12px;
}
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
.el-tag {
  border-radius: 20px;
}
</style>