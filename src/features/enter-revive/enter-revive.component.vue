<template>
  <div class="text-escaper">
    <div class="description">
      <div class="description-box">
        <h2>Enter revive</h2>
        <h4>
          '\n'을 엔터로 바꿔 구조화된 문장으로 표현합니다.<br>
          주로, JSON으로 입력된 내용을 편하게 수정할 때, 사용됩니다.<br>
        </h4>
      </div>
    </div>
    <div class="columns">
      <!-- 왼쪽 컬럼: 원본 텍스트 및 markdown 미리보기 -->
      <div class="column">
        <h2>입력</h2>
        <textarea
          v-model="inputText"
          placeholder="여기에 문장을 입력하세요.">
        </textarea>
      </div>
      <!-- 오른쪽 컬럼: 엔터 이스케이프 결과 및 markdown 미리보기 -->
      <div class="column">
        <h2>변환 결과</h2>
        <textarea
          readonly
          :value="escapedText"
          placeholder="변환된 결과">
        </textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 사용자 입력 텍스트
const inputText = ref('');

// 엔터(\n)를 이스케이프 시퀀스("\\n")로 변환
const escapedText = computed(() => {
  return inputText.value.replace(/\\n/g, '\n');
});

</script>

<style scoped>
.description{
  width: 100%;
  flex: 1;
}

.description-box{
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

h4{
  text-align: left;
}
.columns {
  display: flex;
  gap: 2rem;
}
.column {
  flex: 1;
}
textarea {
  width: 90%;
  height: 250px;
  padding: 10px;
  font-size: 1rem;
  resize: vertical;
}
.preview {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  min-height: 150px;
  text-align: left;
}
</style>